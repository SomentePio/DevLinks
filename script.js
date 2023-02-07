function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) html.classList.remove("light")
  // else {
  //   html.classList.add("light")
  // }

  // change avatar image
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-lightmode.png")
  } else {
    img.setAttribute("src", "./assets/avatar-darkmode.png")
  }

  // change alt text
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "my profile picture with green draw")
  } else {
    img.setAttribute("alt", "my profile picture with yellow draw")
  }
}
