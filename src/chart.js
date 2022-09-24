const { gaussianCDF, gaussianPDF, zScore } = require("./gaussian");

function createArray(xMin, xMax, x, mean, stdDev) {
  const DataArr = [];
  let i = 0;
  for (let j = xMin; j <= xMax; j += 0.01 * stdDev) {
    DataArr[i] = new Array(4);
    DataArr[i][0] = j;
    DataArr[i][1] = gaussianPDF(mean, stdDev, j);
    if (j > x) {
      DataArr[i][2] = false;
    }
    DataArr[i][3] = "opacity: 1; + color: #8064A2; + stroke-color: black;";
    i++;
  }
  return DataArr;
}

function drawChart(
  chartDivID = "chart",
  xMin = -5.1,
  xMax = 5.1,
  x = -Infinity,
  mean = 0,
  stdDev = 1
) {
  const Chart = new google.visualization.AreaChart(
      document.getElementById(chartDivID)
    ),
    Data = new google.visualization.DataTable(),
    Options = {
      legend: "none",
      hAxis: {
        minorGridLines: {
          count: 5,
        },
      },
    };
  Data.addColumn("number", "X Value");
  Data.addColumn("number", "Y Value");
  Data.addColumn({ type: "boolean", role: "scope" });
  Data.addColumn({ type: "string", role: "style" });
  Data.addRows(createArray(xMin, xMax, x, mean, stdDev));
  Chart.draw(Data, Options);
}

module.exports = {
  drawChart,
};
