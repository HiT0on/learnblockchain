// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract bank {

    struct userRecord{
        uint256 amount;
        uint256 time;
    }

    mapping(address => userRecord[]) public recordQuery;
    mapping(address => uint256) public userBalances;
    
    
    // 获取合约账户余额 
    function getBalanceOfContract() public view returns (uint256) {
        return address(this).balance;
    }

    function getUserRecord(address _addr) public view returns (userRecord[] memory){
        return recordQuery[_addr];
    }

    function withdraw() public {
        uint256 amount  = userBalances[msg.sender];
        userBalances[msg.sender] = 0;
        payable (msg.sender).transfer(amount);
    }
    
    
    

    receive() external payable {
        recordQuery[msg.sender].push(
            userRecord({amount: msg.value, time: block.timestamp})
        );
        userBalances[msg.sender] += msg.value;

    }

}