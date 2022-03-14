// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Score {

    mapping(address => uint256) public score;
    mapping(address => bool) public teacher;

    constructor(){
        teacher[msg.sender] =true;
    }

    modifier onlyTeacher(){
        require(teacher[msg.sender],"not teacher");
        _;
    }

    function setStudentScore(address _addr,uint256 _score) public onlyTeacher{
        require(_score <=100,"score must less than 100");
        score[msg.sender] = _score;
    }
     //新增老师
    function addTeacher(address _addr) public onlyTeacher {
        teacher[_addr] = true;
    }

}
