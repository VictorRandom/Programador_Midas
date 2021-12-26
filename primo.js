function largestPrimeFactor(num) {	

  function isPrime(numero) {
    let comeco = 2;
    const limite = Math.sqrt(numero);
    while (comeco <= limite) {
        if (numero % comeco++ < 1){
          return false;
        } 
    }
    
    return numero;
  }

      for (let i = 0; i < num; i++){


        if(isPrime(i)){
          var prime = i
        }
      }

      console.log(prime)

}

largestPrimeFactor(10);


