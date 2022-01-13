const alunos = [
    {
        nome: "Paulo Roberto",
        nota: 10,
        turma: "1A"

    },
    {
        nome: "José",
        nota: 1000,
        turma: "1000A"
    },
    {
        nome: "Pedro Luiz",
        nota: -10,
        turma: "2B"
    }
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(arr[i].nome);

        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5))