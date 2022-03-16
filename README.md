# GAWgen Netlify CMS

This is a Github Action Workflow generator from Netlify CMS a friendly UI and intuitive workflows.

## 🚀 Getting started

Use our deploy button to get your own copy of the repository.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dofbi/GAgen-netlify-cms&stack=cms)

This will setup everything needed for running the **GAgen-netlify-cms**:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage github action with Netlify CMS

Go to https://[site-name].netlify.app/admin

## 🌳 Project Structure

Inside of your **GAgen-netlify-cms** project, you'll see the following folders and files:

```
/
├── .github/
│   └── workflows/
│       └── hello-world.yml
├── public/
│   └── admin/
│       └── config.yml
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Create Github Action are save in the `.github/workflows` directory.

Any static assets, like images and **Netlify CMS** admin config are placed in the `public/` directory.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

* [GitHub Actions](https://docs.github.com/en/actions)
* [Netlify CMS](https://www.netlifycms.org/docs/intro/)
* [Astro](https://docs.astro.build)
