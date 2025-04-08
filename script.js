document.addEventListener('DOMContentLoaded', () => {
    const trilhaCard = document.getElementById('trilha-gestao');
    const nivelBasicoBtn = document.getElementById('nivel-basico');
    const diagnosticoSection = document.getElementById('diagnostico');
    const planoAcaoSection = document.getElementById('plano-acao');
    const avaliacaoSection = document.getElementById('avaliacao');
    const avancarBtn = document.getElementById('btn-avancar');
    const gerarPlanoBtn = document.getElementById('btn-gerar-plano');
    const gerarAvaliacaoBtn = document.getElementById('btn-gerar-avaliacao');
  
    let pontosCriticos = [];
  
    // 1. Clica no card de trilha
    if (trilhaCard) {
      trilhaCard.addEventListener('click', () => {
        document.getElementById('seletor-nivel').style.display = 'block';
      });
    }
  
    // 2. Seleciona o nível básico
    if (nivelBasicoBtn) {
      nivelBasicoBtn.addEventListener('click', () => {
        diagnosticoSection.style.display = 'block';
        document.getElementById('seletor-nivel').style.display = 'none';
      });
    }
  
    // 3. Avança do diagnóstico para plano de ação
    if (avancarBtn) {
      avancarBtn.addEventListener('click', () => {
        pontosCriticos = [];
  
        const checkboxes = document.querySelectorAll('#diagnostico .question input');
        checkboxes.forEach((checkbox, index) => {
          const nota = parseInt(checkbox.value);
          if (checkbox.checked && nota <= 3) {
            const texto = checkbox.dataset.texto || checkbox.parentElement.textContent.trim();
            pontosCriticos.push(texto);
          }
        });
  
        if (pontosCriticos.length === 0) {
          alert('Você precisa selecionar ao menos um item com nota 1, 2 ou 3 para seguir.');
          return;
        }
  
        // Mostra plano de ação
        diagnosticoSection.style.display = 'none';
        planoAcaoSection.style.display = 'block';
  
        const planoContainer = document.getElementById('pontos-plano');
        planoContainer.innerHTML = '';
        pontosCriticos.forEach((ponto, i) => {
          planoContainer.innerHTML += `
            <div class="section">
              <h3>Ponto ${i + 1}</h3>
              <p><strong>Ponto:</strong> ${ponto}</p>
              <label>Problema:</label>
              <select name="problema-${i}">
                <option value="">Selecione um problema...</option>
                <option value="Falta de clareza nas regras">Falta de clareza nas regras</option>
                <option value="Pouco uso de linguagem positiva">Pouco uso de linguagem positiva</option>
                <option value="Falta de estratégias para engajamento">Falta de estratégias para engajamento</option>
                <option value="Outro">Outro (descreva abaixo)</option>
              </select>
              <input type="text" placeholder="Se outro, descreva o problema" name="problema-custom-${i}" />
              <label>Estratégia para melhoria:</label>
              <textarea name="estrategia-${i}" placeholder="Descreva a estratégia..."></textarea>
              <label>Prazo para implementação:</label>
              <input type="date" name="prazo-${i}" />
            </div>
          `;
        });
      });
    }
  
    // 4. Avança da seção Plano de Ação para Avaliação
    if (gerarAvaliacaoBtn) {
      gerarAvaliacaoBtn.addEventListener('click', () => {
        planoAcaoSection.style.display = 'none';
        avaliacaoSection.style.display = 'block';
  
        const avaliacaoContainer = document.getElementById('pontos-avaliacao');
        avaliacaoContainer.innerHTML = '';
        pontosCriticos.forEach((ponto, i) => {
          avaliacaoContainer.innerHTML += `
            <div class="section">
              <p><strong>Ponto:</strong> ${ponto}</p>
              <label>Esse problema foi resolvido?</label>
              <select name="avaliacao-${i}">
                <option value="">Selecione...</option>
                <option value="S">Sim</option>
                <option value="P">Parcialmente</option>
                <option value="N">Não</option>
              </select>
            </div>
          `;
        });
      });
    }
  });
  