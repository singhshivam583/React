function sum(a) {
    return function(b){
      if(!b){
        console.log(b);
        return a;
      }
      return sum(a+b);
    }
    
  }
  console.log(sum(1)(2)(3)()); 