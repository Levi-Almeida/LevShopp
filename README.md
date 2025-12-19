# 🛒 LeviShop — E-commerce Front-end com React

LeviShop é uma aplicação front-end de e-commerce desenvolvida em **React (JavaScript)** que consome a **API pública DummyJSON** para exibição de produtos em formato de vitrine, com foco em uma experiência moderna, fluida e próxima de um e-commerce real.

O projeto foi desenvolvido com o objetivo de **aprendizado prático**, boas práticas de código e uma base sólida para evolução futura (ex: migração para TypeScript).

---

## 🚀 Funcionalidades

- 📦 Listagem de produtos em formato de cards
- 🔄 **Infinite Scroll** (carregamento automático ao rolar a página)
- 🔍 Busca de produtos em tempo real
- 🗂️ Filtro por categorias
- 🎯 Filtros adicionais:
  - Preço máximo
  - Rating mínimo
  - Marca
- 🛒 Carrinho de compras lateral (drawer)
- 📭 Estado visual para **nenhum resultado encontrado**
- ⚡ Atualização dinâmica sem recarregar a página
- 🎨 Interface moderna com **Tailwind CSS**

---

## 🧠 Conceitos aplicados

- React Hooks (`useState`, `useEffect`, `useRef`)
- Hooks customizados para regras de negócio
- Separação entre UI e lógica de dados
- Consumo de API REST
- Paginação com `limit` e `skip`
- Infinite scroll com `IntersectionObserver`
- Controle de estado global de forma simples
- Componentização reutilizável
- Boas práticas de organização e legibilidade

---

## 🛠️ Tecnologias utilizadas

- **React**
- **JavaScript (ES6+)**
- **Vite**
- **Tailwind CSS**
- **DummyJSON API**

---

## 🌐 API utilizada

Os dados dos produtos são consumidos da API pública:

- https://dummyjson.com/products

A API oferece suporte a:
- Paginação (`limit` e `skip`)
- Busca (`/search`)
- Categorias (`/category`)

---

## ▶️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/levishop.git

# Entre na pasta do projeto
cd levishop

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 👨‍💻 Autor

Desenvolvido por Levi Almeida
Projeto criado com foco em prática profissional e evolução contínua em front-end.
