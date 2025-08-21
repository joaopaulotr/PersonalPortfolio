<template>
  <div class="projects-container">
    <!-- Campo de pesquisa -->
    <div class="search-section">
      <div class="search-input-wrapper">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="search-icon">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input 
          v-model="searchQuery"
          type="text" 
          :placeholder="t.searchPlaceholder"
          class="search-input"
        >
      </div>
      <div class="search-results" v-if="searchQuery">
        <span class="results-count">
          {{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados' }}
        </span>
      </div>
    </div>

    <div class="projects-grid">
      <div v-for="project in filteredProjects" :key="project.id" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="'Preview do ' + project.title" loading="lazy">
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-links">
              <a v-if="project.github && project.title !== 'Projeto Landing Page - Originá Exclusive'" :href="project.github" class="project-link github" aria-label="Ver código no GitHub" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a v-if="project.demo" :href="project.demo" class="project-link external" aria-label="Ver projeto online" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </a>
            </div>
          </div>
          <p class="project-description">
            {{ t[project.descriptionKey] }}
          </p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensagem quando não há resultados -->
    <div v-if="searchQuery && filteredProjects.length === 0" class="no-results">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="no-results-icon">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
      <h3>Nenhum projeto encontrado</h3>
      <p>Tente pesquisar por outras palavras-chave ou navegue por todos os projetos.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'

// Injetar o sistema de tradução
const t = inject('translations')

// Estado da pesquisa
const searchQuery = ref('')

// Lista de projetos com chaves de tradução
const projects = ref([
  {
    id: 1,
    title: 'Fiscal de Maringá',
    descriptionKey: 'pacSolutionsDesc',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    github: 'https://github.com/joaopaulotr/FiscalDeMaringa',
    demo: 'https://fiscaldemaringa.streamlit.app/',
    tech: ['Python', 'Streamlit']
  },
  {
    id: 2,
    title: 'Syntax Fight - Jogo em VUE.JS',
    descriptionKey: 'lipoGameDesc',
    image: '/assets/img/image-1.png',
    github: 'https://github.com/joaopaulotr/SyntaxFight-GameProject',
    demo: 'https://syntaxfight.netlify.app/',
    tech: ['Vue.js', 'JavaScript', 'HTML', 'CSS']
  },
    {
    id: 3,
    title: 'Projeto Landing Page - Originá Exclusive',
    descriptionKey: 'cesuProjectDesc',
    image: '/assets/img/image.png',
    demo: 'https://www.originaexclusive.com.br/index.html',
    tech: [ 'JavaScript', 'HTML', 'CSS', 'Zero Sheets']
  },
  {
    id: 4,
    title: 'Projeto Landing Page - LipoRedux',
    description: 'Landing page desenvolvida profissionalmente para Cristiane, vendedora de LipoRedux. O projeto foca em captação de cadastros e internacionalização.',
    image: '/assets/img/lipo.png',
    demo: 'https://crisliporedux.com/',
    tech: [ 'JavaScript', 'HTML', 'CSS', 'AWS S3', 'AWS Route 53', 'AWS CloudFront', 'Zero Sheets']
  }
])

// Projetos filtrados
const filteredProjects = computed(() => {
  if (!searchQuery.value) return projects.value
  
  const query = searchQuery.value.toLowerCase()
  return projects.value.filter(project => 
    project.title.toLowerCase().includes(query) ||
    project.description.toLowerCase().includes(query) ||
    project.tech.some(tech => tech.toLowerCase().includes(query))
  )
})
</script>

<style scoped>
.projects-container {
  padding-top: 0px !important;
  padding: 1.5rem 0;
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animação de entrada suave */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Seção de pesquisa */
.search-section {
  margin-bottom: 2rem;
}

.search-input-wrapper {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--cor-secundaria);
  opacity: 0.7;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.8rem;
  border: 1px solid rgba(217, 198, 176, 0.2);
  border-radius: 10px;
  background: rgba(13, 13, 13, 0.02);
  color: var(--cor-primaria);
  font-size: 0.95rem;
  transition: var(--transicao-padrao);
}

/* Ajustes para modo claro */
[data-theme="light"] .search-input {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(44, 44, 44, 0.15);
  color: var(--cor-primaria);
}

.search-input:focus {
  outline: none;
  border-color: var(--cor-primaria);
  background: rgba(217, 198, 176, 0.05);
}

/* Focus para modo claro */
[data-theme="light"] .search-input:focus {
  background: rgba(255, 255, 255, 1);
  border-color: var(--cor-primaria);
}

.search-input::placeholder {
  color: var(--cor-secundaria);
  opacity: 0.7;
}

.search-results {
  text-align: center;
  margin-top: 0.8rem;
}

.results-count {
  color: var(--cor-secundaria);
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Estados sem resultados */
.no-results {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--cor-secundaria);
}

.no-results-icon {
  opacity: 0.5;
  margin-bottom: 1rem;
}

.no-results h3 {
  color: var(--cor-primaria);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.no-results p {
  opacity: 0.8;
  font-size: 0.9rem;
}

/* Animated links */
.animated-link {
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.animated-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: var(--cor-primaria);
  opacity: 0;
  transition: opacity 0.2s;
}

.animated-link:hover::before {
  opacity: 1;
  animation: underscore-slide-contained 2s ease-in-out infinite;
}

.animated-link:hover {
  color: var(--cor-primaria);
}

/* Animação do sublinhado */
@keyframes underscore-slide-contained {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.project-card {
  background: rgba(13, 13, 13, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transicao-padrao);
  border: 1px solid rgba(217, 198, 176, 0.08);
}

/* Ajustes para modo claro */
[data-theme="light"] .project-card {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(44, 44, 44, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(13, 13, 13, 1);
  border-color: rgba(217, 198, 176, 0.15);
}

/* Hover para modo claro */
[data-theme="light"] .project-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(44, 44, 44, 0.2);
}

.project-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transicao-padrao);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.25rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.project-title {
  color: var(--cor-primaria);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.project-links {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
  margin-left: 0.8rem;
}

.project-link {
  color: var(--cor-secundaria);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  transition: all 0.2s ease;
  background: rgba(217, 198, 176, 0.08);
  position: relative;
  overflow: hidden;
}

/* Linha animada para project links */
.project-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--cor-primaria);
  transition: width 0.3s ease;
}

.project-link:hover::before {
  width: 100%;
}

.project-link:hover {
  color: var(--cor-primaria);
  background: rgba(242, 239, 233, 0.15);
  transform: translateY(-2px);
}

.project-description {
  color: var(--cor-secundaria);
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(217, 198, 176, 0.12);
  color: var(--cor-secundaria);
  padding: 0.3rem 0.7rem;
  border-radius: 14px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(217, 198, 176, 0.15);
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

/* Linha animada para tech tags */
.tech-tag::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--cor-primaria);
  transition: width 0.3s ease;
}

.tech-tag:hover::before {
  width: 100%;
}

.tech-tag:hover {
  background: rgba(217, 198, 176, 0.25);
  border-color: rgba(217, 198, 176, 0.3);
  color: var(--cor-primaria);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(217, 198, 176, 0.1);
}

.more-projects {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(217, 198, 176, 0.2);
}

.more-projects p {
  color: var(--cor-secundaria);
  font-size: 1rem;
}

.more-projects a {
  color: var(--cor-primaria);
  text-decoration: none;
  transition: var(--transicao-padrao);
  font-weight: 500;
}

.more-projects a:hover {
  color: var(--cor-secundaria);
}

/* Responsividade */
@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .search-input-wrapper {
    max-width: 100%;
  }
  
  .project-content {
    padding: 1.25rem;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .project-links {
    margin-left: 0;
  }
  
  .project-title {
    font-size: 1.125rem;
  }

  .project-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .project-card {
    border-radius: 16px;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    border-radius: 12px;
  }

  .project-link {
    width: 32px;
    height: 32px;
    border-radius: 10px;
  }

  .project-image {
    height: 160px;
  }
  
  .search-input {
    font-size: 16px; /* Previne zoom no iOS */
  }
}
</style>