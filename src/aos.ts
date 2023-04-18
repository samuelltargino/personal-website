const init = () => {
  const elements = document.querySelectorAll<HTMLElement>(`[data-aos]`);
  const delay = document.querySelectorAll<HTMLElement>(`[data-aos-delay]`);
  const fadeUp = "fade-up-init";
  const fillIn = "fill-in-init";
  let threshold = window.innerHeight - 50;

 

  delay.forEach((element) => {
    element.style.transitionDelay = element.dataset.aosDelay || "0ms";
  });

  function fadeUpEffect(element: HTMLElement) {
    const prevClass = element.className;
    const elementTop = element.getBoundingClientRect().top;


    if (elementTop < threshold && !prevClass.includes(fadeUp)) {
      element.classList.add(fadeUp);
    }
  }

  function fillInEffect(element: HTMLElement) {
    const prevClass = element.className;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < threshold && !prevClass.includes(fillIn)) {
      element.classList.add(fillIn);
    }
  }

  function checkElements() {
    elements.forEach((element) => {
      element.dataset.aos === "fade-up"
        ? fadeUpEffect(element)
        : fillInEffect(element);
    });
  }

  function onScroll() {
    checkElements();
  }

  function onResize() {
    threshold = window.innerHeight - 50;
    checkElements();
  }

  checkElements();
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
};

export default { init };
