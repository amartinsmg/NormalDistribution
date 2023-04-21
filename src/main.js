require("./main.scss");
const { drawChart } = require("./js/chart"),
  { gaussianCDF } = require("./js/gaussian");

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function main() {
  const MeanInput = $("#mean-input"),
    StdDevInput = $("#stddev-input"),
    XInput = $("#x-input"),
    Form = $("#input-form"),
    OutProbDiv = $("#prob");

  /**
    This function handles the form submit event.
    @param e - The event object.
  */

  Form.on("submit", (e) => {
    e.preventDefault();
    const MEAN = parseFloat(MeanInput.val()),
      STD_DEV = parseFloat(StdDevInput.val()),
      X_MAX = MEAN + 5 * STD_DEV + 0.1,
      X_MIN = MEAN - 5 * STD_DEV + 0.1,
      X = parseFloat(XInput.val()),
      PROB = X > X_MAX ? 1 : X < X_MIN ? 0 : gaussianCDF(MEAN, STD_DEV, X),
      GRAPH = MathJax.tex2svg(`P(X \\le x) = ${PROB.toFixed(6)}`);
    OutProbDiv.html(GRAPH);
    drawChart(X_MIN, X_MAX, MEAN, STD_DEV, X);
  });
}

$(document).ready(main);
