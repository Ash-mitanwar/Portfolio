window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.backgroundColor = window.scrollY > 50 ? "#1f1f1f" : "transparent";
  });
  