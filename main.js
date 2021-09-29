alert(`En este simulador interactivo podras calcular el valor de un producto con impuestos incluidos!`);

let producto = Number(prompt(`Escribe el valor del producto`));
let impuesto = prompt(`Escribe el impuesto a sumar escribiendo segun su caso: "iva"  "otro"`);


if (producto < 1) {
    alert(`el valor del producto no puede ser menor a 1`)
}
else if (impuesto == "otro") {
    let tasa = Number(prompt(`Ingresa la tasa del impuesto, por ejemplo en el caso del IVA es el 21% por lo que tendrias que escribir 0.21`))
    alert(`el valor final seria de ` + (producto + producto * tasa) )
}
else if (impuesto == "iva") {
    alert(`el valor final seria de ` + (producto + producto * 0.21) )
}
else {
    alert(`el impuesto ingresado no es valido`)
}

