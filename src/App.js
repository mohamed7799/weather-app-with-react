import Form from "./components/form";
import MainWeatherContent from "./components/mainWeatherContent";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#b4eaff85",
    padding: "1rem",
    "& > *": {
      flex: "1",
    },
  },

  main: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0px 0px 5px 0px #cacaca",
    padding: "1rem",
  },
});

const App = () => {
  // variables
  const [cityName, setCityName] = useState("");
  const [cords, setCords] = useState({});
  const [weatherData, setWeatherData] = useState();
  const [firstRender, setFirstRender] = useState(true);
  const classes = useStyle();

  //functions

  const fetchGeoDataFromBrowser = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  const fetchGeoDataFromApi = async () => {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=30860c0b9720377fd81553d6dc70f540`
    );

    if (!geoResponse.ok) {
      throw new Error();
    }

    const geoData = await geoResponse.json();
    setCords({ lat: geoData[0].lat, lon: geoData[0].lon });
  };

  const fecthWeatherDataFromApi = async () => {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cords.lat}&lon=${cords.lon}&exclude=hourly,minutely,alerts&appid=30860c0b9720377fd81553d6dc70f540&units=metric`
    );

    const WeatherData = await weatherResponse.json();

    return WeatherData;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetchGeoDataFromApi().catch(() => alert("country does not exist"));
  };

  //for the first render
  useEffect(() => {
    setFirstRender(false);
    navigator.permissions &&
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (PermissionStatus) {
          if (PermissionStatus.state === "granted") {
            fetchGeoDataFromBrowser();
          } else {
            setCityName("cairo");
            fetch(
              `https://api.openweathermap.org/data/2.5/onecall?lat=30.0626&lon=31.2497&exclude=hourly,minutely,alerts&appid=30860c0b9720377fd81553d6dc70f540&units=metric`
            )
              .then((res) => res.json())
              .then((weatherData) => setWeatherData(weatherData));
          }
        });
  }, []);

  //for the cords update from the api
  useEffect(() => {
    if (!firstRender) {
      fecthWeatherDataFromApi().then((weatherData) =>
        setWeatherData(weatherData)
      );
    }
  }, [cords]);

  return (
    <>
      <CssBaseline />
      <Grid container alignItems="center" className={classes.root}>
        <Grid item>
          <Container className={classes.main} component="main" maxWidth="lg">
            <Form
              cityName={cityName}
              setCityName={setCityName}
              handleFormSubmit={handleFormSubmit}
            ></Form>
            {weatherData ? (
              <MainWeatherContent
                weatherData={weatherData}
              ></MainWeatherContent>
            ) : (
              <Typography align="center" variant="h4">
                loading...
              </Typography>
            )}
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
