function monthlySavings(arr , livingCost) {
  if(!Array.isArray(arr)){
    return "invalid input"
  }
  if(typeof livingCost !=='number'){
    return "invalid input"
  }
  let sum=0
  for (x of arr){
    
    if(x>=3000){
      x=x-(x*(20/100))
    }
    sum+=x
    
  }
  let savings=sum-livingCost
  if(savings>=0){
    return savings
  }else{
    return "earn more"
  }
}
const numbers=[900,2700,3400]
const target=10000

const result=monthlySavings(numbers,target)
console.log(result)