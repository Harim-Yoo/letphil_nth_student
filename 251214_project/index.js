const fs = require('fs');

const rawSolutionManual = String.raw`
\subsection*{1.1 Examples}
\boxed{\bf 1}
\bigskip
(a)
\begin{align*}
\lim_{x\rightarrow\infty}\dfrac{x^3-3x+1}{2x+3}&=\lim_{x\rightarrow\infty}\dfrac{x^2-3+\frac1x}{2+\frac3x}\\
&=\text{undefined}
\end{align*}
(b)
\begin{align*}
\lim_{x\rightarrow\infty}\dfrac{-x^2+3}{5x^2+9}&=\lim_{x\rightarrow\infty}\dfrac{-1+\frac{3}{x^2}}{5+\frac{9}{x^2}}\\
&=\dfrac{-1+0}{5+0}\\
&=-\dfrac{1}{5}
\end{align*}
\boxed{\bf 2}
\bigskip
(a) $\displaystyle\lim_{x\rightarrow\infty}(-1)^x$ is undefined because it oscillates.\\
\bigskip
(b) $\displaystyle\lim_{x\rightarrow\infty}\cos(x)$ is undefined because it oscillates.
\newpage
`;

function cleanText(text) {
    if (!text) return "";
    return text.replace(/\\bigskip|\\newpage|\\vfill|\\\\/g, " ")
    .replace(/\s*/, "")
    .trim();
}

function parseSolutions(content) {
    const problemRegex = /\\boxed\{\\bf\s*(\d+)\}/;
    const parts = content.split(problemRegex);
    console.log(parts);
}

parseSolutions(rawSolutionManual);

