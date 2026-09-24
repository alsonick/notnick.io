---
title: "Launching LRC Generator"
date: "2026-09-24"
description: "A browser-based LRC generator for synced lyrics."
finished: true
tag: "Information"
mins: "5"
last_updated_date: "2026-09-24"
filter: "Information"
---

## Launching LRC Generator

A few weeks ago I launched a small utility tool that lets you create synced, timestamped lyrics. I built it because I needed it for work, and I've been using it pretty much every day since, so I wanted to write a quick post about it. Hope you enjoy!

### The outdated version

For the longest time, [lrcgenerator.com](https://lrcgenerator.com/) was the site everyone used to sync their lyrics. It did the job, the interface was just really outdated. Recently though, it got worse. Now when you go to sync your lyrics, it tries to download a malicious file.

![](/post/launching-lrc-generator/screenshot.png)

It'll also open a random website in a new tab while it's at it. If this happens to you, close the site and obviously don't run anything it managed to download. Most browsers, Chrome included, will flag the file as a virus and cancel the download before it ever reaches your system.

Either way, I'd recommend turning on the setting that makes your browser ask where to save each file before downloading. That way nothing lands on your machine without you okaying it first, even if your browser doesn't catch it.

![](/post/launching-lrc-generator/ask.png)

Note: In Chrome this is under **Settings > Downloads > Ask where to save each file before downloading**. Most other browsers have the same setting, you'll just have to look up where.

### The new version

This is why I decided to build a more modern version. It has all the useful features the old site had, plus extra functionality and a much cleaner user interface. The site is also open source under the MIT license, so you can contribute, look at the source code, run the site locally on your machine, whatever suits you!

![](/post/launching-lrc-generator/new.png)

Here's the link:

https://lrc.notnick.io/
[embed=true]

Like I said everything is open source, please submit pull requests that fix any bugs or issues with the site, here's the link to the GitHub repository:

https://github.com/alsonick/lrc.notnick.io
[embed=true]

### Conclusion

That's pretty much it. The tool is free to use, so if you make lyric videos or you just need synced lyrics for something, give it a go. I'm still adding to it, so if there's a feature you'd like to see or something isn't working right, there's a feedback form on the site, or you can [shoot me an email](mailto:hi@notnick.io). As always, thanks for reading!
