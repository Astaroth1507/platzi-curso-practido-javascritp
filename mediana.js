function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista
}
/*const lista1 = [
    100,
    200,
    500,
    400000000,
];*/


function calcularMediana(lista) {
    lista.sort(function(a, b) {
        return a - b;
    })
    const mitadList = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadList - 1];
        const elemento2 = lista[mitadList];
        const promdedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])
        mediana = promdedioElemento1y2;

    } else {
        mediana = lista[mitadList]
    }
    return mediana
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
    let mediana;
    if (condition) {

    }
    return mediana
}
/*const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    } else {
        return false
    }
}
let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promdedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    mediana = promdedioElemento1y2;

} else {
    mediana = lista1[mitadLista1]
}*/