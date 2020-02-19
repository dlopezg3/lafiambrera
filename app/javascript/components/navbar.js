const initUpdateNavbarOnScroll = ()  => {
  const navbar = document.querySelector(".navbar-lewagon");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.oldScroll <= window.scrollY) {
        console.log("bajando");
        navbar.classList.add("navbar-lewagon-transparent");
      } else {
        console.log("subiendo");
        navbar.classList.remove("navbar-lewagon-transparent");
      }
      window.oldScroll = window.scrollY;
    });
  }
}

export { initUpdateNavbarOnScroll };
