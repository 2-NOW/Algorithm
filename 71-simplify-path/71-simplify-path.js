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
    // 뺄게 없으면 안뺌
    for(let i=0; i<arr.length; i++) {
      if(arr[i] !== '' && arr[i] !== '.') {
        if(arr[i] === '..') paths.pop();
        else paths.push(arr[i]);
      }
    }

    return '/' + paths.join('/');
  
  
//     const split = path.split('/');
//     const finalPath = [];
//     while(split.length) {
//     const target = split.shift();
    
        // if (target === '' || target === '.') {
        //   continue;
        // } else if (target === '..') {
        //   finalPath.pop();
        // } else {
        //   finalPath.push(target);
        // }
//     }
  
//   return '/' + finalPath.join('/');

};