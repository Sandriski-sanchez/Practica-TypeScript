class Direcciones {
    public _calle: string;
    public get calle(): string {
        return this.calle;
    }
    public set calle(value: string) {
        this._calle = value;
    }
    public _numero: number;
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    public _piso: number;
    public get piso(): number {
        return this._piso;
    }
    public set piso(value: number) {
        this._piso = value;
    }
    public _letra: string;
    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra = value;
    }
    public _codigopostal: number;
    public get codigopostal(): number {
        return this._codigopostal;
    }
    public set codigopostal(value: number) {
        this._codigopostal = value;
    }
    public _poblacion: string;
    public get poblacion(): string {
        return this._poblacion;
    }
    public set poblacion(value: string) {
        this._poblacion = value;
    }
    public _provincia: string;
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }
    

    constructor(calle: string, numero: number, piso: number, letra: string, codigopostal: number, poblacion: string, provincia: string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigopostal = codigopostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
}
}