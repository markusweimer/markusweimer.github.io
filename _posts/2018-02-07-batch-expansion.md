---
layout: post
title: "Batch-Expansion Training: An Efficient Optimization Framework"
categories: Publication
---

Michal Derezinski, Dhruv Mahajan, S. Sathiya Keerthi, S. V. N. Vishwanathan,
**Markus Weimer**


## Abstract

> We propose Batch-Expansion Training, a method for running a batch optimizer on
> a gradually expanding dataset. As opposed to stochastic approaches, batches do
> not need to be resampled at every iteration, thus making this method more
> resource efficient in distributed setting and when disk-access is constrained.
> We show that when the batch size grows exponentially with the number of outer
> iterations, the approach achieves optimal O(1/e) data-access convergence rate
> for strongly convex objectives.  Moreover, we propose a simple algorithm,
> which can be easily paired with most batch optimizers, does not require any
> parameter-tuning, and compares favorably to existing stochastic and batch
> methods

## BibTeX

    @article{Derezinski:2018,
    author = {Michal Derezinski and Dhruv Mahajan and S. Sathiya Keerthi and S. V. N. Vishwanathan and Markus Weimer},
    title = { 	Batch-Expansion Training: An Efficient Optimization Framework},
    journal = {AISTATS},
    month = April,
    year = {2018}
    }