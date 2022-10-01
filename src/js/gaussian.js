function assert(condition) {
  if (!condition) throw "Assertion failed";
}

function zScore(mean, standardDev, x) {
  let z;
  assert(standardDev > 0);
  z = (x - mean) / standardDev;
  return z;
}

function gaussianPDF(mean, standardDev, x) {
  let z = zScore(mean, standardDev, x),
    phi = Math.exp(-(z ** 2) / 2) / Math.sqrt(2 * Math.PI);
  return phi;
}

function gaussianCDF(mean, standardDev, x) {
  let phi,
    result,
    z,
    denominator = 1,
    sum = 0;
  z = zScore(mean, standardDev, x);
  phi = gaussianPDF(mean, standardDev, x);
  for (let i = 1; i <= 300; i += 2) {
    denominator *= i;
    sum += z ** i / denominator;
  }
  result = 0.5 + phi * sum;
  return result;
}

module.exports = {
  gaussianCDF,
  gaussianPDF,
  zScore,
};
