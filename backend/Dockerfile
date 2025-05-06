# Étape 1 : Compilation TypeScript
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de config et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code et compiler
COPY . .
RUN npm run build

# Étape 2 : Image de production
FROM node:20-alpine

WORKDIR /app

# Copier uniquement le build final
COPY --from=builder /app/dist ./dist
COPY package*.json ./

RUN npm install --only=production

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/index.js"]
