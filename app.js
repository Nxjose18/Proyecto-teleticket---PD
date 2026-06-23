
import { PagoPlin } from "./Pagos/PagoPlin.js";
import { MetodoPago } from "./Pagos/MetodoPago.js";
import { PagoTarjeta } from "./Pagos/PagoTarjeta.js";
import { PagoYape } from "./Pagos/PagoYape.js";

const pagoConTarjeta = new PagoTarjeta();
const pagoConPlin = new PagoPlin();
const pagoConYape = new PagoYape();

const NuevoPago = new MetodoPago(pagoConYape);
const MensajePagado = NuevoPago.procesarPago(150);

document.getElementById("MensajeDePago").innerText = MensajePagado;