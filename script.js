const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = Array.from(galleryItems).map(item => item.querySelector('img').src);
let currentIndex = 0;

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex];
  });
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxImg) {
    lightbox.style.display = 'none';
  }
});

function filterImages(category) {
  galleryItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
