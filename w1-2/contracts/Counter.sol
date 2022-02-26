// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint private counter;

    constructor(uint n) {
        counter = n;
        console.log("init counter with: ",n);
    }

    function getCounter() public view returns (uint){
        return counter;
    }

    function count() public{
        counter = counter + 1;
        console.log("after count(), counter is: %d", counter);
    }
} 