---
title: "How to use my personal website"
date: "2024-11-03"
description: ""
tag: "Tutorial"
mins: "8"
finished: false
last_updated_date: "2024-11-03"
filter: "Tutorial"
---

## How to use my personal website

Hey everyone! Wow, it’s been a whole year since I last wrote a blog post here. Time flies! I thought it’d be fun to switch things up today and share a tutorial instead. I've had quite a few people ask if they can use my personal site as a template for their own, and since it’s [open source](https://github.com/alsonick/notnick.io), I’m always happy to say yes! Over the last few months, I’ve been busy making my site more dynamic and flexible, so you’ll find it super easy to make your own changes. Let’s get started!

> Note: For this tutorial, you'll need to be familiar with the following technologies:

- [Programming](https://www.codecademy.com/article/what-is-programming)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Git](https://git-scm.com/)

---

#### Just a quick note

For the Spotify playing feature you need to join the Lanyard server and you must have a Discord account.

![](/post/how-to-use-my-personal-website/spotify-playing.png)

If you don't have a Discord account then please head over there and register an account. [Click here to register an account](https://discord.com/register).

Once you've done that, you need to enable developer mode. Here's how you do it:

#### Step 1:

On the bottom left, you should see your user card, click the settings icon.

![](/post/how-to-use-my-personal-website/discord-user-settings.png)

#### Step 2:

Scroll down until if you "Advanced" option under the "App Settings" section.

![](/post/how-to-use-my-personal-website/discord-app-settings.png)

#### Step 3:

Enable the "Developer Mode" option.

![](/post/how-to-use-my-personal-website/discord-developer-mode.png)

#### Step 4:

Copy your Discord ID and replace the `DISCORD_ID` constant with it inside the `libs/constant.ts` file.

![Screen Recording 2024-11-14 at 18 41 06](https://github.com/user-attachments/assets/07e7f862-9675-4688-a413-c904fde24c6d)

---

### Step 1: Clone the GitHub project onto your computer

Firstly, to complete this step, you're gonna need a [GitHub](https://github.com/) account, if you don't have a GitHub account then please click [here](https://github.com/join). Once you've done that, please head over to the GitHub repository for my personal site, you can find it by clicking [here](https://github.com/alsonick) to get to it.

#### 1.1 Fork the project

To fork the project, you need to click on the button with the label "Fork" or click the arrow facing down icon and click "Create a new fork".

![](/post/how-to-use-my-personal-website/fork-project-github.png)

After you've forked the project, you should be redirected to forked project that is currently now on your GitHub page. This is the version you'll be cloning onto your computer.

#### 1.2 Copy the project git URL

You should see a green button with the label "Code", click that and make sure you're on the Local tab. Copy the HTTPS project git URL by clicking the copy icon beside the URL (should be labeled).

![](/post/how-to-use-my-personal-website/copy-git-url.png)

#### 1.3 Clone the project

Once you've copied the git URL, open your terminal of choice. For this tutorial, I'll use the default macOS terminal.

![](/post/how-to-use-my-personal-website/terminal.png)

Type `git clone`, and then paste the git URL you copied earlier into your terminal. The URL should look something like this:

```sh
https://github.com/[YOUR_GITHUB_USERNAME]/notnick.io
```

> Note: You should clone the project in a desired location, so before you clone to project make you sure you `cd` into the directory you want to save it in. If you don't know how the `cd` command works then please [click here](https://www.ibm.com/docs/en/aix/7.3?topic=directories-changing-another-directory-cd-command).

It should take a few seconds to clone the project (sorry, for a personal website it's quite large in size lol). Once you're done, your terminal should look something like this:

![](/post/how-to-use-my-personal-website/terminal-git-clone-output.png)

You don't need to understand what this output means, but if your terminal looks something like this then you're on right track! 👍

#### 1.4 CD into the directory

After the project has been cloned, `cd` into the `notnick.io` directory.

```sh
$ cd notnick.io
```

---

### Step 2: Configure the project

Now we're ready configuring the project, but first we need to do a few things.

#### 2.1 Open the project in an IDE or code editor

For this tutorial, I'd **strongly** advice on you using [Visual Studio Code](https://code.visualstudio.com/) but if you already have an IDE or code editor you're already familiar with then just use that. Launch your code editor and open the `notnick.io` project. Your editor should look something like this:

![](/post/how-to-use-my-personal-website/vscode-opened.png)

#### 2.2 Install the code dependencies

For this you're going to need to install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (you might need [Node.js](https://nodejs.org/) to install Yarn so be sure to install that too)

Once you've done that, open the `package.json` file and there, you'll see all the required dependencies needed for this project.

![](/post/how-to-use-my-personal-website/vscode-package-json.png)

Go back to your terminal and run the following command:

```sh
$ yarn install
```

Once you've done that, your terminal should look something like this:

![](/post/how-to-use-my-personal-website/yarn-install-terminal.png)

---

### Step 3: Edit the project with your details

Alright! You're ready to start editing the project. Firstly we're gonna start by deleting folders and files that you won't need in your version.

#### 3.1 Delete unnecessary folders/files

Please delete the following folders in the `public` directory:

- public/archive
- public/assets
- public/banners
- public/branding
- public/challenge
- public/credit
- public/ignore
- public/old
- public/rags
- public/sample
- public/snippets
- public/spotify

Please delete the following folders in the `pages` directory:

- pages/challenge
- pages/community
- pages/tools
- pages/api/community
- pages/api/tools

Please delete the following folders in the `libs` directory:

- libs/challenges
- libs/snippets

---

Please delete the following files in the `public` directory:

- public/itsRemco.jpg
- public/nintendo-switch-friend-code.txt
  > If you have a switch, then just replace the contents of the file with your switch friend code.
- public/test.txt

Please delete the following files in `pages`:

- pages/articles.tsx
- pages/blm.tsx
- pages/branding.tsx
- pages/components.tsx
- pages/contributors.tsx
- pages/credit.tsx
- pages/dev.tsx
- pages/helloworld.tsx
- pages/license.tsx
- pages/music.tsx
- pages/paths.tsx
- pages/rags.tsx
- pages/specs.tsx

Please delete the following files in the `pages/api` directory:

- pages/api/challenge.ts
- pages/api/dev.ts
- pages/api/example.ts
- pages/api/experience.ts
- pages/api/me.ts
- pages/api/music.ts
- pages/api/newsletter.ts
- pages/api/page.ts
- pages/api/paths.ts
- pages/api/ping.ts
- pages/api/pong.ts
- pages/api/rags.ts
- pages/api/social.ts
- pages/api/socials.ts
- pages/api/specs.ts
- pages/api/technologies.ts

Please delete the following files in the `libs` directory:

- libs/articles.ts
- libs/branding.ts
- libs/components.tsx
- libs/challenge-keys.ts
- libs/get-issues.ts
- libs/get-subscribers.ts
- libs/music.ts
- libs/rags.ts
- libs/return-challenge-status.ts

#### 3.2 Replace the files

Replace the `Avatar.png` and `favicon.ico` with your own. Use [favicon.io](https://favicon.io/) to generate the favicon, once you've done that, unzip the folder and drag the `favicon.ico` file to the `public` directory.

#### 3.3 Edit the constants.ts file

Open the `constants.ts` file in the `lib` folder and replace the relevant values.

```ts
import { page } from "./page";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:3000/api"
    : "https://notnick.io/api";
export const WEBSOCKET_URL = "wss://api.lanyard.rest/socket";
export const SUBJECT_OF_STUDY = "Computer Science";
export const BLOGS_DIR = `posts${page.blog.path}`;
export const NOTES_DIR = `posts${page.note.path}`;
export const DISCORD_ID = "463449066672619520";
export const SECONDARY_THEME_COLOR = "#f3a5bf";
export const PROFESSION = "Software Engineer";
export const EMAIL_ADDRESS = "hi@notnick.io";
export const YEAR_STARTED_PROGRAMMING = 2019;
export const BLOGS_URL_PATH = page.blog.path;
export const NOTES_URL_PATH = page.note.path;
export const AVATAR_FILE_EXTENSION = "png";
export const FULL_NAME = "Nicholas Njoki";
export const LOCATED = "United Kingdom";
export const CACHE_TOKEN = "nas-dsf";
export const FIRST_NAME = "Nicholas";
export const DOMAIN = "notnick.io";
export const LAST_NAME = "Njoki";
export const CITY = "Canterbury";
export const THEME = "#f54bff";
export const AVATAR = "Avatar";
export const COUNTRY = "UK";
```

#### 3.3 Editing the code

Alright time for the fun stuff! Here's the list of files that you need to edit:

- libs/experience.ts
- libs/page.ts

For the `libs/page.ts` file, delete all the object key entries for the pages you don't need, so basically all the pages we deleted earlier.

- libs/paths.ts

Again as before, delete all the objects in the array for the pages we deleted earlier.

- libs/seo-keywords.ts

Replace all the keywords in the `seoKeywords` constant with seo keywords that tailor to yourself followed after with a comma.

Example:

```ts
export const seoKeywords = "elon musk, tesla, spacex, x";
```

- libs/social-links.ts
- libs/socials.ts

These files should be pretty self explanatory.

- libs/specs.ts
- libs/technologies.ts
