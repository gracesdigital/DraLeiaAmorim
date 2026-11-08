/* =====================================================
   CONFIGURAÇÕES RÁPIDAS — EDITE OS DADOS ABAIXO
   WhatsApp: DDI + DDD + número, somente números.
   Instagram: @ do perfil, sem o símbolo @.
   ===================================================== */
const CONFIG = {
  whatsapp: "5511999999999", // TROQUE PELO WHATSAPP REAL
  instagram: "seuusuario",   // TROQUE PELO @ DO INSTAGRAM
  mensagem: "Olá, Dra. Léia! Gostaria de saber mais sobre a psicoterapia online e consultar os horários disponíveis."
};

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.href = `https://instagram.com/${CONFIG.instagram}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Animação suave ao entrar na tela
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
