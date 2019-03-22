/*
Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
https://www.hackerrank.com/challenges/average-population-of-each-continent/problem
*/
SELECT COUNTRY.continent,
       FLOOR(AVG(CITY.POPULATION))
FROM CITY
INNER JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE
GROUP BY COUNTRY.CONTINENT

/*
https://www.hackerrank.com/challenges/the-report/problem
*/
SELECT if(Grades.Grade < 8, concat('NULL'), Students.Name),
       Grades.Grade,
       Students.Marks
FROM Students
INNER JOIN Grades ON Students.Marks >= Grades.Min_Mark
AND Students.Marks <= Grades.Max_Mark
GROUP BY Grades.Grade DESC,
         Students.Name,
         Students.Marks ASC