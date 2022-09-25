require("./main.scss");
const { drawChart } = require("./chart");
const { gaussianCDF, gaussianPDF, zScore } = require("./gaussian");

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
