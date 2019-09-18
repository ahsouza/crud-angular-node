### DEMO projeto de entrevista da empresa ADSOFT

##### Pre-Requirements

- Linux/Windows
- Node.JS
- MongoDB
- Docker (Instalação do Docker não é necessária, mas é uma ótima sugestão para o Desenvolvimento Local Ágil)

1. Baixe e instale [Docker](https://docs.docker.com/docker-for-windows/install/) (Não é obrigatório)
2. Baixe e instale [Node.JS](https://nodejs.org/en/download/)
3. Baixe e instale [MongoDB](https://www.mongodb.com/download-center/community)
4. Após a instalação, baixe ou clone o repositório atual: https://github.com/ahsouza/crud-angular-node


##### Utilizando **Docker** para servidor de Banco De Dados

###### Baixando a imagem MongoDB

```sh
docker pull tutum/mongodb
```

###### Criando container para servir o Banco De Dados sem autenticação

```sh
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
```

###### Liste todos containers que ainda não foram executados:

```sh
docker ps -a
```

###### Inicie o container com o ID que pertence a ele:

```sh
docker start 89b903780b83
```

###### Em Sistemas Operacional Linux Ubuntu/Debian é preciso instalar o server-client do MongoDB:

```sh
sudo apt install mongodb-clients
``` 


###### Entre no projeto raíz e segue as etapas de comandos para execução da Aplicação localmente

###### Baixando dependências Back-End
```sh

npm install
```

###### Instalando **Bower**: Gerenciador de dependências Front-End
```sh

npm install bower@1.3 -g
```

###### Baixando dependências Front-End
```sh

bower install
```

###### Execute o comando abaixo para levantar a aplicação
```sh

node server.js  |  npm start
```

###### Acesse o client servidor do Banco De Dados e veja o DB criado:
```sh
mongo
```