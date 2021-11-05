# On14-TodasEmTech-s12-BD-Integracao

 ## Apresentação

<br>
<img src="https://pa1.narvii.com/6542/b759ad59ea88956c1416453d58c22b86cbbbffa9_hq.gif"
     alt="Chopper Feliz" width="500"
/>
<br>
<br>
<br>
<br>
<br>

## Bio
<br>
Meu nome é Beatriz, atuo como pessoa desenvolvedora back-end na Creditas e curso ADS no Senac, sou ex-aluna da reprograma . Em 2019 tive que não só iniciar uma transicão de carreira, mas de genero também, então tive que aprender muita coisa até chorar,e durante esse processo eu aprendi muito me conheci melhor.  Gosto de passar meu tempo livre jogando ou vendo um pirata que estica, eu tive um contato muito cedo com a programação e amo por paixão o meu JS.  

<br>
<br>

## recadinho da professora 
 - Bebam água meninas
 - Sinta-se a vontade para fazer perguntas, pode perguntar pelo chat também ou perguntar as monitoras
 - Qualquer pergunta é válida.
 - Pode deixar a camera aberta para a prof não se sentir sozinha

<br>
<br>
<br>
 
## Conteúdo da Aula
 - Introdução ao Banco de Dados
 - SQL vs NoSQL
 - Introdução ao MongoDB
 - Introdução ao Mongoose
 - Projeto Prático

<br>
<br>



## Introdução ao Banco de Dados

Banco de dados é a organização e a armazenagem de informações sobre determinada aplicação.

Pensando em back-end, ele é fundamental para o funcionamento adquado de nossas aplicações, pois precisamos salvar dados dos nossos clientes.

### Motivos para utilizar um Banco de Dados

 - Salvar dados da aplicação
 - Deixa a aplicação escalavel
 - Desempenho
 - Segurança
 - Confiabilidade

<br>

### Banco de dados SQL vs NOSQL

| SQL | NOSQL | 
| ----------- | ----------- |
Os bancos de dados SQL, também conhecidos como bancos de dados relacionais, foram projetados para armazenar dados que possuem um esquema estruturado, surgiu devido a necessidade de um sistema mais barato e eficiente para armazenar dados.|  Surgiu como alternativa aos bancos relacionais, o MongoDB uns do mais conhecido, foi lançado aproximadamente em 2009. 
| Bancos de dados relacionais são  compostos por tabelas que possuem relacionamento entre si, essas tabelas possui colunas(columns) e linhas(rows), que são  a forma que os dados são  organizados | Banco de dados não relacionais são  compostos por dados não estruturados, no MongoDB  por exemplo, possuímos Collections que são coleção  de documentos e os  documentos são armazenados são os documentos em formato JSON, possuindo uma chave e valor. |
| O cenário para o uso do SQL e quando necessitamos  de dados precisamente estruturados com relação entre si | Um cenario ideal para uso do NOSQL quando uma BigData por exemplo, que precisamos que a aplicacao tenha um bom desepenho e escale horizontalmente |



<br>
<br>


## Introdução ao MongoDB

O MongoDB é um banco de dados direcionado a Documentos  e de código aberto, sendo  multiplataforma. Foi escrito na linguagem C++ e é classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON para o registro dos dados.

```javascript
 // Document - Pessoa
 {
     nome: String,
     idade: Number,
     profissao: Array
     rg: Object
 }
```


### Databases

A database é a camada superior que tem como finalidade separar as informações por collections.

<br>
<br>
<br>

### Collections

A Collection é aonde ficam armazenados os documentos, similar a um array. Fazendo um comparativo ao SQL, ela seria proximo a uma Tabela, no entanto, ela não possui as limitações da mesma.
<br>

```javascript
 [
      {
        nome: "Beatriz",
        idade: 24,
        profissao: ["Desenvolvedora Back-end", "Professora"]
     },
    {
        nome: "",
        idade: 0,
        profissao: [],
        formação: "",
        altura: ""
     }
]

```

### Documentos

A estrutura do documento é muito similar a um objeto javascript, possuindo chave-valor.
```javascript
 // document
 {
     nome: "Beatriz",
     idade: 24,
     profissao: ["Desenvolvedora Back-end", "Professora"]
 }
```
<br>
<br>

### Comparativo de termos e conceitos

<img src="https://ichi.pro/assets/images/max/724/0*rlLOjmeLlGQyzETu.png">

<br>
<br/>

Relação de metodos com o `CRUD`

| OPERAÇÃO | MONGODB | DESCRIÇÃO
| --- | --- | --- |
| **C**REATE | db.insertOne() | cria um documento |
| **R**EAD | db.find() | ler um documento |
| **U**PDATE | db.updateOne() | atualiza um documento |
| **D**ELETE | db.deleteOne() | deleta um documento |

<br>
<br>
<br>

## Mongo Atlas
Mongo Atlas é um banco de dados em Cloud, atualmente é o lider de banco de dados, devido sobretudo a sua facilidade de uso, desempenho e escalabilidade.

Seu banco fica armazenado em Cluster que é um espaço numa VM que o seu banco de dados fica hospedado.

[Como criar um Cluster documentação](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/)

 ### Contectando o banco com Mongo Atlas

<br>
<br>
<br>

## Mongo COMPASS

MongoDB Compass é uma interface gráfica poderosa para consultar, agregar e analisar seus dados MongoDB em um ambiente visual.

É possivel analisar as base de dados já existente bem como inserir ou exportar dados, em formato JSON ou CSV

### Conectando o banco ao MongoCompass

<br>
<br>
<br>

# Introdução ao  Moogose

Mongoose ORM/ODM é uma ferramenta de modelagem de dados para Mongo, ele permite facilitar a armazenagem e modelamento de dados, bem como facilita a busca de documentos e a segurança do banco.

*Termos/Conceitos*
- `ORM` Mapeamento objeto-relacional é uma técnica de desenvolvimento utilizada para fazer uma `relação dos objetos` com os dados que eles representam. 
- `ODM` Object Data Model , modela os dados baseado em Orientação a Objeto `OOP`

<br>
<br>
<br>

### URI

`uri` é uma parte da URL, ela pode ser um trecho específico relacionado a configuração de um banco de dados por exemplo.

 Abaixo um exemplo em javascript

```javascript
const MONGO_URI = "mongodb://localhost:27017/reprogramaMusic"
```

### Criando a função de conexão

```javascript
const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('Banco de dados conectado')
    } catch (error) {
        console.error(error)
    }
}

```

### Exportando a função de conexão



```javascript
module.exports = { connect }
```

### Conectando ao banco

```javascript
const db = require('dbconfig.js')
db.connect()
```
<br>
<br>

## Schema/Model

Schema ou model é o nosso modelo de dados, assim podemos mapear o nossa model, exemplo: uma Pessoa, ela possui um nome, sobrenome, uma data de nascimento...


### Criando o Schema/Model
Quando criamos a nossa Schema, precisamos definir a tipagem da propriedade bem como as regras, existe cenarios que o campo é requirido, que o campo é unico e sucessivamente.

| Tipo | Definição | Exemplo de uso
| --- | --- | --- |
| **String** | texto | para nomes, email, senhas... |
| **Number** | numero | para idades, likes, contadores... |
| **Date** | data | data de criação, data de modificação... |
| **Array** | array que seria equivalente a lista | lista de objetos, como por exemplo: Filmes,  Profissão, Comentários, etc |

... e outros tipos do Javascript

<br>
<br>

Exemplo de uso em javascript

```JAVASCRIPT
const Schema = new mongoose.Schema({
    artista: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
 })

```
### exportando nosso Schema ou seja nossa model e criando a collection

```javascript
module.exports =  mongoose.model('musica', Schema)
```	

## Métodos do CRUD com Moogose
vamos conhecer o basico do mongoose

###  Obter toda a coleção
Ao utilizar esse metodo retornamos todos as musicas da collection

```javascript
const musica = await Musica.find()
```

### Busca com parametros
Caso queira filtrar algum dado da collection, basta passar um objeto como parametro para o metodo find

```javascript
const musica = await Musica.find({
    artista: req.query.artista,
    titulo: req.query.titulo,
    album: req.query.album,
    ano: req.query.ano,
})

```	

###  obter somente uma musica(document) da collection por ID

```javascript
const musica = await Musica.findById(req.params.id)	
```

### salvar um documento na collection

```JAVASCRIPT
const musica =  Musica.create({
    artista: req.body.artista,
    titulo: req.body.titulo,
    album: req.body.album,
    ano: req.body.ano,
})

await musica.save()

```


### deletar um documento da collection

```javascript
const musica = await musica.delete()
```	

Resumo dos métodos vistos até aqui.

| OPERAÇÃO | MONGODB | MONGOOSE
| --- | --- | --- |
| **C**REATE | db.insertOne() | musica.save()  |
| **R**EAD | db.find() | musica.find() |
| **U**PDATE | db.updateOne() | musica.save() |
| **D**ELETE | db.deleteOne() | musica.delete() |

<br>
<br>
<br>

### Dotenv 

Variaveis de ambiente permite que a desenvolvedora tenha maior controle e segurança sobre a aplicação, permite por exemplo salvar uma senha do banco de dados.  Para essa nosssa API,  utilizaremos o dontenv-safe, que adiciona uma camada adicional de segurança para o desenvolvedor.


Para instalar o dotenv-safe, basta utilizar o comando:

```
npm install dotenv-safe
```

Para habilitar as variaves de ambiente.


```javascript
require('dotenv-safe').config()


// para utiliza-la
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
```

### Para decrarar as variaves basta criar um arquivo `.env` e um arquivo  `.env.example.`

No arquivo .env salvamos as variaveis de ambiente.

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/reprogramaMusic
```
No arquivo `.env.example` salvamos somente a variavel vazia para que o proximo desenvolvedor que baixar o projeto, saber que precisa definir essas variaveis.

```	
MONGODB_URI
PORT
```
<br>
<br>
<br>

## Hora de criar nossa API e integrada-la ao nosso banco de dados

### Arquitetura da nossa API

```
ReprogramaMusic             
├─ src                       
│  ├─ controllers            
│  │  └─ musicController.js  
│  ├─ database               
│  │  └─ mongoConfig.js      
│  ├─ models                 
│  │  └─ musicSchema.js      
│  ├─ routes                 
│  │  └─ musicRouter.js      
│  └─ app.js                 
├─ package-lock.json         
├─ package.json  
├─ .gitignore   
├─ README.md        
└─ server.js          

```      


### Dependências que serão utilizadas
| Dependencia | Descrição |
| ----------- | ----------- |
| Express | Framework para construção de micro-serviços com Node |
| Cors | Expoe nossa api a outros dominios |
| Mongoose | Uma lib ORM/ODM que facilita a criação de modelos de dados para o MongoDB. |
| dotenv-safe | Garante que todas as variáveis ​​de ambiente necessárias sejam definidas após a leitura |
| nodemon | Recarrega nossa API, cada vez que fazemos uma alteração no código  |


### ROTAS DA NOSSA API
 - [GET] /musicas 
 - [POST] /musicas/create
 - [PUT] /musicas/:id
 - [DELETE] /musicas/:id
 - [GET] /musicas/:id


<br>
<br>
<br>
<br>
<br>
<br>


### Videos de apoio

- [Resumo MongoDb Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [NODEjs Express Mongo](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados](https://www.youtube.com/watch?v=Ofktsne-utM)


<br>
<br>
<br>

### Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://medium.com/tkssharma/node-js-with-mongoose-odm-9697c09665df
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://dzone.com/articles/sql-vs-nosql
- https://mongoosejs.com/docs/index.html

<br>
<br>
<br>

# Trabalho entegrável

vamos fazer um API dos cantores das musicas?

O entregável obrigatório consiste em um getAll, getById e um Post. Caso queira e se sinta confortável pode fazer um CRUD completo.




### Sugestão de Rotas
[GET]  "artistas/all"   - retorna todos os autores de <br>
[GET] "artistas/{id}" - retorna um unico autor por id <br>
[POST] "artistas/create" - cria um novo autor <br>


### Sugestão de Schema

```javascript
    {
        artista : string,
        likes: number,
        deslikes: number,
        musicas: array, // ["musica1", "musica2", ...]

    }
```


# Obrigada!

<img src="https://i.pinimg.com/originals/ed/67/0a/ed670a8b6b14dce2f0f580a3409aa46d.gif" width="400" alt="luffy">

Qualquer dúvida pode entrar em contato. 
<br>
<br>

### Me encontre nas Redes

[Instagram - @isjanebia](https://www.instagram.com/isjanebea/) <br>
[Linkedin - Beatriz Ramerindo](https://www.linkedin.com/in/beatriz-ramerindo/)<br>
[Telegran - @littlejanne](https://t.me/littlejanne)

### instalação do Mongo

- [download](https://www.mongodb.com/try/download/community)