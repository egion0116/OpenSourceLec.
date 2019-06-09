# install.packages('RMySQL', repos='https://cran.seoul.go.kr');
library(RMySQL);
library(DBI);

DB_User = 'myproj';
DB_PW = '06dktmskf)^';
DB_Name='Project';
DB_Host='localhost';
DB_Port=3306;

MyDB = dbConnect(MySQL(), user=DB_User, password=DB_PW, dbname=DB_Name, host=DB_Host, port=DB_Port);
dbWriteTable(mydb, name='table_name', value=data.frame.name)