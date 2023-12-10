# FROM node:20-alpine3.17

# WORKDIR /usr/app
# COPY src /usr/app/src
# COPY package*.json /usr/app
# COPY tsconfig*.json /usr/app
# # COPY index.html /usr/app
# COPY api /usr/app/api


# RUN npm install 
# RUN npm run build 


# RUN rm -rf node_modules      
# RUN rm -rf src      
# RUN mv dist api2

# WORKDIR /usr/app/api
# RUN npm install



# EXPOSE 4200
# CMD ["node" ,"index.js"]

# Загрузка базового образа Node.js
FROM node:20-alpine3.17 as build-step
 
# Создание и установка рабочей директории
WORKDIR /app
 
# Установка зависимостей
COPY package*.json ./
RUN npm install
 
# Копирование исходного кода
COPY . .
 
# Сборка приложения
RUN npm run build --dev

FROM nginx:1.17.1 as runtime
COPY --from=build-step /app/dist/client /usr/share/nginx/html
 
# Запуск сервера Angular
# CMD ["npm", "run", "start"]