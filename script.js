let secretNum = Math.floor(Math.random() * 100) + 1; // Corrected typo
let chances = 8;
console.log(secretNum);

function guessFunction() {
  let inputSelct = document.querySelector("input");
  let message = document.querySelector(".chancesP");
  let guessNumber = Number(inputSelct.value);
  let body = document.querySelector("body");
  let btn = document.querySelector("button");
  let cont = document.querySelector(".cont");
  let title = document.querySelector("h1");
  let bravo = document.querySelector(".bravo");

  if (guessNumber < 1 || guessNumber > 100 || isNaN(guessNumber)) {
    message.textContent = "enter a number between 1 and 100";
    return;
  }

  chances--;

  if (guessNumber === secretNum) {
    message.textContent = ` Tu as deviné le bon nombre au bout de : ${
      8 - chances
    } tentative(s).`;
    gsap.to(body, { backgroundColor: "#2BB94A", duration: 0.5 });
    gsap.to(btn, { backgroundColor: "#2BB94A", duration: 0.5 });
    const tl = gsap.timeline();

    tl.to(title, { duration: 0.4, opacity: 0 })
      .to(inputSelct, { duration: 0.4, opacity: 0 }, "<")
      .to(btn, { duration: 0.4, opacity: 0 }, "<")
      .fromTo(
        bravo,
        { y: -50 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "<+0.2"
      );

    btn.style.cursor = "none";
    inputSelct.disabled = true;
  } else if (chances === 0) {
    message.textContent = `Perdu ! Le bon nombre était ${secretNum} `;
    inputSelct.disabled = true;
    gsap.to(body, { backgroundColor: "red", duration: 0.5 });
    gsap.to(btn, {
      backgroundColor: "#D9D9D9",
      borderColor: "#D9D9D9",
      duration: 0.3,
    });
  } else {
    const help = guessNumber > secretNum ? "trop grand" : "trop petit";
    message.textContent = `Mauvais choix (${help}). Il te reste ${chances} tentative(s).`;

    gsap.fromTo(
      cont,
      { x: -10 },
      { x: 10, duration: 0.1, yoyo: true, repeat: 5, ease: "power1.inOut" }
    );
  }

  inputSelct.value = "";
  inputSelct.focus();
}

document.querySelector("input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    guessFunction();
  }
});
