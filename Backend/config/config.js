module.exports = {
    MONGO_URI: "mongodb+srv://Sasha:Waszajsasha1@sashawf.j7d1wjx.mongodb.net/",
    baseUrl: process.env.NODE_ENV === 'production' 
       ? 'https://url-shortener-service-app.netlify.app'
       : 'http://localhost:8080' 
  };
  