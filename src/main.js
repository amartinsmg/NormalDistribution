require("./main.scss");
const { drawChart } = require("./chart");

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
