---
date: 2012-04-16
layout: post
title: Talk at Berlin Buzzwords
---

I've been invited to talk about our work on ScalOps at [Berlin
Buzzwords](http://berlinbuzzwords.de)! According to the
[Schedule](http://berlinbuzzwords.de/sessions/declarative-systems-machine-learning),
I'll be speaking June 4th, 17:04 - 17:45 in the room "Kleistsaal".


## Abstract

> Functional programming models like MapReduce raise the level of abstraction.
They allow the programmer to focus on implementing her algorithm in a clean
abstraction without the concern of parallelism, data distribution or
fault-tolerance. Unfortunately, MapReduce runtimes like Hadoop do not provide a
high-performance solution for machine learning, nor do they provide an
attractive API. The ScalOps project seeks to address this shortcoming on
multiple levels. Firstly, we aim to provide an efficient runtime that directly
supports not only a rich Pig-like set of operators, but also iterations to
facilitate many computations from the machine learning domain. Secondly, we
provide a programming language that targets machine learning algorithms. This
domain specific language (DSL) is written in the Scala programming language; a
JVM-based language that is byte-code compatible with Java. In this talk, I will
report on the current status of the ScalOps project and our runtime layer called
Hyracks.

## Slides
[Slides (PDF)]({{site.url}}/files/uploads/2012/04/2012-06-BerlinBuzzwords.pdf)
