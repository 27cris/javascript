function numerosDesc(inicio, fin){
    if (typeof inicio !== 'number' || typeof fin !== 'number'){
    }
    if (inicio < fin) {
    }
    for (let i = inicio; i >= fin; i--) {
      console.log(i);
    }
  }
  numerosDesc(10, 1);