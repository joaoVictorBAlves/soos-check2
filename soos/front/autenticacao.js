//Simulação de Databse
let usuarios = [
    {
        nome: "João Victor Alves",
        idAcademico: "509697",
        senha: "jv1234"
    },
    {
        nome: "George Gomes",
        idAcademico: "112233",
        senha: "minhasenha"
    },
    {
        nome: "Henrique Pequeno",
        idAcademico: "101010",
        senha: "henrique01"
    },
    {
        nome: "Vládia Helen Ferreira Farias",
        idAcademico: "777777",
        senha: "gatos123"
    }
]

//Dados
let idAcademico = document.getElementById("idAcademico")
let senha = document.getElementById("senha")
let btn = document.getElementById("btnLogar")
// Autenticacao
let idAutenticado = false
let senhaAutenticada = false

btn.addEventListener('click', () => {
    usuarios.forEach(element => {
        if (idAcademico.value == element.idAcademico && senha.value == element.senha) {
            idAutenticado = true
            senhaAutenticada = true
        }
    });
    if (idAutenticado && senhaAutenticada) {
        window.location.href = "index.html?auth=true"
    } else {
        window.location.href = "index.html?auth=false"
    }
});

let aviso = document.getElementById("aviso")
  let url = window.location.href;
  let auth = url.split('login.html?auth=');
  console.log(auth)

if(auth[1] === "false"){
  aviso.style.color = "#f04747"
  aviso.innerText = "Matrícula ou senha incorreta"
}