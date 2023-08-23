const VotingHub = artifacts.require("VotingHubV1");

module.exports = function (deployer) {
    deployer.deploy(VotingHub, '0x6275Db45Ab74dEf801a3641032b8d7848eaED063');
};