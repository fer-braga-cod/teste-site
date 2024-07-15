function redirectToHome() {  
  var nome = document.getElementById("nomeComp").value.trim();
  var dataNascimento = document.getElementById("nascFer").value;

  if (nome === "Fernando Arantes Braga" && dataNascimento === "2001-12-17") {    
    window.location.href = "home.html";
  } else {    
    alert("Por favor, se retire daqui!");
  }
}
