# All Store

All Store é um protótipo de e-commerce desenvolvido com Next.js e React.js, utilizando a API Fake Store. O projeto permite aos usuários fazer login/cadastro, navegar pelos produtos, adicionar itens ao carrinho e realizar compras, simulando uma experiência real de e-commerce.

## Tecnologias Utilizadas

- Next.js (versão mais recente)
- React.js
- Zustand (para gerenciamento de estado com persistência)

## Funcionalidades

- **Login e Cadastro**: Os dados são armazenados com Zustand e possuem persistência.
- **Carrinho de Compras**: Os usuários podem adicionar itens ao carrinho e visualizar detalhes dos produtos.
- **Compra Rápida**: Opção "Comprar Agora" que gera um formulário e envia os dados para um número de telefone definido no arquivo .env.

## Configuração do Projeto

### 1. Clone o Repositório

Abra o terminal do seu sistema operacional

- Clone o repositório
```
  git clone https://github.com/kant-dev/all-store.git
```

- Entre na pasta do projeto
```
  cd all-store
```

### 2. Instale as Dependências

Ainda no terminal, instale as dependências

```
npm install 
```
ou
```
yarn install
```


### 3. Configure as Variáveis de Ambiente

Abra a pasta no VSCode ou sua IDE preferida

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

```
NEXT_PUBLIC_URL_API="https://fakestoreapi.com/"
NEXT_PUBLIC_STORE_PHONE="+5500123456789" // numero de telefone
```
### 4. Execute o Projeto

Execute o projeto

```
npm run dev
```
ou
```
yarn dev
```

Acesse http://localhost:3000/ no seu navegador.