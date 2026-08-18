# 🎵 Music & Mental Health Dashboard

Bem-vindo ao **Music & Mental Health Dashboard**, um projeto de análise de dados interativo que explora a correlação entre os hábitos musicais das pessoas e sua saúde mental. 

Este projeto foi construído utilizando dados reais da pesquisa **MxMH Survey** (Music and Mental Health Survey), disponível na plataforma Kaggle.
link: https://www.kaggle.com/datasets/catherinerasgaitis/mxmh-survey-results

## 📊 Sobre o Projeto

A ideia principal do projeto é responder visualmente a perguntas como:
- *Ouvir mais horas de música por dia tem relação com maiores níveis de ansiedade?*
- *Ouvintes de determinados gêneros musicais sofrem mais com Insônia ou TOC?*
- *Tocar instrumentos ativamente protege a mente contra a depressão melhor do que apenas ouvir?*

Para facilitar a resposta dessas perguntas, os dados brutos foram pré-processados e convertidos em um Dashboard visual dinâmico com gráficos intuitivos e uma funcionalidade de "Interpretação de IA" guiada.

## 🛠️ Tecnologias Utilizadas

O projeto foi dividido em duas frentes de tecnologia:

1. **Processamento de Dados (Backend / Pipeline):**
   - **Python:** Para baixar e manipular o CSV original.
   - **Pandas:** Para limpar os dados brutos e calcular as agregações, cruzamentos estatísticos e os "picos" comportamentais.
   - *O resultado do processamento é salvo em um arquivo estático e otimizado (`data.json`).*

2. **Dashboard Visual (Frontend):**
   - **HTML5 & Vanilla CSS (Flexbox/Grid):** Para estruturação do layout responsivo e um visual "Dark Mode" moderno.
   - **JavaScript:** Fetch API (para consumir os dados pré-processados de forma assíncrona).
   - **Chart.js:** Para a renderização dos gráficos de linha e barra fluídos e bonitos na interface.

## 🚀 Como Executar o Projeto

Como o site consome um arquivo `.json` local, não é recomendado simplesmente dar "dois-cliques" no arquivo HTML devido às políticas de segurança de navegadores (CORS). Você precisa rodar um servidor local simples.

1. Faça o clone deste repositório:
```bash
git clone https://github.com/SEU-USUARIO/music-mental-health-dashboard.git
```

2. Abra o terminal na pasta do projeto e inicie um servidor HTTP local com Python:
```bash
python -m http.server 8000
```

3. Abra o seu navegador e acesse:
👉 **http://localhost:8000**

## 💡 Destaques

- Interface visual moderna inspirada em painéis profissionais de Análise de Dados.
- Ferramenta de **Interpretação** integrada aos gráficos: Se houver dúvidas sobre o que o gráfico mostra, botões descritivos geram os insights traduzidos imediatamente.
- Estrutura "Serverless" leve para hospedar o dashboard rapidamente via GitHub Pages, Netlify ou Vercel.
