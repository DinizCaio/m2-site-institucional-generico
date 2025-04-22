const openModal = document.querySelector(".open__modal");

const openModal2 = document.querySelector(".open__modal2");

const closeModal = document.querySelector(".close__modal");

openModal.addEventListener("click", () => {
  document.querySelector(".dialog").showModal();
  closeModal.addEventListener("click", () => {
    document.querySelector(".dialog").close();
  });
});

openModal2.addEventListener("click", () => {
  document.querySelector(".dialog").showModal();
  closeModal.addEventListener("click", () => {
    document.querySelector(".dialog").close();
  });
});
