# Используем официальный образ Node.js (LTS-версия)
FROM node:22-alpine

# Создаём рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install


# Копируем все файлы проекта (кроме тех, что указаны в .dockerignore)
COPY . .

RUN npx prisma generate

# Указываем порт, на котором будет работать приложение
EXPOSE 2504

# Собираем проект
RUN npm run build

# Запускаем приложение
CMD ["npm", "start"]