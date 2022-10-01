const { gaussianCDF, stdGaussianPDF, zScore } = require("../js/gaussian"),
  { ok: assert } = require("assert");

function roundTo(num, precision) {
  let pow10 = 10 ** precision,
    result = Math.round(num * pow10) / pow10;
  return result;
}

assert(zScore(0, 1, 3.3) == 3.3);
assert(zScore(150000, 5000, 134000) == -3.2);
assert(roundTo(stdGaussianPDF(12, 2.5, 14), 6) == 0.289692);
assert(roundTo(stdGaussianPDF(30, 2, 35), 6) == 0.017528);
assert(roundTo(gaussianCDF(1080, 9, 1070), 6) == 0.13326);
assert(roundTo(gaussianCDF(25, 4, 26), 6) == 0.598706);

console.log("Passed all tests successfully!");
