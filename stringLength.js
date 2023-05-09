function stringLength(string){
    string = string.split('');
    let count = string.length;
    if(count > 1 && count < 10){
        return count;
    }else{
        throw new RangeError("characters must be between 1 - 10");
    }

}

module.exports = stringLength;