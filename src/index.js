const DEC_TABLE = {
    '0000001011':     'a',
    '0011101010':   'b',
    '0011101110':   'c',
    '0000111010':    'd',
    '0000000010':     'e',
    '0010101110':   'f',
    '0000111110':    'g',
    '0010101010':   'h',
    '0000001010':     'i',
    '0010111111':   'j',
    '0000111011':    'k',
    '0010111010':   'l',
    '0000001111':     'm',
    '0000001110':     'n',
    '0000111111':    'o',
    '0010111110':   'p',
    '0011111011':   'q',
    '0000101110':    'r',
    '0000101010':    's',
    '0000000011':      't',
    '0000101011':    'u',
    '0010101011':   'v',
    '0000101111':    'w',
    '0011101011':   'x',
    '0011101111':   'y',
    '0011111010':   'z',
    '1011111111':  '1',
    '1010111111':  '2',
    '1010101111':  '3',
    '1010101011':  '4',
    '1010101010':  '5',
    '1110101010':  '6',
    '1111101010':  '7',
    '1111111010':  '8',
    '1111111110':  '9',
    '1111111111':  '0',
    '**********': ' ',
  };
  
  function decode(expr) {
  
    expr = expr.split('')
    let size = 10; 
    let subarray = [];
    for (let i = 0; i <Math.ceil(expr.length/size); i++){
        subarray[i] = expr.slice((i*size), (i*size) + size);
        subarray.push(subarray[i])
    }
    let arr1 = []
    for (let j = 0; j < subarray.length; j++) {
      arr1.push(subarray[j].join(''))
    }
    // arr1.pop()
    let arr = []
    for (let i = 0; i < arr1.length -1; i++) {
    for (const key in DEC_TABLE) {
        if(key === arr1[i]){
        arr.push(DEC_TABLE[key])
        }
    }
    }
    arr = arr.flat()
    arr = arr.join('')
    console.log(arr)
    return arr
  }
  



module.exports = {
    decode
}