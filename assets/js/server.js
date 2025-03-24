const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Banco de dados simulado de páginas com seus metadados SEO
const pagesData = {
  home: {
    title: "Bem-vindo à Bolina Tec",
    description: "Desenvolvemos soluções de IA para Agricultura 5.0, Arquitetura e Engenharia. As nossas tecnologias automatizam processos e aumentam a produtividade empresarial com inovação e eficiência.",
    keywords: "Inteligência Artificial, Agricultura 5.0, Arquitetura Inteligente, Engenharia Digital, Automação, Otimização de Processos, Produtividade Empresarial",
    robots:"index, follow",
    url: "https://bolinatec.com/index",
    image: "https://meusite.com/images/og-image.jpg",
    lang: "pt-PT"
  },
};

// Middleware para gerar metadados SEO com base na rota
const setSeoMetadata = (page) => (req, res, next) => {
  res.locals.seo = pagesData[page] || pagesData.home;
  next();
};

// Função para renderizar HTML com metadados SEO
const renderPage = (content) => (req, res) => {
  const seo = res.locals.seo;
  
  res.send(`
    <!DOCTYPE html>
    <html lang="${seo.lang}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Metadados SEO básicos -->
        <title>${seo.title}</title>
        <meta name="description" content="${seo.description}">
        <meta name="keywords" content="${seo.keywords}">
        <meta name="robots" content="${seo.robots}">
        <!-- Metadados canônicos para evitar conteúdo duplicado -->
        <link rel="canonical" href="${seo.url}">
        
        <!-- Metadados Open Graph para compartilhamento em redes sociais -->
        <meta property="og:title" content="${seo.title}">
        <meta property="og:description" content="${seo.description}">
        <meta property="og:url" content="${seo.url}">
        <meta property="og:image" content="${seo.image}">
        <meta property="og:type" content="website">
        
        <!-- Metadados Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${seo.title}">
        <meta name="twitter:description" content="${seo.description}">
        <meta name="twitter:image" content="${seo.image}">
        
        <!-- Preload de recursos críticos -->
        <link rel="preload" href="/css/styles.css" as="style">
        <link rel="stylesheet" href="/css/styles.css">
        
        <!-- Estrutura de dados Schema.org para Rich Snippets -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "${seo.title}",
          "description": "${seo.description}",
          "url": "${seo.url}"
        }
        </script>
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Sobre</a></li>
                </ul>
            </nav>
        </header>
        
        <main>
            ${content}
        </main>
        
        <footer>
            <p>&copy; ${new Date().getFullYear()} Meu Site Incrível</p>
        </footer>
        
        <!-- Scripts JS no final para melhor performance -->
        <script src="/js/main.js" defer></script>
    </body>
    </html>
  `);
};

// Rotas com middleware de SEO específico para cada página
app.get("/", setSeoMetadata("home"), renderPage(`
    <h1>Bem-vindo ao Meu Site</h1>
    <p>Este site tem SEO dinâmico gerado no servidor.</p>
    <p>Implementamos várias melhorias de SEO e performance.</p>
`));

app.get("/about", setSeoMetadata("about"), renderPage(`
    <h1>Sobre Nós</h1>
    <p>Somos especialistas em desenvolvimento web com foco em SEO.</p>
`));

// Middleware de tratamento de erro 404 com SEO
app.use((req, res) => {
  res.status(404);
  res.locals.seo = {
    title: "Página Não Encontrada - Meu Site Incrível",
    description: "Desculpe, a página que você está procurando não foi encontrada.",
    keywords: "erro, 404, página não encontrada",
    url: "https://meusite.com/404",
    image: "https://meusite.com/images/error-og.jpg",
    lang: "pt-BR"
  };
  
  renderPage(`
    <h1>Página Não Encontrada</h1>
    <p>Desculpe, a página que você está procurando não existe.</p>
    <a href="/">Voltar para a página inicial</a>
  `)(req, res);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Inicia o servidor
app.listen(4000, () => console.log("Servidor rodando em http://localhost:4000"));
