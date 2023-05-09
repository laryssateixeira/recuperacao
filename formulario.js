function Validar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;

if(!nome || !email || !idade){
    alert("Campos de preenchimentos obrigatório. Favor preencher");
}else{
    alert("Campos preenchidos com sucesso");
}
}