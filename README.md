LeviShop — E-commerce Front-End em React

LeviShop é uma aplicação front-end desenvolvida em ReactJS, que consome a API pública DummyJSON para exibir produtos em formato de vitrine (cards), com filtros dinâmicos, infinite scroll, carrinho de compras e uma arquitetura organizada e escalável.

O projeto foi desenvolvido com foco em boas práticas, organização de código e experiência do usuário, simulando o funcionamento de um e-commerce real.

✨ Funcionalidades

📦 Consumo da API pública DummyJSON

🖼️ Exibição de produtos em formato de cards

🔍 Busca por nome do produto

🗂️ Filtro por categoria

♾️ Infinite Scroll (carregamento automático ao rolar a página)

🛒 Carrinho de compras lateral (drawer)

🎨 Estilização moderna com Tailwind CSS

🧠 Separação de responsabilidades (hooks, services, components)

🧱 Tecnologias Utilizadas

ReactJS

JavaScript (ES6+)

Vite

Tailwind CSS

DummyJSON API

Intersection Observer API

🌐 API Utilizada

Documentação:
👉 https://dummyjson.com/docs/products

Rotas utilizadas:

/products

/products/search

/products/category/:category

📁 Estrutura do Projeto
src/
├── components/
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── CartDrawer.jsx
│   ├── Filters.jsx
│   └── EmptyState.jsx
│
├── pages/
│   └── Home.jsx
│
├── hooks/
│   └── useProducts.js
│
├── services/
│   └── productsService.js
│
├── configs/
│   └── categories.js
│
├── App.jsx
└── main.jsx

📌 Organização

components/ → Componentes reutilizáveis de UI

pages/ → Páginas da aplicação

hooks/ → Regras de negócio e lógica de dados

services/ → Comunicação com a API

configs/ → Constantes e configurações globais

 Arquitetura e Decisões Técnicas
 Hook customizado (useProducts)

Toda a lógica de:

paginação

busca

filtros

controle de loading

infinite scroll

foi encapsulada em um hook customizado, mantendo os componentes limpos e focados apenas na renderização.

 Infinite Scroll

O carregamento de novos produtos é feito automaticamente utilizando a Intersection Observer API, sem necessidade de botões de paginação.

 Filtros

Os filtros são aplicados de forma dinâmica e continuam funcionando mesmo quando novos produtos são carregados via scroll.

 Estilização

O projeto utiliza Tailwind CSS, permitindo:

layout responsivo

design moderno

código CSS limpo e escalável

▶️ Como rodar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/levishop.git

2️⃣ Acessar a pasta
cd levishop

3️⃣ Instalar as dependências
npm install

4️⃣ Rodar o projeto
npm run dev


A aplicação estará disponível em:

http://localhost:5173

🚀 Possíveis Melhorias Futuras

💾 Persistência do carrinho no LocalStorage

🔗 Filtros sincronizados com a URL

🧪 Testes unitários

🧩 Migração para TypeScript

👨‍💻 Autor

Projeto desenvolvido por Levi Almeida, com foco em arquitetura front-end e simulação de um e-commerce real.