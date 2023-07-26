const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.crypt = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword
}



exports.compare = async (hash, password) => {
  const compare = await bcrypt.compare(password, hash);
  return compare
}