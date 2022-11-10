function iterativeOddSumTo(number) {
    let result = 0;
    for (let i = number; i >= 0; i--) {
        if (i % 2 !== 0) {
            result += i;
        }
    };
    return result;
  };
  
  console.log(iterativeOddSumTo(1)) 
  console.log(iterativeOddSumTo(10)) 