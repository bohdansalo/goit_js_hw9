const gallery = document.querySelector(".gallery");

document.addEventListener("scroll", (event) => {
  if (event.key === "ArrowRight") {
    gallery.scrollBy({ left: scrollMenu });
  }
  if (event.key === "ArrowLeft") {
    gallery.scrollBy({ left: -scrollMenu });
  }
});
