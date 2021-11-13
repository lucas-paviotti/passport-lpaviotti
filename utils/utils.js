const util = require('util'); 
const bCrypt = require('bcrypt');

const print = (obj) => {
    console.log(util.inspect(obj, false, 12, true));
}

const createHash = (password) => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

module.exports = {
    print,
    createHash
}