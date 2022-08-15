const pessoa = { 
    name: 'Mariana',
    age: 28,
    role: 'developer'
}

pessoa.age = 25;

const andre: { name: string, age: number, role: string } = {
    name: 'Andre',
    age: 25,
    role: 'pintor'
}

const paula: { name: string, age: number, role: string } = {
    name: 'Andre',
    age: 25,
    role: 'Developer'
}

// validates role name
enum Role {
    Developer,
    Professor,
    Soccer
}

interface Pessoa { 
    name: string,
    age: number,
    role?: Role
}

interface Estudante extends Pessoa { 
    materias: string[]
}

const vanessa: Pessoa = { 
    name: 'Vanessa',
    age: 33,
    role: Role.Developer
}

const maria: Pessoa = { 
    name: 'Maria',
    age: 33,
    role: Role.Developer
}

const jessica: Estudante = {
    name: 'Jessica',
    age: 28,
    role: Role.Developer,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    name: 'Monica',
    age: 23,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(monica.materias);