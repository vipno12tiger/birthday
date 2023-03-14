const container = document.querySelector('.hearts-container');

for (let i = 0; i < 10; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.top = `${Math.random() * 100}%`;
  heart.style.left = `${Math.random() * 100}%`;
  container.appendChild(heart);
}