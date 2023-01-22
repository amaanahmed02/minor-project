function getWeatherData(lat, lon) {
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`
    )
    .then((res) => console.log(res.data));
}
let coords = {};
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}
function showPosition(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
}
getLocation();

