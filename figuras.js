console.log("funciona")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2
}

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}



function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}

const PI = Math.PI;

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const ladoT1 = document.getElementById("lado1");
    const ladoT2 = document.getElementById("lado2");
    const ladoT3 = document.getElementById("lado3")

    const valueL1 = parseInt(ladoT1.value);
    const valueL2 = parseInt(ladoT2.value);
    const valueL3 = parseInt(ladoT3.value);

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueL3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const baseTriangulo = document.getElementById("Inputbase");
    const alturaTriangulo = document.getElementById("Inputaltura");

    const valueBase = parseInt(baseTriangulo.value);
    const valueAltura = parseInt(alturaTriangulo.value)

    const areaFtriangulo = areaTriangulo(valueBase, valueAltura)
    alert(areaFtriangulo)
}

function altura(altura1, altura2, base) {
    if (altura1 == altura2) {
        return Math.sqrt(Math.pow(altura1, 2) - Math.pow(base / 2, 2));
    } else {
        console.error("no es un triangulo isoceles")
        return "el triangulo no es isoceles"
    }

}

function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("alturaL1")
    const lado2 = document.getElementById("alturaL2")
    const base = document.getElementById("baseAltura")

    const valueL1 = parseInt(lado1.value)
    const valueL2 = parseInt(lado2.value)
    const valueB = parseInt(base.value)

    const alturaTI = altura(valueL1, valueL2, valueB)
    alert("la altura es de: " + alturaTI)
}