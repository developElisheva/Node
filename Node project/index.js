import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_WtV3pWjepr6v5ziUi3OL7xJakTTw'
  }
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));