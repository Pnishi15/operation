 function areSameCSV(str1, str2) {
  return (
    str1?.length === str2?.length &&
    str1.split(",").sort().join() === str2.split(",").sort().join()
  );
}

function CSVUnion(str1, str2) {
  let str = str1 + "," + str2;
  return str
    .split(",")
    .filter((char, i, arr) => arr.indexOf(char) === i)
    .join();
}

const CSVIntersect = (str1, str2) => {
  const arr1 = str1.split(",");
  const arr2 = str2.split(",");
  const res = [];
  const { length: len1 } = arr1;
  const { length: len2 } = arr2;
  const smaller = (len1 < len2 ? arr1 : arr2).slice();
  const bigger = (len1 >= len2 ? arr1 : arr2).slice();
  for (let i = 0; i < smaller.length; i++) {
    if (bigger.indexOf(smaller[i]) !== -1) {
      res.push(smaller[i]);
      bigger.splice(bigger.indexOf(smaller[i]), 1, undefined);
    }
  }
  return res.join();
};

function areAnagram(str1, str2) {
  let a = str1.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let b = str2.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  if (a.length !== b.length) {
    return "false";
  }
  let sortedStr1 = a.split("").sort().join("");
  let sortedStr2 = b.split("").sort().join("");
  if (sortedStr1 === sortedStr2) {
    return "true";
  } else {
    return "false";
  }
}

function isPalidrome(str) {
  let string = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "false";
    }
  }
  return "true";
}

function spoonerism(str1, str2) {
  let s1 = str2.charAt(0) + str1.substring(1, str1.length);
  let s2 = str1.charAt(0) + str2.substring(1, str2.length);
  return s1 + " " + s2;
}

function inflationary(str) {
  const wordObj = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twentyone",
  ];
  function findWord(str) {
    let target = "";
    wordObj.forEach((word, i) => {
      if (str.includes(word)) {
        target = str.replace(word, wordObj[i + 1]);
      }
    });
    return target;
  }
  const strArr = str.split(" ");
  const result = strArr.map((word) => {
    const tar = findWord(word);
    return tar ? tar : word;
  });
  return result.join(" ");
}

function fizBuzz(numStr) {
  let target = parseInt(numStr);
  let relArr = [];
  for (let i = 1; i <= target; i++) {
    if (i % 15 === 0) {
      relArr.push("fizzbuzz");
    } else if (i % 5 === 0) {
      relArr.push("buzz");
    } else if (i % 3 === 0) {
      relArr.push("fizz");
    } else {
      relArr.push(i);
    }
  }
  return relArr.join();
}

function performOperation(operation, string1, string2) {
  let str = string1 ? string1 : string2;
  if (!str) {
    return "invalid input";
  }
  switch (operation) {
    case "Are same CSVs":
      return areSameCSV(string1, string2);
    case "CSV union":
      return CSVUnion(string1, string2);
    case "CSV intersection":
      return CSVIntersect(string1, string2);
    case "Are anagrams":
      return areAnagram(string1, string2);
    case "Is palindrome":
      return isPalidrome(str);
    case "Spoonerism":
      return spoonerism(string1, string2);
    case "Inflationary":
      return inflationary(str);
    case "Fizz Buzz":
      return fizBuzz(str);
    default:
      return "please enter valid operation name";
  }
}

console.log(performOperation("CSV intersection", "A,B,C", "C,B,A"));
