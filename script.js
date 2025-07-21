
    const nameEl = document.getElementById('restaurant-name');
    
    // Add gentle glowing effect looping every 3 seconds
    nameEl.style.animation = 'glow 3s ease-in-out infinite';

    // Optional: on click, toggle a little sparkle effect
    nameEl.addEventListener('click', () => {
      nameEl.style.animation = 'glow 1s ease-in-out infinite';
      setTimeout(() => {
        nameEl.style.animation = 'glow 3s ease-in-out infinite';
      }, 3000);
    });