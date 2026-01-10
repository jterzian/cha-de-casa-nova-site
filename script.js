function handleClick(destino) {
  if (destino === 'mapa') {
    // Abre o Google Maps para o Hype Vila Mariana em uma nova aba
    window.open("https://maps.app.goo.gl/U8J6ryJHYohzq7Fy9", "_blank");
  } 
  
  else if (destino === 'site') {
    // Abre a sua lista de presentes no Lista Ideal em uma nova aba
    window.open("https://cha-de-casa-nova-6cf8.listaideal.com.br/pt/", "_blank");
  }
}

// Nota: A confirmação de presença não precisa de função aqui 
// porque no HTML usamos o window.location.href direto no ícone.