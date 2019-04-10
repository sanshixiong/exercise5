module.exports = function (str) {
  // TOOD
  let reg = new RegExp(/BANANAS$/);
  return reg.exec(str);
}