function aleatorio(minimo ,maximo){
    return Math.round(Math.random() * (maximo - minimo) + minimo);
  }

let ids = [];
let count = 0;

for(count; count<10; count++){

    let id = aleatorio(0,500);
    ids.push(id);
}

export default ids;