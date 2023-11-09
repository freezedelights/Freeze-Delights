const rul = document.getElementById('wheel');
const spinButton = document.getElementById('spin');

spinButton.addEventListener('click', () => {
    const randomRotation = Math.floor(Math.random(15) * 360);
    const totalRotation = 6 * 360 + randomRotation; 
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    setTimeout(() => {
       
        alert('felicidades has ganado un descuento de 20%'); 
    }, 5000);
});