var StarNotary = artifacts.require('./starNotary.sol')

module.exports = function (deployer) {
  deployer.deploy(StarNotary);
}
