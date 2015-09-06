---
date: 2008-10-25
layout: post
title: Adaptive Collaborative Filtering
categories:
- Publication
---

Markus Weimer, Alexandros Karatzoglou and Alexander J. Smola


## Abstract
<blockquote> We present a flexible approach to collaborative filtering which stems from basic research results. The approach is flexible in several dimensions: We introduce an algorithm where the loss can be tailored to a particular recommender problem. This allows us to optimize the prediction quality in a way that matters for the specific recommender system. The introduced algorithm can deal with structured estimation of the predictions for one user. The most prominent outcome of this is the ability of learning to rank items along user preferences. To this end, we also present a novel algorithm to compute the ordinal loss in O(n log(n)) as apposed to O(n2). We extend this basic model such that it can accommodate user and item offsets as well as user and item features if they are present. The latter unifies collaborative filtering with content based filtering. We present an analysis of the algorithm which shows desirable properties in terms of privacy needs of users, parallelization of the algorithm as well as collaborative filtering as a service. We evaluate the algorithm on data provided by WikiLens. This data is a cross-domain data set as it contains ratings on items from a vast array of categories. Evaluation shows that cross-domain prediction is possible.</blockquote>


[Download PDF](http://cs.markusweimer.com/pub/2008-RecSys.pdf)


## BibTeX
   
     @inproceedings{Weimer:2008xy, Address = {New York, NY, USA}, 
      Author = {Markus Weimer and Alexandros Karatzoglou and Alexander J. Smola}, 
      Booktitle = {RecSys '08: Proceedings of the 2008 ACM conference on Recommender systems}, 
      Pages = {275--282}, 
      Publisher = {ACM}, 
      Title = {Adaptive collaborative filtering}, 
    }
