function anagrams(word, words) {
  return words.filter(item => word.split('').sort().join('').includes(item.split('').sort().join('')))
 
}