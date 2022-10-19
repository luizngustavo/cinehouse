const catalogo = require('.database/catalogo.jason')


const listarTodosOsFilmesEmCartaz = () => {
    catalogo.forEach((filme) => console.log(`nome do filme: ${filme.titulo}`)
}

const buscarFilme = (codigo) => catalogo.find((filme) => filme.codigo == codigo)


const alterarStatusEmCartaz = (codigo) =>{
    let filme = catalogo.find((filme) => filme.codigo == codigo)
    filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true;
    return filme

}

const adicionarFilme = (filme) => {
    const {codigo, titulo, atores, duracao, anoDeLancamento} = filme;

    catalogo.push{
        codigo,
        titulo,
        atores,
        duracao,
        anoDeLancamento,
        emCartaz
    }

}

const listarFilmeComLongaDuracao = () => {
    catalogo.filter((filme) => filme.duracao > 2)
}

console.log(listarFilmeComLongaDuracao)
//adicionar um novo filme parametro filme
