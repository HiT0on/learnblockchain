#!/usr/bin/python3
# -*- coding: utf-8 -*-

from web3 import Web3
import json
import time

times = 0

# web3 = Web3(Web3.HTTPProvider("https://bsc-dataseed.binance.org"))
web3 = Web3(Web3.HTTPProvider("https://data-seed-prebsc-1-s1.binance.org:8545"))

def getnonce(addr):
    nonce = web3.eth.getTransactionCount(addr)
    return nonce


def main(addr,nonce):

    # Metamask转账账户
    fromAddress = web3.toChecksumAddress("0xda910229d03a68cCaF13D8b1DCEa749bA2D3F790")
    # Metamask账户私钥
    private_key = "xxxx"

    # 合约地址
    multiSenderAddr = web3.toChecksumAddress("0xe6c746840DCDcFa03B9A59CEC1f964a960d039Df")
    multiSenderAbi = []
    with open("abi.json", 'r', encoding='utf8') as data:
        multiSenderAbi = json.load(data)

    #定义智能合约对象
    multi_sender = web3.eth.contract(address=multiSenderAddr, abi=multiSenderAbi)

    #取得当前汽体价格
    gas_price = int(web3.eth.gasPrice / (10 ** 9))
    # 取得转账账户的交易nonce数据


    # 转账eth
    addresses_to_send = web3.toChecksumAddress(addr)
    # balances_to_send = [web3.toWei(0.1, "ether"), web3.toWei(0.1, "ether")]

    # 构建交易数据
    txn = multi_sender.functions.transfer(addresses_to_send, 1000000000000000000).buildTransaction({
        "from": fromAddress,
        "gasPrice": web3.toHex(web3.toWei(gas_price, "Gwei")),# 指定汽体价格
        "gas": web3.toHex(210000),# 限制gas使用最大量
        "value": 0,
        "nonce": nonce # 防重放nonce,这个是必须的
    })
    print(txn)

    # 发送交易
    signed_txn = web3.eth.account.signTransaction(txn, private_key=private_key)
    # 发送到网络打包，如果报错 already known 就是上一笔交易正在打包，需要打包完成才能下一笔
    web3.eth.sendRawTransaction(signed_txn.rawTransaction)

    # 取得转账哈希
    txhash = web3.toHex(web3.sha3(signed_txn.rawTransaction))

    # 打印交易哈希类似 0xe382252b45073788e015d6d7e3e4847cef540ed24fa0e4c3ec43f8adaf4cd210
    print(txhash)

if __name__ == '__main__':
    nonce = getnonce(web3.toChecksumAddress("0xda910229d03a68cCaF13D8b1DCEa749bA2D3F790"))
    with open('addr.txt')as f:
        for addr in f.readlines():
            try:
                main(addr.strip(),nonce+times)
                times += 1
                # time.sleep(5)

            except Exception as e:
                print(e,addr)
            continue