pragma solidity ^0.4.22;

contract Banker {
    struct Account {
        uint balance;
    }

    mapping(address => Account) accounts;

    function deposit(uint amount) public {
        require(amount > 0, "Cannot deposit nothing.");

        uint balance = accounts[msg.sender].balance;
        require(balance + amount > balance, "Too much money already.");

        accounts[msg.sender].balance += amount;
    }

    function withdraw(uint amount) public {
        require(amount > 0, "Cannot withdraw nothing.");
        require(accounts[msg.sender].balance >= amount, "Cannot overdraw on account.");

        accounts[msg.sender].balance -= amount;
    }

    function getBalance() public view returns (uint){
        return accounts[msg.sender].balance;
    }
}