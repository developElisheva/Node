import express from 'express';
import axios from 'axios';

const app = express();
const port = 5005;

const options = {
  method: 'GET',
  url: 'https://api.render.com/v1/services?includePreviews=true&limit=20', 
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_WtV3pWjepr6v5ziUi3OL7xJakTTw' 
  }
};

app.get('/apps', (req, res) => {
  axios
    .request(options)
    .then(response => {
      res.json(response.data); 
    })
    .catch(error => {
      res.status(500).json({ error: 'Error fetching data from Render API' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
