import TempChart from "./forecast/tempChart";
import DaysWeather from "./forecast/daysWeather";

const Forecast = ({ dailyWeather }) => {
  const formatTimeMonth = (unix) => {
    const dateObject = new Date(unix * 1000);

    const humanDateFormat = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    return humanDateFormat;
  };

  return (
    <section>
      <DaysWeather
        formatTimeMonth={formatTimeMonth}
        dailyWeather={dailyWeather.slice(1, 7)}
      ></DaysWeather>
      <TempChart
        formatTimeMonth={formatTimeMonth}
        dailyWeather={dailyWeather.slice(1, 7)}
      ></TempChart>
    </section>
  );
};

export default Forecast;
