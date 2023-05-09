function capitalize(string){
    string = string.charAt(0).toUpperCase() + string.slice(1);;
    return string;    
}

module.exports = capitalize;