/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr = path.split('/')
    const paths = [];
    // 절대경로
    // 경로를 만나면 -> 경로를 answer에 넣음
    // .. 이면 answer에서 하나 뺌 pop
    for(let i=0; i<arr.length; i++) {
      if(arr[i] !== '' && arr[i] !== '.') {
        if(arr[i] === '..') paths.pop();
        else paths.push(arr[i]);
      }
    }

    return '/' + paths.join('/');
};