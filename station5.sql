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

/*
Starting with vowel
https://www.hackerrank.com/challenges/weather-observation-station-6/problem?h_r=next-challenge&h_v=zen
*/

SELECT DISTINCT CITY
FROM STATION
WHERE CITY REGEXP "^[aeiou].*"

/*
Ending with vowel
https://www.hackerrank.com/challenges/weather-observation-station-7/problem
*/

SELECT DISTINCT CITY
FROM STATION
WHERE CITY REGEXP "[aeiou]$"

/*
Starting or ending in vowel
*/
SELECT CITY
FROM STATION
WHERE CITY REGEXP '^[aeiou].*[aeiou]$'

/*
Does not start with vowel
*/
SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT REGEXP "^[aeiou].*"

/*
Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
https://www.hackerrank.com/challenges/more-than-75-marks/problem
*/
SELECT NAME
FROM STUDENTS
WHERE MARKS > 75
ORDER BY
  (SELECT RIGHT(NAME, 3)) ASC, ID ASC

/*
Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
https://www.hackerrank.com/challenges/asian-population/problem
*/
SELECT SUM(CITY.POPULATION)
FROM CITY,
     COUNTRY
WHERE CITY.COUNTRYCODE = COUNTRY.CODE
  AND COUNTRY.CONTINENT = 'Asia';