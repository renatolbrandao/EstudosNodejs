function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a imagem

  const img = document.querySelector("#profile img")
  const altDesc = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se estiver no dark mode, utilizar outra foto
    img.setAttribute("src", "./assets/avatar.png")
    altDesc.setAttribute("alt", "Teste nova descrição modo claro")
  } else {
    // se estiver no dark mode, utilizar outra foto
    img.setAttribute("src", "./assets/avatar.png")
  }
}
