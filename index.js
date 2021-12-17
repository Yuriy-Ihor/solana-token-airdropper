const { exeAirdrop } = require('./airdrop');
const ParticipantsFile = require('./data/list.json');

const TOKEN_ADDRESS = "TOKEN_ADDRESS_HERE";

const proceedAirdrop = () => {
  exeAirdrop(TOKEN_ADDRESS, ParticipantsFile.list);
}

module.exports = {
  proceedAirdrop
}