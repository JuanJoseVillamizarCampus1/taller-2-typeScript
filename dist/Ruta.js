"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Centro_1 = __importDefault(require("./Centro"));
class Ruta extends Centro_1.default {
    constructor(id, nombre, ciudad, nombreRuta) {
        super(id, nombre, ciudad);
        this._nombreRuta = nombreRuta;
    }
    set nombreRuta(nombreRuta) {
        this._nombreRuta = nombreRuta;
    }
    get nombreRuta() {
        return this._nombreRuta;
    }
}
const rutajava = new Ruta(1, 'Campus', 'Bucaramanga', 'Ruta de Java');
console.log(rutajava.nombre);
console.log(rutajava.nombreRuta);
rutajava.nombreRuta = 'Ruta de Java';
console.log(rutajava);
