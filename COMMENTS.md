# Project

## Dependencies

### Libraries

- [React + ReactDOM](https://reactjs.org/): used as the main component library to build the website
- [Redux](https://redux.js.org/): the state management library to handle a single source of truth for the data
- [Tailwindcss](https://tailwindcss.com/): utility first library to create the styles and design
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start): routing library to write declarative routes

### Other Packages

- [Axios](https://github.com/axios/axios): fetch library to handle request easily
- [Classnames](https://www.npmjs.com/package/classnames): helper to merge string to use on components
- [Day.Js](https://day.js.org/): library to handle dates and format it properly
- [Feather-icons](https://feathericons.com/): icons package to use on our design
- [Redux Thunk](https://github.com/reduxjs/redux-thunk): thunk middleware for redux

---

## Patterns

### Code Style:

- [prettier](https://prettier.io/): used to format the entire codebase

### Folder Structure:

I choose to go for a scalable structure based on Domain Driven Design. Each folder will be explained bellow:

- components: used to store the main reusable components, not attached to any feature
- configs: folder to hold the initial configurations, the redux store and related things
- features: holds all features of the website, each one separated in it's own folder
  - app, genres, home...: inside the features folder, each folder represents an entire feature
    - actions: redux actions and reducers in a single file, following described as One Action One File
    - atoms, molecules, organisms, templates, pages: each layer of atomic design
    - reducers: the place we group all actions to add their reducers
- hooks: shared/general hooks to use inside any feature
- images: assets to use on our system
- utilities: helper functions or objects acting like a service layer

[One Action One File](https://rekit.js.org/docs/one-action-one-file.html): a pattern to write the action and reducer at the same file, as they are coupled and it's common the changes to happen on both while you're developing

[Atomic Design](https://atomicdesign.bradfrost.com/): a structure to follow while developing components, separating each on it's own layer

### Redux Structure:

- router: attached react router values to redux store
- configuration: the main config object form the movie database website
- genres: a list of movie genres tmdb provides us

I ended moving only the strict necessary data to redux, so I could share between multiple components and reuse it.
I'm caching the configuration on client side, using local storage, so we don't need to call that endpoint multiple times.

---

## Design

I followed a dark mode design to keep the application with a better looking, more related to a cinema style.
