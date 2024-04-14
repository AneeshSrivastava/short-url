const dbName = "shortUrlApp";
const config = {
  dbConnectionUrl: `mongodb://127.0.0.1:27017/${dbName}`,
  collectionName: "shortIdCollection",
  idCharLength: 8,
};

module.exports = config;
