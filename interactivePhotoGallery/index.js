document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      const moreInfo = card.querySelector(".more-info");

      moreInfo.innerHTML = "";

      const p1 = document.createElement("p");
      p1.textContent = "Know more";

      const p2 = document.createElement("p");
      p2.textContent = "➜";

      moreInfo.appendChild(p1);
      moreInfo.appendChild(p2);
    });
  });
});
