# 🗂️ Kanban App

Una aplicación tipo Trello que permite organizar tareas en tableros, listas y
tarjetas. Ideal para gestionar proyectos y flujos de trabajo de manera visual e
intuitiva.

## 🚀 Características

- 🔐 Autenticación de usuarios
- 🧱 Soporte para múltiples tableros
- 🧩 Creación de listas
- 📝 Tarjetas con título, descripción y prioridad
- 🧲 Drag and drop entre listas (con `@dnd-kit/core`)
- ⚡ Actualización en tiempo real sin recargar la página
- 💾 Backend con Node.js + Express
- 🎨 Frontend con React, Zustand y Tailwind CSS

---

## 📦 Tecnologías utilizadas

### Frontend

- React
- TypeScript
- Zustand (state management)
- Tailwind CSS
- @dnd-kit/core
- Axios

### Backend

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (para autenticación)
- CORS

---

## 📂 Estructura del proyecto

/frontend └── components/ └── pages/ └── store/ └── services/ └── assets/ └──
App.tsx

/backend └── routes/ └── models/ └── controllers/ └── server.js kanban-app/ ├──
frontend/ │ ├── components/ # Componentes reutilizables (ListContent,
CardContent, Button, etc.) │ ├── pages/ # Vistas principales o páginas
(KanbanContent, etc.) │ ├── services/ # Módulos para hacer peticiones HTTP a la
API (getBoards, getCards, etc.) │ ├── store/ │ │ └── slices/ # Estados globales
manejados con Zustand (UI, kanban, cards, etc.) │ ├── assets/ # Iconos, estilos
personalizados, imágenes, etc. │ ├── App.tsx # Componente raíz de la aplicación
│ └── main.tsx # Punto de entrada del frontend │ ├── backend/ │ ├──
controllers/ # Lógica de manejo para cada recurso (boards, lists, cards) │ ├──
models/ # Esquemas de Mongoose (Board, List, Card, User) │ ├── routes/ # Rutas
de la API agrupadas por recurso │ ├── middlewares/ # Middlewares como
autenticación, manejo de errores, etc. │ ├── config/ # Configuración general
(conexión a MongoDB, etc.) │ ├── server.js # Archivo principal que levanta el
servidor Express │ └── .env # Variables de entorno │ ├── README.md # Este
archivo 📝 └── package.json # Configuración del proyecto raíz (o individual por
frontend/backend)
