const IzoneDormMarketContract = artifacts.require("IzoneDormMarketContract");

module.exports = function (deployer) {
  deployer.deploy(IzoneDormMarketContract);
};
