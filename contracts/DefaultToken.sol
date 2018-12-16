pragma solidity ^0.4.24;
import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract DefaultToken is StandardToken {
    string public name = "DEFAULT TOKEN";
    string public symbol = "DFT";
    uint public decimals = 18;
    uint initialSupply = 100000e18;

    constructor () public {
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }


    function payForPlayer(address _from, address _to, uint balance) public {
        require(balances[_from] < balance, "Error");
        balances[_from] -= balance;
        balances[_to] += balance;
    }
}
