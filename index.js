const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Налаштування підключення до бази даних PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'mydb',
  port: 5432,
});

// Перевірка з'єднання з базою даних
pool.connect()
  .then(() => console.log('Успішне підключення до PostgreSQL!'))
  .catch(err => console.error('Помилка підключення до бази даних', err.stack));

app.get('/', (req, res) => {
  res.send('Привіт! Мій додаток успішно працює в Docker разом із PostgreSQL!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});