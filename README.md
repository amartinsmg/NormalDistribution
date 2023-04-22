# Normal Distribution Calculator

This is a personal project for a web-based normal distribution calculator that takes user input using jQuery. The calculator computes the probability that a normally distributed random variable, denoted as $X$, will take a value less than or equal to $x$.

The probability is calculated using an approximation of the normal cumulative distribution function (CDF) given by:

$$
P(X \le x) = \int_{-\infty}^{x}{\frac{1}{\sqrt{2 \pi}} e^{\frac{1}{2}(\frac{x - \mu}{\sigma})^2} dx}
$$

The approximation method used is based on the Taylor series, which is given by:

$$
P(X \le x) = \frac{1}{2} + \frac{1}{\sqrt{2 \pi}} e^{\frac{1}{2}(\frac{x - \mu}{\sigma})^2} \cdot \sum_{n = 0}^{\infty}{\frac{1}{1 \cdot 3 \cdot 5 ... (2n + 1)}x^{2n+1}}
$$

The web application utilizes MathJax to display the mathematical notations and the Google Chart API to plot the graph.

## Usage

Enter the mean and standard deviation of the normal distribution, as well as the value for which you want to calculate the probability. The program will then display the probability that $X$ is less than or equal to $x$.

## How to run the project

To build and run the project, follow these steps:

1. Clone this repository.
2. Install the dependencies by running `yarn install`.
3. Build the project by running `yarn build`.

After the build process is complete, you can open the index.html file located in the 'dist' directory in your web browser to use the calculator.

## Contributing

Contributions to this project are welcome. If you find a bug or have a suggestion for an improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgments

This project uses the following libraries:

- jQuery (https://jquery.com/)
- MathJax (https://www.mathjax.org/)
- Google Charts (https://developers.google.com/chart)
