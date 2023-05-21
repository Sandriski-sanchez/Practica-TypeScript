class Telefono {
    public _tipo: string;
    public get tipo(): string {
        return this.tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    public _numero: number;
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    

    constructor(tipo: string, numero: number){
        this._tipo = tipo;
        this._numero = numero;
}
}