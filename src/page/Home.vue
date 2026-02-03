<template>
  <div class="bg-[#FDFDFD] text-[#1A1A1A] scroll-smooth selection:bg-blue-600 selection:text-white overflow-x-hidden font-jakarta">
    
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 pt-10 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

      <div class="max-w-7xl mx-auto w-full space-y-6 md:space-y-10 animate-slide-up">
        <div class="inline-flex items-center gap-3">
          <div class="w-10 h-[1px] bg-blue-600"></div>
          <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
            UXUI Designer & Fronend Development
          </span>
        </div>

        <h1 class="text-[11vw] sm:text-[8vw] lg:text-[90px] xl:text-[110px] font-bold tracking-tighter leading-[0.9] font-syne italic uppercase">
          Solving<br />
          <span class="text-blue-600 not-italic inline-block transition-transform duration-500 cursor-default">
            Complexities.
          </span>
        </h1>

        <div class="max-w-xl mx-auto space-y-6">
          <p class="text-base md:text-xl font-light leading-relaxed text-gray-500 italic">
            I am <span class="text-black font-semibold italic">Patcharaphan Sringarm</span>, 
            engineering digital experiences where <span class="text-blue-600 font-medium">logic</span> meets <span class="text-black italic">human-centered design.</span>
          </p>
          
          <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-2">
            <div v-for="stat in ['Vue.js', 'Tailwind', 'Figma', 'Node.js']" :key="stat" class="flex items-center gap-2 group">
              <div class="w-1 h-1 bg-gray-200 group-hover:bg-blue-600 rounded-full transition-colors"></div>
              <span class="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black italic transition-colors">{{ stat }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24 bg-[#F9F7F2] border-y border-black/5">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-2">
            <h4 class="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600 italic">Core Workflow</h4>
            <h2 class="text-4xl md:text-5xl font-black tracking-tighter font-syne italic uppercase leading-none text-[#1A1A1A]">
              Methodology<span class="text-blue-600 not-italic">.</span>
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div v-for="(step, i) in steps" :key="i" 
               class="p-8 bg-white border border-blue-600/5 rounded-[2rem] shadow-lg shadow-blue-600/5 flex flex-col items-start">
            <div class="text-3xl font-syne italic font-black text-blue-600/25 mb-6 italic leading-none">0{{i+1}}</div>
            <h4 class="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-3 italic">{{step.title}}</h4>
            <p class="text-[12px] text-gray-500 font-light leading-relaxed italic">{{step.desc}}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-baseline justify-between mb-16 md:mb-24 gap-6">
          <div class="space-y-2">
            <h4 class="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600 italic">Selected Work</h4>
            <h2 class="text-4xl md:text-6xl font-bold tracking-tighter font-syne italic uppercase leading-none">Portfolio.</h2>
          </div>
          <p class="text-gray-400 font-mono text-[9px] uppercase tracking-widest italic">Case Studies (2024 — 2026)</p>
        </div>

        <div class="space-y-24 md:space-y-40">
          <div v-for="(p, index) in projects" :key="p.id" class="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div :class="['lg:col-span-7 relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-1000', (index % 2 !== 0) ? 'lg:order-2' : '']">
              <div class="aspect-[16/9] overflow-hidden bg-gray-50">
                <img :src="`/img/${p.image}`" :alt="p.title" class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
                <span class="text-[8px] font-black uppercase tracking-widest italic">{{ p.id }} / Case Study</span>
              </div>
            </div>

            <div :class="['lg:col-span-5 space-y-6', (index % 2 !== 0) ? 'lg:order-1' : '']">
              <div class="space-y-4">
                <div class="space-y-2">
                  <h3 class="text-3xl md:text-4xl font-bold tracking-tighter group-hover:text-blue-600 transition-all font-syne italic uppercase leading-none italic">
                    {{ p.title }}
                  </h3>
                  <p class="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 italic">
                    {{ p.company }}
                  </p>
                </div>
                <p class="text-sm md:text-base text-gray-500 font-light leading-relaxed italic">
                  {{ p.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in p.tags.split('|')" :key="tag" 
                    class="text-[8px] font-bold border border-gray-100 px-3 py-1.5 rounded-full uppercase tracking-widest text-gray-400 bg-white group-hover:border-blue-100 group-hover:text-blue-600 transition-all italic">
                    {{ tag.trim() }}
                  </span>
                </div>
              </div>
              
              <div class="pt-4 border-t border-gray-50">
                <a :href="p.link" target="_blank" class="inline-flex items-center gap-4 group/link active:scale-95 transition-transform">
                  <div class="flex flex-col">
                    <span class="text-[9px] font-black uppercase tracking-[0.3em] text-black italic group-hover/link:text-blue-600 transition-colors">Explore Case Study</span>
                    <div class="h-[1px] w-full bg-black group-hover/link:bg-blue-600 transition-all transform origin-left scale-x-50 group-hover/link:scale-x-100 duration-500"></div>
                  </div>
                  <div class="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:border-blue-600 group-hover/link:text-white transition-all transform group-hover/link:translate-x-1 duration-500">
                    <span class="text-lg italic">→</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden rounded-t-[2rem] md:rounded-t-[4rem]">
      <div class="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div class="space-y-6">
          <div class="w-10 h-[1px] bg-blue-600 mx-auto"></div>
          <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold font-syne italic uppercase leading-[1] tracking-tighter italic text-balance">
            Let's build <br /> <span class="text-blue-500 not-italic">something</span> meaningful.
          </h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mx-auto">
          <a href="https://linktr.ee/patcharaphan" class="group relative overflow-hidden bg-white text-black rounded-full py-4 transition-all hover:bg-blue-600 hover:text-white active:scale-95 shadow-xl">
            <span class="relative z-10 font-black uppercase tracking-widest text-[10px] italic">Full Portfolio</span>
          </a>
          <a href="" target="_blank" class="group relative overflow-hidden border border-white/20 rounded-full py-4 transition-all hover:bg-white hover:text-black active:scale-95">
            <span class="relative z-10 font-black uppercase tracking-widest text-[10px] italic">RESUME</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
const steps = [
  { title: 'Discovery', desc: 'Analyzing user pain points and system requirements to set a solid foundation for the product journey.' },
  { title: 'Strategy', desc: 'Crafting comprehensive user flows and technical architecture that balance business goals with usability.' },
  { title: 'Design', desc: 'Developing scalable design systems and high-fidelity interactive prototypes within Figma environment.' },
  { title: 'Validation', desc: 'Implementing rigorous testing and feedback loops to ensure both technical stability and UX excellence.' }
]

const projects = [
  { id: '01', title: 'KwunJAI Mini App', image: '003.png', company: 'YimSiam Dot Com Co., Ltd.', description: 'A mobile-first HR management solution bridging modern Vue.js development with complex legacy backend systems for a seamless corporate experience.', tags: 'UX Flow | Vue.js | LIFF API', link: 'https://www.figma.com/design/CUCIqAQVUA9RtbDqhYWC52/miniapp.kwunJAI?node-id=0-1' },
  { id: '02', title: 'T Double', image: '002.png', company: 'University of Phayao', description: 'An inclusive digital marketplace tailored for underrepresented groups, focusing on highly accessible UI and intuitive user navigation paths.', tags: 'User Research | UI Design', link: 'https://www.figma.com/design/7g7X4lp5Y0gdZjzj1QsrM3/T-Double?node-id=81-247' },
  { id: '03', title: 'MIXIT', image: '001.png', company: 'University of Phayao', description: 'A community-driven gaming platform built on the principles of inclusivity, featuring a robust design system and interactive wireframes.', tags: 'Design System | Prototyping', link: 'https://www.figma.com/design/RJJF2JEhzm5VgvMXjqTQjh/MIXIT?node-id=0-1' },
  { id: '04', title: 'Second UP', image: '004.png', company: 'University of Phayao', description: 'Enhancing student commerce through high-usability interfaces and optimized feedback loops to ensure a frictionless transaction process.', tags: 'Timeline | Figma | UI', link: 'https://www.figma.com/design/3SZYkN6RMDK4xFJxFWNT3E/Second-UP?node-id=54-178' },
]
</script>

<style scoped>
@keyframes slide-up {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

/* Custom Scrollbar for Desktop */
@media (min-width: 1024px) {
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #fdfdfd; }
  ::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
}
</style>