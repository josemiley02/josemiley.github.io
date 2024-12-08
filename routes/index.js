// routes/index.js
const express = require('express');
const router = express.Router();

let nombres = ['A', 'B', 'C'];
let destinatarios = {};

router.post('/agregar-nombre', (req, res) => {
  const { nombre } = req.body;
  if (!nombres.includes(nombre)) {
    nombres.push(nombre);
  }

  if (!destinatarios[nombre]) {
    const otroNombre = obtenerPareja(nombre);
    destinatarios[nombre] = otroNombre;
  }

  res.json({ message: `Hola, ${nombre}, tu le regalas a: ${destinatarios[nombre]}` });
});

function obtenerPareja(nombre) {
  let disponibles = nombres.filter(n => n !== nombre && !Object.values(destinatarios).includes(n));
  if (disponibles.length === 0) return "Nadie disponible";

  let otroNombre = disponibles[Math.floor(Math.random() * disponibles.length)];
  return otroNombre;
}

module.exports = router;