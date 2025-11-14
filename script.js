const hero = document.querySelector('.hero1');

  // Array of background images
  /*const images = [
    'url("https://th.bing.com/th/id/OIP.sI-TElAvDKohsbmZo8gmaQHaEJ?w=312&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3")',
    'url("https://th.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=240&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3")',
    'url("https://th.bing.com/th/id/OIP.S16MwWFznloeMQVbOE-bugHaEp?w=229&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3")'
  ];
  */
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = images[index];
  }, 5000); // changes every 3 seconds
   const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // remove to re-animate when scrolling up
      }
    });
  }, {
    threshold: 0.2 // triggers when 20% of section is visible
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));