# Usa a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Compila a aplicação (caso use TypeScript)
RUN npm run build

# Expõe a porta usada pelo NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
