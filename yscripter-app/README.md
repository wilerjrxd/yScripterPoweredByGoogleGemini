# yScripter App - Guia de Configuração

Siga as instruções abaixo para configurar o **yScripter** no ambiente de desenvolvimento do frontend yScripter App, uma aplicação Angular desenvolvida para interagir com a API yScripter.

## Requisitos do Sistema
- [Node.js 20.12.2](https://nodejs.org/en/blog/release/v20.12.2) ou [superior](https://nodejs.org/en/download)
- [Angular 17](https://v17.angular.io/guide/setup-local)
- [NPM (Node Package Manager)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Configuração do Ambiente

1. **Instalação do Node.js e NPM:** Se você ainda não tem o Node.js instalado, faça o download e instale a versão 20.12.2 ou superior a partir do [site oficial do Node.js](https://nodejs.org/).

2. **Instalação do Angular CLI:** Após instalar o Node.js, abra o terminal ou prompt de comando e instale o Angular CLI globalmente utilizando o seguinte comando:

    ```
    npm install -g @angular/cli@17
    ```

3. **Clonagem do Repositório:** Clone o repositório do frontend yScripter App do GitHub para sua máquina local:

    ```
    git clone https://github.com/wilerjrxd/yScripterPoweredByGoogleGemini.git
    ```

4. **Instalação das Dependências:** Navegue até o diretório onde o repositório foi clonado e execute o seguinte comando para instalar as dependências do projeto:

    ```
    cd yscripter-app
    npm install
    ```

5. **Execução do Servidor de Desenvolvimento:** Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

    ```
    npm start
    ```

    O servidor será iniciado e estará acessível em `http://localhost:4200`.

## Configuração do Backend

Para configurar e executar o backend do yScripter, consulte as instruções fornecidas no [README](../yscripter-api/README.md) do diretório yscripter-api.