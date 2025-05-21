<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const currentLanguage = ref('EN')

function toggleLanguage() {
  currentLanguage.value = currentLanguage.value === 'EN' ? 'PT' : 'EN'
}
</script>

<template>
  <div class="main-container">
    <nav class="navbar">
      <div class="navbar-left">
        <RouterLink class="site-title" to="/">joão paulo</RouterLink>
      </div>
      
      <div class="navbar-center">
        <RouterLink class="nav-link" to="/">about</RouterLink>
        <RouterLink class="nav-link" to="/projects">projects</RouterLink>
        <RouterLink class="nav-link" to="/escrita">writing</RouterLink>
      </div>
      
      <div class="navbar-right">
        <button class="theme-toggle" aria-label="Toggle theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        </button>
        <button class="language-toggle" @click="toggleLanguage">
          {{ currentLanguage }}
        </button>
      </div>
    </nav>
    
    <main class="content-container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Estilos globais para elementos dentro deste componente */
* {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

/* Container principal que centraliza o conteúdo */
.main-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  color: var(--cor-primaria);
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Barra de navegação principal */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(242, 239, 233, 0.1);
}

/* Estilização do título do site (logo) */
.navbar-left .site-title {
  font-weight: 600;
  color: var(--cor-primaria);
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 4px;
}

/* Linha de sublinhado padrão do título do site */
.navbar-left .site-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  opacity: 60%;
  background-color: var(--cor-secundaria);
}

/* Elemento para animação do sublinhado do título do site */
.navbar-left .site-title::before {
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

/* Animação do sublinhado ao passar o mouse sobre o título do site */
.navbar-left .site-title:hover::before {
  opacity: 100%;
  animation: underscore-slide-contained 2s ease-in-out infinite;
}

/* Container dos links de navegação centrais */
.navbar-center {
  display: flex;
  gap: 1.5rem;
  font-size: 1.1rem;
}

/* Estilização padrão dos links de navegação */
.nav-link {
  color: var(--cor-primaria);
  text-decoration: none;
  padding-bottom: 4px;
  transition: color 0.2s ease;
  position: relative;
}

/* Linha de sublinhado padrão dos links de navegação */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--cor-secundaria);
  opacity: 60%;
}

/* Elemento para animação do sublinhado dos links de navegação */
.nav-link::before {
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

/* Animação do sublinhado ao passar o mouse sobre links não-ativos */
.nav-link:hover:not(.router-link-active)::before {
  opacity: 100%;
  animation: underscore-slide-contained 2s ease-in-out infinite;
}

/* Efeito de hover para links de navegação */
.nav-link:hover {
  color: var(--cor-primaria);
}

/* Estilização para links de navegação ativos */
.nav-link.router-link-active {
  color: var(--cor-primaria);
}

/* Remove o sublinhado padrão de links ativos */
.nav-link.router-link-active::after {
  display: none;
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

/* Animação do sublinhado contido (dentro dos limites do elemento) */
@keyframes underscore-slide-contained {
  0% {
    left: 0;
    width: 0%;
  }
  
  50% {
    left: 0;
    width: 100%;
  }
  
  100% {
    width: 0%;
    right: 0;
    left: 100%;
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
</style>
