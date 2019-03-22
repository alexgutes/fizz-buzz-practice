select (sum POPULATION) from CITY
join COUNTRY on CITY.CountryCode = COUNTRY.Code
where COUNTRY.CONTINENT = 'ASIA'