const form = document.querySelector("#form-search");
const cidade = document.querySelector(".cidade");
const temperatura = document.querySelector(".temperatura");

const updateUI = (data) => {
  const { city, weather } = data;

  cidade.textContent =
    city.LocalizedName +
    " , " +
    city.AdministrativeArea.LocalizedName +
    " - " +
    city.AdministrativeArea.ID;

  temperatura.textContent = weather.Temperature.Metric.Value;
};

const updateCity = async (result) => {
  //   const { city, weather } = data;
  const city = await getCity(result);
  const weather = await getWeather(city.Key);

  return { city, weather };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const result = form.search.value.trim();
  form.reset();

  if (result) {
    updateCity(result)
      .then((data) => {
        updateUI(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
