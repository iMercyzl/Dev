function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"))

/*function varificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i< string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]){
            return false;
        }
        
    }
    return true;
}

console.log(verificaPalindromo2("abba"));*/