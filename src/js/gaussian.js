/**
  Calculates the z-score of a given value.
    @param mean The mean value.
    @param standardDev The standard deviation.
    @param x The value to calculate the z-score.
    @return The z-score.
    @throws An error message if the standard deviation is not greater than zero.
*/

function zScore(mean, standardDev, x) {
  if (standardDev <= 0) throw "Standard deviation must be positive";
  let z = (x - mean) / standardDev;
  return z;
  }
  
/**
  Calculates the standard Gaussian probability density function of a given value.
    @param mean The mean value.
    @param standardDev The standard deviation.
    @param x The value to calculate the standard Gaussian probability density function.
    @return The standard Gaussian probability density function.
*/

function stdGaussianPDF(mean, standardDev, x) {
  let z = zScore(mean, standardDev, x),
    phi = Math.exp(-(z ** 2) / 2) / Math.sqrt(2 * Math.PI);
  return phi;
}

/**
  Calculates the Gaussian cumulative distribution function of a given value.
    @param mean The mean value.
    @param standardDev The standard deviation.
    @param x The value to calculate the Gaussian cumulative distribution function.
    @return The Gaussian cumulative distribution function.
*/

function gaussianCDF(mean, standardDev, x) {
  let phi,
    result,
    z,
    denominator = 1,
    sum = 0;
  z = zScore(mean, standardDev, x);
  phi = stdGaussianPDF(mean, standardDev, x);
  for (let i = 1; i <= 300; i += 2) {
    denominator *= i;
    sum += z ** i / denominator;
  }
  result = 0.5 + phi * sum;
  return result;
}

module.exports = {
  gaussianCDF,
  stdGaussianPDF,
  zScore,
};
