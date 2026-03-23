# Bolina Tec Website

> Website institucional da Bolina Tec focado em consultoria tecnologica, solucoes digitais e apresentacao do projeto HeliTube.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow)
![Deploy](https://img.shields.io/badge/Deploy-Static%20Frontend-green)

Este repositorio contem a versao web da **Bolina Tec**, desenhada para apresentar a empresa de forma clara, moderna e institucional, mantendo o **HeliTube** como estudo de caso tecnologico e destacando tambem as solucoes **Agro Harmonia** e **Imo Harmonia**.

O foco do projeto e combinar:

- identidade visual limpa e profissional
- boa legibilidade em desktop e mobile
- componentes React reutilizaveis
- performance adequada para landing institucional
- base pronta para evolucao de conteudo e deploy

---

## Indice

- [Objetivo](#objetivo)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Stack Tecnologica](#stack-tecnologica)
- [Instalacao](#instalacao)
- [Scripts](#scripts)
- [Seccoes do Website](#seccoes-do-website)
- [Formulario de Contacto](#formulario-de-contacto)
- [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Creditos](#creditos)

---

## Objetivo

Desenvolver um website institucional para a Bolina Tec capaz de:

- apresentar a empresa logo na primeira dobra com uma mensagem clara
- comunicar servicos de consultoria tecnologica
- mostrar os produtos `Agro Harmonia` e `Imo Harmonia`
- posicionar o `HeliTube` como estudo de caso tecnologico
- suportar navegacao simples e mobile-first
- manter uma base facil de atualizar no futuro

---

## Arquitetura

```text
Utilizador
    |
    v
+---------------------------+
|  React + Vite Frontend    |
|  Tailwind UI Components   |
+------------+--------------+
             |
             v
+---------------------------+
|  Seccoes modulares        |
|  Hero / Consultoria       |
|  Solucoes / Deep Dive     |
|  Equipa / Contactos       |
+------------+--------------+
             |
             v
+---------------------------+
|  Contact Form             |
|  forms/contact.php        |
|  ou VITE_CONTACT_ENDPOINT |
+---------------------------+
```

---

## Estrutura do Projeto

```text
BolinaTec.com/
|
+-- src/
|   +-- App.jsx
|   +-- main.jsx
|   +-- index.css
|   +-- components/
|       +-- Header.jsx
|       +-- HeroSection.jsx
|       +-- ConsultingSection.jsx
|       +-- SolutionsSection.jsx
|       +-- HeliTubeSection.jsx
|       +-- TeamSection.jsx
|       +-- ContactSection.jsx
|       +-- Footer.jsx
|       +-- SectionHeading.jsx
|
+-- forms/
|   +-- contact.php
|
+-- assets/
+-- index.html
+-- package.json
+-- tailwind.config.js
+-- vite.config.js
+-- README.md
```

---

## Stack Tecnologica

| Tecnologia | Uso |
|-----------|-----|
| React 18 | Interface e composicao dos componentes |
| Vite | Bundler e ambiente de desenvolvimento |
| Tailwind CSS | Estilizacao utilitaria e responsiva |
| Lucide React | Iconografia |
| Framer Motion | Preparado para animacoes, quando necessario |
| PHP | Endpoint simples para formulario de contacto |

---

## Instalacao

```bash
# Clonar o repositorio
git clone https://github.com/BolinaTec/BolinaTec.com.git
cd BolinaTec.com

# Instalar dependencias
npm install

# Iniciar ambiente local
npm run dev
```

---

## Scripts

```bash
# Desenvolvimento local
npm run dev

# Build de producao
npm run build

# Preview local da build
npm run preview
```

---

## Seccoes do Website

### Hero

Apresenta a Bolina Tec como empresa de consultoria tecnologica, com foco em clareza, validacao e implementacao.

### Consultoria

Resume o metodo de trabalho da empresa:

- diagnosticar
- validar
- implementar

### Solucoes

Apresenta os tres projetos principais:

- `HeliTube`
- `Agro Harmonia`
- `Imo Harmonia`

Os cards de selecao atualizam o mesmo painel tecnico abaixo para manter coerencia visual e leitura simples.

### Deep Dive Tecnico

A seccao escura funciona como painel dinamico e mostra:

- fluxo principal do projeto selecionado
- pilares ou capacidades-chave
- resumo tecnico
- indicadores ou etiquetas curtas de leitura rapida

### Equipa

Apresentacao institucional da lideranca.

### Contactos

Formulario simples com validacao de frontend e dados diretos da empresa.

---

## Formulario de Contacto

O frontend envia, por defeito, para:

```text
forms/contact.php
```

Tambem e possivel configurar um backend externo com:

```bash
VITE_CONTACT_ENDPOINT=https://dominio.com/api/contact
```

### Comportamento atual

- validacao de nome, email e mensagem no frontend
- suporte a honeypot basico
- fallback para endpoint PHP local
- preparado para deploy estatico com backend separado

> Nota: se o deploy for feito apenas em GitHub Pages, o ficheiro PHP nao sera executado. Nesse caso, o recomendado e usar `VITE_CONTACT_ENDPOINT`.

---

## Deploy

O projeto pode ser publicado de duas formas:

### 1. Frontend estatico

Ideal para:

- GitHub Pages
- Netlify
- Vercel

Neste caso, o formulario deve apontar para um backend externo.

### 2. Frontend + PHP

Ideal para servidor tradicional com suporte a PHP.

Neste caso, o frontend pode continuar a usar `forms/contact.php` como endpoint local.

---

## Creditos

Projeto desenvolvido para a **Bolina Tec**.

**Creditos frontend / design / implementacao:** Rodrigo Henriques

Se quiseres, esta linha tambem pode ser adaptada depois para:

```text
Website desenvolvido por Rodrigo Henriques para a Bolina Tec.
```

---

