const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 4000;
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URL
const url = process.env.MONGODB_URL;

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db("TheDailyNewsDb");

    // Define a route to retrieve data from the TDN collection
    app.get('/api/data', async (req, res) => {
      try {
        const collection = db.collection("TDN");
        const data = await collection.find({}).toArray();
        res.json(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });


// Define a route to retrieve breaking news data
app.get('/api/data/breakingnews/:id?', async (req, res) => {
  try {
    const collection = db.collection("TDN");
    const id = req.params.id;

    // If ID is provided, return breaking news data for that ID
    if (id) {
      const data = await collection.find({}).toArray();
      const breakingNewsArray = data.flatMap(item => item.breakingnews);
      const filteredNews = breakingNewsArray.filter(item => item.id === parseInt(id));
      if (filteredNews.length === 0) {
        return res.status(404).json({ message: "Breaking news not found" });
      }
      return res.json(filteredNews);
    }

    // If no ID is provided, return all breaking news data
    const data = await collection.find({}).toArray();
    const breakingNewsArray = data.flatMap(item => item.breakingnews);
    res.json(breakingNewsArray);
  } catch (err) {
    console.error("Error fetching breaking news data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


  app.get('/api/data/india/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const indiaArray = data.flatMap(item => item.india);
        const filteredNews = indiaArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "india news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const indiaArray = data.flatMap(item => item.india);
      res.json(indiaArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  
  app.get('/api/data/international/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const internationalArray = data.flatMap(item => item.international);
        const filteredNews = internationalArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "international news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const internationalArray = data.flatMap(item => item.international);
      res.json(internationalArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/sports/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const sportsArray = data.flatMap(item => item.sports);
        const filteredNews = sportsArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "sports news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const sportsArray = data.flatMap(item => item.sports);
      res.json(sportsArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/entertainment/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const entertainmentArray = data.flatMap(item => item.entertainment);
        const filteredNews = entertainmentArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "entertainment news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const entertainmentArray = data.flatMap(item => item.entertainment);
      res.json(entertainmentArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get('/api/data/health/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const healthArray = data.flatMap(item => item.health);
        const filteredNews = healthArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "health news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const healthArray = data.flatMap(item => item.health);
      res.json(healthArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get('/api/data/lifestyle/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const lifestyleArray = data.flatMap(item => item.lifestyle);
        const filteredNews = lifestyleArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "lifestyle news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const lifestyleArray = data.flatMap(item => item.lifestyle);
      res.json(lifestyleArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get('/api/data/election/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const electionArray = data.flatMap(item => item.election);
        const filteredNews = electionArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "election news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const electionArray = data.flatMap(item => item.election);
      res.json(electionArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/economy/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const economyArray = data.flatMap(item => item.economy);
        const filteredNews = economyArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "economy news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const economyArray = data.flatMap(item => item.economy);
      res.json(economyArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/hotnews/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const hotnewsArray = data.flatMap(item => item.hotnews);
        const filteredNews = hotnewsArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "hotnews news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const hotnewsArray = data.flatMap(item => item.hotnews);
      res.json(hotnewsArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/trendynews/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const trendynewsArray = data.flatMap(item => item.trendynews);
        const filteredNews = trendynewsArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "trendynews news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const trendynewsArray = data.flatMap(item => item.trendynews);
      res.json(trendynewsArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/mostwatch/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const mostwatchArray = data.flatMap(item => item.mostwatch);
        const filteredNews = mostwatchArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "mostwatch news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const mostwatchArray = data.flatMap(item => item.mostwatch);
      res.json(mostwatchArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  app.get('/api/data/indiaslider/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const indiasliderArray = data.flatMap(item => item.indiaslider);
        const filteredNews = indiasliderArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "indiaslider news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const indiasliderArray = data.flatMap(item => item.indiaslider);
      res.json(indiasliderArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get('/api/data/rules/:id?', async (req, res) => {
    try {
      const collection = db.collection("TDN");
      const id = req.params.id;


      if (id) {
        const data = await collection.find({}).toArray();
        const rulesArray = data.flatMap(item => item.rules);
        const filteredNews = rulesArray.filter(item => item.id === parseInt(id));
        if (filteredNews.length === 0) {
          return res.status(404).json({ message: "rules news not found" });
        }
        return res.json(filteredNews);
      }

      const data = await collection.find({}).toArray();
      const rulesArray = data.flatMap(item => item.rules);
      res.json(rulesArray);
    } catch (err) {
      console.error("Error fetching breaking news data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err);
  });

