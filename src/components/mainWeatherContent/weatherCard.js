import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    display: "grid",
    gap: "1rem",
  },
});
const formatTime = (unix) => {
  const dateObject = new Date(unix * 1000);

  const humanDateFormat = dateObject.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return humanDateFormat;
};

const WeatherCard = ({ currentWeather }) => {
  const classes = useStyle();
  return (
    <section className={classes.root}>
      <Typography variant="h6" color="textPrimary" align="center">
        {formatTime(currentWeather.dt)}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt="wthr img"
          />
        </Grid>
        <Grid item>
          <Typography variant="h2">
            <Box fontWeight="fontWeightBold" style={{ display: "flex" }}>
              {currentWeather.temp}
              <Typography component="span">
                <Box
                  fontFamily="fontFamily"
                  fontWeight="fontWeightBold"
                  fontSize={25}
                >
                  ℃
                </Box>
              </Typography>
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        align="center"
        style={{ marginBottom: "1.5rem" }}
      >
        <Box fontWeight="fontWeightBold">
          {currentWeather.weather[0].description}
        </Box>
      </Typography>

      <Grid container justifyContent="center" spacing={4} align="center">
        <Grid item>
          <Typography variant="h6" color="textSecondary">
            Humidity
          </Typography>
          <Typography variant="h6" color="textPrimary">
            {currentWeather.humidity}%
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textSecondary">
            Wind speed
          </Typography>
          <Typography variant="h6" color="textPrimary">
            {currentWeather.wind_speed} m/s
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default WeatherCard;
