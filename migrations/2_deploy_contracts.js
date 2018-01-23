var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
    deployer.deploy(Voting, ['Andreja', 'Rok'], {gas: 670000});
};
