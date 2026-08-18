# 🎵 Music & Mental Health Dashboard

Bem-vindo ao **Music & Mental Health Dashboard**, um projeto de análise de dados interativo que explora a correlação entre os hábitos musicais das pessoas e sua saúde mental.

<img width="1571" height="856" alt="image" src="https://github.com/user-attachments/assets/33b34f60-4814-466c-a2dd-751f7692675e" />


Este projeto foi construído utilizando dados reais da pesquisa *MxMH Survey (Music and Mental Health Survey)*, disponível na plataforma Kaggle: [Acessar Dataset no Kaggle](https://www.kaggle.com/datasets/catherinerasgaitis/mxmh-survey-results).

---

## 📊 Sobre o Projeto

A ideia principal do projeto é responder visualmente a perguntas como:
* Ouvir mais horas de música por dia tem relação com maiores níveis de ansiedade?
* Ouvintes de determinados gêneros musicais sofrem mais com Insônia ou TOC?
* Tocar instrumentos ativamente protege a mente contra a depressão melhor do que apenas ouvir?

Para facilitar a resposta dessas perguntas, os dados brutos foram pré-processados e convertidos em um Dashboard visual dinâmico com gráficos intuitivos e uma funcionalidade de **Interpretação por IA** guiada.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi dividido e construído com as seguintes frentes de tecnologia:

* **Processamento de Dados (Backend / Pipeline):**
  * **Python:** Para baixar e manipular o CSV original.
  * **Pandas:** Para limpar os dados brutos, calcular agregações, cruzamentos estatísticos e picos comportamentais. O resultado é salvo em um arquivo otimizado (`data.json`).
* **Dashboard Visual (Frontend):**
  * **HTML5 & Vanilla CSS (Flexbox/Grid):** Para estruturação do layout responsivo com visual *Dark Mode* moderno.
  * **JavaScript:** Fetch API (para consumir os dados pré-processados de forma assíncrona).
  * **Chart.js:** Para a renderização dos gráficos de linha e barra fluidos e interativos.
* **Inteligência Artificial (Google Gemini):**
  * **Design & Projeto Visual:** Todo o projeto visual da interface do dashboard foi desenvolvido e estruturado com o suporte do **Google Gemini**.
  * **Código & Análises:** Auxílio na construção dos scripts em Python, lógica em JavaScript para consumo dos dados e geração automatizada de insights/interpretações visuais dos gráficos.

---

## 🚀 Como Executar o Projeto

Como o site consome um arquivo `.json` local, execute um servidor HTTP local simples para evitar bloqueios de segurança (CORS) do navegador:

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/music-mental-health-dashboard.git](https://github.com/SEU-USUARIO/music-mental-health-dashboard.git)
