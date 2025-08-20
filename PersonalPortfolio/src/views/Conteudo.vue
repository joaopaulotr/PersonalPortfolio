<template>
  <div class="conteudo-container">
    <div class="content-grid">
      <div class="content-card">
        <div class="content-image">
          <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Preview do artigo" loading="lazy">
        </div>
        <div class="content-content">
          <div class="content-header">
            <h3 class="content-title">Artigos em desenvolvimento</h3>
            <div class="content-links">
              <a href="#" class="content-link read" aria-label="Ler artigo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="content-meta">
            <span class="content-date">Em breve</span>
            <span class="content-category">Desenvolvimento</span>
          </div>
          <p class="content-description">
            Esta seção está sendo preparada com conteúdo sobre desenvolvimento pessoal e de programação. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Página de conteúdo/blog
</script>

<style scoped>
.conteudo-container {
  padding: 1.5rem 0;
  max-width: 1000px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.content-card {
  background: rgba(13, 13, 13, 0.02);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transicao-padrao);
  border: 1px solid rgba(217, 198, 176, 0.08);
}

.content-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(13, 13, 13, 0.08);
  border-color: rgba(217, 198, 176, 0.15);
}

.content-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
}

.content-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transicao-padrao);
}

.content-card:hover .content-image img {
  transform: scale(1.05);
}

.content-content {
  padding: 1.25rem;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.content-title {
  color: var(--cor-primaria);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.content-links {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
  margin-left: 0.8rem;
}

.content-link {
  color: var(--cor-secundaria);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  transition: var(--transicao-padrao);
  background: rgba(217, 198, 176, 0.08);
}

.content-link:hover {
  color: var(--cor-primaria);
  background: rgba(242, 239, 233, 0.15);
  transform: translateY(-2px);
}

.content-meta {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.content-date,
.content-category {
  background: rgba(217, 198, 176, 0.12);
  color: var(--cor-secundaria);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(217, 198, 176, 0.15);
}

.content-description {
  color: var(--cor-secundaria);
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
}

.content-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(217, 198, 176, 0.12);
  color: var(--cor-secundaria);
  padding: 0.3rem 0.7rem;
  border-radius: 14px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(217, 198, 176, 0.15);
  transition: var(--transicao-padrao);
}

.tag:hover {
  background: rgba(217, 198, 176, 0.25);
  border-color: rgba(217, 198, 176, 0.3);
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

/* Responsividade */
@media (max-width: 768px) {
  .conteudo-container {
    padding: 1rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .content-content {
    padding: 1.25rem;
  }
  
  .content-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .content-links {
    margin-left: 0;
  }
  
  .content-title {
    font-size: 1.125rem;
  }

  .content-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .content-card {
    border-radius: 16px;
  }
  
  .tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    border-radius: 12px;
  }

  .content-link {
    width: 32px;
    height: 32px;
    border-radius: 10px;
  }

  .content-image {
    height: 160px;
  }
}
</style>