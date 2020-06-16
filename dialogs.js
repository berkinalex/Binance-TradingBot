//notificaciones de ayuda
function m1() {
  var $dialog = $('<div></div>')
  .html("Se muestra el saldo de la wallet de <b>BTC</b>, <b>USDT</b>, <b>ETH</b> y <b>BNB</b> de nuestra cuenta de Binance y un <b>balance total en dólares</b>.")
  .dialog({
    resizable: false,
    title: "Saldo disponible aproximado:",
    modal: true,
    height: "auto",
    top: "50%",
    width: "50%",
    draggable: true,
    buttons: {
      Leído: function() {
        $(this).dialog("close");
      }
    }
  });
}
function m2() {
  var $dialog = $('<div></div>')
  .html("Si selecciona Sí, el bot se encargará de finalizar las órdenes que usted haya estipulado, por ejemplo, en caso de hacer una orden de entrada y la orden T1 por algún motivo da error, el bot se encargará según los parámetros marcados por usted, de que se finalicen todas las órdenes de manera segura e independientemente de que Binance cancele o marque algún error en la orden. Lo que realizará es una orden Stop-Limit, Límite u OCO según sea el caso.")
  .dialog({
    resizable: false,
    title: "Asegurar operaciones:",
    modal: true,
    height: "auto",
    top: "50%",
    width: "50%",
    draggable: true,
    buttons: {
      Leído: function() {
        $(this).dialog("close");
      }
    }
  });
}
function m3() {
  var $dialog = $('<div></div>')
  .html("Pares de <b>Criptomonedas disponibles</b> para operar en la plataforma Binance e través del software.<br>Ten en cuenta que si no dispones de cuenta para <b>Futuros</b>, <b>Margin</b> u <b>Opciones</b>, podrás únicamente operar en <b>Spot</b>.")
  .dialog({
    resizable: false,
    title: "Criptomoneda a operar:",
    modal: true,
    height: "auto",
    top: "50%",
    width: "50%",
    draggable: true,
    buttons: {
      Leído: function() {
        $(this).dialog("close");
      }
    }
  });
}
function m4() {
  var $dialog = $('<div></div>')
  .html("<b>Precio: </b>Precio de compra o venta.<br><b>Stop: </b>Precio de parada.<br><b>Límite: </b>Precio límite de compra o venta.")
  .dialog({
    resizable: false,
    title: "Precio, Stop, Límite:",
    modal: true,
    height: "auto",
    top: "50%",
    width: "50%",
    draggable: true,
    buttons: {
      Leído: function() {
        $(this).dialog("close");
      }
    }
  });
}
function m5() {
  var $dialog = $('<div></div>')
  .html("La cantidad de monedas que pongamos debe corresponder al saldo que dispongamos.<br>Cuando seleccionamos un par, nos rellenará con la cantidad de monedas que podemos usar con dicho par seleccionado (Se recomienda no usar el 100%, y en caso que sea así estipular algunos decimales menos que la cantidad mostrada para prevenir errores por fluctuación del precio).")
  .dialog({
    resizable: false,
    title: "Cantidad de monedas:",
    modal: true,
    height: "auto",
    top: "50%",
    width: "50%",
    draggable: true,
    buttons: {
      Leído: function() {
        $(this).dialog("close");
      }
    }
  });
}
function m6() {
  var $dialog = $('<div></div>')
  .html("<b>Comprar Limit Order: </b>Con un limit order, podrás colocar un precio específico de compra. Dicha orden se completará cuando el precio llegué al valor estimado.<br><b>Comprar Orden de mercado: </b>Con el market order, la orden se igualará inmediatamente al mejor precio disponible.<br><b>Comprar Stop-Loss-Limit: </b>Una orden stop-limit es una operación condicional durante un período de tiempo establecido con características de precio stop y precio limit. Una orden Stop-limit se ejecutará a un precio específico después de que se haya alcanzado un precio de límite determinado. Una vez que se alcanza el precio límite, la orden límite limitada se convierte en una orden límite para comprar al precio límite o mejor.<br><b>Comprar Take-Profit-Limit: </b>Estipular el precio de compra y su Stop (>=). Deben ser las cantidades mayores al precio actual del mercado (Profit).<br><b>Comprar OCO: </b>El Precio debe ser menor que el Stop y el Límite.<br><b>Vender Limit Order: </b>Con un limit order, podrás colocar un precio específico de venta. Dicha orden se completará cuando el precio llegué al valor estimado.<br><b>Vender Orden de mercado: </b>Con el market order, la orden se igualará inmediatamente al mejor precio disponible.<br><b>Vender Stop-Loss-Limit: </b>Una orden stop-limit es una operación condicional durante un período de tiempo establecido con características de precio stop y precio limit. Una orden Stop-limit se ejecutará a un precio específico después de que se haya alcanzado un precio de límite determinado. Una vez que se alcanza el precio límite, la orden límite limitada se convierte en una orden límite para vender al precio límite o mejor.<br><b>Vender Take-Profit-Limit: </b>Estipular el precio de compra y su Stop (>=). Deben ser las cantidades mayores al precio actual del mercado (Profit).<br><b>Vender OCO: </b>El Precio debe ser menor que el Stop y el Límite. En precio va el profit o beneficio buscado, y en Stop y Límite el Stop-Loss (rango) que queremos asumir.")
  .dialog({
    resizable: false,
    title: "Tipos de órdenes:",
    modal: true,
    height: "auto",
    top: "50%",
    width: "80%",
    draggable: true,
    buttons: {
      Leído: function() {
        $(this).dialog("close");
      }
    }
  });
}