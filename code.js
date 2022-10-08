function ValidarDados(){
    var email = document.getElementById("email").toLower()
    var senha = document.getElementById("senha")

    var email_correto = "basesocial2022@gmail.com"
    var senha_correta = "base2022"
    
    if (email.value == email_correto && senha.value == senha_correta){
        alert("Login efetuado, seja bem vindo!")
    }
    else{
        alert("email ou senha incorretos!")
    }
}