FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 2: Production
FROM node:22-alpine AS production
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/*.js ./
COPY --from=builder /app/*.json ./
#COPY --from=builder /app/package.json ./
RUN npm install --only=production
RUN npx prisma generate
CMD ["npm", "start"]