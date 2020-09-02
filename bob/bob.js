//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// all upper + ! or none = Whoa, chill out!
// all upper + ? = Calm down, I know what I'm doing!
// lower&upper + ? = Sure.
// lower&upper + . or whitespace = Whatever.
// blank or empty = Fine. Be that way!

export const hey = (message) => {
  message = message.trim();

  function isShouting(message) {
    return (message.toUpperCase() === message && message.toLowerCase() != message);
  }

  function isAsking(message) {
    return message[message.length-1] === "?" ? true : false;
  }

  if (message === "") {
    return "Fine. Be that way!";
  } else if (isShouting(message) && isAsking(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isShouting(message)) {
    return "Whoa, chill out!";
  } else if (!isShouting(message) && isAsking(message)) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
  
  // let allEmpty = true;
  // let allUpper = true;
  // let allNumbers = true;
  // let questionMarkMid = false;
  // let questionMarkEnd = false;
  // let exclamationMarkEnd = false;
  // let whitespaceEnd = false;

  // let currentChar = 0;
  // for (let i = 0; i < message.length; i++) {
  //   currentChar = message.charCodeAt(i)
  //   if (currentChar > 32) allEmpty = false;
  //   if (currentChar === 63) questionMarkMid = true;
  //   if (currentChar >= 65 && currentChar <= 90) allNumbers = false;
  //   if (currentChar >= 97 && currentChar <= 122) {
  //     allNumbers = false;
  //     allUpper = false;
  //   }
  // }

  // let lastChar = message.length - 1;
  // if (message[lastChar] === "?") {
  //   questionMarkEnd = true;
  // } else if (message[lastChar] === "!") {
  //   exclamationMarkEnd = true;
  // } else if (message[lastChar] === " ") {
  //   whitespaceEnd = true;
  // }

  // if (allEmpty) return "Fine. Be that way!";

  // if (allNumbers) {
  //   if (questionMarkEnd) {
  //     return "Sure.";
  //   } else {
  //     return "Whatever.";
  //   }
  // }
  
  // if (allUpper) {
  //   if (questionMarkEnd) {
  //     return "Calm down, I know what I'm doing!";
  //   } else {
  //     return "Whoa, chill out!";
  //   }
  // }

  // if (!allUpper) {
  //   if ((questionMarkMid && whitespaceEnd) || questionMarkEnd) {
  //     return "Sure.";
  //   } else {
  //     return "Whatever.";
  //   }
  // }
};
