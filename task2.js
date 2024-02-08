function checkName(name) {
    if(typeof name!=='string'){
        return "invalid";
    }else{
        const lowercaseName = name.toLowerCase();
        const lastDigit = lowercaseName[name.length - 1];
        if(lastDigit === 'a'||lastDigit==='y'||lastDigit === 'i'||lastDigit==='e'||lastDigit === 'o'||lastDigit==='u' || lastDigit==="w"){
            return "Good Name"
        }else{
            return "Bad Name"
        }
    }
}
const target='Tonyiop'
const result=checkName(target)
console.log(result)