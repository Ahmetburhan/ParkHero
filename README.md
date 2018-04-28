## Park HERO intro

ParkHero is an app that uses React technologies for dynamic front end interacting with an Express back end server and MongoDB for our database in order to provide a dynamic parking lot experience. For web scraping, the app uses the `request` from superagemt multi times in client/react side.

## Code Example

![Alt text](./screenshots/1.png?raw=true "Overview")

Using React we inserted a number of different components that dynamcially communicate with our backend servers and various API technologies to make up our ParkHero app.

![Alt text](./screenshots/2.png?raw=true "Google Sign-In")

The first component that the user would be encouraged to use is the Google Sign-In feature, which uses Google Sign-in API to provide our website with basic Google/Gmail related information to create a unique user experience. This allows the user to do things like favorite parking locations.

![Alt text](./screenshots/3.png?raw=true "Google Searchbar")

In relation to the actual function of our app, we begin with our Google Searchbar, which uses the Google Autocomplete API. The user can input a desired location into the searchbar, which then gives a dropdown of close options.

![Alt text](./screenshots/4.png?raw=true "Google Map")

Once searched, our map component uses Google Maps API to display a map of the searched locations with pins of the parking locations close to the searched area.

![Alt text](./screenshots/5.png?raw=true "Parking Location Overview")

The next component which uses the ParkWhiz API, displays all nearby parking locations' address, nearby street, and streetview image to the location you searched in this displayed format.

![Alt text](./screenshots/6.png?raw=true "Individual Parking Location")

This is a closer view of one of the location's displays. You can click on the book & pay button which will send you to the page for payment information so you can reserve your parking spot.

![Alt text](./screenshots/7.png?raw=true "Google Streetview")

You can click on the streetview image, which uses Google Street View API, in order to get a closer look at any one of the parking locations' street views. 

![Alt text](./screenshots/8.png?raw=true "SMS")

Once you have selected a parking location, you can input your cell phone number to get the streetview image as well as a customized message with information about your spot.


## Motivation

In our busy modern lives, the last thing we want is to waste time looking for parking locations in our crowded cities. ParkHero takes care of this by allowing you to see which parking spots are available and have the best rates before you even get to your location. The app then allows you to pay for your spot ahead of time, to save you the hassle and the time it takes to find a spot once you're in the fray. Our app also allows you to see the spot on the street level so you won't miss it once you get there. If you need a text reminder, our app can also give you a SMS notification with basic information about your spot if you just enter your phone number. 

## Installation

Install the server and client dependencies using the preinstall command.

```sh
$ cd ParkHero
$ npm run preinstall
```

To start running server and client concurrently run the start command.

```sh
$ cd ParkHero
$ yarn start
```

## API Reference

We used the following API technologies:

* Google Auto Complete
* Google Sign In
* Google Map and Street View
* ParkWhiz API

## Technologies used:
* Node.js
* Express.js
* MongoDB
* Mongoose
* Javascript/ES6
* jQuery
* AJAX/JSON
* NPM modules:
 * Cheerio
 * Request-Promise
* Bootstrap 3
* CSS3 (including css animations and transitions)
* HTML5
* Canvas BG