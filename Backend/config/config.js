module.exports = {
    MONGO_URI: "mongodb+srv://Sasha:Waszajsasha1@sashawf.j7d1wjx.mongodb.net/",
    baseUrl: process.env.NODE_ENV === 'production' 
       ? 'BASE_URL=https://link-shortener-ansq.onrender.com'
       : 'http://localhost:8080' 
  };
  