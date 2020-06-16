//ordenes de ejecución
function orden8() {
	cripto = document.getElementById("symbol").value;
	precio_orden_8 = document.getElementById("precio_orden_8").value;
	stop_orden_8 = document.getElementById("stop_orden_8").value;
	limite_orden_8 = document.getElementById("limite_orden_8").value;
	cantidad_orden_8 = document.getElementById("cantidad_orden_8").value;
	if (document.getElementById("sa_8").value == "ninguno") {
		alert("¡ No has seleccionado ningún tipo de orden !");
	} else if (document.getElementById("sa_8").value == "comprar_limit_order") {
		binance.buy(cripto, cantidad_orden_8, precio_orden_8, {
			type: "LIMIT"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_limit_order está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_limit_order está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_limit_order: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_limit_order: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "comprar_orden_de_mercado") {
		binance.marketBuy(cripto, cantidad_orden_8, {
			type: "MARKET"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_orden_de_mercado está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_orden_de_mercado está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_orden_de_mercado: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_orden_de_mercado: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "comprar_stop_limit") {
		binance.buy(cripto, cantidad_orden_8, precio_orden_8, {
			stopPrice: stop_orden_8,
			type: "TAKE_PROFIT_LIMIT"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_stop_limit está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_stop_limit está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_stop_limit: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_stop_limit: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "comprar_stop_limit2") {
		binance.buy(cripto, cantidad_orden_8, precio_orden_8, {
			stopPrice: stop_orden_8,
			type: "STOP_LOSS_LIMIT"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_stop_limit2 está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_stop_limit2 está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("comprar_stop_limit2: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("comprar_stop_limit2: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "comprar_oco") {
		binance.buy(cripto, cantidad_orden_8, precio_orden_8, {
			stopLimitPrice: limite_orden_8,
			stopPrice: stop_orden_8,
			type: "OCO"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.openOrders(cripto, (error, openOrders, symbol) => {
						if (error) {
							return console.warn(error);
						} else {
							if (openOrders.length === 0 || openOrders === null || openOrders === undefined) {
							} else {
								orderId1 = (symbol, openOrders[0].orderId);
								orderId2 = (symbol, openOrders[1].orderId);
							}
						}
					});
					binance.orderStatus(cripto, orderId1, function (error, json1) {
						if (error) {
							estado = 0;
						} else {
							t1oco = json1.status;
							if (logs == 1) {
								console.log("stop-loss oco2: " + t1oco);
							} else {}
						}
					});
					binance.orderStatus(cripto, orderId2, function (error, json2) {
						if (error) {
							estado = 0;
						} else {
							t2oco = json2.status;
							if (logs == 1) {
								console.log("take-profit oco2: " + t2oco);
							} else {}
						}
					});
					if (t1oco === "NEW" || t2oco === "NEW") {
						$('#orden_8').html("Esperando");
						if (localStorage.getItem("log_txt") == "Si") {
							writeLog("comprar_oco está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
						} else {}
						if (logs == 1) {
							console.log("comprar_oco está: " + estado);
						} else {}
					} else if (t1oco === "FILLED" || t2oco === "FILLED") {
						$('#orden_8').html("Completada");
						clearInterval(interval_8);
						if (localStorage.getItem("Alarmas") == "Si") {
							alarma_1.play();
							alarma_1.onended = function () {
								clearInterval(interval_8);
							};
						} else {}
						if (localStorage.getItem("activar_emails") == "Si") {
							orden8_Filled();
						} else {}
					} else if (t1oco === "CANCELED" || t2oco === "CANCELED") {
						document.getElementById("orden_8").style.color = "#ff0000";
						$('#orden_8').html("Cancelada");
						clearInterval(interval_8);
						if (localStorage.getItem("Alarmas") == "Si") {
							alarma_1.play();
							alarma_1.onended = function () {
								clearInterval(interval_8);
							};
						} else {}
						if (localStorage.getItem("activar_emails") == "Si") {
							orden8_CANCELED();
						} else {}
					} else if (t1oco === "EXPIRED" || t2oco === "EXPIRED") {
						if (t1oco === "FILLED") {
							if (logs == 1) {
								console.log("stop-loss de oco2 no ejecutado");
							} else {}
						} else if (t2oco === "FILLED") {
							if (logs == 1) {
								console.log("take-profit de oco2 no ejecutado");
							} else {}
						} else {}
					} else {
						if (localStorage.getItem("log_txt") == "Si") {
							writeLog("comprar_oco: " + estado + " | Fecha y hora: " + Date().toLocaleString());
						} else {}
						if (logs == 1) {
							console.log("comprar_oco: " + estado);
						} else {}
					}
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "vender_limit_order") {
		binance.sell(cripto, cantidad_orden_8, precio_orden_8, {
			type: "LIMIT"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_limit_order está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_limit_order está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_limit_order: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_limit_order: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "vender_orden_de_mercado") {
		binance.marketSell(cripto, cantidad_orden_8, {
			type: "MARKET"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_orden_de_mercado está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_orden_de_mercado está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_orden_de_mercado: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_orden_de_mercado: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "vender_stop_limit") {
		binance.sell(cripto, cantidad_orden_8, precio_orden_8, {
			stopPrice: stop_orden_8,
			type: "STOP_LOSS_LIMIT"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");	
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_stop_limit está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_stop_limit está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_stop_limit: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_stop_limit: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "vender_stop_limit2") {
		binance.sell(cripto, cantidad_orden_8, precio_orden_8, {
			stopPrice: stop_orden_8,
			type: "TAKE_PROFIT_LIMIT"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				orderid = response.orderId;
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.orderStatus(cripto, orderid, function (error, json) {
						if (error) {
							estado = 0;
						} else {
							estado = json.status;
							if (estado === "FILLED") {
								$('#orden_8').html("Completada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_Filled();
								} else {}
							} else if (estado === "NEW") {
								$('#orden_8').html("Esperando");
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_stop_limit2 está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_stop_limit2 está: " + estado);
								} else {}
							} else if (estado === "CANCELED") {
								document.getElementById("orden_8").style.color = "#ff0000";
								$('#orden_8').html("Cancelada");
								clearInterval(interval_8);
								if (localStorage.getItem("Alarmas") == "Si") {
									alarma_1.play();
									alarma_1.onended = function () {
										clearInterval(interval_8);
									};
								} else {}
								if (localStorage.getItem("activar_emails") == "Si") {
									orden8_CANCELED();
								} else {}
							} else {
								if (localStorage.getItem("log_txt") == "Si") {
									writeLog("vender_stop_limit2: " + estado + " | Fecha y hora: " + Date().toLocaleString());
								} else {}
								if (logs == 1) {
									console.log("vender_stop_limit2: " + estado);
								} else {}
							}
						}
					});
				}, 2000);
			}
		});
	} else if (document.getElementById("sa_8").value == "vender_oco") {
		binance.sell(cripto, cantidad_orden_8, precio_orden_8, {
			stopLimitPrice: limite_orden_8,
			stopPrice: stop_orden_8,
			type: "OCO"
		}, (error, response) => {
			if (error) {
				alert("Error al realizar la orden #8, comprueba que dispones de saldo suficiente para realizar la orden (pruebe a reducir unas monedas).");
			} else {
				cripto = document.getElementById("symbol").value;
				var interval_8 = setInterval(function () {
					binance.openOrders(cripto, (error, openOrders, symbol) => {
						if (error) {
							return console.warn(error);
						} else {
							if (openOrders.length === 0 || openOrders === null || openOrders === undefined) {
								orderId1 = (symbol, openOrders[0].orderId);
								orderId2 = (symbol, openOrders[1].orderId);
							} else {}
						}
					});
					binance.orderStatus(cripto, orderId1, function (error, json1) {
						if (error) {
							estado = 0;
						} else {
							t1oco = json1.status;
							if (logs == 1) {
								console.log("stop-loss oco2: " + t1oco);
							} else {}
						}
					});
					binance.orderStatus(cripto, orderId2, function (error, json2) {
						if (error) {
							estado = 0;
						} else {
							t2oco = json2.status;
							if (logs == 1) {
								console.log("take-profit oco2: " + t2oco);
							} else {}
						}
					});
					if (t1oco === "NEW" || t2oco === "NEW") {
						$('#orden_8').html("Esperando");
						if (localStorage.getItem("log_txt") == "Si") {
							writeLog("vender_oco está: " + estado + " | Fecha y hora: " + Date().toLocaleString());
						} else {}
						if (logs == 1) {
							console.log("vender_oco está: " + estado);
						} else {}
					} else if (t1oco === "FILLED" || t2oco === "FILLED") {
						$('#orden_8').html("Completada");
						clearInterval(interval_8);
						if (localStorage.getItem("Alarmas") == "Si") {
							alarma_1.play();
							alarma_1.onended = function () {
								clearInterval(interval_8);
							};
						} else {}
						if (localStorage.getItem("activar_emails") == "Si") {
							orden8_Filled();
						} else {}
					} else if (t1oco === "CANCELED" || t2oco === "CANCELED") {
						document.getElementById("orden_8").style.color = "#ff0000";
						$('#orden_8').html("Cancelada");
						clearInterval(interval_8);
						if (localStorage.getItem("Alarmas") == "Si") {
							alarma_1.play();
							alarma_1.onended = function () {
								clearInterval(interval_8);
							};
						} else {}
						if (localStorage.getItem("activar_emails") == "Si") {
							orden8_CANCELED();
						} else {}
					} else if (t1oco === "EXPIRED" || t2oco === "EXPIRED") {
						if (t1oco === "FILLED") {
							if (logs == 1) {
								console.log("stop-loss de oco2 no ejecutado");
							} else {}
						} else if (t2oco === "FILLED") {
							if (logs == 1) {
								console.log("take-profit de oco2 no ejecutado");
							} else {}
						} else {}
					} else {
						if (localStorage.getItem("log_txt") == "Si") {
							writeLog("vender_oco: " + estado + " | Fecha y hora: " + Date().toLocaleString());
						} else {}
						if (logs == 1) {
							console.log("vender_oco: " + estado);
						} else {}
					}
				}, 2000);
			}
		});
	} else {}
}