// === DOM Ready ===
document.addEventListener("DOMContentLoaded", () => {
    // 🎨 主題切換 & 儲存記憶
    const themeBtn = document.getElementById('toggle-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme) {
      document.body.className = savedTheme;
    } else {
      document.body.className = prefersDark ? 'theme-dark' : 'theme-light';
    }
  
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      document.body.classList.toggle('theme-dark');
      const newTheme = document.body.classList.contains('theme-light') ? 'theme-light' : 'theme-dark';
      localStorage.setItem('theme', newTheme);
    });
  
    // 👩‍🎤 展開成員資訊（含動畫）
    document.querySelectorAll('.toggle-bio').forEach(button => {
      button.addEventListener('click', () => {
        const extra = button.nextElementSibling;
        extra.classList.toggle('hidden');
        extra.style.maxHeight = extra.classList.contains('hidden') ? '0' : extra.scrollHeight + "px";
        button.textContent = extra.classList.contains('hidden') ? 'More' : 'Less';
      });
    });
  
    // 🪄 平滑滾動 anchor link（index.html 的 news 區塊內部連結）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // ✍️ 打字動畫效果（首頁標題）
    const typingTarget = document.querySelector('.hero h2');
    if (typingTarget) {
      const fullText = typingTarget.textContent;
      typingTarget.textContent = '';
      let index = 0;
      const type = () => {
        if (index < fullText.length) {
          typingTarget.textContent += fullText[index++];
          setTimeout(type, 80);
        }
      };
      type();
    }
  });

  const slides = [
    { src: "bp.jpg", srcset: "bp2x.jpg 2x", alt: "BLACKPINK slide 1" },
    { src: "bp2.webp", srcset: "bp2@2x.webp 2x", alt: "BLACKPINK slide 2" },
    { src: "bp3.webp", srcset: "bp3@2x.webp 2x", alt: "BLACKPINK slide 3" }
  ];
  
  let currentSlide = 0;
  const img = document.getElementById("carousel-image");
  
  function updateSlide() {
    img.src = slides[currentSlide].src;
    img.srcset = slides[currentSlide].srcset;
    img.alt = slides[currentSlide].alt;
  }
  
  document.getElementById("prev-slide").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });
  
  document.getElementById("next-slide").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });
  const indicators = document.querySelectorAll("#carousel-indicators button");

function updateSlide() {
  img.src = slides[currentSlide].src;
  img.srcset = slides[currentSlide].srcset;
  img.alt = slides[currentSlide].alt;


  indicators.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide();
  });
});

  

  