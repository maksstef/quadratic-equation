module.exports = function solveEquation(equation) {
  let subs = equation.split(' '); 

    subs[4] = subs[3] + subs[4]; 

    subs[8] = subs[7] + subs[8]; 

    

    let numbers = subs.map(x => parseInt(x)); 

    numbers = numbers.filter(x => !isNaN(x)); 

    

    let discrim = Math.sqrt(Math.pow(numbers[1],2) - 4 * numbers[0] * numbers[2]); 

    let roots = []; 

    roots[0] = Math.round((-numbers[1] + discrim) / (2 * numbers[0])); 

    roots[1] = Math.round((-numbers[1] - discrim) / (2 * numbers[0])); 

    

    roots = roots.sort(function (a, b) { 

    return a - b 

    }); 

    

    return roots; 
}
