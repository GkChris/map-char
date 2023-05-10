// mapChar.js
(function mapChar() {
  String.prototype.mapChar = function (callback) {
    const str = this;
    const chars = [...str];
    const mappedChars = chars.map(callback);
    const mappedStr = mappedChars.join('');
    return mappedStr;
  };
})();
