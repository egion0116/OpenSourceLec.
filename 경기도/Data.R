# DB사용을 위한 라이브러리 설치
# install.packages("RMySQL");
# install.packages("DBI");
library(RMySQL);
library(DBI);

setwd(".")

#경기도 장애인 단기보호시설
st_fasc <- read.csv("경기도 장애인 단기보호시설 현황 .csv");

# 경기도 장애인 주간 보호시설
day_fasc <- read.csv("경기도 장애인주간보호시설현황.csv");

# 경기도 장애인 복지관
care_fasc <- read.csv("경기도 장애인주간보호시설현황.csv");

# 중증장애인 요양시설
critical_fasc <- read.csv("경기도 중증장애인요양시설 현황.csv");

# 등록 장애인 집계현황
dis_all <- read.csv("등록장애인집계현황(시군별,성별,등급별).csv");

DB_User = 'myproj';
DB_PW = '06dktmskf)^';
DB_Name='Project';
DB_Host='localhost';
DB_Port=3306;

MyDB = dbConnect(MySQL(), user=DB_User, password=DB_PW, dbname=DB_Name, host=DB_Host, port=DB_Port);
dbWriteTable(MyDB, name='st_fasc', value=st_fasc);
dbWriteTable(MyDB, name='day_fasc', value=st_fasc);
dbWriteTable(MyDB, name='care_fasc', value=st_fasc);
dbWriteTable(MyDB, name='critical_fasc', value=st_fasc); 
 