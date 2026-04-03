# MathGlyph — Mathematical Notation Reference

> Exported 114 symbols on 4/3/2026.

## Logic

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `p \equiv q` | Logical Equivalence | p and q are logically equivalent — same truth value in all cases. | Logic, CS | built-in |
| `\lnot p` | Negation (NOT) | Logical NOT of p. True when p is false, false when p is true. | Logic, CS | built-in |
| `p \land q` | Conjunction (AND) | p AND q. True only when both p and q are simultaneously true. | Logic, CS | built-in |
| `p \lor q` | Disjunction (OR) | p OR q. True when at least one of p or q is true (inclusive OR). | Logic, CS | built-in |
| `p \oplus q` | Exclusive OR (XOR) | True when exactly one of p or q is true, but not both. | Logic, CS, Crypto | `\\usepackage{amssymb}` |
| `p \to q` | Implication | p implies q. If p is true then q must be true. | Logic, Proofs | built-in |
| `p \leftrightarrow q` | Biconditional (IFF) | p if and only if q. True when p and q share the same truth value. | Logic, Proofs | built-in |
| `\forall x\,P(x)` | Universal Quantifier | For all x, P(x) holds — every element in the domain satisfies P. | Logic, Proofs, CS | built-in |
| `\exists x\,P(x)` | Existential Quantifier | There exists at least one x for which P(x) is true. | Logic, Proofs | built-in |
| `\exists!x\,P(x)` | Unique Existential | There exists exactly one x satisfying P(x). | Logic | built-in |
| `\therefore` | Therefore | Introduces a conclusion that follows from preceding premises. | Proofs | built-in |
| `\Rightarrow` | Implies (formal) | Formal logical implication — separates hypothesis from conclusion. | Proofs, Sets | built-in |
| `\Leftrightarrow` | IFF (formal) | Logical equivalence — each side implies the other. | Proofs | built-in |

## General

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `\pm` | Plus-Minus | Denotes alternatives: both plus and minus. Also denotes measurement uncertainty. | Analysis, Stats, Physics | built-in |
| `\neq` | Not Equal | a ≠ b means a and b are not equal. | All fields | built-in |
| `\leq` | Less Than or Equal | a ≤ b means a is less than or equal to b. | Analysis, Algebra, Stats | built-in |
| `\geq` | Greater Than or Equal | a ≥ b means a is greater than or equal to b. | Analysis, Algebra, Stats | built-in |
| `\ll,\,\gg` | Much Less / Greater Than | a ≪ b means a is much smaller than b (by orders of magnitude). | Analysis, Physics, Asymptotics | built-in |
| `\sim` | Asymptotic / Distributed As | Context-dependent: asymptotic equivalence (f ∼ g), or distributed as (X ∼ p). | Analysis, Probability, Stats | built-in |
| `\approx` | Approximately Equal | Two quantities are approximately or nearly equal. | Analysis, Numerics | built-in |
| `\propto` | Proportional To | y∝x means y=ax for some nonzero constant a. | Physics, ML, Stats | built-in |
| `:=` | Defined As | The left side is defined in terms of the right side. | All fields | built-in |
| `\mathcal{O}(g)` | Big-O Notation | f(n) grows no faster than g(n) up to a constant factor — an upper bound. | CS, Algorithms | built-in |
| `\Omega(g)` | Big-Omega Notation | f(n) grows at least as fast as g(n) — a lower bound. | CS, Algorithms | built-in |
| `\Theta(g)` | Big-Theta Notation | Tight asymptotic bound — f grows at exactly the same rate as g. | CS, Algorithms | built-in |
| `\sum_{i=k}^{m}` | Summation | Sum of terms a_k, a_{k+1}, …, a_m. | All fields | built-in |
| `\prod_{j=k}^{m}` | Product Notation | Product of terms a_k, a_{k+1}, …, a_m. | All fields | built-in |
| `\arg\max f` | Argmax | The value of the input that maximises f. | Optimization, ML | built-in |
| `\arg\min f` | Argmin | The value of the input that minimises f. | Optimization, ML | built-in |
| `\infty` | Infinity | An unboundedly large quantity. Not a real number. | Analysis, Limits | built-in |
| `\mathbf{1}(x)` | Indicator Function | Equals 1 if condition x is true, 0 otherwise. | Probability, ML | built-in |
| `\delta(x)` | Dirac Delta | Infinite at x=0, zero elsewhere, with total integral 1. | Physics, Signal Processing | built-in |
| `\Gamma(x)` | Gamma Function | Generalisation of the factorial to real and complex numbers. | Probability, Analysis | built-in |

## Algebra

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `\sqrt{x}` | Square Root | The non-negative number whose square equals x. | All fields | built-in |
| `\cong` | Isomorphic / Congruent | Denotes isomorphism between structures, or congruence of geometric shapes. | Geometry, Algebra | built-in |
| `f: X \to Y` | Function | A rule mapping each element of domain X to exactly one element of codomain Y. | Functions, Analysis | built-in |
| `g \circ f` | Composition | Apply f first, then g to the result: (g∘f)(x)=g(f(x)). | Functions, Analysis | built-in |
| `f^{-1}` | Inverse Function | Maps each output of f back to its original input. | Functions, Analysis | built-in |
| `\|x\|` | Absolute Value | Non-negative magnitude of x. Distance from x to 0. | Analysis, Linear Algebra | built-in |
| `\lfloor x \rfloor` | Floor Function | Greatest integer less than or equal to x. Rounds toward −∞. | Number Theory, CS | built-in |
| `\lceil x \rceil` | Ceiling Function | Smallest integer greater than or equal to x. Rounds toward +∞. | Number Theory, CS | built-in |
| `n!` | Factorial | Product of all positive integers from 1 to n. Convention: 0!=1. | Combinatorics, Probability | built-in |
| `\binom{n}{r}` | Binomial Coefficient | n choose r — ways to select r items from n without regard to order. | Combinatorics, Probability | `\\usepackage{amsmath}` |
| `\log_a x` | Logarithm | Exponent to which base a must be raised to produce x. | Analysis, Information Theory, ML | built-in |
| `e^x` | Exponential | Euler's number e (≈2.71828) raised to power x. Also written exp(x). | Analysis, Probability, ML | built-in |
| `a \mid b` | Divides | a divides b — there exists an integer k such that b=a×k. | Number Theory, Crypto | built-in |
| `a\equiv b\pmod{m}` | Congruence | a and b have the same remainder when divided by m. | Number Theory, Crypto | built-in |
| `\gcd(a,b)` | GCD | Greatest common divisor of a and b. | Number Theory, Crypto | built-in |
| `\text{lcm}(a,b)` | LCM | Least common multiple of a and b. | Number Theory | `\\usepackage{amsmath}` |
| `\vec{v}` | Vector Notation | An arrow accent denoting a vector quantity. | Linear Algebra, Physics | built-in |
| `\mathbf{v}` | Bold Vector | Bold lowercase letter denoting a column vector. | Linear Algebra, ML | built-in |
| `a \cdot b` | Dot Product | Product of two quantities, or the dot (scalar) product of two vectors. | Linear Algebra, Physics | built-in |
| `\mathbf{u} \times \mathbf{v}` | Cross Product | The cross product of two 3D vectors — produces a vector perpendicular to both. | Linear Algebra, Physics | built-in |

## Sets

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `x \in A` | Set Membership | x is an element of set A. | Sets, Analysis | built-in |
| `x \notin A` | Not a Member | x does not belong to set A. | Sets | built-in |
| `A \subseteq B` | Subset | Every element of A is also in B. | Sets, Proofs | built-in |
| `A \subset B` | Proper Subset | A is strictly contained in B — A ≠ B. | Sets | built-in |
| `A \cup B` | Union | All elements in A, in B, or in both. | Sets, Probability | built-in |
| `A \cap B` | Intersection | All elements simultaneously in both A and B. | Sets, Probability | built-in |
| `A \setminus B` | Set Difference | Elements in A that are not in B. | Sets | built-in |
| `A^c` | Complement | All elements of the universal set U not in A. | Sets, Probability | built-in |
| `A \triangle B` | Symmetric Difference | Elements in A or B but not in both. | Sets | `\\usepackage{amssymb}` |
| `\emptyset` | Empty Set | The unique set containing no elements. | Sets, Logic | `\\usepackage{amssymb}` |
| `\|A\|` | Cardinality | The number of elements in set A. | Sets, Combinatorics | built-in |
| `\mathcal{P}(A)` | Power Set | The set of all subsets of A, including ∅ and A itself. | Sets, Combinatorics | `\\usepackage{amsmath}` |
| `A \times B` | Cartesian Product | All ordered pairs (a,b) with a∈A and b∈B. | Sets, Functions | built-in |
| `\mathbb{N}` | Natural Numbers | Positive integers {1, 2, 3, …}. | Number Theory, Analysis | `\\usepackage{amssymb}` |
| `\mathbb{Z}` | Integers | All integers {…, −2, −1, 0, 1, 2, …}. | Number Theory, Algebra | `\\usepackage{amssymb}` |
| `\mathbb{Q}` | Rational Numbers | Numbers expressible as p/q, p,q∈ℤ, q≠0. | Analysis | `\\usepackage{amssymb}` |
| `\mathbb{R}` | Real Numbers | All points on the continuous number line. | Analysis, ML, Stats | `\\usepackage{amssymb}` |
| `\mathbb{C}` | Complex Numbers | Numbers a+bi where a,b∈ℝ and i=√−1. | Analysis, Signal Processing | `\\usepackage{amssymb}` |
| `[a,\,b]` | Closed Interval | All x∈ℝ with a≤x≤b. Both endpoints included. | Analysis, Calculus | built-in |
| `(a,\,b)` | Open Interval | All x∈ℝ with a strictly less than x strictly less than b. Both endpoints excluded. | Analysis, Calculus | built-in |

## Calculus

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `\lim_{x\to a}f(x)` | Limit | The value that f(x) approaches as x approaches a. | Calculus, Analysis | built-in |
| `f'(x)` | Derivative | The instantaneous rate of change of f with respect to x. | Calculus, Physics | built-in |
| `\nabla f` | Gradient | Vector of all partial derivatives of scalar f. | Calculus, ML, Optimization | built-in |
| `\nabla^2 f` | Hessian / Laplacian | Matrix of second-order partial derivatives; or sum of second partials (Laplacian). | Calculus, Optimization, ML | built-in |
| `\frac{\partial f}{\partial x}` | Partial Derivative | Rate of change of f w.r.t. x, all other variables held constant. | Calculus, Physics, ML | built-in |
| `\int_a^b f\,dx` | Definite Integral | Net signed area under f between x=a and x=b. | Calculus, Probability, Physics | built-in |

## Linear Algebra

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `A^{\top}` | Matrix Transpose | Rows and columns of A are swapped. Element (i,j) of A^T equals (j,i) of A. | Linear Algebra, ML, Stats | built-in |
| `A^{-1}` | Matrix Inverse | Matrix satisfying A·A⁻¹=A⁻¹·A=I. | Linear Algebra, Stats | built-in |
| `A^\dagger` | Pseudo-Inverse | Moore-Penrose generalisation of the inverse for any matrix. | Linear Algebra, ML | built-in |
| `\operatorname{tr}(A)` | Trace | Sum of the diagonal elements of a square matrix. | Linear Algebra, ML | `\\usepackage{amsmath}` |
| `\det(A)` | Determinant | Scalar encoding the scaling factor and orientation of transformation A. | Linear Algebra, Geometry | built-in |
| `\\|\mathbf{v}\\|_2` | Euclidean Norm (ℓ₂) | Straight-line length of vector v. | Linear Algebra, ML, Geometry | built-in |
| `\\|\mathbf{v}\\|_1` | ℓ₁ Norm (Manhattan) | Sum of absolute values of components. | Linear Algebra, ML | built-in |
| `\mathbf{u}^\top\mathbf{v}` | Inner Product | Scalar dot product: sum of element-wise products. | Linear Algebra, ML | built-in |
| `\mathbf{u}\odot\mathbf{v}` | Hadamard Product | Elementwise multiplication of two same-shaped arrays. | Linear Algebra, ML | `\\usepackage{amssymb}` |
| `A\otimes B` | Kronecker Product | Block matrix: each element of A multiplied by the entire matrix B. | Linear Algebra, Signal Processing | built-in |
| `\mathbf{I}_n` | Identity Matrix | n×n matrix with 1s on the diagonal and 0s elsewhere. | Linear Algebra, ML | built-in |
| `\lambda_i(A)` | Eigenvalue | Scalar λ satisfying Av=λv for some non-zero vector v. | Linear Algebra, ML, Physics | built-in |
| `\mathbf{x}\perp\mathbf{y}` | Orthogonality | Vectors x and y are orthogonal — their inner product is zero. | Linear Algebra, Geometry | built-in |

## Probability

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `P(A)` | Probability | The probability that event A occurs. A value in [0,1]. | Probability, Statistics | built-in |
| `P(A\mid B)` | Conditional Probability | Probability of A given that B has already occurred. | Probability, ML, Bayes | built-in |
| `X\sim p` | Distributed As | Random variable X follows distribution p. | Probability, ML, Stats | built-in |
| `X\perp Y\mid Z` | Conditional Independence | X is conditionally independent of Y given Z. | Probability, Graphical Models | built-in |
| `\mathbb{E}[X]` | Expected Value | The long-run average value of random variable X. | Probability, Stats, ML | `\\usepackage{amssymb}` |
| `\mathrm{Var}(X)` | Variance | Expected squared deviation from the mean. | Probability, Stats | `\\usepackage{amsmath}` |
| `\mathcal{N}(\mu,\sigma^2)` | Normal Distribution | Gaussian (bell-curve) distribution with mean μ and variance σ². | Probability, Stats, ML | `\\usepackage{amsmath}` |
| `F(x)` | CDF | Cumulative Distribution Function — P(X is at most x). | Probability, Stats | built-in |
| `f(x)` | PDF | Probability Density Function — relative likelihood for continuous X. | Probability, Stats | built-in |
| `p(x)` | PMF | Probability Mass Function — P(X=x) for discrete X. | Probability, Stats | built-in |
| `H(X)` | Entropy | Measure of uncertainty or randomness in random variable X. | Information Theory, ML | built-in |
| `D_{\mathrm{KL}}(p\\|q)` | KL Divergence | How much distribution p differs from reference distribution q. | Information Theory, ML, Bayes | `\\usepackage{amsmath}` |
| `\sigma(x)` | Sigmoid Function | Logistic function mapping all real numbers to (0,1). | ML, Neural Networks | built-in |

## Statistics

| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |
|---|---|---|---|---|
| `\bar{x}` | Sample Mean | Arithmetic average of a sample of observations. | Stats, Econometrics | built-in |
| `\mu` | Population Mean | True average of the entire population. Usually unknown. | Stats, Probability | built-in |
| `s^2` | Sample Variance | Average squared deviation from the sample mean. | Stats, Econometrics | built-in |
| `\hat{\theta}` | Estimator | An estimate of parameter θ computed from data. | Stats, ML, Econometrics | built-in |
| `H_0` | Null Hypothesis | The default hypothesis assumed true until evidence refutes it. | Stats, Econometrics | built-in |
| `\alpha` | Significance Level | Threshold probability for rejecting H₀ (Type I error rate). | Stats, Hypothesis Testing | built-in |
| `\chi^2(k)` | Chi-Squared | Distribution of a sum of k squared standard normal variables. | Stats, Hypothesis Testing | built-in |
| `r` | Correlation Coefficient | Measures linear relationship between two variables. Range [−1,1]. | Stats, Econometrics | built-in |
| `R^2` | R-Squared | Proportion of variance in Y explained by the model. | Stats, Econometrics, ML | built-in |
