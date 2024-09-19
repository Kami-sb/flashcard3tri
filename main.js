function criaCartao(categoria,pergunta,resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article')
cartao.clasName = 'cartao'
cartao.innerHTML = `
<div> class="conteudo-cartao"
    <h3>${categoria}</h3>
    <div>class="resposta-cartao" 
<p>${resposta}</p>
    </div>
</div>
`
conteiner.appendChild(cartao);
}