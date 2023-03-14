const button = document.querySelector('button');
const letter = document.getElementById('letter');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  // Lấy nội dung lời nhắn từ ô input
  const input = document.getElementById('input-message');
  const msg = input.value;
  
  // Hiển thị phần tử đang ẩn
  letter.classList.remove('hidden');
  
  // Hiển thị nội dung lời nhắn trong phần tử <p>
  message.textContent = msg;
});