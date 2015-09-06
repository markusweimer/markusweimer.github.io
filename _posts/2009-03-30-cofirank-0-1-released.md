---
date: 2009-03-30
layout: post
title: CofiRank 0.1 released
---

We just released version 0.1 of [cofirank](http://cofirank.org), the
implementation of our algorithm of the same name.

CofiRank (the algorithm) is one of the very few that can predict the actual
**ranking** of items a user may like as opposed to the **rating** computed by
the vast majority of recommender systems. We have discussed the algorithm in a
NIPS-[Paper](http://weimo.de/node/702).

CofiRank (the implementation) is rather efficient, it can be trained on the well
known Netflix data set with less than 2GB memory on a standard laptop. Go check
it out and comment here with your findings ;)
