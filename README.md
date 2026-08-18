# 🎵 Music & Mental Health Dashboard

Bem-vindo ao **Music & Mental Health Dashboard**, um projeto de análise de dados interativo que explora a correlação entre os hábitos musicais das pessoas e sua saúde mental.

Este projeto foi construído utilizando dados reais da pesquisa *MxMH Survey (Music and Mental Health Survey)*, disponível na plataforma Kaggle: [Acessar Dataset no Kaggle](https://www.kaggle.com/datasets/catherinerasgaitis/mxmh-survey-results).

---

## 📊 Sobre o Projeto

A ideia principal do projeto é responder visualmente a perguntas como:
* Ouvir mais horas de música por dia tem relação com maiores níveis de ansiedade?
* Ouvintes de determinados gêneros musicais sofrem mais com Insônia ou TOC?
* Tocar instrumentos ativamente protege a mente contra a depressão melhor do que apenas ouvir?

Para facilitar a resposta dessas perguntas, os dados brutos do Kaggle foram pré-processados, estruturados em formato otimizado (`data.json`) e convertidos em um Dashboard visual dinâmico com gráficos intuitivos e **Interpretação por IA** guiada.

---

## 🛠️ Tecnologias Utilizadas

* **Estrutura de Dados:**
  * **JSON (`data.json`):** Arquivo estático otimizado contendo os dados pré-processados e agregados da pesquisa.
* **Dashboard Visual (Frontend):**
  * **HTML5 & CSS3:** Layout moderno em *Dark Mode*, responsivo com Flexbox/Grid.
  * **JavaScript (ES6+):** Consumo assíncrono do JSON via Fetch API e manipulação dinâmica da interface.
  * **Chart.js:** Renderização interativa dos gráficos de linha e barra.
* **Inteligência Artificial (Google Gemini):**
  * **Design & Layout Visual:** Toda a estrutura visual do dashboard foi projetada com auxílio do **Google Gemini**.
  * **Código Frontend:** Suporte no desenvolvimento do HTML, estilização CSS e lógica JavaScript para plotagem dos gráficos.

---

## 🚀 Como Executar o Projeto

Como o projeto é uma aplicação web estática, você tem duas opções para rodar:

### Opção 1: Servidor Local (VS Code Live Server)
1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/music-mental-health-dashboard.git](https://github.com/SEU-USUARIO/music-mental-health-dashboard.git)
