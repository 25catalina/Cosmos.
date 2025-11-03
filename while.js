
let n1 = 15;
let n2 = 8;
let n3 = 22;
let n4 = 5;
let n5 = 11;
let indice = 1;
let contador = 0;
let numeroactual = n5;

while (indice <= 5) {
    if (indice === 1) numeroactual = n1;
    if (indice === 2) numeroactual = n2;
    if (indice === 3) numeroactual = n3;
    if (indice === 4) numeroactual = n4;
    if (indice === 5) numeroactual = n5;
    if (numeroactual > 10) {
        contador = contador + 1;
    }
    indice = indice + 1;
}
console.log(contador)



let saldo = 1000
let retiro_actual = r3
let transacciones_realizadas = 0
let r1 = 300;
let r2 = 800;
let r3 = 200;
let indicel = 0

while (indicel <= 3) {
    if (indicel === 1) { retiro_actual = r1 }
    if (indicel === 2) { retiro_actual = r2 }
    if (indicel === 3) { retiro_actual = r3 }
    
    //trabajo

    if (retiro_actual <= saldo) {
        saldo = saldo - retiro_actual;
        console.log("retiro realizado" + retiro_actual)
    } else {
        console.log("retiro no realizado")
    }
      indicel = indicel + 1;
}
console.log("tu saldo es:" + saldo)