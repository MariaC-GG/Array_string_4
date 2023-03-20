let res = document.getElementById('res')

let pais = ['Brasil, Chile, Senegal, Japão, China']
let cidades = new Array("Tijucas", "Itapema")

console.log(pais.indexOf('Brasil'))

let nome_pais = document.getElementById('nome_pais')
let incluir = document.getElementById('incluir')

incluir.addEventListener('click', ()=>{
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
})


/*console.log(pais[2])
console.log(cidades[1])

pais.push('Uruguai')
pais.unshift('Paraguai')
console.log(pais)
console.log(cidades)
pais.pop()
pais.shift()
console.log(pais)
console.log(cidades)*/

/*function inserir(){
    pais.splice(3,0,"Estados Unidos")
    pais.splice(4,1)
    pais.sort()
    res.innerHTML += pais + '<br>'
    pais.reverse()
    res.innerHTML += cidades + '<br>'
}*/
