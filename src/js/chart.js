const { stdGaussianPDF } = require("./gaussian");

/**
  Creates an array of data points to be used in a chart
    @param xMin - minimum value of x-axis
    @param xMax - maximum value of x-axis
    @param mean - mean value of the Gaussian distribution
    @param stdDev - standard deviation of the Gaussian distribution
    @param x - the value of x for which the data point should be highlighted
    @returns - an array of data points to be used in a chart
*/

function createArray(xMin, xMax, mean, stdDev, x) {
  const DataArr = [];
  let i = 0;
  for (let j = xMin; j <= xMax; j += 0.01 * stdDev) {
    DataArr[i] = [
      j,
      stdGaussianPDF(mean, stdDev, j),
      j > x ? false : true,
      "opacity: 1; + stroke-color: #000",
    ];
    i++;
  }
  return DataArr;
}

/**
  Draws a chart using Google Charts API
    @param xMin - minimum value of x-axis
    @param xMax - maximum value of x-axis
    @param mean - mean value of the Gaussian distribution
    @param stdDev - standard deviation of the Gaussian distribution
    @param x - the value of x for which the data point should be highlighted
*/

function drawChart(
  xMin = -5.1,
  xMax = 5.1,
  mean = 0,
  stdDev = 1,
  x = -Infinity,
  chartDivID = "chart"
) {
  const Chart = new google.visualization.AreaChart(
      document.getElementById(chartDivID)
    ),
    Data = new google.visualization.DataTable(),
    Options = {
      legend: "none",
      enableInteractivity: false,
      hAxis: {
        baselineColor: "transparent",
      },
      vAxis: {
        baselineColor: "#999",
      },
      areaOpacity: 0,
      height: 350,
    };
  Data.addColumn("number", "X Value");
  Data.addColumn("number", "Y Value");
  Data.addColumn({ type: "boolean", role: "scope" });
  Data.addColumn({ type: "string", role: "style" });
  Data.addRows(createArray(xMin, xMax, mean, stdDev, x));
  Chart.draw(Data, Options);
}

module.exports = {
  drawChart,
};
