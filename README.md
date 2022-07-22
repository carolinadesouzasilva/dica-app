# Dicas para devs

## Sobre este projeto
Segundo trabalho do módulo 4 da Resilia Educação. Consiste em uma aplicação que recebe e armazena dicas, além de dar dicas aleatórias, que estão previamente armazenadas no banco de dados, ao usuário.

## Tecnologias e métodos utilizados
- JavaScript
- NodeJs
- CRUD
- MVC
- API REST

## Executando o projeto

O sistema operacional utilizado foi o Windows 10

Você consegue ver este projeto funcionando fazendo um clone deste repositório:

> git clone https://github.com/carolinadesouzasilva/dica-app.git

## Requisitos
Você precisa de uma IDE para executar este código. Exemplo:
> https://code.visualstudio.com/

Versão do NodeJs utilizada: 16.15.1

Você pode fazer o download do Node Js aqui:
> https://nodejs.org/en/

Para testar a a API foi necessário utilizar o Postman.Link para download abaixo:
> https://www.postman.com/

Comando utilizado no terminal para instalar as dependências necessárias ao projeto:

> npm install

## Rotas
As opções de rotas para os verbos HTTP GET e POST

### GET
Para receber uma dica
> http://localhost:3000/dica

``` 
{
 "dica": "Aprenda banco de dados",
 "autor" :"Carolina"

  }
```

### POST
Para adicionar uma dica

> http://localhost:3000/criar

```
[

 {
      "dica": "Aprenda banco de dados",
        "autor": "Carolina"
  },   
   {
       "dica": "Aprenda lógica de programação",
        "autor": "Carolina"
    }
 
 ]
 ```
 
 ## Autor
 
 [@carolinadesouzasilva](https://github.com/carolinadesouzasilva)
