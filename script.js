// Dados simulados de trilhas, níveis e cursos
const trilhas = [
    {
      nome: "Didática Moderna",
      niveis: {
        Básico: ["Introdução à Didática", "Planejamento de Aula"],
        Intermediário: ["Metodologias Ativas", "Gestão de Sala de Aula"],
        Avançado: ["Avaliação por Competências", "Tecnologia na Educação"]
      }
    },
    {
      nome: "Planejamento de Aula",
      niveis: {
        Básico: ["Organização de Conteúdo", "Definição de Objetivos"],
        Intermediário: ["Sequência Didática", "Uso de Recursos"],
        Avançado: ["Acompanhamento e Feedback", "Avaliação Formativa"]
      }
    },
    {
      nome: "Tecnologias Educacionais",
      niveis: {
        Básico: ["Google Classroom", "Kahoot"],
        Intermediário: ["Gamificação", "Edpuzzle"],
        Avançado: ["Realidade Aumentada", "IA na Educação"]
      }
    }
  ];
  
  let trilhaAtiva = null;
  let nivelAtivo = null;
  
  const trilhasContainer = document.querySelector(".trilhas");
  const cursosContainer = document.querySelector(".content");
  const titulo = document.querySelector(".topbar h1");
  
  // Renderiza as trilhas
  function renderizarTrilhas() {
    trilhasContainer.innerHTML = "";
    trilhas.forEach((trilha, index) => {
      const btn = document.createElement("button");
      btn.textContent = trilha.nome;
      btn.classList.add("trilha-btn");
      if (trilhaAtiva === index) btn.classList.add("active");
      btn.onclick = () => {
        trilhaAtiva = index;
        nivelAtivo = null;
        renderizarTrilhas();
        renderizarNiveis();
        cursosContainer.innerHTML = "<p>Selecione um nível para visualizar os cursos.</p>";
        titulo.textContent = trilha.nome;
      };
      trilhasContainer.appendChild(btn);
    });
  }
  
  // Renderiza os níveis da trilha selecionada
  function renderizarNiveis() {
    const menu = document.querySelector(".course-menu");
    menu.innerHTML = "";
    if (trilhaAtiva === null) return;
  
    const niveis = Object.keys(trilhas[trilhaAtiva].niveis);
    niveis.forEach(nivel => {
      const btn = document.createElement("button");
      btn.textContent = nivel;
      btn.classList.add("tab");
      btn.onclick = () => {
        nivelAtivo = nivel;
        renderizarCursos();
      };
      menu.appendChild(btn);
    });
  }
  
  // Renderiza os cursos do nível selecionado
  function renderizarCursos() {
    if (trilhaAtiva === null || nivelAtivo === null) return;
  
    const cursos = trilhas[trilhaAtiva].niveis[nivelAtivo];
    cursosContainer.innerHTML = "";
    const container = document.createElement("div");
    container.classList.add("cursos");
  
    cursos.forEach(nome => {
      const card = document.createElement("div");
      card.classList.add("curso-card");
      card.innerHTML = `
        <h3>${nome}</h3>
        <p>Status: <strong>Não iniciado</strong></p>
        <button onclick="alert('Curso: ${nome}')">Acessar</button>
      `;
      container.appendChild(card);
    });
  
    cursosContainer.appendChild(container);
  }
  
  // Inicializa a interface
  renderizarTrilhas();
  
  