import React from "react";
import Forecast from "./mainWeatherContent/forecast";
import WeatherCard from "./mainWeatherContent/weatherCard";
import { Grid } from "@material-ui/core";

const MainWeatherContent = ({ weatherData }) => {
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      component="section"
      container
      spacing={6}
    >
      <Grid item>
        <WeatherCard currentWeather={weatherData.current}></WeatherCard>
      </Grid>
      <Grid item>
        <Forecast dailyWeather={weatherData.daily}></Forecast>
      </Grid>
    </Grid>
  );
};

export default React.memo(MainWeatherContent);
