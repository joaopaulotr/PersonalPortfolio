<script setup>
import { inject } from 'vue'

// Injetar o sistema de tradução
const t = inject('translations')
</script>

<template>
  <div class="resume-container">
    <div class="resume-content">
      <h2 class="resume-title">{{ t?.resumeTitle || 'Resume' }}</h2>
      <p class="resume-description">{{ t?.resumeDescription || 'Download my resume' }}</p>
      
      <div class="resume-actions">
        <a href="/resume.pdf" class="resume-link" target="_blank" download>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-container {
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

.resume-content {
  text-align: center;
}

.resume-title {
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--cor-primaria);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.resume-description {
  font-size: 0.95rem;
  color: var(--cor-secundaria);
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.resume-actions {
  display: flex;
  justify-content: center;
}

.resume-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(217, 198, 176, 0.12);
  color: var(--cor-primaria);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

/* Linha animada para resume link */
.resume-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--cor-primaria);
  transition: width 0.3s ease;
}

.resume-link:hover::before {
  width: 100%;
}

.resume-link:hover {
  background: rgba(217, 198, 176, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(217, 198, 176, 0.1);
}
</style>