/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineStr = magazine.split('')
  const noteStr = ransomNote.split('')
  const hashmap = new Map()
  
  for (let i of magazineStr) {
    hashmap.set(i, hashmap.get(i) ? hashmap.get(i) + 1 : 1)
  }
  
  for (let j of noteStr) {
    if(!!!hashmap.get(j)) return false;
    else if(hashmap.get(j) === 1) hashmap.delete(j)
    else if(hashmap.get(j) > 1) hashmap.set(j, hashmap.get(j) - 1)
  }
  
  return true;
};