<script setup>
// Componente About
</script>

<template>
  <div class="about-container">
    <ul>
      <li>
        Desenvolvedor na
        <img class="icons-lista" src="/assets/img/logopac.png" alt="Logo PacSolutions">
        <a href="https://pacsolutions.com.br/">PacSolutions</a>
      </li>
      <li>
        Estudante de Engenharia de Software na
        <img class="icons-lista" src="/assets/img/logocesu.png" alt="Logo UFMG">
        <a href="https://www.unicesumar.edu.br/">Unicesumar</a>
      </li>
      <li>
        Recentemente:
      </li>
    </ul>
  </div>
</template>

<style scoped>
.about-container {
  padding: 2rem 0;
}

/* Estilização da lista */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--cor-secundaria);
  font-size: 1.1rem;
}

.icons-lista {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
}

a {
  color: var(--cor-primaria);
  font-weight: 600;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

/* Remover o sublinhado padrão */
a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--cor-secundaria);
  opacity: 0.6;
}

/* Elemento para animação do sublinhado dos links */
a::before {
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
a:hover::before {
  opacity: 100%;
  animation: underscore-slide-contained 2s ease-in-out infinite;
}

/* Animação do sublinhado contido */
@keyframes underscore-slide-contained {
  0% {
    left: -100%;
    width: 100%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 100%;
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