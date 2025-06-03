const users = [
  { user: "eipacman", pass: "68499798" },
  { user: "dennis", pass: "13425365" },
  { user : "hans", pass: "123"}
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const audio = document.getElementById("login-sound");

  const valid = users.find(u => u.user === username && u.pass === password);
  if (valid) {
    localStorage.setItem("isLoggedIn", "true");
    audio.play();
    setTimeout(() => window.location.href = "catalogo.html", 500);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
