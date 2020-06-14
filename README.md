<p align="center">
    <img alt="MemeMaker" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fc545a02-72d7-4b34-927d-0b825053d248/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200614T203604Z&X-Amz-Expires=86400&X-Amz-Signature=c82eccef07d2c66c7a9c2ccafd893a9a983bfbe809b74a26ef61f5177ccf3eef&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22" width="200px" />
</p>

<h1 align="center">
  Aplicação MemeMaker
</h1>

<p align="center">Aplicação Front-end de gerador de memes</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-191A1E">

  <a href="https://github.com/BrunoSaibert">
    <img alt="Made by Bruno Henrique Saibert" src="https://img.shields.io/badge/Made%20by-Bruno%20Henrique520Saibert-191A1E">
  </a>

  <a href="https://linkedin.com/in/brunohenriquesaibert">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-brunohenriquesaibert-191A1E?style=social&logo=linkedin">
  </a>
</p>

## 🚀 Projeto

O projeto tem a finalidade de desenvolver um app para gerar memes utilizando uma API externa.

A aplicação consiste um projeto web utilizando ReactJS e Styled Components que consomem a API disponibilizada pelo site [https://imgflip.com/](https://imgflip.com/), documentação da API [https://api.imgflip.com/](https://api.imgflip.com/).

Rotas:

- [https://api.imgflip.com/get_memes](https://api.imgflip.com/get_memes), gera a listagem de imagens.
- [https://api.imgflip.com/caption_image](https://api.imgflip.com/caption_image), adiciona os textos na imagem selecionada.

Para gerar a imagems com o texto, é necessário criar uma conta e passar os dados conforme a documentação.

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a9d71023-6214-4a7d-9623-87dd062fc29f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200614T203631Z&X-Amz-Expires=86400&X-Amz-Signature=e1d1fb735e02a4460005b0921b70cfb499b694ef21293eb63566d00f1206214e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a9d71023-6214-4a7d-9623-87dd062fc29f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200614T203631Z&X-Amz-Expires=86400&X-Amz-Signature=e1d1fb735e02a4460005b0921b70cfb499b694ef21293eb63566d00f1206214e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

![https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d557109-da10-45af-9774-1f924dae9084/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200614T203703Z&X-Amz-Expires=86400&X-Amz-Signature=2a7f93fa4146de15d6b32098d57d70ec800d59ed88b8f4cd363574706f714892&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d557109-da10-45af-9774-1f924dae9084/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200614T203703Z&X-Amz-Expires=86400&X-Amz-Signature=2a7f93fa4146de15d6b32098d57d70ec800d59ed88b8f4cd363574706f714892&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

## 💻 Executando a aplicação

Após clonar o repositório, acesse a pasta do projeto

```
$ cd fastfeet
```

Em seguida, instale as dependências

```
$ yarn
```

Criar arquivo `.env` com as credenciais de acesso da api

```
REACT_APP_USERNAME=usename
REACT_APP_PASSWORD=password
```

Inicie o projeto

```
$ yarn dev
```

---

Feito com ♥ by [Bruno Henrique Saibert](https://www.linkedin.com/in/brunohenriquesaibert)
