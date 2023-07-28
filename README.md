
# API Rest para Franquia Veterinária

Primeiro desafio oferecido pelo estagio (Node.js) - AWS Cloud Context - Compass UOL.     
O desafio simula um cenário em que este microsserviço será utilizado por todas as clínicas próprias para gestão de clientes internos e atendimentos.
As bases POC desse novo microsserviço devem ser construidas,
para que a equipe comercial e gerencial tenha a visão técnica primária das necessidades do cliente.
<details>
<summary>

## Técnologias
</summary>
</details>

• TypeScript        
• Node.js        
• Express        
• MongoDB


<details>
<summary>

## Funcionalidades e Requerimentos Base
</summary>

✅ Retorna todos os clientes cadastrados        
✅ Cadastra clientes       
✅ Atualiza clientes     
✅ Deleta clientes   
✅ Cadastra um pet e o adiciona a um cliente   
✅ Atualiza um pet  
✅ Deleta um pet

        
## Requerimentos para a Avaliação

• Legibilidade        
• Repositório privado        
• Pequenos commits     
• Commits padrões     
• TypeScript    
• Express  
• Readme.md   
• Explicação de como executar localmente     
• Compartilhar o acesso do repositório com os instrutores para avaliação.

</details>

<details>
<summary>

## Como Executar Localmente
</summary>

Para executar o projeto localmente siga o passo a passo abaixo:

1 - Verifique se você possuí Node.js e git instalados em sua máquina. Caso não tenha, baixe a versão de node compativel com sua máquina clicando [aqui](https://nodejs.org/en/download). E a de git [aqui](https://git-scm.com/downloads). (Caso tenha que baixar git você terá que configura-lo para para ativar no terminal do VS Code)

2 - Copie o link fornecido no botão <>Code desse repositório. Vá até o terminal do Vs Code e use o comando **git init** para iniciar um repositório e em seguida use o comando **git clone <link obtido>**.

3 - Altere o diretório atual com o comando **cd <pasta do repositório>**

4 - Use o comando **npm install** para instalar todas as dependências necessárias.

5 - Agora renomeie o arquivo .env.example e adicione sua string de conexão fornecido pelo mongoDB junto da frente de MONGO_URL= 

6 - troque <password> pela senha de acesso ao seu banco de daos e entre "/?" insira o nome do banco.

7 - Use o comando **npm start** no terminal do VS Code para inicializar o programa

8 - Abra um aplicativo de suporte à documentação das requisições feitas por APIs como o Postman ou Insomnia.

9 - Crie as seguintes rotas:

• Rota responsável por mostrar tutores e seus pets:   
GET - http://localhost:3000/api/clients/tutors 

• Rota responsável por inserir tutores:     
POST - http://localhost:3000/api/clients/tutor      

• Rota responsável por atualizar tutores:           
PUT -  http://localhost:3000/api/clients/tutor/:id          

• Rota responsável por deletar tutores:         
DELETE  -  http://localhost:3000/api/clients/tutor/:id          

• Rota responsável por inserir um pet em um tutor:          
POST - http://localhost:3000/api/clients/pet/:tutorid           

• Rota responsável por atualizar um pet e consequentemente a lista de pets de seu tutor:            
PUT  - http://localhost:3000/api/clients/pet/:petid/tutor/:tutorid      

• Rota responsável por deletar um pet atrelado a um tutor:          
DELETE  -  http://localhost:3000/api/clients/pet/:petid/tutor/:tutorid      

10 - Para o uso efetivo insira os parâmetros da rota Post responsável por inserir o tutor primeiro de acordo com o exemplo:

<img width="" height="" src="https://github.com/MotahPedro/Compass-Desafio-1/assets/111978930/59515a85-f816-492d-a121-837e8ad11cb8">
</p>

11 - A rota GET não necessita de nenhum parâmetro. Para ela ter sucesso é necessário haver passado ao menos um tutor pela rota.

12 - As rotas PUT requerem a inserção dos parâmetros que devem ser mudados além é claro dos ids do tutor para a de atualizar tutor e ids do tutoe e pet para atualizar um pet. De forma similar ao POST, porém aqui elas irão sobrescrever as informações anteriores. Exemplo:

<img width="" height="" src="https://github.com/MotahPedro/Compass-Desafio-1/assets/111978930/fdec4b5b-9d88-4334-bf56-8627a3bd35f0">
</p>

13 - As rotas DELETE apenas irão requerir os ids de acordo com o que quer deletar. Id de tutor para deletar um tutor, e id de tutor e pet para deletar um pet. Exemplo:

<img width="" height="" src="https://github.com/MotahPedro/Compass-Desafio-1/assets/111978930/b5e5f871-468f-471e-b0e3-82cec27f7b24">
</p>

</details>

<details>
    <summary> 

## SMs e Instrutores

</summary> 

### Scrum Masters:

- [Alisson Morais](https://www.linkedin.com/in/alisson-morais-642870238/)

- [Yago Felipe Lopes](https://www.linkedin.com/in/yago-lopes-7b78a580/)

### Instrutores:

- [Rafael Menegon](https://www.linkedin.com/in/rafael-menegon/)

- [Jonatan Machado](https://www.linkedin.com/in/jonatan-machado/)

- 2 Instrutores não encontrados.

</details>

<details>
<summary>

## Referências
</summary>

 - [Mongoose Guide](https://mongoosejs.com/docs/guides.html)
 - [JavaScript Guide](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
 - [TypeScript Guide](https://www.typescriptlang.org/docs/handbook/intro.html)
</details>

<details>
  <summary> 

  ## Observações finais pós-execução :bookmark_tabs:
  
  </summary>

| | Notas |
| ----- | ----- |
| SoftSkills | - |
| HardSkills | - |

Pontos de melhorias apresentados:
- [ ]
- [ ]
</details>