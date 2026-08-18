document.addEventListener('DOMContentLoaded', function() {
    Chart.defaults.color = '#a0a5b1';
    Chart.defaults.borderColor = '#374151';
    Chart.defaults.font.family = "'Inter', sans-serif";

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('.card .value')[0].textContent = data.total_respostas;
            
            document.querySelectorAll('.card .value')[1].innerHTML = `${data.pico_ansiedade.faixa} <span class="unit">anos</span>`;
            document.querySelectorAll('.card .subtitle')[1].textContent = `Média de ${data.pico_ansiedade.valor}/10`;
            
            document.querySelectorAll('.card .value')[2].innerHTML = `${data.pico_depressao.faixa} <span class="unit">anos</span>`;
            document.querySelectorAll('.card .subtitle')[2].textContent = `Média de ${data.pico_depressao.valor}/10`;

            const lineCtx = document.getElementById('lineChart').getContext('2d');
            new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: ['Até 18', '19 a 25', '26 a 35', '36 a 50', '50+'],
                    datasets: [
                        {
                            label: 'Ansiedade',
                            data: data.idade_ansiedade,
                            borderColor: '#7094ff',
                            backgroundColor: '#7094ff',
                            borderWidth: 2,
                            tension: 0.4,
                            pointBackgroundColor: '#7094ff'
                        },
                        {
                            label: 'Depressão',
                            data: data.idade_depressao,
                            borderColor: '#c084fc',
                            backgroundColor: '#c084fc',
                            borderWidth: 2,
                            tension: 0.4,
                            pointBackgroundColor: '#c084fc'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { min: 2.5, max: 7, ticks: { stepSize: 0.5 } } },
                    plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } }
                }
            });

            const barCtx = document.getElementById('barChart').getContext('2d');
            new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: ['Apenas Calmo', 'Apenas Intenso', 'Ambos', 'Nenhum'],
                    datasets: [
                        {
                            label: 'TOC',
                            data: data.perfil_toc,
                            backgroundColor: '#ff7675',
                            borderRadius: 2
                        },
                        {
                            label: 'Insônia',
                            data: data.perfil_insonia,
                            backgroundColor: '#74b9ff',
                            borderRadius: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { min: 0, max: 5, ticks: { stepSize: 0.5 } } },
                    plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } }
                }
            });

            const lineCtx2 = document.getElementById('lineChart2').getContext('2d');
            new Chart(lineCtx2, {
                type: 'line',
                data: {
                    labels: ['Até 2h', '2h a 4h', '4h a 6h', 'Mais de 6h'],
                    datasets: [
                        {
                            label: 'Ansiedade',
                            data: data.horas_ansiedade,
                            borderColor: '#22d3ee',
                            backgroundColor: '#22d3ee',
                            borderWidth: 2,
                            tension: 0.4,
                            pointBackgroundColor: '#22d3ee'
                        },
                        {
                            label: 'Depressão',
                            data: data.horas_depressao,
                            borderColor: '#c084fc',
                            backgroundColor: '#c084fc',
                            borderWidth: 2,
                            tension: 0.4,
                            pointBackgroundColor: '#c084fc'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { min: 4, max: 7, ticks: { stepSize: 0.5 } } },
                    plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } }
                }
            });

            const barCtx2 = document.getElementById('barChart2').getContext('2d');
            new Chart(barCtx2, {
                type: 'bar',
                data: {
                    labels: data.engajamento_labels,
                    datasets: [
                        {
                            label: 'Média de Depressão',
                            data: data.engajamento_depressao,
                            backgroundColor: ['#f472b6', '#34d399'],
                            borderRadius: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { min: 0, max: 10, ticks: { stepSize: 1 } } },
                    plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } }
                }
            });
            
            const buttons = document.querySelectorAll('.btn-interpretacao');
            
            const interpretacoes = [
                "Gráfico 1 (Sintomas por Faixa Etária):\n\nOs dados indicam que a ansiedade atinge seu pico em jovens adultos (19 a 25 anos, média 6.15), enquanto a depressão atinge o ápice em adultos de 26 a 35 anos (média 5.57). Ambos os sintomas apresentam uma queda drástica e reconfortante em indivíduos com mais de 50 anos.",
                
                "Gráfico 2 (TOC e Insônia por Perfil de Gênero):\n\nObserva-se que ouvintes que consomem tanto músicas calmas quanto intensas ('Ambos') relatam os maiores níveis de insônia (média de 4.82). Já os níveis de TOC apresentam pouca variação significativa entre os perfis musicais, mantendo-se estáveis em torno de 2.6.",
                
                "Gráfico 3 (Horas Diárias de Música vs. Sintomas):\n\nNotamos uma leve tendência de que pessoas que escutam música por longos períodos (mais de 6 horas diárias) relatam níveis mais elevados de depressão. Isso sugere que o consumo excessivo de música pode estar atuando como um mecanismo de enfrentamento (coping) para indivíduos com sintomas mais fortes.",
                
                "Gráfico 4 (Prática Ativa vs. Passivo):\n\nSurpreendentemente, os dados mostram que os níveis médios de depressão são muito semelhantes entre aqueles que tocam ou compõem (Músicos Ativos) e aqueles que apenas escutam (Ouvintes Passivos). A prática musical ativa não demonstrou um fator de proteção significativo contra a depressão nesta amostra."
            ];

            buttons.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    alert(interpretacoes[index]);
                });
            });
        })
        .catch(error => {
            console.error(error);
            alert("Não foi possível carregar os dados reais. Verifique se o servidor Python está rodando e se o data.json existe.");
        });
});
