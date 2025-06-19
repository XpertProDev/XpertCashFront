mysql -u xpert_db -p
password Xpert@2025

SHOW DATABASES;

USE xpertCash_db;
SHOW TABLES;

DESCRIBE users;
SHOW COLUMNS FROM client;

SELECT * FROM user LIMIT 10;

voir la valeur de la colonne
SELECT id, activated_lien FROM user WHERE id = 3;

Update la valeur de la colonne
UPDATE user SET activated_lien = 1 WHERE id = 3;

Voir la valeur de la colonne
SELECT id, activated_lien+0 AS activated_lien FROM user WHERE id = 3;


