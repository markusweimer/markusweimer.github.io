---
layout: post
title: "Elastic Distributed Bayesian Collaborative Filtering"
categories: Publication
---

Alex Beutel, **Markus Weimer**, Tom Minka, Yordan Zaykov, Vijay Narayanan 


## Abstract

> In this paper, we consider learning a Bayesian collaborative filtering model on a shared cluster of commodity machines. Two main challenges arise: (1) How can we parallelize and distribute Bayesian collaborative filtering? (2) How can our distributed inference system handle elasticity events common in a shared, resource managed cluster, including resource ramp-up, preemption, and stragglers? 
>
> To parallelize Bayesian inference, we adapt ideas from both matrix factorization partitioning schemes used with stochastic gradient descent and stale synchronous programming used with parameter servers. To handle elasticity events we offer a generalization of previous partitioning schemes that gives increased ﬂexibility during system disruptions. 
> 
> We additionally describe two new scheduling algorithms to dynamically routework at runtime. In our experiments,we compare the effectiveness of both scheduling algorithms and demonstrate their robustness to system failure.

[Download PDF]({{site.url}}/files/pub/2014/2014-NIPS-InferREEF.pdf)

## BibTeX

    @inproceedings{beutel2014elastic,
      title={Elastic Distributed Bayesian Collaborative Filtering},
      author={Beutel, Alex and Weimer, Markus and Minka, Tom and Zaykov, Yordan and Narayanan, Vijay},
      booktitle={NIPS Distributed Machine Learning and Matrix Computations workshop},     
      year={2014}
    }
