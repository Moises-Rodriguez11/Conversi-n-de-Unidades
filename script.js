let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
let unidad = prompt("Ingrese la unidad que desea convertir ( m para metros, cm para centimetros)");
let resultadoElement = document.getElementById("resultado");

if (unidad === "m") {
    let cm = cantidad * 100;
    resultadoElement.innerHTML = `${cantidad} metros equivalen a ${cm} centímetros`;
} else if (unidad === "cm") {
    let m = cantidad / 100;
    resultadoElement.innerHTML = `${cantidad} centímetros equivalen a ${m} metros`;
} else {
    resultadoElement.innerHTML = "Unidad de medida no válida";
}