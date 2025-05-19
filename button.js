const btn = document.querySelector(".btn-restart");
btn.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = btn.getBoundingClientRect();
  const x = e.clientX - (left + width / 2);
  const y = e.clientY - (top + height / 2);

  // add tilt effect
  let tiltVal = 20;
  const rotateX = (y / height) * tiltVal;
  const rotateY = (x / width) * -tiltVal;

  let strength = 0.3;
  gsap.to(btn, {
    x: x * strength,
    y: y * strength,
    rotationX: rotateX,
    rotationY: rotateY,
    transformPerspective: 500,
    transformOrigin: "center center",
    duration: 0.3,
    ease: "power2.out",
  });
});
// return back the button to inital position
btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    x: 0,
    y: 0,
    rotationX: 0,
    rotationY: 0,
    duration: 0.3,
    ease: "power2.out",
  });
});
