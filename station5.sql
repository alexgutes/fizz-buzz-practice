/*https://www.hackerrank.com/challenges/weather-observation-station-5/problem
*/

SELECT CITY,
  length(CITY)
FROM STATION
WHERE length(CITY) =
    ( SELECT MIN(length(CITY))
FROM STATION )
ORDER BY CITY
LIMIT 1;


SELECT CITY
,
       LENGTH
(CITY)
FROM STATION
WHERE LENGTH
(CITY) =
( SELECT MAX(length(CITY))
FROM STATION )
ORDER BY CITY
LIMIT 1;

