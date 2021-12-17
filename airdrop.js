const shell = require('shelljs');
const _ = require("lodash");
const fs = require("fs");

const exeAirdrop = (token, recipients) => {
  const errors = [];

  for(let i = 0; i < recipients.length; i++) {
    console.log(`Airdropping ${recipients[i].amount} to ${recipients[i].pubkey}`);
    shell.exec(`spl-token transfer ${token} ${recipients[i].amount} ${recipients[i].pubkey} --fund-recipient --allow-unfunded-recipient`);
    if (shell.error()) {
      errors.push(v);
    }
  }
  fs.appendFile('data/errors.json', JSON.stringify(errors), function (err) {
    if (err) return console.log(err);
  });
};

module.exports = {
  exeAirdrop
}