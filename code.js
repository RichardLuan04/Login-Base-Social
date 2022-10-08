function ValidarDados(){
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")
    
    if (email.value == "basesocial2022@gmail.com" && senha.value == "base2022"){
        alert("Login efetuado, seja bem vindo!")
    }
    else{
        alert("email ou senha incorretos!")
    }
}