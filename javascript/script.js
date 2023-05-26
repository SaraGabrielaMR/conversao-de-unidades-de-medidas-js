const dolar = 4.95;
const euro = 5.42;
const libra = 6.15;
const yuan = 0.72;

function realDolar(){
	let real = parseFloat(document.getElementById('valorReal').value);
	
	let conta = real/dolar;
	
	document.getElementById('resultado').textContent = "Dólar: " + conta.toFixed(2); 
}

function realEuro(){
	let real = parseFloat(document.getElementById('valorReal').value);
	
	let conta2 = real/euro;
	
	document.getElementById('resultado').textContent = "Euro: " + conta2.toFixed(2); 
}

function realLibra(){
	let real = parseFloat(document.getElementById('valorReal').value);
	
	let conta3 = real/libra;
	
	document.getElementById('resultado').textContent = "Libra: " + conta3.toFixed(2); 
}

function realYuan(){
	let real = parseFloat(document.getElementById('valorReal').value);
	
	let conta4 = real/yuan;
	
	document.getElementById('resultado').textContent = "Yuan Chinês: " + conta4.toFixed(2); 
}

function dolarReal(){
	let dolarUser = parseFloat(document.getElementById('valorDolar').value);
	const dolar = 4.95;
	let conta5 = dolarUser*dolar;
	
	document.getElementById('resultado2').textContent = "Real: " + conta5.toFixed(2); 
}

function dolarEuro(){
	let dolarUser = parseFloat(document.getElementById('valorDolar').value);
	
	let cont = dolarUser*dolar;
	let conta6 = cont/euro;
	
	document.getElementById('resultado2').textContent = "Euro: " + conta6.toFixed(2); 
}

function dolarLibra(){
	let dolarUser = parseFloat(document.getElementById('valorDolar').value);
	
	let cont2 = dolarUser*dolar;
	let conta7 = cont2/libra;
	
	document.getElementById('resultado2').textContent = "Libra: " + conta7.toFixed(2); 
}

function dolarYuan(){
	let dolarUser = parseFloat(document.getElementById('valorDolar').value);
	
	let cont3 = dolarUser*dolar;
	let conta8 = cont3/yuan;
	
	document.getElementById('resultado2').textContent = "Yuan Chinês: " + conta8.toFixed(2); 
}

function euroReal(){
	let euroUser = parseFloat(document.getElementById('valorEuro').value);
	
	let conta9 = euroUser*euro;
	
	document.getElementById('resultado3').textContent = "Real: " + conta9.toFixed(2); 
}

function euroDolar(){
	let euroUser = parseFloat(document.getElementById('valorEuro').value);
	
	let conta10 = euroUser*euro;
	let conta11 = conta10/dolar;
	
	document.getElementById('resultado3').textContent = "Dólar: " + conta11.toFixed(2); 
}

function euroLibra(){
	let euroUser = parseFloat(document.getElementById('valorEuro').value);
	
	let conta12 = euroUser*euro;
	let conta13 = conta12/libra;
	
	document.getElementById('resultado3').textContent = "Libra: " + conta13.toFixed(2); 
}

function euroYuan(){
	let euroUser = parseFloat(document.getElementById('valorEuro').value);
	
	let conta14 = euroUser*euro;
	let conta15 = conta14/yuan;
	
	document.getElementById('resultado3').textContent = "Yuan Chinês: " + conta15.toFixed(2); 
}

function libraReal(){
	let libraUser = parseFloat(document.getElementById('valorLibra').value);
	
	let conta16 = libraUser*libra;
	
	document.getElementById('resultado4').textContent = "Real: " + conta16.toFixed(2); 
}

function libraDolar(){
	let libraUser = parseFloat(document.getElementById('valorLibra').value);
	
	let conta17 = libraUser*libra;
	let conta18 = conta17/dolar;
	
	document.getElementById('resultado4').textContent = "Dólar: " + conta18.toFixed(2); 
}

function libraEuro(){
	let libraUser = parseFloat(document.getElementById('valorLibra').value);
	
	let conta19 = libraUser*libra;
	let conta20 = conta19/euro;
	
	document.getElementById('resultado4').textContent = "Euro: " + conta20.toFixed(2); 
}

function libraYuan(){
	let libraUser = parseFloat(document.getElementById('valorLibra').value);
	
	let conta21 = libraUser*libra;
	let conta22 = conta21/yuan;
	
	document.getElementById('resultado4').textContent = "Yuan Chinês: " + conta22.toFixed(2); 
}

function yuanReal(){
	let yuanUser = parseFloat(document.getElementById('valorYuan').value);
	
	let conta23 = yuanUser*yuan;
	
	document.getElementById('resultado5').textContent = "Real: " + conta23.toFixed(2); 
}

function yuanDolar(){
	let yuanUser = parseFloat(document.getElementById('valorYuan').value);
	
	let conta24 = yuanUser*yuan;
	let conta25 = conta24/dolar;
	
	document.getElementById('resultado5').textContent = "Dólar: " + conta25.toFixed(2); 
}

function yuanEuro(){
	let yuanUser = parseFloat(document.getElementById('valorYuan').value);
	
	let conta26 = yuanUser*yuan;
	let conta27 = conta26/euro;
	
	document.getElementById('resultado5').textContent = "Euro: " + conta27.toFixed(2); 
}

function yuanLibra(){
	let yuanUser = parseFloat(document.getElementById('valorYuan').value);
	
	let conta28 = yuanUser*yuan;
	let conta29 = conta28/libra;
	
	document.getElementById('resultado5').textContent = "Libra: " + conta29.toFixed(2); 
}

function metrosCM(){
	let metros = parseInt(document.getElementById('valorMetros').value);
	
	let conta30 = metros*100;
	
	document.getElementById('resultado6').textContent = "Centímetros: " + conta30; 
}

function metrosMilimetros(){
	let metros = parseInt(document.getElementById('valorMetros').value);
	
	let conta40 = metros*1000;
	
	document.getElementById('resultado6').textContent = "Milímetros: " + conta40; 
}

function metrosKM(){
	let metros = parseInt(document.getElementById('valorMetros').value);
	
	let conta50 = metros/1000;
	
	document.getElementById('resultado6').textContent = "Km: " + conta50; 
}

function metrosPes(){
	let metros = parseInt(document.getElementById('valorMetros').value);
	
	let conta60 = metros*3.281;
	
	document.getElementById('resultado6').textContent = "Pés: " + conta60; 
}

function metrosJardas(){
	let metros = parseInt(document.getElementById('valorMetros').value);
	
	let conta70 = metros*1.094;
	
	document.getElementById('resultado6').textContent = "Jardas: " + conta70; 
}

function cmMetros(){
	let cm = parseInt(document.getElementById('valorCM').value);
	
	let conta80 = cm/100;
	
	document.getElementById('resultado7').textContent = "Metros: " + conta80; 
}

function cmMilimetros(){
	let cm = parseInt(document.getElementById('valorCM').value);
	
	let conta81 = cm*10;
	
	document.getElementById('resultado7').textContent = "Milímetros: " + conta81; 
}

function cmKM(){
	let cm = parseInt(document.getElementById('valorCM').value);
	
	let conta82 = cm/100000;
	
	document.getElementById('resultado7').textContent = "Km: " + conta82; 
}

function cmPes(){
	let cm = parseInt(document.getElementById('valorCM').value);
	
	let conta83 = cm/30.48;
	
	document.getElementById('resultado7').textContent = "Pés: " + conta83.toFixed(7); 
}

function cmJardas(){
	let cm = parseInt(document.getElementById('valorCM').value);
	
	let conta84 = cm/91.44;
	
	document.getElementById('resultado7').textContent = "Jardas: " + conta84.toFixed(7); 
}

function milimetroMetros(){
	let milimetro = parseInt(document.getElementById('valorMilimetros').value);
	
	let conta85 = milimetro/1000;
	
	document.getElementById('resultado8').textContent = "Metros: " + conta85; 
}

function milimetroCM(){
	let milimetro = parseInt(document.getElementById('valorMilimetros').value);
	
	let conta86 = milimetro/10;
	
	document.getElementById('resultado8').textContent = "Centímetros: " + conta86; 
}

function milimetroKM(){
	let milimetro = parseInt(document.getElementById('valorMilimetros').value);
	
	let conta87 = milimetro/1000000;
	
	document.getElementById('resultado8').textContent = "Km: " + conta87; 
}

function milimetroPes(){
	let milimetro = parseInt(document.getElementById('valorMilimetros').value);
	
	let conta88 = milimetro/304.8;
	
	document.getElementById('resultado8').textContent = "Pés: " + conta88.toFixed(7);
}

function milimetroJardas(){
	let milimetro = parseInt(document.getElementById('valorMilimetros').value);
	
	let conta89 = milimetro/914.4;
	
	document.getElementById('resultado8').textContent = "Jardas: " + conta89.toFixed(7);
}

function kmMetros(){
	let km = parseInt(document.getElementById('valorKM').value);
	
	let conta90 = km*1000;
	
	document.getElementById('resultado9').textContent = "Metros: " + conta90;
}

function kmCM(){
	let km = parseInt(document.getElementById('valorKM').value);
	
	let conta91 = km*100000;
	
	document.getElementById('resultado9').textContent = "Centímetros: " + conta91;
}

function kmMilimetros(){
	let km = parseInt(document.getElementById('valorKM').value);
	
	let conta92 = km*1000000;
	
	document.getElementById('resultado9').textContent = "Milímetros: " + conta92;
}

function kmPes(){
	let km = parseInt(document.getElementById('valorKM').value);
	
	let conta93 = km*3281;
	
	document.getElementById('resultado9').textContent = "Pés: " + conta93;
}

function kmJardas(){
	let km = parseInt(document.getElementById('valorKM').value);
	
	let conta94 = km*1094;
	
	document.getElementById('resultado9').textContent = "Jardas: " + conta94;
}

function pesMetros(){
	let pes = parseInt(document.getElementById('valorPes').value);
	
	let conta95 = pes/3.281;
	
	document.getElementById('resultado10').textContent = "Metros: " + conta95.toFixed(4);
}

function pesCM(){
	let pes = parseInt(document.getElementById('valorPes').value);
	
	let conta96 = pes*30.48;
	
	document.getElementById('resultado10').textContent = "Centímetros: " + conta96;
}

function pesMilimetros(){
	let pes = parseInt(document.getElementById('valorPes').value);
	
	let conta97 = pes*304.8;
	
	document.getElementById('resultado10').textContent = "Milímetros: " + conta97;
}

function pesKM(){
	let pes = parseInt(document.getElementById('valorPes').value);
	
	let conta98 = pes/3281;
	
	document.getElementById('resultado10').textContent = "Km: " + conta98.toFixed(7);
}

function pesJardas(){
	let pes = parseInt(document.getElementById('valorPes').value);
	
	let conta99 = pes/3;
	
	document.getElementById('resultado10').textContent = "Jardas: " + conta99.toFixed(4);
}

function jardasMetros(){
	let jardas = parseInt(document.getElementById('valorJardas').value);
	
	let conta100 = jardas/1.094;
	
	document.getElementById('resultado11').textContent = "Jardas: " + conta100.toFixed(4);
}

function jardasCM(){
	let jardas = parseInt(document.getElementById('valorJardas').value);
	
	let conta100 = jardas*91.44;
	
	document.getElementById('resultado11').textContent = "Centímetros: " + conta100.toFixed(2);
}

function jardasMilimetros(){
	let jardas = parseInt(document.getElementById('valorJardas').value);
	
	let conta100 = jardas*914.4;
	
	document.getElementById('resultado11').textContent = "Milímetros: " + conta100.toFixed(2);
}

function jardasKM(){
	let jardas = parseInt(document.getElementById('valorJardas').value);
	
	let conta100 = jardas/1094;
	
	document.getElementById('resultado11').textContent = "Km: " + conta100.toFixed(7);
}

function jardasPes(){
	let jardas = parseInt(document.getElementById('valorJardas').value);
	
	let conta100 = jardas*3;
	
	document.getElementById('resultado11').textContent = "Pés: " + conta100;
}

function celsiusFahrenheit(){
	let celsius = parseInt(document.getElementById('valorCelsius').value);
	
	let conta100 = (celsius*1.8)+32;
	
	document.getElementById('resultado12').textContent = "Fahrenheit: " + conta100;
}

function celsiusKelvin(){
	let celsius = parseInt(document.getElementById('valorCelsius').value);
	
	let conta100 = celsius+273.15;
	
	document.getElementById('resultado12').textContent = "Kelvin: " + conta100;
}

function fahrenheitCelsius(){
	let fahrenheit = parseInt(document.getElementById('valorFahrenheit').value);
	
	let conta100 = (fahrenheit-32)/1.8;
	
	document.getElementById('resultado13').textContent = "Celsius: " + conta100;
}

function fahrenheitKelvin(){
	let fahrenheit = parseInt(document.getElementById('valorFahrenheit').value);
	
	let conta100 = fahrenheit-32;
	let conta101 = conta100/1.8;
	let conta102 = conta101+273.15;
	
	document.getElementById('resultado13').textContent = "Kelvin: " + conta102;
}

function kelvinCelsius(){
	let kelvin = parseInt(document.getElementById('valorKelvin').value);
	
	let conta100 = kelvin-273.15;
	
	document.getElementById('resultado14').textContent = "Celsius: " + conta100;
}

function kelvinFahrenheit(){
	let kelvin = parseInt(document.getElementById('valorKelvin').value);
	
	let conta100 = kelvin*1.8;
	let conta101 = conta100-459.67;
	
	document.getElementById('resultado14').textContent = "Fahrenheit: " + conta101;
}