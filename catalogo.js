function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}
function toggleMusic() {
  const music = document.getElementById("bg-music");
  music.paused ? music.play() : music.pause();
}
