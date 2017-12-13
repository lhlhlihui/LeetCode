var detectCapitalUse = function(word)  {
    var chars = word.split('');

    if (chars.every(isUppercase)) {
      return true;
    }

    if (chars.every(isLowercase)) {
      return true;
    }

    if (isUppercase(chars[0]) && chars.slice(1).every(isLowercase)) {
      return true;
    }

    return false;
};

var isUppercase = function(letter) {
    return letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
};

var isLowercase = function(letter) {
    return letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;
};
