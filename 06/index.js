const numeros = [3, 4, 1, 8, 11, 7, 5];

maior = numeros[0]

for(numero of numeros){
    if(numero>maior){
        maior = numero
    }
}
console.log(maior)