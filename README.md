# 🚀 Duacoders API

API desarrollada con **Node.js** y **NestJS**, siguiendo una **arquitectura hexagonal**. Usa **MySQL** como base de datos y se ejecuta fácilmente con **Docker**.

---

## 📌 Características principales

✅ Arquitectura **Hexagonal**  
✅ **Autenticación JWT** para proteger endpoints  
✅ **CRUD de Duacoders**  
✅ **Base de datos MySQL en Docker**  
✅ **Control de excepciones y logs**  
✅ **Swagger para documentación**  
✅ **Migraciones con TypeORM**  

---

## 🛠 Tecnologías utilizadas

| Tecnología    | Descripción                             |
|---------------|-----------------------------------------|
| **Node.js**   | Entorno de ejecución de JavaScript      |
| **NestJS**    | Framework progresivo para Node.js       |
| **TypeScript**| Lenguaje tipado para JavaScript         |
| **TypeORM**   | ORM para manejar la base de datos       |
| **MySQL**     | Base de datos relacional                |
| **Docker**    | Contenedores para la aplicación y BBDD  |
| **Swagger**   | Documentación interactiva de la API     |

---

## 🚀 Cómo levantar la aplicación con Docker

### 📦 1. Clonar el repositorio

`git clone https://github.com/tu-usuario/duacoders-api.git`

`cd DuacodersApi`


### 🐳 2. Iniciar los contenedores

`docker-compose up --build`

Esto levantará:  
✅ API en `localhost:3000`  
✅ MySQL en `localhost:3306`

### 🔑 Credenciales por defecto

#### 📂 Base de datos

| Parámetro | Valor     |
|-----------|-----------|
| **Host**  | localhost |
| **Puerto**| 3306      |
| **Usuario**| root     |
| **Contraseña**| password |
| **BBDD**  | duacoder_db |

#### 🔐 Usuario API
`{
  "username": "root",
  "password": "password"
}`
#### 📖 Acceder a la documentación Swagger

La documentación está disponible en:  
🔗 [http://localhost:3000/api](http://localhost:3000/api)

---

## 🛡️ ¿Cómo autenticarte en Swagger?

1️⃣ Realiza la petición POST a `/auth/login` con las credenciales proporcionadas.  
2️⃣ Copia el `access_token` de la respuesta.  
3️⃣ En Swagger, haz clic en "Authorize" y pega el token así:

`<access_token>`

4️⃣ ¡Ahora puedes usar todos los endpoints protegidos!

---
## 📂 Estructura del proyecto

```
duacoders-api
├─ 📁 docker
|  └─ 📄 docker-compose.yml
├─ 📄 package.json
├─ 📄 README.md
├─ 📁 src
│  ├─ 📁 application
│  │  ├─ 📁 services
│  │  ├─ 📁 use-cases
│  │  └─ 📁 utils
│  ├─ 📁 domain
│  │  ├─ 📁 models
│  │  └─ 📁 repositories
│  ├─ 📁 infrastructure
│  │  ├─ 📁 adapters
│  │  ├─ 📁 bbdd
│  │  ├─ 📁 config
│  │  ├─ 📁 http
│  │  └─ 📁 security
│  ├─ 📁 migrations

```
---

## 🗃️ Migraciones

### 📝 Crear una migración

`npm run migration:generate -- -n NombreDeLaMigracion´
# 🚀 Ejecutar migraciones

`npm run migration:run´

---

## 🛠️ Comandos útiles

| Comando                     | Descripción                              |
|-----------------------------|------------------------------------------|
| `npm install`               | Instala las dependencias                 |
| `npm run start:dev`         | Levanta la API en modo desarrollo        |
| `npm run build`             | Compila el proyecto                      |
| `npm run migration:generate`| Genera nuevas migraciones                |
| `npm run migration:run`     | Ejecuta las migraciones                  |
| `docker-compose up --build` | Levanta la app y la base de datos        |
| `docker-compose down`       | Apaga los contenedores                   |

---

## 🐞 Logs y manejo de errores

🔎 La API cuenta con:  
✅ Logs informativos y de error  
✅ Control de excepciones para respuestas claras  

---

## 🧪 Testing

Funcionalidad en desarrollo... 🧬
`(Algunos test estan disponibles como ejemplo)`
---

## 🎯 Contacto

📧 Email: jmortegabarrera@gmail.com 

🐙 GitHub: https://github.com/jmortegabarrera

---

## ❤️ Agradecimientos

Gracias por usar Duacoders API 🚀 ¡Esperamos que te sea útil!

