---
layout: post
title: "A Tensor Compiler for Unified Machine Learning Prediction Serving"
categories: Publication
---

Supun Nakandala, Karla Saur, Gyeong-In Yu, Konstantinos Karanasos, Carlo Curino, **Markus Weimer**, Matteo Interlandi

## Abstract

> Machine Learning (ML) adoption in the enterprise requires simpler and more
> efficient software infrastructure—the bespoke solutions typical in large web
> companies are simply untenable. Model scoring, the process of obtaining
> predictions from a trained model over new data, is a primary contributor to
> infrastructure complexity and cost as models are trained once but used many
> times. In this paper we propose Hummingbird, a novel approach to model
> scoring, which compiles featurization operators and traditional ML models
> (e.g., decision trees) into a small set of tensor operations. This approach
> inherently reduces infrastructure complexity and directly leverages existing
> investments in Neural Network compilers and runtimes to generate efficient
> computations for both CPU and hardware accelerators. Our performance results
> are intriguing: despite replacing imperative computations (e.g., tree
> traversals) with tensor computation abstractions, Hummingbird is competitive
> and often outperforms hand-crafted kernels on micro-benchmarks on both CPU and
> GPU, while enabling seamless end-to-end acceleration of ML pipelines. We have
> released Hummingbird as open source.

[Download PDF]({{site.url}}/files/pub/2020/2020-11-05-OSDI-Hummingbird.md), [OSDI](https://www.usenix.org/conference/osdi20/presentation/nakandala), [GitHub](https://github.com/microsoft/hummingbird)

## BibTeX

```bibtex
@inproceedings {258906,
  author = {Supun Nakandala and Karla Saur and Gyeong-In Yu and Konstantinos Karanasos and Carlo Curino and Markus Weimer and Matteo Interlandi},
  title = {A Tensor Compiler for Unified Machine Learning Prediction Serving},
  booktitle = {14th {USENIX} Symposium on Operating Systems Design and Implementation ({OSDI} 20)},
  year = {2020},
  isbn = {978-1-939133-19-9},
  pages = {899--917},
  url = {https://www.usenix.org/conference/osdi20/presentation/nakandala},
  publisher = {USENIX} Association,
  month = nov
}
```
