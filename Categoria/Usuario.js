export class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    accederPanelControl() {
        return `Panel ${this.nombre} ha accedido al Panel de Control del pueblo.`;
    }

    verPerfil() {
        return `Perfil: ${this.nombre} (${this.email})`;
    }
}