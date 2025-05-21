<script setup>
import { ref, computed } from 'vue'

// Lista de projetos com imagens e tags de tecnologias
const projects = ref([
  {
    id: 1,
    title: 'Sistema de gestão hospitalar',
    description: 'Desenvolvimento de sistema completo para gestão de hospitais e clínicas',
    category: 'Web App',
    year: '2022',
    link: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 2,
    title: 'Análise preditiva com IA',
    description:
      'Implementação de algoritmos de machine learning para previsão de resultados de negócios',
    category: 'AI/ML',
    year: '2023',
    link: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Pandas'],
  },
  {
    id: 3,
    title: 'Tendências em desenvolvimento web',
    description: 'Artigo publicado na revista X sobre as mais recentes tendências em front-end',
    category: 'Artigo',
    year: '2022',
    link: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Research', 'Front-end', 'UX Design'],
  },
  {
    id: 4,
    title: 'Vue.js: Componentes avançados',
    description: 'Palestra sobre arquiteturas modernas com Vue.js na conferência TechX',
    category: 'Palestra',
    year: '2023',
    link: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'JavaScript', 'Component Design'],
  },
  {
    id: 5,
    title: 'Programa de mentoria dev',
    description: 'Orientação personalizada para desenvolvedores iniciantes na área de front-end',
    category: 'Mentoria',
    year: '2024',
    link: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Coaching', 'Front-end', 'Career Development'],
  },
  {
    id: 6,
    title: 'Contribuições open source',
    description: 'Melhorias de performance e acessibilidade para framework popular de front-end',
    category: 'Código',
    year: '2023',
    link: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['JavaScript', 'Open Source', 'Performance', 'Accessibility'],
  },
])

// Termo de pesquisa inserido pelo usuário
const searchQuery = ref('');

// Projetos filtrados com base no termo de pesquisa
const filteredProjects = computed(() => {
  if (!searchQuery.value.trim()) {
    // Se a pesquisa estiver vazia, retorna todos os projetos
    return projects.value;
  }
  
  const searchTerm = searchQuery.value.toLowerCase().trim();
  
  return projects.value.filter(project => {
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
      project.category.toLowerCase().includes(searchTerm)
    );
  });
});
</script>

<template>
  <div class="projects-container">
    <!-- Seção de cabeçalho -->
    <div class="projects-header">
      <div class="input-group">
        <div class="form-outline">
          <input 
            type="search" 
            id="projectSearch" 
            class="search-bar" 
            v-model="searchQuery"  
            placeholder="Pesquisar projeto ou tecnologia..." 
          />
        </div>
        <button type="button" class="search-button" aria-label="Pesquisar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>
    </div>
    
    <!-- Grid de projetos -->
    <div class="project-grid">
      <div v-if="filteredProjects.length === 0" class="no-results">
        <p>Nenhum projeto encontrado para "{{ searchQuery }}"</p>
      </div>
      <div v-for="project in filteredProjects" :key="project.id" class="project-card">
        <div class="project-image-container">
          <img :src="project.imageUrl" :alt="project.title" class="project-image" />
          <div class="project-overlay">
            <a :href="project.link" class="project-link">Ver detalhes</a>
          </div>
        </div>
        <div class="project-info">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <span class="project-year">{{ project.year }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech-tags">
            <span v-for="(tech, index) in project.technologies" :key="index" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de contato/CTA -->
    <div class="projects-cta">
      <h2 class="cta-title">Interessado em trabalhar comigo?</h2>
      <p class="cta-text">Entre em contato para discutirmos seu próximo projeto</p>
      <a href="#" class="cta-button">Vamos conversar</a>
    </div>
  </div>
</template>

<style scoped>
/* Container principal da página de Projetos */
.projects-container {
  padding: 1rem 0;
  max-width: 100%;
}

/* Mensagem quando nenhum resultado é encontrado */
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--cor-secundaria);
  background-color: rgba(242, 239, 233, 0.03);
  border-radius: 8px;
  margin-bottom: 2rem;
}

.no-results p {
  font-size: 1.2rem;
  margin: 0;
}

/* Cabeçalho da seção de projetos */
.projects-header {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  margin-bottom: 2rem;
}

.form-outline {
  flex: 1;
}

.search-bar {
  background-color: transparent;
  border: 1px solid var(--cor-secundaria);
  border-radius: 8px 0 0 8px;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 45px;
  color: var(--cor-secundaria);
  font-size: 0.95rem;
}

.search-bar:focus {
  outline: none;
  border-color: var(--cor-primaria);
}

.search-button {
  background-color: transparent;
  color: var(--cor-secundaria);
  padding: 0.5rem 1rem;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--cor-secundaria);
  border-radius: 0 8px 8px 0;
  border-left: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-button:hover {
  background-color: var(--cor-secundaria);
  color: var(--cor-terciaria);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.projects-title {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--cor-primaria);
  letter-spacing: -0.5px;
}

.projects-subtitle {
  font-size: 1.2rem;
  color: var(--cor-secundaria);
  max-width: 600px;
}

/* Grid de projetos */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

/* Card do projeto */
.project-card {
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(242, 239, 233, 0.03);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Container da imagem do projeto */
.project-image-container {
  position: relative;
  height: 180px;
  overflow: hidden;
}

/* Imagem do projeto */
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

/* Overlay sobre a imagem no hover */
.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 13, 13, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

/* Link dentro do overlay */
.project-link {
  color: var(--cor-primaria);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid var(--cor-primaria);
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: var(--cor-primaria);
  color: var(--cor-terciaria);
}

/* Informações do projeto */
.project-info {
  padding: 1.5rem;
}

/* Cabeçalho do projeto (título e ano) */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.project-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--cor-primaria);
}

.project-year {
  font-size: 0.8rem;
  color: var(--cor-secundaria);
  background-color: rgba(217, 198, 176, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

/* Descrição do projeto */
.project-description {
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--cor-secundaria);
}

/* Tags de tecnologia */
.project-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  font-size: 0.75rem;
  color: var(--cor-secundaria);
  background-color: rgba(242, 239, 233, 0.05);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(242, 239, 233, 0.1);
  transition: all 0.2s ease;
}

.project-card:hover .tech-tag {
  border-color: rgba(242, 239, 233, 0.2);
  color: var(--cor-primaria);
}

/* Seção de CTA no final */
.projects-cta {
  margin-top: 3rem;
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid rgba(242, 239, 233, 0.1);
}

.cta-title {
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--cor-primaria);
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.1rem;
  color: var(--cor-secundaria);
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--cor-primaria);
  color: var(--cor-terciaria);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: var(--cor-secundaria);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Media queries para responsividade */
@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .input-group {
    flex-direction: column;
  }
  
  .search-button {
    margin-top: 0.5rem;
    border-radius: 8px;
    border-left: 1px solid var(--cor-secundaria);
    width: 100%;
  }
  
  .search-bar {
    border-radius: 8px;
  }
}

@media (max-width: 576px) {
  .projects-title {
    font-size: 2rem;
  }

  .projects-subtitle {
    font-size: 1rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
  }
}
</style>
