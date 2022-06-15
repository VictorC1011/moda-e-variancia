function calculate() {
  //Creating Array
  var string = document.getElementById("numeros").value;
  var array = string.split(" ")
  for(var x=0; x < array.length; x++) { array[x] = +array[x]; }
  
  //Sequencia
  var sequencia = array.sort(function(a, b){return a-b});

  //Moda
  var moda = [];
  for(x=0; x < array.length; x += 1) {if(array[x] === array[x + 1]) {
   moda.push(array[x]);
  }}

  
  //Variancia
  var length = array.length;
  var variancia = array[length - 1] - array[0];
  
  if (moda == "") {
    moda = "invalido";
  }

  if (variancia == "") {
      variancia = "invalido"
  }
  

  
  alert("Sequencia: " + sequencia);
  alert("Moda: " + moda);
  alert("Variancia: " + variancia);
  }

document.getElementById("numeros").value = "";
