"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Centro {
    constructor(id, _nombre, _ciudad) {
        this.id = id;
        this._nombre = _nombre;
        this._ciudad = _ciudad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set ciudad(ciudad) {
        this._ciudad = ciudad;
    }
    get ciudad() {
        return this._ciudad;
    }
}
//Instancias
const Santander = new Centro(1, 'Campus', 'Bucaramanga');
const Antioquia = new Centro(2, 'Bootcamp', 'Medellin');
const Cundinamarca = new Centro(3, 'Centro de entrenamiento', 'Bogota');
const ValleDeCauca = new Centro(4, '', '');
const Panama = new Centro(5, '', '');
//Setters
ValleDeCauca.nombre = 'CampusCali';
ValleDeCauca.ciudad = 'Cali';
Panama.nombre = 'CampusPanama';
Panama.ciudad = 'Ciudad De Panama';
//LOGS
console.log(ValleDeCauca);
console.log(Santander);
console.log(Antioquia);
console.log(Cundinamarca);
console.log(Panama);
exports.default = Centro;
