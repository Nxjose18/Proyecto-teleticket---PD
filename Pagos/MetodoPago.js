export class MetodoPago{
    constructor(pago){
        this.pago = pago
    }
    procesarPago(monto){
        return this.pago.pagar(monto);
    }
}