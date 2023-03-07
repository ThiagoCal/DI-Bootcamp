const axios = require("axios");
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.listen(5002, () => {
    console.log('running on port 5002');
})



function initMap() {
  // The location of Uluru
  // const uluru = { lat: -1.344, lng: 121.031 };
  const uluru = { lat: -1.344, lng: 121.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

      // const EONET_API_ENDPOINT =
      //     "https://eonet.gsfc.nasa.gov/api/v3/events?days=360";
      // axios
      //     .get(EONET_API_ENDPOINT)
      //     .then((response) => {
      //         const categories = response.data.events;
      //         console.log(categories);
      //     })
      //     .catch((error) => {
      //         console.error(error);
      //     });