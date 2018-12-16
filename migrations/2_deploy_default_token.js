var DefaultToken = artifacts.require("./DefaultToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DefaultToken);
};
