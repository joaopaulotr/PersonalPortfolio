<template>
  <div class="conteudo-container">
    <!-- Grid de conteúdo -->
    <div class="content-grid">
      <div class="content-item">
        <div class="content-meta">
          <span class="content-status">Coming Soon</span>
          <span class="content-date">2025</span>
        </div>
        <h3 class="content-title">Articles in Development</h3>
        <p class="content-description">
          This section is being prepared with content about personal and programming development.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// Injetar o sistema de tradução
const t = inject('translations')
</script>

<style scoped>
/* Design minimalista e elegante */
.conteudo-container {
  padding: 3rem 0;
  max-width: 680px;
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

/* Cabeçalho clean */
.content-header {
  margin-bottom: 4rem;
  text-align: left;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--cor-primaria);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.page-subtitle {
  font-size: 0.95rem;
  color: var(--cor-secundaria);
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.8;
}

/* Grid minimalista */
.content-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.content-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(217, 198, 176, 0.1);
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
}

/* Linha animada para content items */
.content-item::before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cor-primaria), var(--cor-secundaria));
  transition: width 0.3s ease;
}

.content-item:hover::before {
  width: 100%;
}

.content-item:hover {
  padding-left: 0.5rem;
  transform: translateX(3px);
  border-bottom-color: transparent;
}

.content-item:last-child {
  border-bottom: none;
}

/* Meta informações */
.content-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.content-status {
  font-size: 0.75rem;
  color: var(--cor-secundaria);
  background: rgba(217, 198, 176, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

/* Linha animada para content status */
.content-status::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--cor-primaria);
  transition: width 0.3s ease;
}

.content-status:hover::before {
  width: 100%;
}

.content-status:hover {
  background: rgba(217, 198, 176, 0.2);
  color: var(--cor-primaria);
  transform: translateY(-2px);
}

.content-date {
  font-size: 0.8rem;
  color: var(--cor-secundaria);
  opacity: 0.6;
  font-weight: 400;
}

/* Títulos elegantes */
.content-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--cor-primaria);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

/* Descrições sutis */
.content-description {
  font-size: 0.9rem;
  color: var(--cor-secundaria);
  line-height: 1.6;
  font-weight: 400;
  opacity: 0.85;
}

/* Responsividade */
@media (max-width: 768px) {
  .conteudo-container {
    padding: 2rem 0;
    max-width: 100%;
  }
  
  .content-header {
    margin-bottom: 2.5rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .page-subtitle {
    font-size: 0.9rem;
  }
  
  .content-title {
    font-size: 1.1rem;
  }
  
  .content-description {
    font-size: 0.85rem;
  }
  
  .content-grid {
    gap: 2rem;
  }
  
  .content-item {
    padding: 1rem 0;
  }
}
</style>