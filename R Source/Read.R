# 인천 계양구
Incheon_GeYang <- read.csv("../인천광역시_계양구_장애인복지시설_단체_현황_20180501.csv");
Incheon_GeYang_FasNum <- nrow(Incheon_GeYang);

# 인천 남구
Incheon_Namgu <- read.csv("../인천광역시_남구_장애인복지시설_현황_20170930.csv");
Incheon_Namgu_FasNum <- nrow(Incheon_Namgu);

# 인천 남동구
Incheon_Namdonggu <- read.csv("../인천광역시_남동구_장애인복지시설현황_20181126.csv");
Incheon_Namdonggu_FasNum <- nrow(Incheon_Namdonggu);

# 인천 부평구
Incheon_Bupyung <- read.csv("../인천광역시_부평구_장애인복지시설__20180823.csv");
Incheon_Bupyung_FasNum <- nrow(Incheon_Bupyung);

# 인천 서구
Incheon_Seogu <- read.csv("../인천광역시_서구_장애인복지시설_2017년_5월_.csv");
Incheon_Seogu_FasNum <- nrow(Incheon_Seogu);

# 인천 중구
Incheon_Junggu <- read.csv("../인천광역시_중구_장애인복지시설현황_20190520.csv");
Incheon_Junggu_FasNum <- nrow(Incheon_Junggu);

type <- summary(Incheon_Namgu[,1]);
detail_type <- summary(Incheon_Namgu[,2]);

for (i in 1:length(type)) cat(names(type)[i], " : ", type[i], "\n");
for (i in 1:length(detail_type)) cat(names(detail_type)[i], " : ", detail_type[i], "\n");
