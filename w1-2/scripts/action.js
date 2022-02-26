//通过脚本调用count
const {ethers, network} = require("hardhat");

const addr = "0x64F27e99baeFe7Cf34356582027EF4E2818faA78"
async function main() {
    let [owner] = await ethers.getSigners();

    let counter = await ethers.getContractAt("Counter",addr,owner)

    // 计数加1
    let countTx = await counter.count();
    // 等待交易上链
    await countTx.wait();

    // 获取最新状态
    let newValue = await counter.getCounter();

    console.log("newValue:" + newValue);
}

main()
.then(()=> process.exit(0))
.catch(error=>{
    console.error(error);
    process.exit(1);
});