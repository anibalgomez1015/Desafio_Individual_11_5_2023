//Desafío Individual
//Escribe una función en JavaScript llamada "calcularPrecio" que recibe dos parámetros: "precioBase" y "descuento". La función debe calcular el precio final de un producto aplicando el descuento sobre el precio base.

//Variables y fórmulas
var precioBase = 2000
var descuento = 1000
var precioFinal = precioBase - ((precioBase * descuento) / 100)

//Función solicitada
function calcularPrecio(precioBase, descuento) {
    //Si el precio base es menor o igual a 0 o el descuento es menor a 0 o mayor a 100, la función debe retornar el mensaje "Los valores ingresados son inválidos".
    if (precioBase <= 0 || descuento < 0 || descuento > 100) {
        return "Los valores ingresados son inválidos.";
    //Si el descuento es igual a 0, la función debe retornar el precio base sin descuento.
    } if (descuento == 0) {
        return "El precio final sin descuento es:" + precioBase;
    //Si el descuento es mayor a 0 y menor o igual a 100, la función debe calcular el precio final con descuento y retornarlo con el siguiente mensaje: "El precio final con descuento es $X".
    } if (descuento > 0 && descuento <= 100) {
        return "El precio final con descuento es $ " + precioFinal;
    }
} 
 