class Mails {
    public _tipo: string;
    public get tipo(): string {
        return this.tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    public _direcciones: string;
    public get direcciones(): string {
        return this._direcciones;
    }
    public set direcciones(value: string) {
        this._direcciones = value;
    }
    

    constructor(tipo: string, direcciones: string){
        this._tipo = tipo;
        this._direcciones = direcciones;
}
}