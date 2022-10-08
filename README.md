# NormalDistribution

It is a personal project for a Web Normal Distribution Calculator. It takes the user input using jQuery. Being X a random, normally distributed variable, the program calculates the probability that X will take a value less than or equal to x.

To calculate the probability, the program uses an approximation to the normal cumulative distribution function (CDF), whose formula is this:

$$
\phi(x) = \frac{1}{\sqrt{2 \pi}} e^{\frac{1}{2}(\frac{x - \mu}{\sigma})^2}
\\ \text{} \\
P(X \le x) = \int_{-\infty}^{x}{\phi(x)dx}
$$

The used approximation uses a Taylor series approximation:

$$
P(X \le x) = \frac{1}{2} + \phi(x) \sum_{n = 0}^{\infty}{\frac{1}{1 \cdot 3 \cdot 5 ... (2n + 1)}x^{2n+1}}
$$

It uses MathJax to display the mathematical notations and the Google Chart API to plot the graph.

To build this project, clone this repository and run these commands:

```sh
yarn install
yarn build
```
