const initUpdateNavbarOnScroll = ()  => {
  const navbar = document.querySelector(".navbar-lewagon");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.oldScroll <= window.scrollY) {
        navbar.classList.add("navbar-lewagon-transparent");
      } else {
        navbar.classList.remove("navbar-lewagon-transparent");
      }
      window.oldScroll = window.scrollY;
    });
  }
}

export { initUpdateNavbarOnScroll };
