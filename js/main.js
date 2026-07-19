// 移动端菜单
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// 图片灯箱
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<span class="close">&times;</span><img alt="放大查看">';
document.body.appendChild(lightbox);
const lbImg = lightbox.querySelector('img');

document.querySelectorAll('.card img, .masonry img').forEach((img) => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
function closeLb() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
lightbox.addEventListener('click', closeLb);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });
