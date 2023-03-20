let res = document.getElementById('res')

let pais = ['Brasil, Chile, Senegal']
let cidades = new Array("Tijucas", "Itapema")

/*console.log(pais[2])*/
/*console.log(cidades[1])*/

pais.push('Uruguai')
pais.unshift('Paraguai')
console.log(pais)
console.log(cidades)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidades)

function inserir(){
    pais.pop()
    pais.shift()
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
}
