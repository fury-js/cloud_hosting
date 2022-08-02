const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log("clicked");
    this.classList.toggle("collapsible--expanded");
  })
);