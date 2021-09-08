import { Line } from "react-chartjs-2";

const TempChart = ({ dailyWeather, formatTimeMonth }) => {
  const labels = dailyWeather.map((item) => {
    return formatTimeMonth(item.dt);
  });
  const data = dailyWeather.map((item) => {
    return item.temp.day;
  });
  return (
    <div>
      <Line
        options={{
          maintainAspectRatio: false,
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "temperature chart",
              data: data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      ></Line>
    </div>
  );
};

export default TempChart;
