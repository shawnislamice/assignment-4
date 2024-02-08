function password(obj) {
  if(!('name' in obj) || !('birthYear' in obj) || !("siteName"in obj)){
    return "invalid"
  }else if(typeof obj.birthYear!=='number' || !(obj.birthYear>=1000 && obj.birthYear<10000)){
    return "invalid"
  }
  else{
    const password=obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)+"#"+obj.name+"@"+obj.birthYear
    return password
  }
}
const myInfo = { name: "rahat" , birthYear: 200,siteName:"Shawon"};
const result = password(myInfo);
console.log(result)
