---
layout: post
title: "PerfGuard: deploying ML-for-systems without performance regressions, almost!"
categories: Publication
---

Remmelt Ammerlaan, Gilbert Antonius, Marc Friedman, H M Sajjad Hossain, Alekh Jindal, Peter Orenberg, Hiren Patel, Shi Qiao, Vijay Ramani, Lucas Rosenblatt, Abhishek Roy, Irene Shaffer, Soundarajan Srinivasan, **Markus Weimer**

## Abstract

> Modern data processing systems require optimization at massive scale, and
> using machine learning to optimize these systems (ML-for-systems) has shown
> promising results. Unfortunately, ML-for-systems is subject to over
> generalizations that do not capture the large variety of workload patterns,
> and tend to augment the performance of certain subsets in the workload while
> regressing performance for others. In this paper, we introduce a performance
> safeguard system, called PerfGuard, that designs pre-production experiments
> for deploying ML-for-systems. Instead of searching the entire space of query
> plans (a well-known, intractable problem), we focus on query plan deltas (a
> significantly smaller space). PerfGuard formalizes these differences, and
> correlates plan deltas to important feedback signals, like execution cost. We
> describe the deep learning architecture and the end-to-end pipeline in
> PerfGuard that could be used with general relational databases. We show that
> this architecture improves on baseline models, and that our pipeline
> identifies key query plan components as major contributors to plan disparity.
> Offline experimentation shows PerfGuard as a promising approach, with many
> opportunities for future improvement.

[Download PDF]({{site.url}}/files/pub/2021/2021-VLDB-PerfGuard),
[ACM](https://dl.acm.org/doi/abs/10.14778/3484224.3484233)

## BibTeX

```bibtex
@article{10.14778/3484224.3484233,
  author = {Ammerlaan, Remmelt and Antonius, Gilbert and Friedman, Marc and Hossain, H M   Sajjad and Jindal, Alekh and Orenberg, Peter and Patel, Hiren and Qiao, Shi and Ramani,   Vijay and Rosenblatt, Lucas and Roy, Abhishek and Shaffer, Irene and Srinivasan,   Soundarajan and Weimer, Markus},
  title = {PerfGuard: Deploying ML-for-Systems without Performance Regressions, Almost!},
  year = {2021},
  issue_date = {September 2021},
  publisher = {VLDB Endowment},
  volume = {14},
  number = {13},
  issn = {2150-8097},
  url = {https://doi.org/10.14778/3484224.3484233},
  doi = {10.14778/3484224.3484233},
  abstract = {Modern data processing systems require optimization at massive scale, and using   machine learning to optimize these systems (ML-for-systems) has shown promising results.   Unfortunately, ML-for-systems is subject to over generalizations that do not capture the   large variety of workload patterns, and tend to augment the performance of certain subsets   in the workload while regressing performance for others. In this paper, we introduce a   performance safeguard system, called PerfGuard, that designs pre-production experiments for   deploying ML-for-systems. Instead of searching the entire space of query plans (a   well-known, intractable problem), we focus on query plan deltas (a significantly smaller   space). PerfGuard formalizes these differences, and correlates plan deltas to important   feedback signals, like execution cost. We describe the deep learning architecture and the   end-to-end pipeline in PerfGuard that could be used with general relational databases. We   show that this architecture improves on baseline models, and that our pipeline identifies   key query plan components as major contributors to plan disparity. Offline experimentation   shows PerfGuard as a promising approach, with many opportunities for future improvement.},
  journal = {Proc. VLDB Endow.},
  month = {sep},
  pages = {3362–3375},
  numpages = {14}
}
```
