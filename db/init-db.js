const fs = require('fs');
const path = require('path');
const db = require('./db'); // db.js dosyası mysql2 pool içeren koddu

// SQL dosyasının yolunu belirt
const sqlPath = path.join(__dirname, 'database.sql');

// Dosyayı oku
const sql = fs.readFileSync(sqlPath, 'utf8');

// Birden fazla sorgu varsa desteklemesi için multipleStatements açılmış olmalı
db.getConnection().then(conn => {
  conn.query(sql)
    .then(() => {
      console.log("Veritabanı başarıyla yüklendi.");
      conn.release();
      process.exit(0);
    })
    .catch(err => {
      console.error("Hata oluştu:", err);
      conn.release();
      process.exit(1);
    });
});
