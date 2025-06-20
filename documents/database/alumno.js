

export default class Alumno {
    constructor(DNI, username, edad) { 
    this.username = username;
    this.DNI = DNI;
    this.edad = edad;

    }

    toString(){
    return `nombre:${this.username}, DNI:${this.DNI}`;
    }
    }