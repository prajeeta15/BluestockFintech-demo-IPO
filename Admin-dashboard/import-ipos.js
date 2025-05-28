
const data = JSON.parse(cat("C:/Users/Prajeeta/Documents/GitHub/Bluestock/Admin-dashboard/ipo-data.json"));

db.ipos.insertMany(data);

