# Desenvolvendo em REACT NATIVE com Expo 👋

## Iniciando

1. Instale as dependencias

   ```bash
   npm install
   ```

2. Inicialize a aplicação

   ```bash
    npx expo start
   ```


3. Posts são carregados diretamente do caminho:

   ```link
   https://raw.githubusercontent.com/JoaoPalmasBR/minhas-notas-one/refs/heads/master/assets/posts.json
   ```
   Para conteudo diferente altere o caminho no arquivo indes.tsx


4. Nome pode ser carregado previamente

   Criando a variavel: *usuario* no LocalStorage, com o conteudo sendo um Dicionario JSON seguindo a seguinte estrutura:

   ```JSON
   {"id":1,"nome":"NOME DESEJADO"}
   ```
