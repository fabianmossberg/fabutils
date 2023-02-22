export const stringToNumber = (string: string) => {
    if (typeof string !== 'string') throw Error('Input is not a string');
    // Trim and remove any trailing `.` or `,`
    string = string.trim().replace(/(.*)([\.\,])$/, "$1");
    
    // Make a string of only digits and `,` or `.`
    const numberString = string.replace(/[^0-9\,\.]+/g, '')
  
    // If the string does not contain any digits, return null.
    if(numberString.length === 0) return null;
    
    const separators = numberString.split(/[^\.\,]/).filter(Boolean)
    const numbersPartsArray = numberString.split(/[\.\,]/);
    
    // If there are less than three groups of digits in the string.
    if(numbersPartsArray.length < 3) return Number(numberString.replace(',','.'))
    
    // If there are more than 3 parts.
    // The od of the array is the decimals.
    const end = numbersPartsArray.pop();
    
    // The rest is the beginning.
    const beginning = numbersPartsArray.join('');
      
    // If we have both a beginning and an end, make it a number and return it.
    if(beginning && end) return Number([beginning,end].join('.'))

    // We should not reach here.
    throw Error(`Can't find a solution for the value: ${string}`);
  };
  

   const anythingToNumber = (anything: any) => {

    const arr = Array.isArray(anything) ? anything : [anything]
    return arr.map((input:any) => {
    if(typeof input === 'string') return { input, output: stringToNumber(input) };
    if(typeof input === 'number' ) return {input, output: stringToNumber(input.toString())}
    if(typeof input === 'undefined') return {input, output: null};
    if(typeof input === 'object') return {input, output: null};
    if(typeof input === 'boolean') return {input, output: null};
    })
  }




  // function isIterable(obj) {
  //   // checks for null and undefined
  //   if (obj == null) {
  //     return false;
  //   }
  //   return typeof obj[Symbol.iterator] === 'function';
  // }

  // const iterable = {
  //   [Symbol.iterator](): iterator
  // }
  
  // const iterator = {
  //   next: () => ({
  //     value: any,
  //     done: boolean
  //   })
  // }
  