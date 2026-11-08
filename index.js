const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Привіт! Мій додаток успішно працює в Docker!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});