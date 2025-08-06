---
title: Install on Windows 10/11 Using Self-extracting Zip
slug: x86_64_selfextract 
publishDate: 13 Jun 2025
description: Install DiscoProcs on Windows, quick and easy 
---
### Easy Install Using Self-extracting Zip
You can <a href="/downloads/DiscoProcsSelfExtractingZip.EXE" target="_blank" download>download the self-extracting zip</a> for <strong>Windows</strong> to simply copy all the files you need to run DiscoProcs. 

The self-extracting zip is just the zip file with an executable wrapper which will unzip the program for you and copy it to a directory on your computer.
It just makes things a bit easier.

### Files & Folders Which Will Be Copied To Your Computer 
The following snapshot displays the folders and files contained in the zip which will be copied to your computer.<br> 
I've highlighted (in blue) the main executable file (DiscoProcs).
<img src="/assets/blog/LinuxX86_64_ZipContents.png">

### Preview The Zip Extraction Process
Admittedly, this process is a bit weird, but I was trying to :
1. make it easy for people to install the app
2. provide transparency about what is copied to your machine

Here's what it will look like when you run the self-extracting installer.

### Start The Install
After you download the file, just double-click the file to start it up.

***NOTE***   
Most likely you are going to get a warning since this is an executable and your system wants to protect you.

The first thing you'll see is the following explanation (you can see the EXE I clicked in the background of the image):
<img src="/assets/blog/selfextract/step1.png">

If you continue, by clicking the [Yes] button then you'll see a bunch of flashing (as the files are copied) and the program starts for the first time:

<img src="/assets/blog/selfextract/step2.png">

After that, if you go copy and paste the following path into your File Explorer you can see all the files that were installed:
```%ProgramData%\DiscoProcs%```

Copy the entire path with the % signs.  That is a Windows SpecialFolder (%ProgramData%) which holds program files and data.

<img src="/assets/blog/selfextract/step3.png">

### Try Out The App

Once you're done examining the files that it installs, you can try out the program.

Go ahead and click the [Get All Proc Names] button to display all the running processes on your system.

<img src="/assets/blog/selfextract/step4.png">

Finally, once you close the app, the installer will pop up this final dialog informing you that it did install the app.
<img src="/assets/blog/selfextract/step5.png">

I know that is a bit odd.  But, for now it works.  

That's it, thanks for trying it.
