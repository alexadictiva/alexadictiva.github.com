var nombre = document.getElementById("validationDefault01");
var send = document.getElementById("send");
send.addEventListener("click", enviarConsulta);

function enviarConsulta() {
  //se activa el método alert luego de 2 segundos
  setTimeout("alert('Su consulta fué enviada. Pronto será contactad@')", 2000);
}
