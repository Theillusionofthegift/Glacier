const axios = require('axios');

const GoogleGeocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?';

exports.getLocation = async (zipcode) => {
  const addressParam = `address='zipcode'${zipcode}`;
  const apiKeyParam = `&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  const requestURL = `${GoogleGeocodeURL}${addressParam}${apiKeyParam}`;

  const response = await axios.get(requestURL);
  if (response.data.status === 'OK') {
    const geocodeResult = response.data.results[0];
    const location = {
      readable: geocodeResult.formatted_address,
      latitude: geocodeResult.geometry.location.lat,
      longitude: geocodeResult.geometry.location.lng,
    };
    return location;
  }

  throw new Error('Geocoding Failed!');
};