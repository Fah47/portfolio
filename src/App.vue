<template>
  <div class="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-blue-600 selection:text-white flex flex-col scroll-smooth overflow-x-hidden font-jakarta">
    
    <nav class="fixed top-0 left-0 w-full px-4 sm:px-8 md:px-12 lg:px-24 py-4 md:py-8 flex justify-between items-center z-[100] bg-white/80 backdrop-blur-2xl border-b border-gray-100/50">
      <router-link
        to="/"
        class="group flex items-center gap-2"
      >
        <div class="w-7 h-7 md:w-8 md:h-8 bg-black group-hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors duration-500 shadow-lg shadow-black/5">
          <span class="text-[10px] md:text-xs font-black italic tracking-tighter">PS</span>
        </div>
        <span class="text-base sm:text-lg md:text-xl font-bold tracking-tighter italic font-syne group-hover:text-blue-600 transition-all duration-500 uppercase">
          PATCHARAPHAN<span class="hidden xs:inline"></span> S<span class="text-blue-600 not-italic">.</span>
        </span>
      </router-link>

      <div class="flex gap-4 sm:gap-8 md:gap-12 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em]">
        <router-link to="/" class="nav-link" active-class="active">HOME</router-link>
        <router-link to="/about" class="nav-link" active-class="active">ABOUT</router-link>
        <a href="/Resume.pdf" target="_blank" class="nav-link">RESUME</a>
      </div>
    </nav>

    <main class="flex-grow pt-24 md:pt-32">
      <router-view v-slot="{ Component }">
        <transition 
          name="page-fade" 
          mode="out-in"
          @before-leave="scrollToTop"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="py-10 md:py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 border-t border-gray-100 bg-white relative">
      <div class="flex flex-col items-center md:items-start gap-3 order-2 md:order-1 text-center md:text-left">
        <div class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
          © 2026 PATCHARAPHAN SRINGARM
        </div>
        <div class="flex gap-3 text-[8px] md:text-[9px] font-bold text-gray-300 uppercase tracking-widest italic">
          <span>Software Engineer</span>
          <span class="text-blue-600/30">•</span>
          <span>UX/UI Designer</span>
        </div>
      </div>
      
      <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 order-1 md:order-2">
        <a href="https://www.facebook.com/..." target="_blank" class="hover:text-blue-600 transition-all flex items-center gap-1.5 group">
          Facebook <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </a>
        <a href="https://linktr.ee/patcharaphan" target="_blank" class="hover:text-blue-600 transition-all flex items-center gap-1.5 group">
          Linktree <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
// สั่งให้เลื่อนขึ้นบนสุดทุกครั้งที่เปลี่ยนหน้าเพื่อ UX ที่ดี
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};
</script>

<style>
/* CSS ส่วนเดิมของคุณที่ปรับจูนความละเอียด */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Syne:wght@700;800&display=swap');

:root {
  --blue-primary: #2563eb;
  --text-dark: #1a1a1a;
  --text-muted: #a1a1aa;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #FDFDFD;
  margin: 0;
  color: var(--text-dark);
  -webkit-font-smoothing: antialiased;
}

/* Helper Class สำหรับชื่อหน้าจอเล็กมาก */
@media (max-width: 375px) {
  .xs\:hidden { display: none; }
}

.font-syne { font-family: 'Syne', sans-serif; }

/* Nav Link Styling */
.nav-link {
  color: var(--text-muted);
  position: relative;
  padding: 4px 0;
  transition: all 0.4s ease;
}

.nav-link:hover { color: var(--text-dark); }
.nav-link.active { color: var(--blue-primary); }

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--blue-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Page Transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from { opacity: 0; transform: translateY(15px); }
.page-fade-leave-to { opacity: 0; transform: translateY(-15px); }

/* Scrollbar สำหรับ Desktop */
@media (min-width: 768px) {
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--blue-primary); }
}
</style>