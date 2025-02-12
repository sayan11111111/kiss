document.getElementById('kissButton').addEventListener('click', function() {
    const kissAnimation = document.getElementById('kissAnimation');
    kissAnimation.innerHTML = '😘';
    kissAnimation.style.display = 'block';
    
    // Position the kiss animation randomly
    kissAnimation.style.left = Math.random() * window.innerWidth + 'px';
    kissAnimation.style.top = Math.random() * window.innerHeight + 'px';

    // Hide the kiss animation after 1 second
    setTimeout(() => {
        kissAnimation.style.display = 'none';
    }, 1000);
});