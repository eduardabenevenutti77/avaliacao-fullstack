function formatarTelefone(input) {
  let numeroTelefone = input.value.replace(/\D/g, "");
  if (numeroTelefone.length >= 2) { numeroTelefone = `(${numeroTelefone.substring(0, 2)}) ${numeroTelefone.substring(2)}`; }
  if (numeroTelefone.length >= 10) { numeroTelefone = `${numeroTelefone.substring(0, 9)}-${numeroTelefone.substring(9)}`; }
  input.value = numeroTelefone;
}
function formatarCEP(campo) {
  var valor = campo.value.replace(/\D/g, "");
  var formatado = "";
  for (var i = 0; i < valor.length; i++) {
    if (i === 5) { formatado += "-"; }
    formatado += valor[i];
  }
  campo.value = formatado;
}
function mascaraCep() {
  var Cep = document.getElementById("CEP");
  var bairro = document.getElementById("bairro");
  var rua = document.getElementById("rua");
//   var complemento = document.getElementById("complemento");
  var cep = Cep.value.replace(/\D/g, "");
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        bairro.value = data.bairro || "";
        rua.value = data.logradouro || "";
        // complemento.value = data.complemento || "";
      })
      .catch((error) => console.error("Erro ao obter dados do CEP: ", error));
  } else {
    bairro.value = "";
    rua.value = "";
    // complemento.value = "";
  }
}