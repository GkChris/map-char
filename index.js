// mapChar.js
(function mapChar() {
  String.prototype.mapChar = function (callback) {
    if (typeof this !== 'string') {
      throw new TypeError('Invalid input. Only strings can be mapped.');
    }

    const str = this;
    const chars = [...str];

    if (typeof callback !== 'function') {
      throw new TypeError('Invalid callback function.');
    }

    const mappedChars = chars.map(callback);
    const mappedStr = mappedChars.join('');
    return mappedStr;
  };
})();



