# yScripter API - Guia de Configuração

Siga as instruções abaixo para configurar o **yScripter** no ambiente de desenvolvimento de backend.

## Requisitos do Sistema
- [Python 3.11.3 ou superior](https://www.python.org/downloads/release/python-3113/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [Google Gemini API Key](https://ai.google.dev/gemini-api/docs?hl=pt-br)

## Configuração do Ambiente

1. **Instalação do Python:** Se você ainda não tem o Python instalado, faça o download e instale a versão 3.11.3 ou superior a partir do [site oficial do Python](https://www.python.org/downloads/).

2. **Instalação do Flask:** Utilize o pip, o gerenciador de pacotes do Python, para instalar o Flask executando o seguinte comando no terminal ou prompt de comando:

    ```bash
    pip install flask
    pip install flask_cors
    ```
3. **Instalação do Pillow:** Para trabalhar com imagens usando a biblioteca PIL (Python Imaging Library), é necessário instalar o Pillow. Execute o seguinte comando:
    ```bash
    pip install Pillow
    ```

4. **Obtenção da Chave da API do Google Gemini:** Antes de prosseguir, é necessário obter uma chave de API do Google Gemini. Siga as instruções fornecidas pela Google para [criar uma chave de API](https://aistudio.google.com/app/apikey).

## Configuração da API

1. **Clonagem do Repositório:** Clone o repositório da API yScripter do GitHub para sua máquina local:

    ```bash
    git clone https://github.com/wilerjrxd/YScripterPoweredByGoogleGemini.git
    ```

2. **Configuração da Chave da API:** Após obter a chave da API do Google Gemini, como variável de sistema com o nome `GOOGLE_API_KEY`.

3. **Execução da API:** Execute os seguintes comando para iniciar a API:

    ```bash
    cd yscripter-api
    python app.py
    ```

    A API será iniciada e estará acessível em `http://localhost:5000`.

## Configuração do Frontend

Para configurar e executar o frontend do yScripter, consulte as instruções fornecidas no [README](../yscripter-app/README.md) do diretório yscripter-app.