# Tv-shows

## General ##
An application where you can search for tv-series. It has three views, a search and result view, a detailed view and a favourites view, where you can store your favourite tv-shows.

## Commands ##
| Command          | Description                                                                                                                 |
|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `npm run server` | Starts `json-servert on port [4000](http://localhost:4000)                                                                  |
| `npm run dev`    | Starts a local dev-server on port [5173](http://localhost:5173). Changes will be reflected via Hot Module Replacement (HMR) |
| `npm run build`  | Builds the project.                                                                                                         |
| `npm run start`  | Runs both `npm run server` and `npm run dev` concurrently.                                                                  |


### Installation ###

```sh
# Install packages 

npm install
```

### Start

```sh
# start the dev-server and json-server concurrently
npm run start
```

## Project Structure ###
All code is located in the [src](src)-folder and most of the code is organized into folders based on functionality. The exception is the code handling the network status detection, which is located in the [index.html](index.html)

* [main](src/main.tsx) (main entry)
* [components](src/components)
* [types](src/custom-types/index.ts) (typescript)
* [hooks](src/hooks)
* [navigation](src/nav/Navbar.tsx)
* [pages](src/pages)
* [redux](src/redux)
* [routes](src/routes/AppRoutes.tsx)

## Styles ##
The [index.css](src/index.css) is basically only used for reset. All other css-files are found with their respective component or page. The views are responsive.

## Views ##

#### Homepage ####
On the [HomePage](src/pages/HomePage.tsx) the user can input search terms for tv-shows. The result from the api-call is displayed beneath the search field.
The result is displayed in a list-format. Each list-item displays an image (if present) and you can add the tv-show to your favourites list.

#### Favourites page ####
On the [FavouritesPage](src/pages/FavouritesPage.tsx) the user can view the list of favourites and also remove items from the list.

#### Detail page ####
On the [DetailsPage](src/pages/DetailsPage.tsx) the user are presented with a more detailed view of the tv-show.

## Frameworks ##
The project uses [React](https://reactjs.org) for handling the UI, [Redux](https://redux.js.org/) and [Immer](https://immerjs.github.io/immer/) (immutability) for managing application state and [Typescript](https://www.typescriptlang.org/) for types. It also uses [json-server](https://github.com/typicode/json-server) as a rudimentary api and cache to persist favourites and cache subsequent searches. [Axios](https://github.com/axios/axios) handles api-calls and [React Router](https://reactrouter.com/en/main) is used for navigation.

---

## Final Note ##

It was a fun project which contained some challenges. If I had more time I would implement UI- and unit-tests and put more time into the styling.
