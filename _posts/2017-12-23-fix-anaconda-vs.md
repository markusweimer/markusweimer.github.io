---
layout: post
title: "How to fix the Anaconda Prompt installed by Visual Studio 2017"
---

Visual Studio now can install Anaconda's Python distribution. Awesome! What
isn't so awesome: The `Anaconda Prompt` in the start menu that installs doesn't
work. When I oppened it, I was greeted with:

```
"C:\Program" is not recognized as an internal or external command, operable program or batch file.
```

However, this is easy to fix. Open the properties of the start menu entry. You will find that it points to:

```
"C:\Program Files (x86)\Microsoft Visual Studio\Shared\Anaconda3_64\pythonw.exe" "C:\Program Files (x86)\Microsoft Visual Studio\Shared\Anaconda3_64\cwp.py" "C:\Program Files (x86)\Microsoft Visual Studio\Shared\Anaconda3_64" %windir%\system32\cmd.exe "/K" "C
```

Replace that with the following:

```
"C:\Program Files (x86)\Microsoft Visual Studio\Shared\Anaconda3_64\pythonw.exe" "C:\Program Files (x86)\Microsoft Visual Studio\Shared\Anaconda3_64\cwp.py" "C:\Program Files (x86)\Microsoft Visual Studio\Shared\Anaconda3_64" %windir%\system32\cmd.exe "/K" "
```

Yes, you see that right: Just remove the `C` at the end of it.

I filled an [issue](https://developercommunity.visualstudio.com/content/problem/173198/anaconda-prompt-doesnt-work-after-installation.html) with Visual Studio. Hence, I hope this information only has temporary value.