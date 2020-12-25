const key = "GhkrSeWgQbRegyWw70hYGxffUN6n8pZn";

const getWeather = async (cityKey) => {
  const url = "http://dataservice.accuweather.com/currentconditions/v1/";
  const params = `${cityKey}?apikey=${key}`;

  const response = await fetch(url + params);

  if (response.status !== 200) {
    throw new Error("Cannot fetch api");
  }

  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const params = `?apikey=${key}&q=${city}`;

  const response = await fetch(url + params);

  if (response.status !== 200) {
    throw new Error("Cannot fetch api");
  }

  const data = await response.json();

  return data[0];
};
