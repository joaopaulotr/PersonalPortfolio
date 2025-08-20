<script setup>
// Componente About
</script>

<template>
  <div class="about-container">
    <!-- Informações principais -->
    <div class="main-info">
      <div class="info-item">
        <span class="info-text">Desenvolvedor na</span>
        <img class="company-logo" src="/assets/img/logopac.png" alt="Logo PacSolutions">
        <a href="https://pacsolutions.com.br/" target="_blank" class="company-link">PacSolutions</a>
      </div>
      
      <div class="info-item">
        <span class="info-text">Graduando em Engenharia de Software na</span>
        <img class="company-logo" src="/assets/img/logocesu.png" alt="Logo Unicesumar">
        <a href="https://www.unicesumar.edu.br/" target="_blank" class="company-link">Unicesumar</a>
      </div>
    </div>

    <!-- O que tenho desenvolvido -->
    <div class="section">
      <h3 class="section-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="section-icon">
          <path d="M20 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5ZM20 17H4V7H20V17Z"/>
          <path d="M5 8H7V10H5V8ZM8 8H10V10H8V8ZM11 8H13V10H11V8ZM14 8H16V10H14V8ZM17 8H19V10H17V8Z"/>
          <path d="M5 11H7V13H5V11ZM8 11H10V13H8V11ZM11 11H13V13H11V13ZM14 11H16V13H14V11ZM17 11H19V13H17V11Z"/>
          <path d="M6 14H18V16H6V14Z"/>
        </svg>
        o que estou construindo:
      </h3>
      <div class="project-list">
        <div class="project-item">
          ↳ desenvolvi um 
          <svg width="14" height="14" viewBox="0 0 261.76 226.69" class="project-icon">
            <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
            <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
          </svg>
          <a href="https://syntaxfight.netlify.app/" target="_blank" class="animated-link">jogo interativo em Vue.js</a>
        </div>
        <div class="project-item">
          ↳ criei uma plataforma de 
          <svg width="14" height="14" viewBox="0 0 24 24" class="project-icon">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.57-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.2-.01h5.5l.37.05.34.14.31.2.24.24.18.27.13.29.09.3.05.3.02.28-.01.25-.05.24-.08.24-.13.23-.16.23-.2.22-.24.2-.28.18-.32.16-.35.13-.37.1-.4.07-.4.04H6.83l-.05-2.07h1.98l.08.01.08.04.05.05.02.06-.01.05-.03.04-.05.03-.09.01H6.77l.04-1h2.17l.19-.01.18-.03.17-.05.15-.08.13-.1.11-.13.08-.15.06-.17.04-.18.01-.19-.01-.18-.04-.17-.06-.16-.08-.14-.11-.12-.13-.1-.15-.07-.17-.05-.18-.03-.19-.01H6.13l.04-1.06h3.09l.28.02.27.05.26.08.24.12.22.15.2.17.18.2.15.21.13.22.1.24.08.24.05.24.03.24.01.23-.01.22-.03.22-.05.21-.07.2-.09.18-.1.17-.12.15-.13.14-.14.12-.15.1-.16.08-.16.06-.17.04-.16.02-.16.01H7.88l-.01-1.07H9.8l.1-.01.09-.03.08-.05.06-.06.05-.07.03-.08.02-.08.01-.08-.01-.08-.02-.07-.03-.07-.05-.06-.06-.05-.08-.04-.08-.02-.1-.01H8.1l.05-1.07h2.17l.28.02.28.06.27.1.26.13.24.16.22.19.2.21.18.23.15.24.13.25.11.26.08.26.06.26.04.25.02.25-.01.24-.02.24-.04.23-.06.22-.07.21-.09.2-.1.18-.12.17-.13.15-.14.13-.15.11-.16.09-.17.07-.17.05-.18.03-.17.01H6.05v-2.13H4.1c-.22 0-.43.01-.64.04-.21.03-.42.08-.62.15-.2.07-.39.16-.56.27-.17.11-.33.24-.47.39-.14.15-.26.31-.36.49-.1.18-.18.37-.24.57-.06.2-.1.41-.12.62-.02.21-.02.43-.01.64.01.21.04.42.08.63.04.21.1.41.17.6.07.19.16.37.26.54.1.17.22.33.35.47.13.14.28.26.44.37.16.11.33.2.51.27.18.07.37.12.56.15.19.03.39.04.58.04H8.5c.2 0 .4-.01.59-.04.19-.03.38-.08.56-.15.18-.07.35-.16.51-.27.16-.11.31-.23.44-.37.13-.14.25-.3.35-.47.1-.17.19-.35.26-.54.07-.19.13-.39.17-.6.04-.21.07-.42.08-.63.01-.21.01-.43-.01-.64-.02-.21-.06-.42-.12-.62-.06-.2-.14-.39-.24-.57-.1-.18-.22-.34-.36-.49-.14-.15-.3-.28-.47-.39-.17-.11-.36-.2-.56-.27-.2-.07-.41-.12-.62-.15-.21-.03-.42-.04-.64-.04h-2v-2.13H6.1c.17 0 .33-.01.5-.03.17-.02.33-.05.49-.1.16-.05.31-.11.45-.19.14-.08.27-.17.39-.28.12-.11.22-.23.31-.36.09-.13.16-.27.22-.42.06-.15.1-.3.13-.46.03-.16.04-.32.04-.48 0-.16-.01-.32-.04-.48-.03-.16-.07-.31-.13-.46-.06-.15-.13-.29-.22-.42-.09-.13-.19-.25-.31-.36-.12-.11-.25-.2-.39-.28-.14-.08-.29-.14-.45-.19-.16-.05-.32-.08-.49-.1-.17-.02-.33-.03-.5-.03H4.1c-.17 0-.33.01-.5.03-.17.02-.33.05-.49.1-.16.05-.31.11-.45.19-.14.08-.27.17-.39.28-.12.11-.22.23-.31.36-.09.13-.16.27-.22.42-.06.15-.1.3-.13.46-.03.16-.04.32-.04.48 0 .16.01.32.04.48.03.16.07.31.13.46.06.15.13.29.22.42.09.13.19.25.31.36.12.11.25.2.39.28.14.08.29.14.45.19.16.05.32.08.49.1.17.02.33.03.5.03h2.17l-.01 1.07H5.06c-.28 0-.56.02-.84.06-.28.04-.55.1-.82.18-.27.08-.53.18-.78.3-.25.12-.49.26-.71.42-.22.16-.42.34-.61.54-.19.2-.36.42-.51.65-.15.23-.28.48-.39.73-.11.25-.2.51-.27.78-.07.27-.12.54-.15.82-.03.28-.04.56-.04.84 0 .28.01.56.04.84.03.28.08.55.15.82.07.27.16.53.27.78.11.25.24.5.39.73.15.23.32.45.51.65.19.2.39.38.61.54.22.16.46.3.71.42.25.12.51.22.78.3.27.08.54.14.82.18.28.04.56.06.84.06h8.73c.28 0 .56-.02.84-.06.28-.04.55-.1.82-.18.27-.08.53-.18.78-.3.25-.12.49-.26.71-.42.22-.16.42-.34.61-.54.19-.2.36-.42.51-.65.15-.23.28-.48.39-.73.11-.25.2-.51.27-.78.07-.27.12-.54.15-.82.03-.28.04-.56.04-.84 0-.28-.01-.56-.04-.84-.03-.28-.08-.55-.15-.82-.07-.27-.16-.53-.27-.78-.11-.25-.24-.5-.39-.73-.15-.23-.32-.45-.51-.65-.19-.2-.39-.38-.61-.54-.22-.16-.46-.3-.71-.42-.25-.12-.51-.22-.78-.3-.27-.08-.54-.14-.82-.18-.28-.04-.56-.06-.84-.06h-2.1l.04-1.07H12.4z" fill="#3776ab"/>
            <path d="M16.48 0c.61 0 1.19.09 1.74.27.55.18 1.04.44 1.47.77.43.33.78.73 1.05 1.19.27.46.4.97.4 1.53 0 .56-.13 1.07-.4 1.53-.27.46-.62.86-1.05 1.19-.43.33-.92.59-1.47.77-.55.18-1.13.27-1.74.27-.61 0-1.19-.09-1.74-.27-.55-.18-1.04-.44-1.47-.77-.43-.33-.78-.73-1.05-1.19-.27-.46-.4-.97-.4-1.53 0-.56.13-1.07.4-1.53.27-.46.62-.86 1.05-1.19.43-.33.92-.59 1.47-.77.55-.18 1.13-.27 1.74-.27z" fill="#ffd43b"/>
          </svg>
          <a href="https://fiscaldemaringa.streamlit.app/" target="_blank" class="animated-link">transparência pública com Python</a>
          que facilita acesso a dados municipais
        </div>
        <div class="project-item">
          ↳ liderei uma 
          <svg width="14" height="14" viewBox="0 0 24 24" class="project-icon">
            <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Z" fill="#7b68ee"/>
            <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 10l5 7 5-7H7Z" fill="#fff"/>
          </svg>
          <span class="highlight">equipe multidisciplinar</span> entregando soluções web escaláveis
        </div>
        <div class="project-item">
          ↳ automatizei processos com 
          <svg width="14" height="14" viewBox="0 0 256 256" class="project-icon">
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ea4b71;stop-opacity:1"/>
                <stop offset="100%" style="stop-color:#ff6b9d;stop-opacity:1"/>
              </linearGradient>
            </defs>
            <rect width="256" height="256" rx="64" fill="url(#a)"/>
            <path d="M128 32c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" fill="#fff" opacity="0.1"/>
            <text x="128" y="140" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="48" font-weight="bold">n8n</text>
          </svg>
          <span class="highlight">workflow inteligente do n8n</span> 
          reduzindo 100% do tempo de tarefas manuais na empresa.
        </div>
      </div>
    </div>

    <!-- Skills/Tecnologias -->
    <div class="section">
      <h3 class="section-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="section-icon">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
        Stack & Ferramentas:
      </h3>
      <div class="skills-grid">
        <div class="skill-category">
          <h4 class="category-title">Frontend</h4>
          <div class="skills-list">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">Bootstrap</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">HTML/CSS</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h4 class="category-title">Backend</h4>
          <div class="skills-list">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">FastAPI</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MongoDB</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h4 class="category-title">Ferramentas</h4>
          <div class="skills-list">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">n8n</span>
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">ClikUp</span>
            <span class="skill-tag">Photoshop</span>
          </div>
        </div>

         <div class="skill-category">
          <h4 class="category-title">Idiomas</h4>
          <div class="skills-list">
            <span class="skill-tag">Português</span>
            <span class="skill-tag">Inglês</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  padding: 1.5rem 0;
  max-width: 100%;
}

/* Informações principais */
.main-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--cor-secundaria);
  font-size: 1rem;
  line-height: 1.6;
}

.info-text {
  margin-right: 0.5rem;
}

.company-logo {
  width: 20px;
  height: 20px;
  margin: 0 0.5rem;
}

/* Classe unificada para links com animação */
.company-link,
.animated-link {
  color: var(--cor-primaria);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: var(--transicao-padrao);
}

/* Linha padrão do link */
.company-link::after,
.animated-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--cor-secundaria);
  opacity: 0.6;
}

/* Linha animada para hover */
.company-link::before,
.animated-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: var(--cor-primaria);
  opacity: 0;
  transition: opacity 0.2s;
}

/* Animação do sublinhado ao passar o mouse */
.company-link:hover::before,
.animated-link:hover::before {
  opacity: 100%;
  animation: underscore-slide-contained 2s ease-in-out infinite;
}

.company-link:hover,
.animated-link:hover {
  color: var(--cor-primaria);
}

/* Seções */
.section {
  margin-bottom: 2.5rem;
}

.section-title {
  color: var(--cor-primaria);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-icon {
  width: 16px;
  height: 16px;
  color: var(--cor-primaria);
  opacity: 0.8;
}

/* Projetos */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-item {
  color: var(--cor-secundaria);
  font-size: 0.95rem;
  line-height: 1.6;
  padding-left: 0.5rem;
}

.project-icon {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin: 0 0.25rem;
  opacity: 0.9;
}

.highlight {
  color: var(--cor-primaria);
  font-weight: 500;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.skill-category {
  background: rgba(13, 13, 13, 0.02);
  border: 1px solid rgba(217, 198, 176, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  transition: var(--transicao-padrao);
}

.skill-category:hover {
  border-color: rgba(217, 198, 176, 0.15);
  transform: translateY(-1px);
}

.category-title {
  color: var(--cor-primaria);
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(217, 198, 176, 0.12);
  color: var(--cor-secundaria);
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(217, 198, 176, 0.15);
  transition: var(--transicao-padrao);
}

.skill-tag:hover {
  background: rgba(217, 198, 176, 0.2);
  border-color: rgba(217, 198, 176, 0.25);
  color: var(--cor-primaria);
}

/* Responsividade */
@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
  .about-container {
    padding: 1rem 0;
  }
  
  .info-item {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-category {
    padding: 1rem;
  }
  
  .skills-list {
    gap: 0.4rem;
  }
  
  .skill-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }
}

/* Animação do sublinhado contido */
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

/* Nova animação mais simples */
@keyframes slide-line {
  0% {
    left: -100%;
  }
  50% {
    left: 0%;
  }
  100% {
    left: 100%;
  }
}
</style>