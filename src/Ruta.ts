import Centro from "./Centro"

class Ruta extends Centro {
    private _nombreRuta: string;
    constructor(id: number, nombre: string, ciudad: string, nombreRuta: string) {
        super(id, nombre, ciudad);
        this._nombreRuta = nombreRuta;
    }
    set nombreRuta(nombreRuta: string) {
        this._nombreRuta = nombreRuta;
    }
    get nombreRuta(): string {
        return this._nombreRuta;
    }
    

}
const rutajava = new Ruta(1, 'Campus', 'Bucaramanga', 'Ruta de Java');
console.log(rutajava.nombre); 
console.log(rutajava.nombreRuta); 
rutajava.nombreRuta = 'Ruta de Java'; 
console.log(rutajava);

