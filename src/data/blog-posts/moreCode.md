---
title: Type More Code; RDD - REPL Driven Development 
slug: typeMore 
publishDate: 07 Sep 2025
description: You learn to code by typing code & running it. 
---
<!-- Open Graph -->
<meta property="og:title" content="Type More Code: RDD - REPL Driven Development" />
<meta property="og:description" content="You learn to code by typing code & running it" />
<meta property="og:image" content="https://allos.dev/assets/allosDevLogo-1.webp?v=3"  />
<meta property="og:url" content="https://allos.dev/blog/typeMore" />
<meta property="og:type" content="article" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Type More Code: RDD - REPL Driven Development") />
<meta name="twitter:description" content="You learn to code by typing code & running it." />
<meta name="twitter:image" content="https://allos.dev/assets/allosDevLogo-1.webp?v=3" />

Here's how I've always learned to code:
1. Write (or change) the smallest amount of code that does something.
2. Build.  See if the code I typed passes the compiler.
   - If it doesn't, then go directly back to step one.
3. Run it.
4. Determine if it works the way I expected or if something needs to be added or fixed.
5. Back to step one.

## Richard P. Feynman Said It This Way
<blockquote>The test of all knowledge is experiment. Experiment is the sole judge of scientific “truth.”
<br>~Richard P. Feynman, Six Easy Pieces, Lectures On Physics</blockquote>

## Experiment Your Way To Success
Every bit of code that you write and run ends up being an experiment.  Those experiments help you gain knowledge and help you discover the scientific truth of your code.  The things you know are the things you've coded up and tested.

## .NET Development Makes This Easier Than Ever
I've always been a manual tester so I would build and run and work through the steps to see if the functionality worked as I expected.  However, there are better ways now.

Those better ways will lead you to better code.

## What Are the Better Ways?
Here's what I mean.  One of the best things you can do is break the functionality of your app up into reusable pieces.  In many cases that may mean added functions and classes to a separate DLL (Dynamic Link Library).  That way you can add the library to any other project and have the functionality in that project also.

However, when you put your code into the DLL you can no longer run the code to test it without a EXE project that loads it and accesses the functionality.  In that past, that meant building a test-driver app which would load the DLL and exercise it by calling the functions.

It's much easier to do now, because you can add a Unit Testing project to your app.

Yes, that means that you should start off creating two projects (grouped into a .NET solution) when you create your initial DLL project.

Here are the steps that I've worked out for you to make that easier.

|       Command                                |                  Explanation              |
|----------------------------------------------|-------------------------------------------|
|<code> $ mkdir &lt;ProjectName&gt; </code> | Creates outer folder to hold project.      |
|<code> $ cd &lt;ProjectName&gt; </code>    | Change Directory into folder.              |
|<code> $ dotnet new console -o &lt;ProjectName&gt; </code> | Creates new console app proj. with same name as outer folder. |
|<code> $ dotnet new sln </code> | Creates new solution file to reference all projects.      |
|<code> $ dotnet new sln add &lt;ProjectName&gt; </code> | Adds the main console project to the SLN file.|
|<code> $ dotnet new xunit -o &lt;ProjectName&gt;.Tests </code> | Creates XUnit test proj &amp; adds all depedencies. XUnit proj folder will look like `MyProject.Tests` |
|<code> $ dotnet sln add &lt;ProjectName&gt;.Tests </code> | Adds Unit Test project to SLN file. |
|<code> $ dotnet add &lt;ProjectName&gt;.Tests reference &lt;ProjectName&gt; </code> | Adds a reference to main project (&lt;ProjectName&gt;.dll) into the XUnit test project so it can be referenced.      |
|<code> $ dotnet test &lt;ProjectName&gt;.Tests </code> | Runs the unit tests in the XUnit project. (Makes sure everything works.) |

Here's what that looked like when I did this for our project: CpSysInfo

|       Command                                |                  Explanation              |
|----------------------------------------------|-------------------------------------------|
|<code> $ mkdir CpSysInfo </code> | Creates outer folder to hold project.      |
|<code> $ cd CpSysInfo </code>    | Change Directory into folder.              |
|<code> $ dotnet new console -o CpSysInfo </code> | Creates new console app proj. with same name as outer folder. |
|<code> $ dotnet new sln </code> | Creates new solution file to reference all projects.      |
|<code> $ dotnet new sln add CpSysInfo </code> | Adds the main console project to the SLN file.|
|<code> $ dotnet new xunit -o CpSysInfo.Tests </code> | Creates XUnit test proj &amp; adds all depedencies. XUnit proj folder will look like `CpSysInfo.Tests` |
|<code> $ dotnet sln add CpSysInfo.Tests </code> | Adds Unit Test project to SLN file. |
|<code> $ dotnet add CpSysInfo.Tests reference CpSysInfo </code> | Adds a reference to main project (CpSysInfo.dll) into the XUnit test project so it can be referenced.      |
|<code> $ dotnet test CpSysInfo.Tests </code> | Runs the unit tests in the XUnit project. (Makes sure everything works.) |

## More Details In My Upcoming Book Write Cross-Platform Apps
Once you can create projects like this in .NET you will be much more free to follow the REPL Driven Development and that will mean you can type more code and run more code.  That's how you learn to program.

I'll provide more details in my upcoming book and in my next blog entry.
