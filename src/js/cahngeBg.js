function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function changeColor() {
    while (true) {
      const colorRand = getRandomColor();
      document.querySelector('.section-form').style.backgroundColor = colorRand;
      await delay(2500);
    }
  }
  
  changeColor();
  