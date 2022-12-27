import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

(async () => {
    const db = await open({
        filename: 'database.db',
        driver: sqlite3.Database
    })

    await db.exec(`CREATE TABLE IF NOT EXISTS countries (id INT NOT NULL PRIMARY KEY, name VARCHAR NOT NULL, population INT NULL, gdp DECIMAL NULL); CREATE TABLE IF NOT EXISTS cities (id INT NOT NULL PRIMARY KEY, name VARCHAR NOT NULL, population INT NULL, founded INT NULL, country_id INT NOT NULL); CREATE TABLE IF NOT EXISTS companies (id INT NOT NULL PRIMARY KEY, name VARCHAR NOT NULL, city_id INT NOT NULL, revenue DECIMAL NULL, labors INT NOT NULL);`)

    await db.exec(`INSERT OR IGNORE INTO countries (id, name) VALUES (1, 'Россия'), (2, 'США'), (3, 'Китай'), (4, 'Нидерланды'), (5, 'Саудовская Аравия'), (6, 'Великобритания'), (7, 'Германия'), (8, 'Япония'), (9, 'Швейцария'), (10, 'Франция'), (11, 'Южная Корея'); INSERT OR IGNORE INTO cities (id, name, country_id) VALUES (1, 'Москва', 1), (2, 'Санкт-Петербург', 1), (3, 'Екатеринбург', 1), (4, 'Воронеж', 1), (5, 'Краснодар', 1), (6, 'Амстердам', 4), (7, 'Пекин', 3), (8, 'Токио', 8), (9, 'Сеул', 11), (10, 'Лондон', 6), (11, 'Рияд', 5), (12, 'Берлин', 7), (13, 'Париж', 10), (14, 'Вашингтон', 2), (15, 'Шанхай', 3), (16, 'Калифорния', 2); INSERT OR IGNORE INTO companies (id, name, city_id, labors) VALUES (1, 'Яндекс', 1, 18004), (2, 'Сбербанк', 4, 285600), (3, 'Walmart', 16, 2300000), (4, 'Sinopec Group', 7, 385691), (5, 'Royal Dutch Shell', 6, 82000), (6, 'China National Petroleum', 7, 888), (7, 'State Grid', 15, 555), (8, 'Saudi Aramco', 11, 66800), (9, 'Volkswagen', 12, 999), (10, 'Apple', 14, 164000), (11, 'Газпром', 2, 468000), (12, 'Лукойл', 3, 101000);`)

    const query = `SELECT countries.name AS 'Страна', COUNT(*) AS 'Количество компаний с численностью сотрудников свыше 1000' 
                    FROM countries 
                    INNER JOIN cities ON cities.country_id = countries.id 
                    INNER JOIN companies ON companies.city_id = cities.id 
                    WHERE companies.labors >= 1000 
                    GROUP BY countries.name 
                    ORDER BY COUNT(*) DESC`

    const result = await db.all(query)

    console.log(result)
})()