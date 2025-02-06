const $cards = document.querySelectorAll('.card');
let bounds;
let activeCard = null; // Track the currently active card

window.addEventListener("load", () => {
 const loader = document.querySelector(".loader");
 loader.classList.add("loader--hidden");
 loader.addEventListener("transitionend", () => {
  document.body.removeChild(loader);
 });
})


window.addEventListener("load", () => {
 const loader = document.querySelector(".loader");
 loader.classList.add("loader--hidden");
 loader.addEventListener("transitionend", () => {
  document.body.removeChild(loader);
 });
})

function rotateToMouse(e) {
  if (!activeCard) return; // Exit if no active card

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  bounds = activeCard.getBoundingClientRect();
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  activeCard.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
}

$cards.forEach($card => {
  $card.addEventListener('mouseenter', () => {
    // If there's an active card, reset it
    if (activeCard && activeCard !== $card) {
      activeCard.style.transform = '';
      const $glowElements = activeCard.querySelectorAll('.card__glow');
      $glowElements.forEach($glow => {
        $glow.style.background = '';
      });
    }

    activeCard = $card; // Set the new active card
    bounds = activeCard.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  $card.addEventListener('mouseleave', () => {
    if (activeCard === $card) {
      document.removeEventListener('mousemove', rotateToMouse);
      activeCard.style.transform = '';
      const $glowElements = activeCard.querySelectorAll('.card__glow');
      $glowElements.forEach($glow => {
        $glow.style.background = '';
      });
      activeCard = null; // Reset active card
    }
  });
});