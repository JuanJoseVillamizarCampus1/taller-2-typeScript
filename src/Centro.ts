class Centro {
    constructor(
        public  readonly id:number,
        private  _nombre:string,
        private  _ciudad:string
    ) {}
    
    set nombre(nombre : string) {
        this._nombre = nombre;
    }
    
    get nombre() : string {
        return this._nombre
    }

    set ciudad(ciudad : string) {
        this._ciudad = ciudad;
    }
    
    get ciudad(): string{
        return this._ciudad
    }
    
   
}
//Instancias
const Santander= new Centro(1,'Campus','Bucaramanga')
const Antioquia= new Centro(2,'Bootcamp','Medellin')
const Cundinamarca= new Centro(3,'Centro de entrenamiento','Bogota')
const ValleDeCauca = new Centro(4,'','')
const Panama= new Centro(5,'','');
//Setters
ValleDeCauca.nombre='CampusCali'
ValleDeCauca.ciudad='Cali'
Panama.nombre='CampusPanama'
Panama.ciudad='Ciudad De Panama'


//LOGS
console.log(ValleDeCauca);
console.log(Santander);
console.log(Antioquia);
console.log(Cundinamarca);
console.log(Panama);

export default Centro