function checkAccess() {
    const cardNumber = parseInt(document.getElementById("cardNumber").value);
    const accessMessage = document.getElementById("accessMessage");

    let teste = document.getElementById('acesso')

    if (cardNumber >= 1000 && cardNumber <= 1999) {
      accessMessage.textContent = "Acesso total permitido!";
      teste.style.backgroundColor = "#2f982f";
    }

    if (cardNumber >= 2000 && cardNumber <= 2999) {
      accessMessage.textContent = "Acesso limitado permitido.";
      teste.style.backgroundColor = "#eaea53";
    }

    if (cardNumber > 2999) {
      accessMessage.textContent = "Acesso negado.";
      teste.style.backgroundColor = "#a35858";
    }

    if (cardNumber < 1000 || cardNumber === NaN) {
      accessMessage.textContent = "Número de cartão inválido.";
    }
  }