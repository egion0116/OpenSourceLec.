library(RMySQL);
library(DBI);

setwd(".")

# 등록 장애인 집계현황
dis_Gyeongi <- read.csv("등록장애인집계현황(시군별,성별,등급별).csv");

DB_User = 'myproj';
DB_PW = '06dktmskf)^';
DB_Name='Disablers';
DB_Host='localhost';
DB_Port=3306;

MyDB = dbConnect(MySQL(), user=DB_User, password=DB_PW, dbname=DB_Name, host=DB_Host, port=DB_Port);
dbWriteTable(MyDB, name='dis_Gyeongi', value=dis_Gyeongi); 