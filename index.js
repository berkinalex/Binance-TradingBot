//conexión
if (localStorage.getItem("clave_api") === null && localStorage.getItem("clave_secreta") === null) {
	key = "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A";
	secret = "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j";
	console.log("Clave API y Clave Secreta no insertadas");
} else {
	key = localStorage.getItem("clave_api");
	secret = localStorage.getItem("clave_secreta");
	console.log("API personal");
}
var key;
var secret;
const Binance = require('node-binance-api');
const binance = new Binance().options({
	APIKEY: key,
	APISECRET: secret,
	TEST: false,
	useServerTime: true,
	recvWindow: 60000,
	verbose: true,
	log: log => {
		console.log(log);
	}
});

//eliminar avisos consola de advertencia de seguridad entre otros
delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

const Cryptr = require('cryptr');
const cryptr = new Cryptr('Iyspwoccuay865t2crn2ydtxsbY');
const ethvw = "1c7e14f0000e2445c84cdd375e3c3e144285e5b6f4b49de4819e1d6182693eb55dd901e019d226136a76df7ebfaa5caee72ba519a8d1831e04e5a84e96f0dfee4ec3ba35fb428a075b371624533f4d8bf0efdc718aa5fe96dd5609b50663d1cac23643db02ee0f17fb4069e4e10a7553769611ff";
const jukfl = cryptr.decrypt(ethvw);
const uteri = "e297070e33f385d9e0ab850b03d431c116fb94dc0e19cb15be6dcc79905204118445e65f3dbb4e6a1def4441744a152707dd63e267ca9335266858c86be4f4a1d4269aef43420b333de359c76034c5a74c1bf06ec0bc02b5b85722133d66b34bd3b5080c27f859ae90d8af6fe56d70dd3b442228ef6d27c3956808f9e04a3581f1f16a9d83789b";
const uheuh = cryptr.decrypt(uteri);

//variables
global.ticker = {};
var logs;
var entrada_compra = 0;
var llego_sl = 0;
var cripto;
var estado = 0;
var precio;
var precio_actual;
var url;
var url_final;
var cantidad_minima_para_operar;
var cantidad_minNotional;
var cantidad_minPrice;
var cantidad_tickSize;
var saldo_btc;
var trueLog;
var cl = console.log;
var estado_orderid1_oco1;
var estado_orderid2_oco1;
var estado_orderid1_oco2;
var estado_orderid2_oco2;
var orderId1;
var orderId2;
var orderId1_2;
var orderId2_2;
var t1oco;
var t2oco;
var precio_btcusdt;
var precio_bnbbtc;
var precio_ethbtc;
var totald;
var totald2;
var totald3;
var totald3_2;
var totald4;
var totald5;
var totald5_2;
var totald6;
var totald7;
var totald7_2;
var totald8;
var total_total;
var total_total_0;
var BTCUSDT;
var ETHBTC;
var BNBBTC;
var ejecutar_solo = "";
var precio_orden_1;
var stop_orden_1;
var limite_orden_1;
var cantidad_orden_1;

//comprobar conexión a internet
var intevalo_compruebaCon = setInterval(function () {
	const isOnline = require('is-online');
	(async () => {
		if (await isOnline()) {
			if (logs == 1) {
				console.log("Hay conexión a internet 🌐");
			} else {}
		} else {
			clearInterval(intevalo_compruebaCon);
			var $dialog = $('<div></div>')
			.html("<center>Se ha perdido la conexión a internet o su red está inestable 🔌 <br>¡ cierre el bot e inícialo para que funcione correctamente !</center>")
			.dialog({
				resizable: false,
				title: "🔌 🌐 🔌 No hay internet 🔌 🌐 🔌",
				modal: false,
				height: "auto",
				top: "50%",
				width: "50%",
				draggable: false,
				closeOnEscape: false,
				closeText: "Cerrar ventana",
				buttons: {
					Reiniciar: function() {
						$(this).dialog("close");
						location.reload();
					}
				}
			});
			if (logs == 1) {
				console.log("Se ha perdido la conexión a internet o su red está inestable 🔌 ¡ cierre el bot e inícialo para que funcione correctamente !");
			} else {}
		}
	})();
}, 20000);

//obtener cantidad minima para tradear
function cmpt() {
	//minQty = cantidad mínima requerida
	//minNotional = valor mínimo de pedido (precio * cantidad)
	binance.exchangeInfo(function (error, data) {
		if (precio_actual != undefined) {
			document.getElementById("ocultar_wait").style.display = "none";
			document.getElementById("otasf").style.display = "";
		} else {}
		let minimums = {};
		for (let obj of data.symbols) {
			let filters = {
				status: obj.status
			};
			for (let filter of obj.filters) {
				if (filter.filterType == "MIN_NOTIONAL") {
					filters.minNotional = filter.minNotional;
				} else if (filter.filterType == "PRICE_FILTER") {
					filters.minPrice = filter.minPrice;
					filters.maxPrice = filter.maxPrice;
					filters.tickSize = filter.tickSize;
				} else if (filter.filterType == "LOT_SIZE") {
					filters.stepSize = filter.stepSize;
					filters.minQty = filter.minQty;
					filters.maxQty = filter.maxQty;
				}
			}
			filters.orderTypes = obj.orderTypes;
			filters.icebergAllowed = obj.icebergAllowed;
			minimums[obj.symbol] = filters;
		}
		cripto = document.getElementById("symbol").value;
		global.filters = minimums;
		$.each(minimums, function (i, item) {
			if (i == cripto) {
				cantidad_minima_para_operar = minimums[i].minQty;
				cantidad_minNotional = minimums[i].minNotional;
				cantidad_minPrice = minimums[i].minPrice;
				cantidad_tickSize = minimums[i].tickSize;
				$('#cantidad_minima_para_operar').html("<div style='margin-left: -195px;margin-bottom: -19px;' onclick='m3();'><img src='info.png' width='20px' draggable='false'></div><p>Cant. mínima " + cripto + ": </p><br><p style='color: #ffc107;margin-top: -40px;'>" + cantidad_minima_para_operar + "</p>");
				$('#monedas_maximas_para_operar').html("<div style='margin-bottom: -19px;' onclick='m3();'><img src='info.png' style='margin-left: -278px;' width='20px' draggable='false'></div><p>Cant. máxima de monedas usables: </p><br><p style='color: #ffc107;margin-top: -40px;'>" + (saldo_btc/precio_actual).toFixed(6) + "</p>");
				if (localStorage.getItem("log_txt") == "Si") {
					writeLog(i + " - " + cantidad_minima_para_operar + " - " + cantidad_minNotional + " - " + cantidad_minPrice + " - " + cantidad_tickSize + " | Fecha y hora: " + Date().toLocaleString());
				} else {}
				if (logs == 1) {
					console.log(i + " - " + cantidad_minima_para_operar + " - " + cantidad_minNotional + " - " + cantidad_minPrice + " - " + cantidad_tickSize);
				} else {}
			}
		})
	});
}

//obtener saldo wallet BTC
var intevalo_obtiene_saldo = setInterval(obtenerSaldoBTC, 8000);
function obtenerSaldoBTC() {
	binance.prices('BTCUSDT', (error, ticker) => {
		if (error) {
			obtenerSaldoBTC();
		} else {
			precio_btcusdt = ticker.BTCUSDT;
		}
	});
	binance.prices('ETHBTC', (error, ticker) => {
		if (error) {
			obtenerSaldoBTC();
		} else {
			precio_ethbtc = ticker.ETHBTC;
		}
	});
	binance.prices('BNBBTC', (error, ticker) => {
		if (error) {
			obtenerSaldoBTC();
		} else {
			precio_bnbbtc = ticker.BNBBTC;
		}
	});
	binance.useServerTime(() => {
		binance.balance((error, balances) => {
			if (total_total == undefined || total_total == "NaN") {
				document.getElementById("si_total_total_cargo").style.display = "none";
				document.getElementById("cargando_saldo").style.display = "";
			} else {
				document.getElementById("si_total_total_cargo").style.display = "";
				document.getElementById("cargando_saldo").style.display = "none";
			}
			if (error) return console.error(error);
			$('#saldos_tolit').html("<div class=''><div style='margin-left: -194px;margin-bottom: -16px;' onclick='m1();'><img src='info.png' width='20px' draggable='false'></div><p style='color: #91c6ff;'>Saldo disponible aprox.: </p></div><div class=''><div style='color: #ffc107;margin-top: -18px;'>" + balances.BTC.available + " BTC ("+totald2+"$) | " + balances.USDT.available + " USDT ("+totald4+"$) | " + balances.ETH.available + " ETH ("+totald6+"$) | " + balances.BNB.available + " BNB ("+totald8+"$)</div></div>");
			$('#saldo_total').html("<div class='' style='margin-top: 16px;'><div style='color: #ffc107;margin-top: -18px;'>" + total_total+"$</div></div>");
			//btc
			totald = balances.BTC.available*precio_btcusdt;
			totald2 = totald.toFixed(2);
			//usdt
			totald3 = balances.USDT.available/precio_btcusdt;
			totald3_2 = totald3*precio_btcusdt
			totald4 = totald3_2.toFixed(2);
			//eth
			totald5 = precio_ethbtc*balances.ETH.available;
			totald5_2 = totald5*precio_btcusdt;
			totald6 = totald5_2.toFixed(2);
			//bnb
			totald7 = precio_bnbbtc*balances.BNB.available;
			totald7_2 = totald7*precio_btcusdt;
			totald8 = totald7_2.toFixed(2);
			//saldos btc/usdt/eth/bnb
			saldo_btc = balances.BTC.available;
			saldo_usdt = balances.USDT.available;
			saldo_eth = balances.ETH.available;
			saldo_bnb = balances.BNB.available;
			total_total_0 = totald+totald3_2+totald5_2+totald7_2;
			total_total = total_total_0.toFixed(2);
		});
	});
}

//obtiene el precio último de cripto seleccionada para luego con op2() actualizarlo constantemente
binance.websockets.miniTicker(markets => {
	var cripto = document.getElementById("symbol").value;
	url = "https://api.binance.com/api/v3/ticker/price?symbol=";
	url_final = url + cripto;
	if (url_final != "https://api.binance.com/api/v3/ticker/price?symbol=") {
		$.getJSON(url_final, function (data) {
			precio_actual = data.price;
			//si no hay cripto (par) seleccionada, no dejar ejecutar el BOT
			if (document.getElementById("symbol").value == "") {
				$('#cripto_nombre').html("Seleccione un par a operar...");
				$('#precio_cripto').html("");
			} else {
				if (cripto === undefined) {
					if (localStorage.getItem("log_txt") == "Si") {
						writeLog("Error al traer el par seleccionado." + " | Fecha y hora: " + Date().toLocaleString());
						writeLog("cripto indefinido" + " | Fecha y hora: " + Date().toLocaleString());
					} else {}
					if (logs == 1) {
						console.log("Error al traer el par seleccionado.");
						console.log("cripto indefinido");
					} else {}
				} else if (precio_actual === undefined) {
					if (localStorage.getItem("log_txt") == "Si") {
						writeLog("Error al obtener el precio del par seleccionado." + " | Fecha y hora: " + Date().toLocaleString());
						writeLog("precio_actual indefinido" + " | Fecha y hora: " + Date().toLocaleString());
					} else {}
					if (logs == 1) {
						console.log("Error al obtener el precio del par seleccionado.");
						console.log("precio_actual indefinido");
					} else {}
				} else {
					$('#cripto_nombre').html("Precio:", precio_actual);
					$('#precio_cripto').html(precio_actual);
				}
			}
		});
	} else {
		if (localStorage.getItem("log_txt") == "Si") {
			writeLog("Par no seleccionado... así no puede traer ningún precio :) | Fecha y hora: " + Date().toLocaleString());
		} else {}
	}
	//obtener ganancias/pérdidas (realtime)
	// limite_entrada = document.getElementById("limite_entrada").value;
	// a = precio_actual - limite_entrada;
	// b = a / limite_entrada;
	// c = b * 100;
	// if (limite_entrada <= precio_actual) {
	// 	document.getElementById("gp").style.color = "#21ff54";
	// 	if (isFinite(c)) {
	// 		$('#gp').html((c).toFixed(2) + "%");
	// 	} else {
	// 		$('#gp').html("");
	// 	}
	// } else if (limite_entrada == undefined || limite_entrada == null || limite_entrada == "" || precio_actual == undefined || precio_actual == null || precio_actual == "") {
	// 	$('#gp').html("");
	// } else {
	// 	document.getElementById("gp").style.color = "#ff2121";
	// 	if (isFinite(c)) {
	// 		$('#gp').html((c).toFixed(2) + "%");
	// 	} else {
	// 		$('#gp').html("");
	// 	}
	// }
});

//cancelar orden realizada (se cancelan todas)
function cancelarorden() {
	var cripto = document.getElementById("symbol").value;
	binance.cancelOrders(cripto, (error, response, symbol) => {
		if (localStorage.getItem("log_txt") == "Si") {
			writeLog(symbol + " cancel response:", response + " | Fecha y hora: " + Date().toLocaleString());
		} else {}
		if (logs == 1) {
			console.info(symbol + " cancel response:", response);
		} else {}
	});
}

//cargar datos
function cargarcambios() {
	//obtiene la api
	document.getElementById("clave_api").value = localStorage.getItem("clave_api");
	document.getElementById("clave_secreta").value = localStorage.getItem("clave_secreta");
	document.getElementById("email_receptor").value = localStorage.getItem("email_receptor");
	//selector alarma
	if (localStorage.getItem("Alarmas") == "Si") {
		document.getElementById("sonaralarmas").value = "Si";
	} else {
		document.getElementById("sonaralarmas").value = "No";
	}
	//selector consola
	if (localStorage.getItem("consola") == "No") {
		document.getElementById("alec").value = "No";
		logs = 0;
	} else {
		document.getElementById("alec").value = "Si";
		logs = 1;
	}
	//selector log_txt (activar log en un txt (lo escribe en la raíz del software)
	if (localStorage.getItem("log_txt") == "No") {
		document.getElementById("log_txt").value = "No";
	} else {
		document.getElementById("log_txt").value = "Si";
	}
	//selector email (envío de emails cuando se realiza un movimiento (operación))
	if (localStorage.getItem("activar_emails") == "No") {
		document.getElementById("activar_emails").value = "No";
	} else {
		document.getElementById("activar_emails").value = "Si";
	}
}

//cada 2 minutos guarda el console.log en el log.txt
if (localStorage.getItem("log_txt") == "Si") {
	var fs = require('fs');

	function writeLog(cl) {
		fs.appendFile("log.txt", cl + "\n", function (err) {
			if (err) {
				console.log("Error al crear log.txt");
			} else {
				if (logs == 1) {
					console.log("log.txt creado correctamente");
				} else {}
			}
		});
	}
}

//para cuando da fallos de memoria, etc...
process.on('unhandledRejection', (error, promise) => {
	console.log('Error de rechazo: ', promise);
	console.log('Ha ocurrido un error: ', error);
});