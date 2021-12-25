---
layout: post
title: "Extending Relational Query Processing with ML Inference"
categories: Publication
---

Konstantinos Karanasos, Matteo Interlandi, Doris Xin, Fotis Psallidas, Rathijit Sen, Kwanghyun Park, Ivan Popivanov, Supun Nakandal, Subru Krishnan, **Markus Weimer**, Yuan Yu, Raghu Ramakrishnan, Carlo Curino

## Abstract

> The broadening adoption of machine learning in the enterprise is increasing
> the pressure for strict governance and cost-effective performance, in
> particular for the common and consequential steps of model storage and
> inference. The RDBMS provides a natural starting point, given its mature
> infrastructure for fast data access and processing, along with support for
> enterprise features, such as encryption, auditing, and high-availability. To
> take advantage of all of the above, we need to address a key concern: Can
> in-RDBMS scoring of ML models match (outperform?) the performance of dedicated
> frameworks? We answer the above positively by building Raven, a system that
> leverages native integration of ML runtimes (such as ONNX Runtime) deep within
> SQL Server and a unified intermediate representation (IR) to enable advanced
> crossoptimizations between ML and database operators. In this optimization
> space, we discover the most exciting research opportunities that combine
> DB/compiler/ML thinking. Our initial evaluation on real data demonstrates
> performance gains of up to 5.5× from the native integration of ML in SQL
> Server and up to 24× from cross-optimizations. An early preview of the ONNX
> Runtime integration is currently available with Azure’s SQL Database Edge.

[Download PDF]({{site.url}}/files/pub/2020/2020-CIDR-Predict.pdf)

Discussed at CIDR 2020.
