<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, provide, onMounted } from 'vue'

// Estado do idioma e tema
const currentLanguage = ref('EN')
const isDarkMode = ref(false)

// Sistema de tradução completo
const translations = {
  EN: {
    // Navegação
    about: 'about',
    projects: 'projects', 
    content: 'content',
    
    // Tooltips sociais
    tiktok: 'TikTok',
    linkedin: 'LinkedIn', 
    github: 'GitHub',
    email: 'Email',
    resume: 'Resume',
    
    // Página About
    developerAt: 'Developer at',
    graduatingIn: 'Graduating in Software Engineering at',
    whatBuilt: 'what I\'ve built:',
    stackTools: 'Stack & Tools:',
    builtInteractiveGame: 'built an',
    interactiveGameVue: 'interactive game in Vue.js',
    createdPlatform: 'created a',
    publicTransparency: 'public transparency platform with Python',
    facilitatesAccess: 'that facilitates access to municipal data',
    ledTeam: 'led a',
    multidisciplinaryTeam: 'multidisciplinary team',
    deliveringScalable: 'delivering scalable web solutions',
    automatedProcesses: 'automated processes with',
    intelligentWorkflow: 'intelligent n8n workflow',
    reducing100percent: 'reducing 100% of manual task time at the company.',
    
    // Página Projects
    searchPlaceholder: 'Search by project or technology...',
    noProjectsFound: 'No projects found',
    
    // Descrições dos projetos
    lipoGameDesc: 'Interactive game developed in Vue.js with dynamic components and responsive animations.',
    pacSolutionsDesc: 'Public transparency platform with Python that facilitates access to municipal data.',
    cesuProjectDesc: 'Academic project focused on web solutions and modern technologies.',
    
    // Página Content
    contentTitle: 'Content & Blog',
    contentDescription: 'Articles, tutorials and thoughts about technology and development.',
    
    // Página Resume
    resumeTitle: 'Resume',
    resumeDescription: 'Download my complete professional resume',
    
    // Footer
    copyright: '2025 © João Paulo'
  },
  PT: {
    // Navegação
    about: 'sobre',
    projects: 'projetos',
    content: 'conteúdo',
    
    // Tooltips sociais
    tiktok: 'TikTok',
    linkedin: 'LinkedIn',
    github: 'GitHub', 
    email: 'Email',
    resume: 'Currículo',
    
    // Página About
    developerAt: 'Desenvolvedor na',
    graduatingIn: 'Graduando em Engenharia de Software na',
    whatBuilt: 'o que já construí:',
    stackTools: 'Stack & Ferramentas:',
    builtInteractiveGame: 'desenvolvi um',
    interactiveGameVue: 'jogo interativo em Vue.js',
    createdPlatform: 'criei uma plataforma de',
    publicTransparency: 'transparência pública com Python',
    facilitatesAccess: 'que facilita acesso a dados municipais',
    ledTeam: 'liderei uma',
    multidisciplinaryTeam: 'equipe multidisciplinar',
    deliveringScalable: 'entregando soluções web escaláveis',
    automatedProcesses: 'automatizei processos com',
    intelligentWorkflow: 'workflow inteligente do n8n',
    reducing100percent: 'reduzindo 100% do tempo de tarefas manuais na empresa.',
    
    // Página Projects
    searchPlaceholder: 'Pesquise por projeto ou tecnologia...',
    noProjectsFound: 'Nenhum projeto encontrado',
    
    // Descrições dos projetos
    lipoGameDesc: 'Jogo interativo desenvolvido em Vue.js com componentes dinâmicos e animações responsivas.',
    pacSolutionsDesc: 'Plataforma de transparência pública com Python que facilita acesso a dados municipais.',
    cesuProjectDesc: 'Projeto acadêmico focado em soluções web e tecnologias modernas.',
    
    // Página Content
    contentTitle: 'Conteúdo & Blog',
    contentDescription: 'Artigos, tutoriais e reflexões sobre tecnologia e desenvolvimento.',
    
    // Página Resume
    resumeTitle: 'Currículo',
    resumeDescription: 'Baixe meu currículo profissional completo',
    
    // Footer
    copyright: '2025 © João Paulo'
  }
}

// Computed para traduções atuais
const t = ref(translations[currentLanguage.value])

// Funções de toggle
function toggleLanguage() {
  currentLanguage.value = currentLanguage.value === 'EN' ? 'PT' : 'EN'
  t.value = translations[currentLanguage.value]
  localStorage.setItem('language', currentLanguage.value)
}

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// Persistência de preferências
onMounted(() => {
  // Carregar idioma salvo
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    currentLanguage.value = savedLanguage
    t.value = translations[currentLanguage.value]
  }
  
  // Carregar tema salvo
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
})

// Prover traduções para componentes filhos
provide('translations', t)
provide('currentLanguage', currentLanguage)
</script>

<template>
  <!-- Partículas decorativas de fundo -->
  <div class="background-particles">
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
    <div class="particle particle-5"></div>
  </div>

  <div class="main-container">
    <nav class="navbar">
      <div class="navbar-left">
        <RouterLink class="site-title" to="/">joão paulo</RouterLink>
      </div>
      
      <div class="navbar-center">
        <RouterLink class="nav-link" to="/">{{ t.about }}</RouterLink>
        <RouterLink class="nav-link" to="/projects">{{ t.projects }}</RouterLink>
        <RouterLink class="nav-link" to="/content">{{ t.content }}</RouterLink>
      </div>
      
      <div class="navbar-right">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <!-- Ícone do Sol (modo claro) -->
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <!-- Ícone da Lua (modo escuro) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <button class="language-toggle" @click="toggleLanguage">
          {{ currentLanguage }}
        </button>
      </div>
    </nav>
    
    <main class="content-container">
      <RouterView />
    </main>
    
    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
            <a href="https://tiktok.com/@jotape.dev" class="social-link tooltip-parent" aria-label="TikTok" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span class="tooltip">{{ t.tiktok }}</span>
            </a>
            <a href="https://linkedin.com/in/joaopaulotr" class="social-link tooltip-parent" aria-label="LinkedIn" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="tooltip">{{ t.linkedin }}</span>
            </a>
            <a href="https://github.com/joaopaulotr" class="social-link tooltip-parent" aria-label="GitHub" target="_blank">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="tooltip">{{ t.github }}</span>
            </a>
            <a href="mailto:joaotrlens@gmail.com" class="social-link tooltip-parent" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
              <span class="tooltip">{{ t.email }}</span>
            </a>
          <a href="/resume.pdf" class="social-link tooltip-parent" aria-label="Resume" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            <span class="tooltip">{{ t.resume }}</span>
          </a>
        </div>
        <div class="copyright">
          <span>{{ t.copyright }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Tooltip customizado para ícones sociais */
.tooltip-parent {
  position: relative;
}
.tooltip {
  visibility: hidden;
  opacity: 0;
  background: rgba(30, 30, 30, 0.97);
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 7px 18px;
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 120%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity 0.2s, visibility 0.2s;
  pointer-events: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  border: 2px solid #fff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.18);
}
.tooltip-parent:hover .tooltip,
.tooltip-parent:focus .tooltip {
  visibility: visible;
  opacity: 1;
}
/* Estilos globais para elementos dentro deste componente */
* {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

/* Container principal que centraliza o conteúdo */
.main-container {
  max-width: 520px;
  margin: 0 auto;
  padding: 0 1rem;
  color: var(--cor-primaria);
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Efeito sutil de glass morphism */
.main-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(1px);
  border-radius: 20px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.5;
}

/* Ajuste para modo claro */
[data-theme="light"] .main-container::before {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
}

/* Barra de navegação principal */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(217, 198, 176, 0.15);
  margin-bottom: 1rem;
}

/* Ajuste para modo claro */
[data-theme="light"] .navbar {
  border-bottom-color: rgba(44, 44, 44, 0.1);
}

/* Estilização do título do site (logo) */
.navbar-left .site-title {
  font-weight: 600;
  color: var(--cor-primaria);
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding-bottom: 2px;
  transition: all 0.2s ease;
}

/* Linha base sempre visível */
.navbar-left .site-title::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--cor-secundaria);
  opacity: 0.3;
  transition: all 0.2s ease;
}

/* Linha animada no hover */
.navbar-left .site-title::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--cor-primaria);
  transition: width 0.3s ease;
}

/* Efeito hover */
.navbar-left .site-title:hover::before {
  width: 100%;
}

.navbar-left .site-title:hover::after {
  opacity: 0;
}

.navbar-left .site-title:hover {
  transform: translateY(-1px);
}

/* Container dos links de navegação centrais */
.navbar-center {
  display: flex;
  gap: 1rem;
  font-size: 0.95rem;
}

/* Estilização padrão dos links de navegação */
.nav-link {
  color: var(--cor-secundaria);
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-radius: 8px;
  font-weight: 500;
}

/* Efeito de fundo sutil */
.nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(242, 239, 233, 0.08);
  border-radius: 8px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

/* Linha de sublinhado animada */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cor-primaria), var(--cor-secundaria));
  border-radius: 1px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}

/* Animações de hover para links não-ativos */
.nav-link:hover:not(.router-link-active) {
  color: var(--cor-primaria);
  transform: translateY(-1px);
}

.nav-link:hover:not(.router-link-active)::before {
  opacity: 1;
  transform: scale(1);
}

.nav-link:hover:not(.router-link-active)::after {
  width: 80%;
}

/* Efeito de hover para links de navegação */
.nav-link:hover {
  color: var(--cor-primaria);
}

/* Estilização para links de navegação ativos */
.nav-link.router-link-active {
  color: var(--cor-primaria);
  background: rgba(242, 239, 233, 0.1);
  transform: translateY(-1px);
}

/* Linha sempre visível para links ativos */
.nav-link.router-link-active::after {
  width: 90%;
  background: var(--cor-primaria);
}

/* Container dos elementos à direita da navbar */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Botão de alternância de tema */
.theme-toggle {
  background: none;
  border: none;
  color: var(--cor-secundaria);
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

/* Efeito de hover para o botão de tema */
.theme-toggle:hover {
  color: var(--cor-primaria);
}

/* Botão de alternância de idioma */
.language-toggle {
  background: rgba(242, 239, 233, 0.1);
  border: 1px solid rgba(242, 239, 233, 0.2);
  color: var(--cor-secundaria);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
  transition: all 0.2s ease;
}

/* Efeito de hover para o botão de idioma */
.language-toggle:hover {
  background: rgba(242, 239, 233, 0.15);
  color: var(--cor-primaria);
}

/* Container principal do conteúdo das páginas */
.content-container {
  min-height: 75vh;
  padding: 1rem 0;
}

/* Footer */
.footer {
  border-top: 1px solid rgba(217, 198, 176, 0.2);
  padding: 1.5rem 0 1rem;
  padding-bottom: 5.5rem !important;
  margin-top: 2rem;
}

/* Ajuste para modo claro */
[data-theme="light"] .footer {
  border-top-color: rgba(44, 44, 44, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  color: var(--cor-secundaria);
  text-decoration: none;
  font-size: 0.85rem;
  position: relative;
  transition: var(--transicao-padrao);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  border-radius: 6px;
}

.social-link svg {
  transition: var(--transicao-padrao);
  flex-shrink: 0;
}

.social-text {
  position: relative;
  z-index: 2;
  font-weight: 500;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(242, 239, 233, 0.08) 0%, transparent 70%);
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-50%, -50%);
  z-index: 1;
}

.social-link:hover {
  color: var(--cor-primaria);
  transform: translateY(-2px);
}

.social-link:hover::before {
  width: 100%;
  height: 100%;
}

.social-link:hover svg {
  transform: scale(1.1) rotate(5deg);
}

.social-link:hover .social-text {
  animation: social-bounce 0.6s ease;
}

.copyright {
  color: var(--cor-secundaria);
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Responsividade do footer */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .social-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .social-link {
    font-size: 0.85rem;
    gap: 0.4rem;
    padding: 0.4rem;
  }
  
  .social-link svg {
    width: 14px;
    height: 14px;
  }

  /* Responsividade da navegação */
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
  
  .navbar-center {
    gap: 1rem;
    font-size: 1rem;
  }
  
  .nav-link {
    padding: 0.4rem 0.6rem;
  }
  
  .navbar-right {
    gap: 0.5rem;
  }
  
  .site-title {
    font-size: 1.1rem;
  }
}

/* Animações */
@keyframes social-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* Animação do sublinhado contido (dentro dos limites do elemento) */
@keyframes underscore-slide-contained {
  0% {
    left: -20%;
    width: 0%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}

/* Animação do sublinhado com movimento completo */
@keyframes underscore-slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Partículas decorativas de fundo */
.background-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: rgba(217, 198, 176, 0.3);
  border-radius: 50%;
  animation: floatingParticles 15s linear infinite;
  box-shadow: 0 0 10px rgba(217, 198, 176, 0.1);
}

/* Partículas para modo claro */
[data-theme="light"] .particle {
  background: rgba(139, 115, 85, 0.4);
  box-shadow: 0 0 8px rgba(139, 115, 85, 0.2);
}

.particle-1 {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 20s;
}

.particle-2 {
  width: 6px;
  height: 6px;
  top: 60%;
  left: 80%;
  animation-delay: -5s;
  animation-duration: 25s;
}

.particle-3 {
  width: 3px;
  height: 3px;
  top: 80%;
  left: 20%;
  animation-delay: -10s;
  animation-duration: 18s;
}

.particle-4 {
  width: 5px;
  height: 5px;
  top: 30%;
  left: 70%;
  animation-delay: -15s;
  animation-duration: 22s;
}

.particle-5 {
  width: 2px;
  height: 2px;
  top: 50%;
  left: 50%;
  animation-delay: -8s;
  animation-duration: 30s;
}

/* Animação das partículas */
@keyframes floatingParticles {
  0% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-40px) translateX(-10px) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-20px) translateX(15px) rotate(270deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0px) translateX(0px) rotate(360deg);
    opacity: 1;
  }
}
</style>
