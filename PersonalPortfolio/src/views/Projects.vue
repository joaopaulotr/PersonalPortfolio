<template>
  <div class="projects-container">
    <div class="projects-grid">
      <!-- Projeto 1 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Preview do Sistema de Gestão" loading="lazy">
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">Fiscal de Maringá</h3>
            <div class="project-links">
              <a href="#" class="project-link github" aria-label="Ver código no GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="project-link external" aria-label="Ver projeto online">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </a>
            </div>
          </div>
          <p class="project-description">
           Python e análise de dados, para ajudar qualquer cidadão a acessar informações da cidade com facilidade.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Streamlit</span>
          </div>
        </div>
      </div>
        <!-- Projeto 2 -->
    </div>

    <div class="more-projects">
      <p>Você pode conferir o restante dos meus projetos <a href="https://github.com/joaopaulotr" target="_blank" rel="noopener noreferrer">aqui</a>.</p>
    </div>
  </div>
</template>

<script setup>
// Página de projetos
</script>

<style scoped>
.projects-container {
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: rgba(13, 13, 13, 0.02);
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transicao-padrao);
  border: 1px solid rgba(217, 198, 176, 0.1);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(13, 13, 13, 0.1);
  border-color: rgba(217, 198, 176, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
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
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  color: var(--cor-primaria);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: 1rem;
}

.project-link {
  color: var(--cor-secundaria);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  transition: var(--transicao-padrao);
  background: rgba(217, 198, 176, 0.1);
}

.project-link:hover {
  color: var(--cor-primaria);
  background: rgba(242, 239, 233, 0.15);
  transform: translateY(-2px);
}

.project-description {
  color: var(--cor-secundaria);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(217, 198, 176, 0.15);
  color: var(--cor-secundaria);
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(217, 198, 176, 0.2);
  transition: var(--transicao-padrao);
}

.tech-tag:hover {
  background: rgba(217, 198, 176, 0.25);
  border-color: rgba(217, 198, 176, 0.3);
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
}
</style>