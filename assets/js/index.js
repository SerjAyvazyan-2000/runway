





document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true, 
          
          },
        }
      );
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#heroVideo");
  const source = video.querySelector("source");

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      source.src = source.dataset.src; 
      video.load(); 
      observer.disconnect();
    }
  });

  observer.observe(video);
});
  

  const track = document.querySelector(".b-partners-track");
  const items = gsap.utils.toArray(".b-partners-track > *");

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  const totalWidth = track.scrollWidth / 2;

  gsap.to(track, {
    x: -totalWidth,
    duration: 50,   
    ease: "none",
    repeat: -1,     
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth)
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".b-instruments-categories button");
  const items = document.querySelectorAll(".b-instrument-item");

  function setActive(id) {
    categoryButtons.forEach(btn => btn.classList.remove("active"));

    const activeBtn = document.querySelector(`.b-instruments-categories button[data-id="${id}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    items.forEach(item => {
      item.style.display = item.dataset.id === id ? "flex" : "none";
    });
  }

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      setActive(id);
    });
  });

  setActive("1");
});



document.addEventListener("DOMContentLoaded", () => {
  const instrumentItems = document.querySelectorAll(".b-instrument-item");

  instrumentItems.forEach((instrument) => {
    const valButtons = instrument.querySelectorAll(".b-instrument-item-categories button");
    const valImages = instrument.querySelectorAll(".b-instrument-img-item");

    function setActiveVal(val) {
      valButtons.forEach(btn => btn.classList.remove("active"));

      const activeBtn = instrument.querySelector(`.b-instrument-item-categories button[data-val="${val}"]`);
      if (activeBtn) activeBtn.classList.add("active");

      valImages.forEach(img => {
        img.style.display = img.dataset.val === val ? "flex" : "none";
      });
    }

    valButtons.forEach(button => {
      button.addEventListener("click", () => {
        const val = button.dataset.val;
        setActiveVal(val);
      });
    });

    setActiveVal("1");
  });
});