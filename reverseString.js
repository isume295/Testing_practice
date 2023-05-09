function reverseString(string){
    string = string.split('').reverse().join('');
    return string;

}

module.exports = reverseString;