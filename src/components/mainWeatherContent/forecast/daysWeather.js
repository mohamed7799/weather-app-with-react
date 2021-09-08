import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  root: {
    marginBottom: "1rem",
  },
  card: {
    backgroundColor: "rgb(75 192 192 / 50%)",
  },
  img: {
    width: "60px",
  },
});

const DaysWeather = ({ dailyWeather, formatTimeMonth }) => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.root}
      justifyContent="center"
      container
      component="ul"
      spacing={2}
    >
      {dailyWeather.map((dayWeather) => {
        return (
          <Grid item key={dayWeather.dt} align="center">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">
                  {formatTimeMonth(dayWeather.dt)}
                </Typography>
                <img
                  className={classes.img}
                  src={`https://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@2x.png`}
                  alt="wthr img"
                />
                <Typography variant="h6" color="textSecondary">
                  Humidity
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {dayWeather.humidity}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DaysWeather;
