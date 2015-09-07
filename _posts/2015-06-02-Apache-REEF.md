---
layout: post
title: "REEF: Retainable Evaluator Execution Framework"
categories: Publication
---

**Markus Weimer**, Yingda Chen, Byung-Gon Chun, Tyson Condie, Carlo Curino, Chris Douglas, Yunseong Lee, Tony Majestro, Dahlia Malkhi , Sergiy Matusevych, Brandon Myers, Shravan Narayanamurthy, Raghu Ramakrishnan, Sriram Rao, Russell Sears, Beysim Sezgin, Julia Wang

## Abstract

> Resource Managers like Apache YARN have emerged as a critical layer in the
cloud computing system stack, but the developer abstractions for leasing cluster
resources and instantiating application logic are very low-level.  This
flexibility comes at a high cost in terms of developer effort, as each
application must repeatedly tackle the same challenges (e.g., fault-tolerance,
task scheduling and coordination) and re-implement common mechanisms (e.g.,
caching, bulk-data transfers).

> This paper presents [REEF], a development framework that provides a
control-plane for scheduling and coordinating task-level (data-plane) work on
cluster resources obtained from a Resource Manager. REEF provides mechanisms
that facilitate resource re-use for data caching, and state management
abstractions that greatly ease the development of elastic data processing
work-flows on cloud platforms that support a Resource Manager service. REEF is
being used to develop several commercial offerings such as the Azure Stream
Analytics service. Furthermore, we demonstrate REEF development of a distributed
shell application, a machine learning algorithm, and a port of  the CORFU
system.  REEF is also currently an Apache Incubator project that has attracted
contributors from several institutions.

[Download PDF]({{site.url}}/files/pub/2015/2015-SIGMOD.pdf)

## BibTeX

    @inproceedings{weimer2015reef,
      title={REEF: Retainable Evaluator Execution Framework},
      author={Weimer, Markus and Chen, Yingda and Chun, Byung-Gon and Condie, Tyson and Curino, Carlo and Douglas, Chris and Lee, Yunseong and Majestro, Tony and Malkhi, Dahlia and Matusevych, Sergiy and others},
      booktitle={Proceedings of the 2015 ACM SIGMOD International Conference on Management of Data},
      pages={1343--1355},
      year={2015},
      organization={ACM}
    }

[REEF]: http://reef.apache.org
