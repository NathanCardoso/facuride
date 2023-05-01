const btnMobile = () => {
  const btnMobile = document.querySelector(".btn-mobile");

  if (btnMobile) {
    function toggleMenu(event) {
      if (event.type === "touchstart") event.preventDefault();
      const headerRide = document.querySelector(".ride-header");
      headerRide.classList.toggle("active");
    }

    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
  }
};

export default btnMobile;
