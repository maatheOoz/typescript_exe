function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const meuNome = "Matheus";
const saudacaoComNome = saudacao(meuNome);
console.log(saudacaoComNome);