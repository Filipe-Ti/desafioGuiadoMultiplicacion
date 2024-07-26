/**
Requerimiento:
Un programa que al ingresar un número,
obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. 
Además, debe mostrar el factorial para los mismos números. 
El resultado debe ser mostrado por la consola del navegador,
por ejemplo, si ingresan el número 3 en la consola deberían obtener el
siguiente resultado:
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
Factorial de 1 es: 1
Factorial de 2 es: 2
Factorial de 3 es: 9
*/

/* 1. Pedir al usuario que ingrese un número */
/* 2. Validar Número ingresado */
/* 3. Mostrar el Factorial del número ingresado*/
/* 4. Mostrar el resultado en la consola del Navegador */


let factorial = 1;
function solicitarNumero() {
    let numeroIngresado = prompt("Ingrese un número");
    if (numeroIngresado > 1 && numeroIngresado < 20 )  {
        for (let i = 1; i <= numeroIngresado; i++) { /*i++solo cuando itera de 1 en 1*/
            console.log(`${i} * ${numeroIngresado} = ${numeroIngresado * i}`);  
            for (let j = 1; j <= i; j++) {
                factorial = factorial * j;
            }
            console.log(`EL factorial de ${i} es ${factorial}`);
        }
    } else {
        console.log(`El número ${numeroIngresado} está fuera del rango`);
        numeroIngresado = prompt("Ingrese un número");
    }
}

console.log(solicitarNumero());
