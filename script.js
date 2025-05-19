document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('questionario-form');
    const resultadoDiv = document.getElementById('resultado');
    const pontuacaoTotalSpan = document.getElementById('pontuacao-total');
    const interpretacaoSpan = document.getElementById('interpretacao');
    const recomendacoesSpan = document.getElementById('recomendacoes');
    const iniciarDiagnosticoBtn = document.getElementById('iniciar-diagnostico');
    const paginaInicialSection = document.getElementById('pagina-inicial');
    const questionarioSection = document.getElementById('questionario');

    // Esconde a seção de resultados inicialmente
    resultadoDiv.classList.add('resultado-oculto');
    questionarioSection.classList.add('oculto'); // Garante que o questionário comece escondido

    iniciarDiagnosticoBtn.addEventListener('click', () => {
        paginaInicialSection.classList.add('oculto');
        questionarioSection.classList.remove('oculto');
    });

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        console.log('Formulário enviado!'); // Adicione esta linha

        let pontuacao = 0;
        const respostas = {};

        const perguntas = formulario.querySelectorAll('.pergunta');
        perguntas.forEach(pergunta => {
            const select = pergunta.querySelector('select');
            if (select) {
                respostas[select.name] = parseInt(select.value);
                pontuacao += parseInt(select.value);
            }
        });

        console.log('Respostas:', respostas); // Adicione esta linha
        console.log('Pontuação:', pontuacao); // Adicione esta linha

        let interpretacao = '';
        let recomendacoes = '';

        if (pontuacao <= 10) {
            interpretacao = 'Baixo nível de adoção de tecnologia e automação. Há muitas oportunidades de melhoria.';
            recomendacoes = 'Considerar a implementação de softwares básicos de gestão, explorar ferramentas de automação simples em tarefas repetitivas e investir em treinamento digital para a equipe.';
        } else if (pontuacao <= 20) {
            interpretacao = 'Nível intermediário de adoção. Alguns processos já utilizam tecnologia, mas ainda há espaço para avançar.';
            recomendacoes = 'Avançar na integração de sistemas, explorar soluções de automação mais avançadas em áreas chave e começar a analisar dados para otimizar processos.';
        } else {
            interpretacao = 'Alto nível de adoção de tecnologia e automação. Sua empresa está bem posicionada.';
            recomendacoes = 'Continuar investindo em inovação, explorar a integração de inteligência artificial e análise de dados avançada para obter insights e manter-se competitivo.';
        }

        console.log('Interpretação:', interpretacao); // Adicione esta linha
        console.log('Recomendações:', recomendacoes); // Adicione esta linha
        console.log('Classes da div de resultado antes de remover oculto:', resultadoDiv.classList); // Adicione esta linha

        pontuacaoTotalSpan.textContent = pontuacao;
        interpretacaoSpan.textContent = interpretacao;
        recomendacoesSpan.textContent = recomendacoes;
        resultadoDiv.classList.remove('resultado-oculto');
        questionarioSection.classList.add('oculto'); // Esconde o questionário após enviar

        console.log('Classes da div de resultado depois de remover oculto:', resultadoDiv.classList); // Adicione esta linha
    });
});