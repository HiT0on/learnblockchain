* 编写合约Score，⽤于记录学⽣（地址）分数：

   Bcc 测试链突然不行了，部署在avax测试链

   合约地址0x1efbd51bcf4170e80a9aa7b9d403803e0137ac1e

   部署hash:https://testnet.snowtrace.io/tx/0x87a3a7d40f998b7c45689c3201bedd835a5080ba8c51f0cb72d6d46e4ebd54de

* 仅有⽼师（⽤modifier权限控制）可以添加和修改学⽣分数

使用老师账号修改成功：https://testnet.snowtrace.io/tx/0x367363006f4980116cd8e09c03c560752b406589847497c2b4ef6c45704668a4



使用非老师账号修改失败：https://testnet.snowtrace.io/tx/0xd80dbadb2e81c5aa82dd1c8e969a823881d636ea74645d4dfbd3f18ebe116c13



* 分数不可以⼤于 100

设置分数为101交易失败：https://testnet.snowtrace.io/tx/0xf6a395a4966ae72c214b52608b8a77d8f4ba1f3018f777c38bb0b454b48fe6a8



* 编写合约 Teacher 作为⽼师，通过 IScore 接⼝调⽤修改学⽣分数。

合约地址：0x8f642873a6090dc28b2066e957d098be940d21f8

先把合约地址设置为teacher

交易hash:https://testnet.snowtrace.io/tx/0x2f5bfb83c1a6700d295321f478946e524ecb4f5740ef393dc9bf842d58cec0c2