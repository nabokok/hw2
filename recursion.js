function recursiveOddSumTo(number) {
    if (number <= 0){
        return 0;
    }
    if (number % 2 !== 0){
        return number + recursiveOddSumTo(number-2); 
    }
    return (number - 1) + recursiveOddSumTo(number-3); 
  };
  
console.log(recursiveOddSumTo(1)) 
console.log(recursiveOddSumTo(10)) 