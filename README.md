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

   Para conteudo diferente altere o caminho no arquivo index.tsx

   Na ultima versão os dados vem de um servidor HTTP:

   Os dados são capturados do servidor online no seguinte endpoint:

   ```link
   https://servidor-posts.onrender.com/posts
   ```

4. Nome pode ser carregado previamente

   Criando a variável: _usuario_ no LocalStorage, com o conteúdo sendo um Dicionário JSON seguindo a seguinte estrutura:

   ```JSON
   {"id":1,"nome":"NOME DESEJADO"}
   ```

5. O projeto do SERVIDOR com os dados está disponível no GitHub:

   [GitHub - servidor-posts](https://github.com/JoaoPalmasBR/servidor-posts)

   ```link
   https://github.com/JoaoPalmasBR/servidor-posts
   ```
