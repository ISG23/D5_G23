export class Giorno{
    static LUN = new Giorno("Lunedì", 0);
    static MAR = new Giorno("Martedì",1);
    static MER = new Giorno("Mercoledì",2);
    static GIO = new Giorno("Giovedì",3);
    static VEN = new Giorno("Venerdì",4);
    static SAB = new Giorno("Sabato",5);
    static DOM = new Giorno("Domenica",6);

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    equals(_value){
        return this.value === _value;
    }

    toString(){
        return this.value;
    }

    valueOf(){
        return this.value;
    }
}
