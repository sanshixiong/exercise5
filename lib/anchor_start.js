module.exports = function (str) {
  // TOOD
  let reg = new RegExp(/^LITERALLY/);
  return reg.exec(str);
}