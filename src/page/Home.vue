<template>
  <div
    class="bg-[#FDFDFD] text-[#1A1A1A] scroll-smooth selection:bg-blue-600 selection:text-white overflow-x-hidden font-jakarta"
  >
    <section
      class="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 pt-10 relative overflow-hidden"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-blue-50/50 rounded-full blur-[100px] -z-10"
      ></div>

      <div class="max-w-7xl mx-auto w-full space-y-6 md:space-y-10 animate-slide-up">
        <div class="inline-flex items-center gap-3">
          <div class="w-10 h-[1px] bg-blue-600"></div>
          <span
            class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-600"
          >
            UX/UI Designer & Frontend Developer
          </span>
        </div>

        <h1
          class="text-[11vw] sm:text-[8vw] lg:text-[90px] xl:text-[110px] font-bold tracking-tighter leading-[0.9] font-syne italic uppercase"
        >
          Solving<br />
          <span
            class="text-blue-600 not-italic inline-block transition-transform duration-500 cursor-default"
          >
            Complexities.
          </span>
        </h1>

        <div class="max-w-xl mx-auto space-y-6">
          <p class="text-base md:text-xl font-light leading-relaxed text-gray-500 italic">
            I am <span class="text-black font-semibold italic">Patcharaphan Sringarm</span>,
            engineering digital experiences where
            <span class="text-blue-600 font-medium">logic</span> meets
            <span class="text-black italic">human-centered design.</span>
          </p>

          <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-2">
            <div
              v-for="stat in ['Vue.js', 'HTML', 'Tailwind', 'Figma', 'Git']"
              :key="stat"
              class="flex items-center gap-2 group"
            >
              <div class="w-1 h-1 bg-gray-200 rounded-full transition-colors"></div>
              <span
                class="text-[9px] font-black uppercase tracking-widest text-gray-400 italic transition-colors"
                >{{ stat }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="px-5 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-[#F9F7F2] border-y border-black/5 overflow-hidden"
    >
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-2">
            <h4 class="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 italic">
              Core Workflow
            </h4>
            <h2
              class="text-[1.6rem] leading-[0.9] md:text-5xl font-black font-syne italic uppercase tracking-tighter break-words"
            >
              Methodology<span class="text-blue-600 not-italic">.</span>
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="p-8 bg-white border border-blue-600/5 rounded-[2rem] shadow-lg shadow-blue-600/5 flex flex-col items-start"
          >
            <div class="text-3xl font-syne italic font-black text-blue-600/25 mb-6 leading-none">
              0{{ i + 1 }}
            </div>
            <h4 class="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-3 italic">
              {{ step.title }}
            </h4>
            <p class="text-[12px] text-gray-500 font-light leading-relaxed italic">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-baseline justify-between mb-16 md:mb-24 gap-6">
          <div class="space-y-2">
            <h4 class="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600 italic">
              Selected Work
            </h4>
            <h2
              class="text-4xl md:text-6xl font-bold tracking-tighter font-syne italic uppercase leading-none"
            >
              Portfolio.
            </h2>
          </div>
          <p class="text-gray-400 font-mono text-[9px] uppercase tracking-widest italic">
            Case Studies (2024 — 2026)
          </p>
        </div>

        <div class="space-y-24 md:space-y-40">
          <div
            v-for="(p, index) in projects"
            :key="p.id"
            class="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            <div
              :class="[
                'lg:col-span-7 relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-1000',
                index % 2 !== 0 ? 'lg:order-2' : '',
              ]"
            >
              <div class="aspect-[16/9] overflow-hidden bg-gray-50">
                <img
                  :src="`/img/${p.image}`"
                  :alt="p.title"
                  class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div :class="['lg:col-span-5 space-y-6', index % 2 !== 0 ? 'lg:order-1' : '']">
              <div class="space-y-4">
                <div class="space-y-2">
                  <h3
                    class="text-3xl md:text-4xl font-bold tracking-tighter group-hover:text-blue-600 transition-all font-syne italic uppercase leading-none italic"
                  >
                    {{ p.title }}
                  </h3>
                  <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <p
                      class="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 italic"
                    >
                      {{ p.company }}
                    </p>
                    <span class="hidden sm:block text-gray-200 text-[8px]">|</span>
                    <p class="text-[9px] font-bold uppercase tracking-widest text-blue-600 italic">
                      {{ p.date }}
                    </p>
                  </div>
                </div>
                <p class="text-sm md:text-base text-gray-500 font-light leading-relaxed italic">
                  {{ p.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in p.tags.split('|')"
                    :key="tag"
                    class="text-[8px] font-bold border border-gray-100 px-3 py-1.5 rounded-full uppercase tracking-widest text-gray-500 bg-white transition-all italic"
                  >
                    {{ tag.trim() }}
                  </span>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-50 flex flex-wrap gap-8 items-center">
                <a
                  :href="p.link"
                  target="_blank"
                  class="inline-flex items-center gap-4 group/link active:scale-95 transition-transform"
                >
                  <div class="flex flex-col">
                    <span
                      class="text-[9px] font-black uppercase tracking-[0.3em] text-black italic group-hover/link:text-blue-600 transition-colors"
                    >
                      {{ p.primaryBtn }}
                    </span>
                    <div
                      class="h-[1px] w-full bg-black group-hover/link:bg-blue-600 transition-all transform origin-left scale-x-50 group-hover/link:scale-x-100 duration-500"
                    ></div>
                  </div>
                  <div
                    class="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:border-blue-600 group-hover/link:text-white transition-all transform group-hover/link:translate-x-1 duration-500"
                  >
                    <span class="text-lg italic">→</span>
                  </div>
                </a>

                <a
                  v-if="p.secondaryBtn"
                  :href="p.secondaryLink"
                  target="_blank"
                  class="inline-flex items-center gap-4 group/case active:scale-95 transition-transform"
                >
                  <div class="flex flex-col">
                    <span
                      class="text-[9px] font-black uppercase tracking-[0.3em] text-black group-hover/case:text-black transition-colors italic"
                    >
                      {{ p.secondaryBtn }}
                    </span>
                    <div
                      class="h-[1px] w-full bg-gray-500 group-hover/case:bg-black transition-all transform origin-left scale-x-50 group-hover/case:scale-x-100 duration-500"
                    ></div>
                  </div>
                  <div
                    class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/case:border-black group-hover/case:bg-black group-hover/case:text-white transition-all transform group-hover/case:translate-x-1 duration-500"
                  >
                    <span class="text-lg italic">→</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden rounded-t-[2rem] md:rounded-t-[4rem]"
    >
      <div class="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div class="space-y-6">
          <div class="w-10 h-[1px] bg-blue-600 mx-auto"></div>
          <h2
            class="text-4xl sm:text-5xl lg:text-7xl font-bold font-syne italic uppercase leading-[1] tracking-tighter italic text-balance"
          >
            Let's build <br />
            <span class="text-blue-500 not-italic">something</span> meaningful.
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mx-auto">
          <a
            href="https://linktr.ee/patcharaphan"
            class="group relative overflow-hidden bg-white text-black rounded-full py-4 transition-all hover:bg-blue-600 hover:text-white active:scale-95 shadow-xl"
          >
            <span class="relative z-10 font-black uppercase tracking-widest text-[10px] italic"
              >More on Linktree</span
            >
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            class="group relative overflow-hidden border border-white/20 rounded-full py-4 transition-all hover:bg-white hover:text-black active:scale-95"
          >
            <span class="relative z-10 font-black uppercase tracking-widest text-[10px] italic">
              RESUME
            </span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const steps = [
  {
    title: 'Discovery',
    desc: 'Conducting user research and requirements gathering to identify pain points and define the product’s strategic direction.',
  },
  {
    title: 'Strategy',
    desc: 'Defining Information Architecture and user flows to bridge business objectives with intuitive, human-centered experiences.',
  },
  {
    title: 'Design',
    desc: 'Engineering scalable design systems and high-fidelity interfaces in Figma that emphasize consistency and modern aesthetics.',
  },
  {
    title: 'Validation',
    desc: 'Performing usability testing and quality assurance (QA) to refine functionality and ensure a seamless, high-performance delivery.',
  },
]

const projects = [
  {
    id: '01',
    title: 'KwunJAI MiniApp',
    date: 'Nov 2025 — Feb 2026',
    image: '003.png',
    company: 'YimSiam Dot Com Co., Ltd.',
    description:
      'Re-engineered a complex legacy HR system into a mobile-first LINE Mini App (LIFF). Focused on simplifying employee workflows, streamlining registration, and bridging the gap between sophisticated backend logic and intuitive user interfaces.',
    tags: 'UX Research | UI Design | Vue.js | Tailwind CSS | LIFF API',
    link: 'https://www.figma.com/design/CUCIqAQVUA9RtbDqhYWC52/miniapp.kwunJAI?node-id=0-1',
    secondaryLink:
      'https://drive.google.com/file/d/1iBQz4WAhjLqrMxKjjv_m1cqLTe1r1hqE/view?usp=sharing',
    primaryBtn: 'Figma',
    secondaryBtn: 'Case Study',
  },
  {
    id: '02',
    title: 'T Double Online Marketplace',
    date: 'July 2025 — Sep 2025',
    image: '002.png',
    company: 'University of Phayao',
    description:
      'A scalable digital marketplace tailored for small businesses, focusing on high usability and streamlined user navigation paths.',
    tags: 'UI/UX Design | Documentation | Scrum Methodology',
    link: 'https://www.figma.com/design/7g7X4lp5Y0gdZjzj1QsrM3/T-Double?node-id=81-247',
    secondaryLink:
      'https://docs.google.com/spreadsheets/d/14Rr2bzgWY3Y3-bUfWmDCAOAaEH_oAp2IANyi9oubHKA/edit?gid=0#gid=0',
    primaryBtn: 'Figma',
    secondaryBtn: 'Scrum',
  },
  {
    id: '03',
    title: 'MIXIT Game Community System',
    date: 'Jul 2024 — Sep 2024',
    image: '001.png',
    company: 'University of Phayao',
    description:
      'An inclusive digital marketplace for underrepresented groups, prioritizing high accessibility and intuitive navigation.',
    tags: 'UI/UX Design | Strategic Planning | Interactive Prototyping',
    link: 'https://www.figma.com/design/RJJF2JEhzm5VgvMXjqTQjh/MIXIT?node-id=0-1',
    secondaryLink:
      'https://docs.google.com/document/d/1FogpqtnejB7VyGeQyU-rPTnPnRfDoZ1oIqzqAucXAmw/edit?usp=sharing',
    primaryBtn: 'Figma',
    secondaryBtn: 'Proposal',
  },
  {
    id: '04',
    title: 'Second UP',
    date: 'Dec 2023 — Mar 2024',
    image: '004.png',
    company: 'University of Phayao',
    description:
      'Enhancing student commerce through high-usability interfaces and optimized feedback loops to ensure a frictionless transaction process.',
    tags: 'UX Flow | UI Design  | Userflow',
    link: 'https://www.figma.com/design/3SZYkN6RMDK4xFJxFWNT3E/Second-UP?node-id=54-178',
    primaryBtn: 'Figma',
    secondaryBtn: null,
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Syne:wght@400..800&display=swap');

.font-syne {
  font-family: 'Syne', sans-serif;
}
.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  line-height: 1.6;
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
  animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (min-width: 1024px) {
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #fdfdfd;
  }
  ::-webkit-scrollbar-thumb {
    background: #2563eb;
    border-radius: 10px;
  }
}
</style>