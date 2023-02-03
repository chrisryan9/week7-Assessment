// Sum Zero

const addtoZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let x = i + 1; x < arr.length; x++) {
            if(arr[i] + arr[x] === 0)
            return true;
        }
    }
    return false;
}

console.log(addtoZero([1, 2, 3, -2]))


// Unique Characters

const hasUniqueChars = (str) => {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Monnday"));


// Pangram Sentence

const isPangram = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let regex = /\str/g;
   let lowercase = str.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return "not pangram";
    }
   }
  
  return "Is pangram";
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))


// Longest Word

const findLongestWord = (words) => {
    words.join(' ');
    let longest = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longest) {
            longest = words[i].length;
        }
    }

    return longest;
}


console.log(findLongestWord(["hi", "hello"]));