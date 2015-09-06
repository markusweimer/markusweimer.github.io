---
date: 2010-05-12
layout: post
title: Collaborative Filtering on a Budget
categories:
- Publication
---
Alexandros Karatzoglou, Alex Smola, **Markus Weimer**

## Abstract

> Matrix factorization is a successful technique for building collaborative
filtering systems. While it works well on a large range of problems, it is also
known for requiring significant amounts of storage for each user or item to be
added to the database. This is a problem whenever the collaborative filtering
task is larger than the medium-sized Netflix Prize data.

> In this paper, we propose a new model for representing and compressing matrix
factors via hashing. This allows for essentially unbounded storage (at a
graceful storage / performance trade-off) for users and items to be represented
in a pre-defined memory footprint. It allows us to scale recommender systems to
very large numbers of users or conversely, obtain very good performance even for
tiny models (e.g. 400kB of data suffice for a representation of the EachMovie
problem).

> We provide both experimental results and approximation bounds for our
compressed representation and we show how this approach can be extended to
multipartite problems.
[Download PDF]({{site.url}}/files/pub/2010/2010-AISTATS.pdf)

## BibTeX

    @inproceedings{Karatzoglou:2010uq,
    	Author = {Alexandros Karatzoglou and Alex Smola and Markus Weimer},
    	Booktitle = {Proceedings of the Thirteenth International Conference on Artificial Intelligence and Statistics},
    	Editor = {Yee Whye Teh and Mike Titterington},
    	Pages = {389-396},
    	Title = {Collaborative Filtering on a Budget},
    	Volume = {9},
    	Year = {2010},
    }
