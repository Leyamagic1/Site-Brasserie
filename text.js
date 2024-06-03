const btn = document.getElementById('btnToggle');
const menu = document.getElementById("menu");
const croix = document.getElementById('croix');

btn.addEventListener("click", () => {
  if (menu.style.transform === "translateX(0)") {
    menu.style.transform = "translateX(100%)";
  } else {
    menu.style.transform = "translateX(0)";
  }
});
croix.addEventListener("click", () => {
    if (menu.style.transform === "translateX(100%)") {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = "translateX(100%)";
    }
  });


  const btnCard = document.getElementById('btn-card');
  const sectionCard = document.getElementById("section-carte");
  const cardCroix = document.getElementById('card-croix');
  
  btnCard.addEventListener("click", () => {
    if (sectionCard.style.transform === "translateX(0)") {
      sectionCard.style.transform = "translateX(100%)";
    } else {
      sectionCard.style.transform = "translateX(0)";
    }
  });
  cardCroix.addEventListener("click", () => {
      if (sectionCard.style.transform === "translateX(100%)") {
          sectionCard.style.transform = "translateX(0)";
      } else {
          sectionCard.style.transform = "translateX(100%)";
      }
    });
  