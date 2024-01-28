function contar(){
    var primeiro = window.document.getElementById('iinicio')
    var fim = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipasso')
    var res = window.document.querySelector('div#res')
    if (primeiro || fim == null){
        window.alert('Preencha os campos!')
    } else if(passo == null || passo == 0){
        window.alert('Passo inválido. Irá receber o valor 1.')
        passo = Number(1)
    } else{
        
    }
}