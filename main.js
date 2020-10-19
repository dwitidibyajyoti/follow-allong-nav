const trigger = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handaleEnter() {
  this.classList.add("trigger-enter");
  background.classList.add("open");

  setTimeout(() => this.classList.add("trigger-enter-active"), 150);

  const dropDown = this.querySelector(".dropdown");
  const dropDownCords = dropDown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();
  console.log(dropDownCords);

  const cords = {
    height: dropDownCords.height,
    width: dropDownCords.width,
    top: dropDownCords.top - navCords.top,
    left: dropDownCords.left - navCords.left,
  };

  background.style.setProperty("width", `${cords.width}px`);
  background.style.setProperty("height", `${cords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${cords.left}px,${cords.top}px)`
  );
}

function hundaleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

trigger.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handaleEnter)
);
trigger.forEach((trigger) =>
  trigger.addEventListener("mouseleave", hundaleLeave)
);
