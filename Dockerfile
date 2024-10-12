# FROM node:20-alpine
# WORKDIR /app
# COPY . .
# # COPY ./.env.production ./.env
# # RUN npm install --quiet --no-optional --no-found --loglevel=error
# # RUN npm run build
# # EXPOSE 3000
# # CMD [ "npm", "run", "start:dev" ]

# # FROM node:20-alpine

# # # WORKDIR /app
# # WORKDIR /usr/src/app

# # COPY package*.json ./

# # RUN npm install

# # COPY . .

# # # Compila o projeto (caso esteja usando TypeScript)
# # RUN npm run build

# # # Expõe a porta que o aplicativo vai rodar
# # EXPOSE 3000

# # CMD ["npm", "run", "start:dev"]

FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]