## Installation

Run `npm install` to begin installation.

To run the application locally, run `npm run dev`. To run tests, run `npm run test`.

## Approach

### Frameworks/Libraries Used

#### General

`NextJS` has been used as it provides great tooling around `React` to speed up development and due to the context of the tech test. `Apollo Client` was chosen to make `GraphQL` handling easier, and it has (experimental) support for `NextJS` v13.

#### Styling

`TailwindCSS` has been used as it has inbuilt support in `NextJS`. It also speeds up the development by removing much of the repetitiveness of applying regularly used styles, and removes directory clutter by reducing files. This was my first time utilising `Tailwind`, but I found it a good experience.

#### Testing

For testing, `Jest` and `React Testing Library` have been used. `Jest` is a standard in the industry and I've used it frequently. `React Testing Library` is also a popular framework which I have experience with. One of its advantages is that it restricts your testing as much as possible to interactable elements of components to more closely reflect what should be tested - user interactivity rather than internal implementation.

## Improvements

Given more time, there would be some general improvements I would make.

### Styling

`Tailwind` offers some utilities to configure custom variables - I would make greater use of this to ensure more consistent styles across the board (e.g. consistent heading styling). I would also create more components to break down presentation elements into more consistent components (e.g. again, headings).

### Typings

Using a tool such as `graphql-codegen` to generate typings for the used schema would remove much of the labororious work of typing. I've also had to use `any` in at least one place to save time when it comes to taking in `graphql` data. Stricter typing is required for reliability.

### Templated Components

`Table` is a good example of this. Given more time I would try to ensure the components used were more generic where possible for greater usage cases. `DetailedFilmDisplay` for example might be used, or a more generic component built from it, to essentially template out a variety of pages to display films, planets, characters etc.

### Assets

Assets haven't been included, but more custom assets (images, icons etc.) to spruce the app up and demonstrate `NextJS`'s optimisation would be good.

### Tooling

There are many aspects of `NextJS` and `Apollo` which I am unfamiliar with (caching etc.) that I might have engaged with if I had more experience with them. However, for the scale and scope of this app, I believe many of these features would have been overkill.

### Paging

With more time it would have been nice to demonstrate further `NextJS`'s routing by dynamically generating a greater variety of pages for various entities (e.g. planets, characters) in the same way I have dynamically generated pages for the films.
