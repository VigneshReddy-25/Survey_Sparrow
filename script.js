// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('active');
    }
  });
},{threshold:0.15});

reveals.forEach(r => io.observe(r));

// Interactive card glow
const cards = document.querySelectorAll('.card.interactive');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', x + '%');
    card.style.setProperty('--y', y + '%');
  });
});

// Lightbox
function openLightbox(src){
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  box.style.display = 'flex';
}

function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none';
}
