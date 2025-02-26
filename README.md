## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

---

26/02 10am

To start with this assignment, I updated the env file and setup the database. The first issue I'm having is that the final table for the database is failing due to a syntax error. After a quick glance I can see that it's due to an unneeded additional comma on the 7th lines just before the final bracket. The website itself is running locally, so my next step is to push and set up on Vercel to see what issues that pumps out.

---

26/02 11am

Initial vercel build worked fine, so the initial assignment target appears to have been completed quick and easy. The only 'difficult' part was figuring out setting up nextauth, but I used the below linked video to help with that.

https://www.youtube.com/watch?v=xHQQ5I7E_H8&t=204s

To start with my stretch goals, I have completed the very first one of adding the post title to the page title on the posts page. This was pretty simple. Initially, I copied the template from the layout file to make sure it would adjust for each page. When I saw that it would, I tried to get the DB query out of a returned function, until I realised I had no way to specify the post I wanted without the params. I figured out I could add it to a function so that params could be properly added to filter to the current post.

---

26/02 2pm

In this push I'm completing the not logged in error page. I can see that based on the current error that occurs when you vote when not logged in, the Vote.jsx file creates an error. What I have done is create a new page and have the error redirect you to it.

---

26/02 3pm

For this push, I have created post sorting routes, to sort by date and votes. I have also created new PostList componants for each page to properly separate them, along with a separate links page.

---

26/02 7pm

In this final push I have created a user page that can be found my clicking the user's name on a post, either on the post's page or on the any page where the username was previously mentioned. On this page you can view the user's posts, their profile picture and some basic info. I did start working on a form page to edit the profile, however due to time constraints I was unable to both complete it and figure out how to use gitAuth to hide it when you're not signed into the correct account.

With that being said, I have finished the initial target and hit several stretch goals, so I am happy with how this has gone.

---

Fixes:

- Schema fails due to comma extra comma in final table

Stretch Goals:
Fix page titles on post pages to match the post title
Handle the error when you click to vote while not logged in to show a nice error message
Sorting posts by date created and votes

---

Try to make it so I can’t vote more than once (Fix could be done in the SQL with the constraints (ideally), or in-app code to check the db before adding a new row to the votes table)
Users can vote an infinite number of times on the same post. We’d like to prevent this happening. It should be enforced at the Schema level with the UNIQUE constraint but it isn’t working. We’d like you to try and fix this, either by correcting the schema (preferable) or if not by implementing the restriction in the application code when the user tries to upvote.

This is already included in the base code

---

Deployment Link:
https://didit-reddit-upvote-example-roan-pi.vercel.app
