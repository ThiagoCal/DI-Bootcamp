

-- SELECT ROUND(AVG(dust),1) FROM city_info WHERE city = 'Boston' AND DATE(event_datetime) BETWEEN  '2015-03-01' AND '2015-03-05';

-- SELECT COUNT(*) FROM city_info WHERE city = 'San Francisco';

-- SELECT city, COUNT(city) FROM city_info GROUP BY city ;

-- SELECT city, sound, event_datetime::time FROM city_info 
-- ORDER BY sound = (SELECT MAX(sound) from city_info);