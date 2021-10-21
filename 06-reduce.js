function countWords(inputWords) {
  let countedWords = inputWords.reduce((allWords, word) => {
    if (word in allWords) {
      allWords[word]++;
    } else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
  return countedWords;
}

module.exports = countWords;
