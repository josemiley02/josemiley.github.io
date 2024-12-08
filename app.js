// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Rutas
const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

