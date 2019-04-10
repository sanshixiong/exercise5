module.exports = function (str) {
  // TODO
  let reg = new RegExp(/^\D{1}[^A-Z]{1}/);
  return reg.exec(str);

}