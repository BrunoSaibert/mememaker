![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc545a02-72d7-4b34-927d-0b825053d248/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc545a02-72d7-4b34-927d-0b825053d248/Untitled.png)

# Aplicação MemeMaker

Aplicação Front-end de gerador de memes

[https://img.shields.io/badge/license-MIT-2ecc71](https://img.shields.io/badge/license-MIT-2ecc71)

[https://img.shields.io/badge/Made%20by-Bruno%20Henrique%20Saibert-2ecc71](https://img.shields.io/badge/Made%20by-Bruno%20Henrique%20Saibert-2ecc71)

[https://img.shields.io/badge/Follow%20up-brunohenriquesaibert-2ecc71?style=social&logo=linkedin](https://img.shields.io/badge/Follow%20up-brunohenriquesaibert-2ecc71?style=social&logo=linkedin)

## 🚀 Projeto

O objetivo tem a finalidade de desenvolver um app para gerar memes utilizando uma API externa.

A aplicação consiste um projeto web utilizando ReactJS e Styled Components que consomem a API disponibilizada pelo site [https://imgflip.com/](https://imgflip.com/), documentação da API [https://api.imgflip.com/](https://api.imgflip.com/).

Rotas:

- [https://api.imgflip.com/get_memes](https://api.imgflip.com/get_memes), gera a listagem de imagens.
- [https://api.imgflip.com/caption_image](https://api.imgflip.com/caption_image), adiciona os textos na imagem selecionada.

Para gerar a imagems com o texto, é necessário criar uma conta e passar os dados conforme a documentação.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d71023-6214-4a7d-9623-87dd062fc29f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d71023-6214-4a7d-9623-87dd062fc29f/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d557109-da10-45af-9774-1f924dae9084/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d557109-da10-45af-9774-1f924dae9084/Untitled.png)

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
