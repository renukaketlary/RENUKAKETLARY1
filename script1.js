   // Tiny demo JS to show button feedback; replace with real cart logic.
    document.querySelectorAll('.btn').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const name = e.currentTarget.closest('.card').querySelector('.product-title').textContent;
        e.currentTarget.textContent = 'Added';
        e.currentTarget.disabled = true;
        setTimeout(()=> {
          e.currentTarget.textContent = 'Add to cart';
          e.currentTarget.disabled = false;
        }, 1200);
        // Here you can fire your real add-to-cart logic (fetch, localStorage, etc.)
        console.log('add-to-cart:', name, e.currentTarget.dataset.sku);
      })
    });
      
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