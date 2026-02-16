<template>
  <div
    class="bg-[#FDFDFD] text-[#1A1A1A] font-jakarta py-10 md:py-20 selection:bg-blue-600 selection:text-white min-h-screen overflow-x-hidden"
  >
    <div class="max-w-6xl mx-auto px-6 lg:px-8 space-y-16 md:space-y-32">
      <header
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center animate-slide-up"
      >
        <div class="lg:col-span-4 flex justify-center lg:justify-start">
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-blue-50/50 rounded-[3rem] -z-10 group-hover:bg-blue-100/50 transition-colors"
            ></div>
            <div
              class="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 bg-gray-50"
            >
              <img
                src="/img/1.JPG"
                alt="Patcharaphan"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-8 text-center lg:text-left">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-3 justify-center lg:justify-start">
              <div class="w-8 h-[1px] bg-blue-600"></div>
              <span class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic"
                >About Me</span
              >
            </div>
            <div class="space-y-2">
              <h1
                class="text-4xl md:text-7xl font-bold font-syne text-gray-900 tracking-tighter uppercase italic leading-[0.85]"
              >
                {{ name.split(' ')[0] }}<br />
                <span class="text-blue-600 not-italic">{{ name.split(' ')[1] }}</span>
              </h1>
              <p
                class="text-xs md:text-xl font-bold font-syne text-gray-400 uppercase tracking-[0.2em] italic"
              >
                Software Engineering Student
              </p>
            </div>
          </div>
          <p
            class="text-gray-500 text-sm md:text-lg max-w-2xl leading-relaxed italic mx-auto lg:mx-0"
          >
            "I am currently a third-year Software Engineering student at the University of Phayao,
            maintaining a cumulative GPA of 2.93. Throughout my academic journey, I have built a
            foundation in Software Processes, Design Thinking, and Frontend Development. Beyond the
            classroom, I am gaining hands-on professional experience through the Work Integrated
            Learning (WIL) program as a UX/UI Designer & Frontend Developer Intern at YimSiam Dot
            Com Co., Ltd. My core responsibility involves modernizing a legacy HR system into a
            mobile-first platform via the KwunJAI MiniApp. I am highly motivated to bridge the gap
            between User Experience (UX) and technical implementation by applying my skills in
            Vue.js, Figma, and Responsive Design within a professional, real-world environment."
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4"
          >
            <div class="group relative">
              <div
                class="absolute -inset-0.5 bg-blue-600 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-500"
              ></div>
              <div
                class="relative px-6 py-2.5 bg-white border border-gray-100 rounded-full text-[11px] font-bold italic text-[#1A1A1A] flex items-center gap-3 shadow-sm hover:border-blue-600/50 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-blue-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {{ email }}
              </div>
            </div>

            <div class="group relative">
              <div
                class="relative px-6 py-2.5 bg-white border border-gray-100 rounded-full text-[11px] font-bold italic text-[#1A1A1A] flex items-center gap-3 shadow-sm hover:border-blue-600/50 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-blue-600"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                080-1479156
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <section class="space-y-12">
          <div class="space-y-2">
            <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic">
              Work Integrated Learning
            </h4>
            <h2 class="text-3xl font-black font-syne italic uppercase tracking-tighter">
              Experience.
            </h2>
          </div>
          <div
            v-for="exp in experiences"
            :key="exp.company"
            class="relative pl-8 border-l border-gray-100 group"
          >
            <div
              class="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform"
            ></div>
            <div class="space-y-4">
              <span class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{{
                exp.period
              }}</span>
              <div class="space-y-1">
                <h3
                  class="text-xl md:text-2xl font-bold font-syne uppercase italic text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {{ exp.company }}
                </h3>
                <p class="text-blue-600 font-bold text-sm italic">{{ exp.role }}</p>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed italic">{{ exp.task }}</p>
            </div>
          </div>
        </section>

        <section class="space-y-12">
          <div class="space-y-2">
            <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic">
              Education
            </h4>
            <h2 class="text-3xl font-black font-syne italic uppercase tracking-tighter">
              Knowledge.
            </h2>
          </div>
          <div class="space-y-12">
            <div v-for="edu in education" :key="edu.school" class="group space-y-4">
              <span class="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{{
                edu.year
              }}</span>
              <div class="space-y-1">
                <h3
                  class="text-xl md:text-2xl font-bold font-syne uppercase italic text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {{ edu.school }}
                </h3>
                <p class="text-gray-500 text-sm italic">{{ edu.degree }}</p>
              </div>
              <div v-if="edu.gpa" class="pt-1">
                <span
                  class="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-bold text-[10px]"
                  >GPA {{ edu.gpa }}</span
                >
              </div>
            </div>
          </div>
        </section>
      </main>

      <section class="pt-16 border-t border-gray-100 pb-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div v-for="(skills, category) in skillGroups" :key="category" class="space-y-6">
            <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 italic">
              {{ category }}
            </h4>
            <div class="flex flex-wrap justify-center md:justify-start gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="text-[10px] font-bold border border-gray-100 px-4 py-2 rounded-full uppercase tracking-widest text-gray-500 bg-white hover:border-blue-600 hover:text-blue-600 transition-all italic cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const name = 'Patcharaphan Sringarm'
const email = 'patcharaphan81@gmail.com'

const skillGroups = {
  Engineering: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'Git/Gitlab', 'Gitlab','RESTful API'],
  Design: ['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'Design Thinking', 'Canva'],
  Professional: ['Agile/Scrum', 'Project Management', 'Time Management', 'Test Case Preparation'],
}

const education = [
  {
    year: '2023 — Present',
    school: 'University of Phayao',
    degree: 'Software Engineering, School of ICT',
    gpa: '2.93', // ดึงมาจาก Transcript
  },
  {
    year: '2020 — 2023',
    school: 'Suanboonyopatham Lamphun School', // ปรับชื่อให้ตรง Resume
    degree: 'High School (Science-Math)',
  },
]

const experiences = [
  {
    period: '3 Nov 2025 — 20 Feb 2026', // วันที่ตามที่คุณแจ้ง
    company: 'YimSiam Dot Com Co., Ltd.',
    role: 'UX/UI Designer & Frontend Development Intern', // เน้นตำแหน่งตามเป้าหมาย
    task: 'Developed "KwunJAI MiniApp" (Mobile-First approach), bridging UX design with technical implementation in a real-world environment.',
  },
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
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #fdfdfd;
}
::-webkit-scrollbar-thumb {
  background: #1a1a1a;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
</style>