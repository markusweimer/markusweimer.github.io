---
date: 2010-12-09
layout: post
title: Parallelized Stochastic Gradient Descent
categories:
- Publication
---
Martin Zinkevich, **Markus Weimer**, Alex Smola, Lihong Li

## Abstract

> With the increase in available data parallel machine learning has become an
increasingly pressing problem. In this paper we present the ﬁrst parallel
stochastic gradient descent algorithm including a detailed analysis and
experimental evidence. Unlike prior work on parallel optimization algorithms [5,
7] our variant comes with parallel acceleration guarantees and it poses no
overly tight latency constraints, which might only be available in the multicore
setting. Our analysis introduces a novel proof technique — contractive mappings
to quantify the speed of convergence of parameter distributions to their
asymptotic limits. As a side effect this answers the question of how quickly
stochastic gradient descent algorithms reach the asymptotically normal regime
[1, 8].

Download PDF of [Paper]({{site.url}}/files/pub/2010/2010-NIPS.pdf) and
[Appendix]({{site.url}}/files/pub/2010/2010-NIPS-Appendix.pdf)


## BibTeX
    @inproceedings{NIPS2010_1162, 
      author = {Martin Zinkevich and Markus Weimer and Alex Smola and Lihong Li}, 
      Booktitle = {Advances in Neural Information Processing Systems 23}, 
      Editor = {J. Lafferty and C. K. I. Williams and J. Shawe-Taylor and R.S. Zemel and A. Culotta}, 
      Pages = {2595--2603}, 
      Title = {Parallelized Stochastic Gradient Descent}, 
      Year = {2010}
    }
