function validaLogin(event) {
    event.preventDefault();
     let usuario = document.getElementById("usuario").value;
     let senha = document.querySelector("#senha").value;

     if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!")
     } else {
        window.location.href = "../../index.html";
     }
}