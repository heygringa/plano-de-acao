const cursos = {
    Basico: [
        { titulo: "Didática Moderna", status: "Não iniciado" },
        { titulo: "Prática Docente", status: "Em progresso" },
        { titulo: "Planejamento Básico", status: "Concluído" }
    ],
    Intermediario: [
        { titulo: "Gestão de Sala de Aula", status: "Não iniciado" },
        { titulo: "Tecnologias Educacionais", status: "Em progresso" },
        { titulo: "Comunicação com Alunos", status: "Concluído" }
    ],
    Avancado: [
        { titulo: "Metodologias Ativas", status: "Não iniciado" },
        { titulo: "Liderança Educacional", status: "Em progresso" },
        { titulo: "Inovação no Ensino", status: "Concluído" }
    ]
};

const contentDiv = document.querySelector('.content');
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const nivel = tab.textContent;
        const cursosDoNivel = cursos[nivel];

        contentDiv.innerHTML = ''; // Limpa os cards

        cursosDoNivel.forEach(curso => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <h3>${curso.titulo}</h3>
                <p>Status: ${curso.status}</p>
                <button>Acessar</button>
            `;
            contentDiv.appendChild(card);
        });
    });
});

  
  