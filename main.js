const dataAtual= new Date();
let dataNiver= prompt ("data proximo niver:");
dataNiver= mew Date (dataNiver+"T23:59:59");
let diasQueFaltam= math.foor(dataNiver-dataAtual)/86400000
document.querySelector("#dias_restantes").textContent= diasQueFaltam;