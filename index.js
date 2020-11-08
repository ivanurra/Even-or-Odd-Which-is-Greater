function evenOrOdd(str) {
    let sumEven = 0
    let sumOdd = 0
    let digits = str.toString().split('');
    let realDigits = digits.map(Number)
    for (let i = 0; i < realDigits.length; i++){
      if (realDigits[i] % 2 == 0){
        sumEven = sumEven + realDigits[i]
      } else {
        sumOdd = sumOdd + realDigits[i]
      }
    }
    if (sumEven > sumOdd){
      return "Even is greater than Odd"
    } else if (sumEven < sumOdd){
      return "Odd is greater than Even"
    } else if (sumEven == sumOdd){
      return "Even and Odd are the same"
    }
  }