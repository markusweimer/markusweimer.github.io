---
date: 2011-11-21
layout: post
title: Machine learning in ScalOps, a higher order cloud computing language
categories:
- Publication
---
**Markus Weimer**, Tyson Condie and Raghu Ramakrishnan

## Abstract
> ScalOps is a new internal domain-specific language (DSL) for Big Data
analytics that targets machine learning and graph-based algorithms. It unifies
the so-far distinct DAG processing as found in e.g. PIG and the iterative
computation needs of machine learning in a single language and runtime. It
exposes a declarative language that is reminiscent to Pig with iterative
extensions: The scaloop block captures iteration and packages it in the
execution plan so that it can be optimized for caching opportunities and handed
off to the runtime. The Hyracks runtime directly supports these iterations as
recursive queries, thereby avoiding the pitfalls of an outer driver loop. We
highlight the expressiveness of ScalOps by presenting two example
implementations: Batch Gradient Descent - a trivially parallel algorithm - and
Pregel, a computational framework of its own. The resulting code is nearly a 1:1
translation of the target mathematical description.

[Download PDF]({{site.url}}/files/pub/2011/2011-NIPS-BigLearn-Scalops.pdf)

## BibTeX
    @inproceedings{Weimer:2011fk,
    	Author = {Markus Weimer and Tyson Condie and Raghu Ramakrishnan},
    	Booktitle = {NIPS 2011 Workshop on parallel and large-scale machine learning (BigLearn)},
    	Month = {December},
    	Title = {Machine learning in ScalOps, a higher order cloud computing language},
    	Url = {{{site.url}}{{page.url}}},
    	Year = {2011}
    }
