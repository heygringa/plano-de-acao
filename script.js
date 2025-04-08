function mostrarTrilhas() {
    document.getElementById('trilhasView').style.display = 'block';
    document.getElementById('cursosView').style.display = 'none';
    document.getElementById('cursoView').style.display = 'none';
  }
  
  function abrirTrilha(nome) {
    document.getElementById('nomeTrilha').textContent = 
      nome === 'didatica' ? 'Didática Moderna' :
      nome === 'tecnologia' ? 'Tecnologia na Educação' :
      'Avaliação Educacional';
  
    document.getElementById('trilhasView').style.display = 'none';
    document.getElementById('cursosView').style.display = 'block';
  }
  
  function abrirCurso(nivel) {
    const nome = nivel === 'basico' ? 'Curso Básico' :
                 nivel === 'intermediario' ? 'Curso Intermediário' :
                 'Curso Avançado';
  
    document.getElementById('nomeCurso').textContent = nome;
    document.getElementById('cursosView').style.display = 'none';
    document.getElementById('cursoView').style.display = 'block';
  }
  
  function voltarParaCursos() {
    document.getElementById('cursoView').style.display = 'none';
    document.getElementById('cursosView').style.display = 'block';
  }
  