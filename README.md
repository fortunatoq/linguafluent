# LinguaFluent

📚 Plataforma de aprendizaje de inglés online basada en IA.

## 📁 Estructura del Proyecto

- `client/` — Frontend en React + Tailwind CSS.
- `server/` — Backend en Node.js + Express + PostgreSQL.
- `netlify.toml` — Configuración para despliegue en Netlify.

## 🔧 Tecnologías Usadas

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, Sequelize, PostgreSQL
- **Despliegue:** GitHub + Netlify (frontend), Render/Railway (backend)

## 🚀 Despliegue

### Frontend (Netlify)
- [https://linguafluent.netlify.app](https://linguafluent.netlify.app) *(ejemplo)*
- Crea sitio en [https://app.netlify.com](https://app.netlify.com) usando este repositorio.

### Backend (Render / Railway)
- Usa el mismo repositorio, pero apunta al directorio `server/`.
- Ejemplo de URL: `https://linguafluent-backend.onrender.com`

## 🛠️ Instrucciones Locales

```bash
# Clonar el repositorio
git clone https://github.com/fortunatog/linguafluent.git
cd linguafluent

# Instalar dependencias
cd client
npm install
cd ../server
npm install

# Ejecutar backend (en otra terminal)
node server.js

# Ejecutar frontend
cd client
npm start
