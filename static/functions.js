/* clearing all the html from main view to avoid overriding*/
clear();

document.addEventListener("DOMContentLoaded", () => {
  display();
});

/* a function for displaying sections by pressing on navbar links*/
function display() {
  show_single_element();

  document.querySelectorAll(".nav-link").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector("body").style.backgroundColor = "#94c48a60";
      document.querySelectorAll(".main_view > div").forEach((div) => {
        div.removeAttribute("class");
      });

      const a_item = element.getAttribute("data-target");
      const div_item = document.querySelector(`${a_item}`);

      if (div_item) {
        div_item.classList.add("active");
        div_item.style.display = "flex";
      }

      if (div_item.classList.contains("active")) {
        document.querySelector(".wrapper").style.backgroundColor = "#2f354360";
        div_item.style.color = "white";
        document.querySelectorAll(".nav-link").forEach((element) => {
          element.style.color = "white";
        });
      }
    });
  });
}

/* a function for clearing every item in a class*/
function clear() {
  document.querySelectorAll(".main_view > div").forEach((element) => {
    element.innerHTML = "";
  });
}

/* a function for displaying only home page and no others*/
function show_single_element() {
  document.querySelectorAll(".main_view > div").forEach((element) => {
    if (element.id !== "home") {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  });
}
