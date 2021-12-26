document.addEventListener("DOMContentLoaded", loadScriptContents);
const modal = document.querySelector(".modal");
const navItems = document.querySelectorAll(".sidebar a");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");

const tl = gsap.timeline();
tl.pause();
tl.fromTo(
  ".sidebar",
  { opacity: 0, x: "-100vw", duration: 0.5 },
  { opacity: 1, x: 0, duration: 1, ease: "power2" }
).fromTo(
  ".fade-in",
  { opacity: 0, duration: 0.4, y: "-50vh" },
  { opacity: 1, duration: 1, y: 0, ease: "bounce" }
);

menu.addEventListener("click", () => {
  tl.play();
  navItems.forEach((a) => {
    a.addEventListener("click", () => {
      tl.reverse(0.7);
    });
  });
  closeMenu.addEventListener("click", () => tl.reverse(0.8));
});
function loadScriptContents() {
  const tl2 = gsap.timeline();
  tl2.from("nav", {
    y: "-100vh",
    opacity: 0,
    duration: 2,
    ease: "power4",
  });
  tl2
    .from(".caption h1", {
      y: "50vh",
      duration: 1,
      opacity: 0,
    })
    .from(".caption h4", { y: "50vh", duration: 1, opacity: 0 })
    .from(".banner button", {
      y: "50vh",
      duration: 1,
      opacity: 0,
    })
    .fromTo(
      ".banner img",
      { y: "50vh", scale: 1.2, duration: 1, opacity: 0 },
      { opacity: 1, y: 0, scale: 1.0, duration: 1 }
    );
  //   gsap.registerPlugin("ScrollTrigger");
  const triggerTimeline = gsap.timeline({
    scrollTrigger: {
      scrub: true,
    },
  });
  triggerTimeline.from("#about .lead", {
    scrollTrigger: {
      trigger: "#about",
    },
    opacity: 0,
    y: "-50vh",
    duration: 1,
  });

  const triggers = document.querySelectorAll(".trigger");
  triggers.forEach((modalTrigger) => {
    modalTrigger.addEventListener("click", () => {
      const tl2 = gsap.timeline();
      tl2.fromTo(
        ".modal",
        { scale: 1.2, duration: 1 },
        {
          visibility: "visible",
          opacity: 1,
          duration: 1,
          ease: "bounce",
          scale: 1.0,
        }
      );
      tl2.to(
        ".overlay",
        {
          visibility: "visible",
          opacity: 1,
          duration: 1,
          clipPath: "circle(100%)",
          ease: "power2.out",
        },
        "*=-1"
      );
      overlay.addEventListener("click", () => {
        tl2.reverse(0.7);
      });
    });
  });
}
