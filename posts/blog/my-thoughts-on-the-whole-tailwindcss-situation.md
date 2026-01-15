---
title: "My thoughts on the whole TailwindCSS situation"
date: "2026-01-15"
description: "TailwindCSS lay off 75% of staff members due to the impact of AI."
tag: "Thoughts"
mins: "5"
finished: true
last_updated_date: "2026-01-15"
filter: "Thoughts"
---

## My thoughts on the whole TailwindCSS situation

Last week, the creator of [TailwindCSS](https://tailwindcss.com) (Adam Wathan) released a video post on X where he discussed the impact AI had on his company and how he had to lay off **75%** of his team because of it.

Here's the post:

https://x.com/adamwathan/status/2008909129591443925?s=20

In the video, Adam explains how AI is impacting his business, how revenue has dropped significantly while npm downloads have increased by a large margin.

### How does TailwindCSS make money?

TailwindCSS generates revenue through a service called **TailwindCSS Plus**, which offers UI templates and components for a one-time purchase. This service was primarily promoted through their documentation and landing pages. However, with the rise of AI, fewer users are visiting the documentation and instead relying on AI tools, resulting in reduced traffic and fewer users being exposed to their paid products.

### The llms.txt situation

A while ago, a user (quantizor) opened a PR on the [tailwindcss.com](https://github.com/tailwindlabs/tailwindcss.com/pull/2388) GitHub repository with a change that would make it easier for large language models to extract information from their documentation pages.

https://github.com/tailwindlabs/tailwindcss.com/pull/2388

This PR received mixed reactions from the community. Some questioned why it was being ignored, after which Adam explained why the team was not considering the change.

![](/post/my-thoughts-on-the-whole-tailwindcss-situation/adam.png)

Essentially, traffic to their documentation has dropped significantly, and as a result, they were forced to lay off most of their team due to major revenue losses. This PR would make it easier for large language models to extract information from their documentation, which would likely reduce traffic even further.

Adam isn't opposed to this change but he also can't accept it because the change does effect the business, and making sure its profitable is the number one priority.

### My thoughts

AI affecting open source businesses was bound to happen, and TailwindCSS is not the only example, I've seen multiple open source businesses voice out the same complaints about how is AI effecting their revenues. This is honestly sad because so many rely on TailwindCSS to build their UI's. Heck, even this entire site is built with TailwindCSS.

![](/post/my-thoughts-on-the-whole-tailwindcss-situation/code.jpeg)

After all of this unfolded, several companies stepped in to sponsor TailwindCSS, which was great to see. Companies that rely heavily on open-source software should give back to the projects they depend on.

https://x.com/darraghcurran/status/2011394067267993603?s=20

### Conclusion

I think using AI to learn something new is completely fine. AI is a tool, and it should absolutely be leveraged to your advantage. While individual users may not always be in a position to financially support open-source projects, they can still support them by respecting the maintainers’ wishes and how they choose to direct the project. Companies, on the other hand, can sponsor the open-source software they rely on if they have the means to.
