class Persona {
    public _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public _apellidos: string;
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    public _edad: number;
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    public _DNI: string;
    public get DNI(): string {
        return this._DNI;
    }
    public set DNI(value: string) {
        this._DNI = value;
    }
    public _cumpleaños: Date;
    public get cumpleaños(): Date {
        return this._cumpleaños;
    }
    public set cumpleaños(value: Date) {
        this._cumpleaños = value;
    }
    public _colorFavorito: string;
    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }
    public _sexo: string;
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }
    private _direcciones: Direcciones;
    public get direcciones(): Direcciones {
        return this._direcciones;
    }
    public set direcciones(value: Direcciones) {
        this._direcciones = value;
    }
    private _mails: Mails;
    public get mails(): Mails{
        return this._mails;
    }
    public set mails(value: Mails) {
        this._mails = value;
    }
    private _telefono: Telefono;
    public get telefono(): Telefono {
        return this._telefono;
    }
    public set telefono(value: Telefono) {
        this._telefono = value;
    }
    public _notas: string;
    public get notas(): string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas = value;
    }

    constructor(nombre: string, apellidos: string, edad: number, DNI: string, cumpleaños: Date, colorFavorito: string, sexo: string, direcciones: Direcciones, mails: Mails, telefono: Telefono, notas: string){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefono = telefono;
        this._notas = notas;

}
}
