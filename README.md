# svelb

A simple [Svelte](https://svelte.dev) blog based on [Gatsby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) CSS styles.

Features:

- JSON-based post data with HTML support
- Syntax highlight
- Pagination

## Demo

View the demo blog hosted on Vercel.

![svelb_demo](https://user-images.githubusercontent.com/20209393/167311086-4da0038c-1857-463f-8127-5d30b871336b.gif)

## Get started

Clone the project and install the dependencies...

```bash
cd svelb
yarn install
```

...then start [Rollup](https://rollupjs.org):

```bash
yarn dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the blog running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Usage

Edit `posts.json` file in `data`. Posts are ordered by id in descending order by default.

## Building and running in production mode

To create an optimised version of the blog:

```bash
yarn build
```

You can run the newly built app with `yarn start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
yarn add -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
yarn add -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
