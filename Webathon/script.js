// Reveal features section
document.getElementById("learnMore").addEventListener("click", () => {
  document.getElementById("features").classList.toggle("hidden");
  window.scrollTo({ top: document.getElementById("features").offsetTop, behavior: "smooth" });
});

// Simulated AI prediction
const resultBox = document.getElementById("result");
const messages = [
  { text: "🟢 Safe Zone detected – minimal risk.", color: "#28a745" },
  { text: "🟡 Caution: low visibility and sparse crowd.", color: "#ffc107" },
  { text: "🔴 Unsafe Area! EmpowerHer suggests alternate route 🚨", color: "#dc3545" }
];

document.getElementById("predictBtn").addEventListener("click", () => {
  const random = messages[Math.floor(Math.random() * messages.length)];
  resultBox.style.color = random.color;
  resultBox.textContent = random.text;
  resultBox.style.transition = "all 0.4s ease";
});
