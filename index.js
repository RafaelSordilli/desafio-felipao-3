class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
            
        };
        console.log(`o ${this.tipo} atacou usando ${ataques[this.tipo]}`);
    }
}


let heroi = new Heroi("Merlin", 86, "mago");
heroi.atacar();  
