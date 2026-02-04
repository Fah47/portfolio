<template>
  <div
    class="bg-[#F3F4F6] font-jakarta py-10 md:py-20 selection:bg-blue-600 selection:text-white overflow-x-hidden"
  >
    <div
      class="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
    >
      <div
        class="md:col-span-4 lg:col-span-4 bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm flex flex-col justify-center space-y-6 animate-slide-up"
      >
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-px bg-blue-600"></div>
            <span class="text-blue-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em]">
              Aspiring Intern '26
            </span>
          </div>

          <div class="space-y-2">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne uppercase tracking-tighter leading-tight italic">
              {{ name }}
            </h1>
            <p class="text-xs sm:text-sm md:text-lg font-bold font-syne text-gray-400 uppercase tracking-widest italic leading-none">
              Software Engineering Student
            </p>
          </div>
        </div>

        <div class="space-y-4 border-t border-gray-50 pt-6">
          <p class="text-blue-600 text-[9px] font-black uppercase tracking-[0.3em] italic">
            Internship Objective
          </p>
          <p class="text-gray-500 text-sm md:text-base font-light italic max-w-xl leading-relaxed">
            I am currently a third-year Software Engineering student at the School of Information and
            Communication Technology, University of Phayao. With a strong interest in UX/UI Design 
            and Frontend Development, I am seeking an internship opportunity where I can bridge the
            gap between user experience and technical implementation. I am eager to apply my
            academic knowledge, gain hands-on experience in building responsive interfaces, and
            further develop my skills in a real-world professional environment.
          </p>
        </div>
      </div>

      <div
        class="md:col-span-2 lg:col-span-2 bg-gray-200 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm group aspect-[4/3] md:aspect-auto"
      >
        <img
          src="/img/1.JPG"
          alt="Patcharaphan"
          class="w-full h-full object-cover transition-transform duration-1000 "
        />
      </div>

      <div class="md:col-span-2 lg:col-span-2 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm space-y-5">
        <h4 class="font-syne font-black uppercase text-[9px] md:text-[10px] tracking-widest italic border-l-2 border-blue-600 pl-3 text-black">
          Tech Stack
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="s in skillGroups.Engineering"
            :key="s"
            class="bg-gray-50 px-2.5 py-1.5 rounded-lg text-[9px] md:text-[10px] font-bold uppercase text-gray-500 transition-colors"
          >
            {{ s }}
          </span>
        </div>
      </div>

      <div class="md:col-span-2 lg:col-span-2 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm space-y-5">
        <h4 class="font-syne font-black uppercase text-[9px] md:text-[10px] tracking-widest italic border-l-2 border-blue-600 pl-3 text-black">
          Design Tools
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="s in skillGroups.Design"
            :key="s"
            class="bg-gray-50 px-2.5 py-1.5 rounded-lg text-[9px] md:text-[10px] font-bold uppercase text-gray-500 transition-colors"
          >
            {{ s }}
          </span>
        </div>
      </div>

      <div class="md:col-span-2 lg:col-span-2 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm space-y-5">
        <h4 class="font-syne font-black uppercase text-[9px] md:text-[10px] tracking-widest italic border-l-2 border-blue-600 pl-3 text-black">
          Professional
        </h4>
        <div class="space-y-2.5">
          <div v-for="s in skillGroups.Professional" :key="s" class="flex items-center gap-2.5">
            <div class="w-1 h-1 bg-blue-600 rounded-full"></div>
            <span class="text-[9px] md:text-[10px] font-bold uppercase text-gray-500 tracking-widest">
              {{ s }}
            </span>
          </div>
        </div>
      </div>

      <div class="md:col-span-4 lg:col-span-4 bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm space-y-8">
        <h4 class="font-syne font-black uppercase text-[9px] md:text-[10px] tracking-widest italic border-b border-gray-50 pb-3 text-blue-600">
          Education
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div v-for="edu in education" :key="edu.school" class="relative pl-6 border-l border-gray-100 group">
            <div class="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-blue-600 transition-all duration-500 group-hover:scale-125"></div>
            <div class="space-y-1">
              <span class="text-[8px] md:text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase">
                {{ edu.year }}
              </span>
              <p class="text-base md:text-lg font-bold font-syne uppercase leading-tight italic">
                {{ edu.school }}
              </p>
              <p class="text-[10px] md:text-[11px] text-gray-400 font-light italic leading-tight">
                {{ edu.degree }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-span-2 lg:col-span-2 bg-white p-7 rounded-[2rem] md:rounded-[2.5rem] shadow-sm flex flex-col justify-center space-y-5">
        <h4 class="font-syne font-black uppercase text-[9px] md:text-[10px] tracking-widest italic text-blue-600">
          Languages
        </h4>
        <div class="space-y-4">
          <div>
            <p class="text-sm md:text-base font-bold font-syne italic leading-none">Thai</p>
            <p class="text-[8px] font-black uppercase text-gray-300 mb-0.5">Native Speaker</p>
          </div>
          <div>
            <p class="text-sm md:text-base font-bold font-syne italic leading-none">English</p>
            <p class="text-[8px] font-black uppercase text-gray-300 mb-0.5">Basic Communication</p>
          </div>
        </div>
      </div>

      <div
        class="md:col-span-6 lg:col-span-6 bg-[#1A1A1A] text-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl flex flex-col lg:flex-row justify-between items-center gap-10 group overflow-hidden relative"
      >
        <div class="absolute -bottom-6 -right-6 text-[15vw] lg:text-[10vw] font-black text-white/5 font-syne italic select-none pointer-events-none uppercase leading-none">

        </div>

        <div class="space-y-4 relative z-10 text-center lg:text-left w-full lg:w-auto">
          <h4 class="font-syne font-black uppercase text-[9px] tracking-[0.4em] italic opacity-50">Contact</h4>
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-syne uppercase leading-none italic tracking-tighter break-all">
            patcharaphan81@gmail .com 
          </p>
          <p class="text-[12px] font-light italic opacity-60">
            84 Moo 1, Ton Thong, Mueang, Lamphun 51000  •  080-1479156 
          </p>
        </div>

        <div class="flex flex-col gap-3 w-full sm:w-64 lg:w-auto relative z-10">
          <div class="flex justify-center lg:justify-end gap-5 pt-1">
            <a href="https://github.com/fah47" target="_blank" class="text-[9px] font-black uppercase tracking-widest border-b border-white/20 pb-0.5 hover:border-white transition-all">GitHub ↗</a>
            <a href="https://gitlab.com/patcharaphan81" target="_blank" class="text-[9px] font-black uppercase tracking-widest border-b border-white/20 pb-0.5 hover:border-white transition-all">GitLab ↗</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = 'Patcharaphan Sringarm' 

const skillGroups = {
  // เพิ่ม Tailwind และ API เข้าไป
  Engineering: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'Git', 'RESTful API'], 
  // ปรับ Design ให้ดูมี Process
  Design: ['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'Design Thinking'], 
  // ปรับ Professional ให้ดู Soft Skills แข็งแรง
  Professional: ['Project Management', 'Agile/Scrum', 'Effective Communication'], 
}

const education = [
  {
    year: '2023 — Present',
    school: 'University of Phayao', 
    degree: 'Software Engineering, School of ICT', 
  },
  { 
    year: '2020 — 2023', 
    school: 'Suanboonyopatham Lamphun', 
    degree: 'High School (Science-Math)' 
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Syne:wght@400..800&display=swap');

.font-syne {
  font-family: 'Syne', sans-serif;
}
.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

@keyframes slide-up {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 10px;
}
</style>