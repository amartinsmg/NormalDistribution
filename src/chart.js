const { gaussianPDF } = require("./gaussian");

function createArray(xMin, xMax, x, mean, stdDev) {
  const DataArr = [];
  let i = 0;
  for (let j = xMin; j <= xMax; j += 0.01 * stdDev) {
    DataArr[i] = new Array(4);
    DataArr[i][0] = j;
    DataArr[i][1] = gaussianPDF(mean, stdDev, j);
    DataArr[i][2] = j > x ? false : true;
    DataArr[i][3] = "opacity: 1; + stroke-color: #000";
    i++;
  }
  return DataArr;
}

function drawChart(
  xMin = -5.1,
  xMax = 5.1,
  x = -0,
  mean = 0,
  stdDev = 1,
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
  Data.addRows(createArray(xMin, xMax, x, mean, stdDev));
  Chart.draw(Data, Options);
}

module.exports = {
  drawChart,
};
