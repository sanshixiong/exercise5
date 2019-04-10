module.exports = function (str) {
  // TODO
  let reg = new RegExp(/^([0-9]|[c-z]|a)/);
  return reg.exec(str);
}