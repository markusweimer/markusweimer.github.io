---
author: admin
comments: true
date: 2013-08-02 22:59:53+00:00
layout: post
slug: how-to-setup-powershell-for-github-maven-and-java-development
title: How to setup PowerShell for GitHub, Maven and Java development
wordpress_id: 1162
categories:
- Hackery
---

Quite a few people asked, so here is my setup that I found quite useful:




	
  1. Download and install [GitHub for Windows](http://windows.github.com/). Launch it at least once and use it to clone a repository. This triggers the download of the actual git command line tools.

	
  2. Download and install Java and setup the environment variable `JAVA_HOME`. For example, set it to `C:\Program Files\Java\jdk1.7.0_15`

	
  3. Download and install Maven. Set `M2_HOME` to point to your maven installation folder, e.g. `C:\maven`


Now that the basics are in place, the following PowerShell profile will wire things up such that `mvn`, `git `and `javac `work as expected:


    
    
    \# Setup java
    if(Test-Path $env:JAVA_HOME){
    	Set-Alias javac $env:JAVA_HOME\bin\javac.exe
    	Set-Alias java $env:JAVA_HOME\bin\java.exe
    	Set-Alias jar $env:JAVA_HOME\bin\jar.exe
    }
    \# Setup maven
    if(Test-Path $env:M2_HOME){
        function mvn-mt{
                $cmd = "$env:M2_HOME\bin\mvn.bat -TC1 $args"
                Invoke-Expression($cmd)        
        }
        function mvn{
                $cmd = "$env:M2_HOME\bin\mvn.bat $args"
                Invoke-Expression($cmd)        
        }
    }else{
        function mvn{
            echo "Could not find a maven install. is M2_HOME set?"
        }
    }
    \# setup git
    if(Test-Path ~\AppData\Local\GitHub){    
        . (Resolve-Path "$env:LOCALAPPDATA\GitHub\shell.ps1")
        . (Resolve-Path "$env:github_posh_git\profile.example.ps1")
    }
    



The Java setup is rather simple, just some aliases. For maven, I used functions as I really don't like to type mvn.bat on the command line. Lastly, this just imports the very awesome GitHub command line integration. It enables branch names in the prompt as well as tab completion for git commands. 

