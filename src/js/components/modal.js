const modal = () => {
  const modal = document.querySelector(".modal");
  const buttonConfirmed = document.querySelector(".button-confirmed .button");

  if (modal && buttonConfirmed) {
    function activeModal() {
      modal.classList.add("active");
			
			setTimeout(() => {
				if (modal.classList.contains("active")) modal.classList.remove("active");
			}, 3500);
    }

    buttonConfirmed.addEventListener("click", activeModal);
  }
};

export default modal;
