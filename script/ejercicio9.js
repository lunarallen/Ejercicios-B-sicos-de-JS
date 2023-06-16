let palabra = window.prompt('Escribe una palabra para contar cuántas letras "a" contiene:');
let contador = 0
for (let i = 0; i < palabra.length; i++){
    if(palabra[i].toLowerCase() === "a"){
        contador++
    }
};

alert(`La letra "a" aparece ${contador} veces.`)