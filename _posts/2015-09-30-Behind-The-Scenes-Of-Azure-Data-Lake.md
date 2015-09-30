---
layout: post
title: Behind the scenes of Azure Data Lake - Apache REEF
---

Raghu Ramakrishnan [just posted][ADL] about what we've been up to at Microsoft
in the last few years:

>Microsoft just announced Microsoft Azure Data Lake, a set of big data storage and analytics services including Azure HDInsight that enables developers, data scientists and analysts to perform all types of processing and analytics on data of any size or shape and across multiple platforms and programming languages. (See Azure Data Lake landing page, Azure Data Lake signup page, Azure Data Lake blog.)

And, I would be remiss not to highlight the mention of [Apache REEF][REEF]:

> Given our extensive development on YARN, we conceived and developed REEF at Microsoft to ease building of Java and C# applications on YARN and other resource managers. It has since been incubated at Apache and attracted numerous committers from several academic and commercial organizations.

Beyond Azure Data Lake, we used REEF to build [Azure Stream Analytics][ASA] at
Microsoft. And, maybe more relevant to the readers of this, it is the backend
of several [publications](/publications/). Consider using it for your next
distributed systems project. Microsoft and its partners in the Apache REEF
community are kind enough to battle-test it for you :-)

[ADL]: https://azure.microsoft.com/en-us/blog/behind-the-scenes-of-azure-data-lake-bringing-microsoft-s-big-data-experience-to-hadoop/
[REEF]: http://reef.apache.org
[ASA]: https://azure.microsoft.com/en-us/services/stream-analytics/
