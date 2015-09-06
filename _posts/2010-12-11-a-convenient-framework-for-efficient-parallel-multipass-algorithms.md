---
date: 2010-12-11
layout: post
title: A Convenient Framework for Efficient Parallel Multipass Algorithms
categories:
- Computer Science
- Publication
---

Markus Weimer, Sriram Rao, Martin Zinkevich

## Abstract
<blockquote>The amount of data available is ever-increasing. At the same time, the available time to learn from the available data is decreasing in many applications, especially on the web. These two trends together with limited improvements in per-cpu speed and hard disk bandwidth lead to the need for parallel machine learning algorithms. Numerous have been proposed in the past (including [1, 3, 4]). Many of them make use of frameworks like MapReduce [2], as it facilitates easy parallelization and provides fault tolerance and data local computation at the framework level. However, MapReduce also introduces some inherent inefﬁciencies when compared to message passing systems like MPI. In this paper, we present a computational framework based on Workers and Aggregators for dataparallel computations that retains the simplicity of MapReduce, while offering a signiﬁcant speedup for a large class of algorithms. We report experiments based on several implementations of Stochastic Gradient Descent (SGD): The well known sequential variant as well as a parallel version inspired by our recent work in [5] which we implemented both in MapReduce and the proposed framework.</blockquote>


[Download PDF](http://cs.markusweimer.com/pub/2010/2010-NIPS-LSML-Workshop.pdf)


## BibTeX
    @inproceedings{Weimer:2010fk,
    	Author = {Markus Weimer and Sriram Rao and Martin Zinkevich},
    	Booktitle = {LCCC : NIPS 2010 Workshop on Learning on Cores, Clusters and Clouds},
    	Title = {A Convenient Framework for Efficient Parallel Multipass Algorithms},
    	Year = {2010}
    }
