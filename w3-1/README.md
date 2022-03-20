* 发⾏⼀个 ERC20 Token： 
  * 可动态增发（起始发⾏量是 0） 
  
    Hash:https://testnet.bscscan.com/tx/0x5aa4492f5ccab08f22c08f7f6d381df54c9e9ea64f5abd1f72a90417553300e3
  
    代币合约地址：0xe6c746840DCDcFa03B9A59CEC1f964a960d039Df
  
    Mint hash:https://testnet.bscscan.com/tx/0x2b2793360bdf36075f0d0bbb09b06fb32d9282fea37414ea0075a8abd51d165c
  
  * 通过 ethers.js. 调⽤合约进⾏转账
  
    js 不熟悉，用python 写的
  
    转账hash:https://testnet.bscscan.com/tx/0x827daca8e97684ffc93ebfe51f8724e77bdf076b170d23e0581d52c135696a5f
  
* 编写⼀个Vault 合约：
  * 编写deposite ⽅法，实现 ERC20 存⼊ Vault，并记录每个⽤户存款⾦额 ， ⽤从前端调⽤（Approve，transferFrom） 
  * 编写 withdraw ⽅法，提取⽤户⾃⼰的存款 （前端调⽤）
  * 前端显示⽤户存款⾦额
  
  同w2-1 bank 合约