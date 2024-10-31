
# Gigaclear Challenge
---
This repository has the submission for the Gigaclear Challenge, as per the requirements set out in the README.

App has been deployed to: [Gigaclear-Challenge](https://8ojangles.github.io/Gigaclear-challenge/)

## Installation
---

I installed the repositiory using `Node v22`. It would be advisable to use the same version (using NVM, Volta or another Node version manager). It should (!?!?) install with earlier versions of Node but I have not tested or verified.

After cloning the repository it should be a standard `npm i` command to load the dependencies.

`npm start` will run up a dev server (available on `localhost:3000`) for a local version of the app/site.
`npm test` or `npm run test` will run the test suites.

## Notes
---
The app fulfils the requirements as set out in the Readme:

On load the app will query the Countries API and return the full set of country data which is then rendered in a responsive grid.

If the API is unavailable (which has not happened so far) An error message will show to the user.

### Search Field

The search field will match countries based on name and partial name matches in real-time. There is a "clear search button" inset in the field to reset the search.

The search field will only accept valid characters used in Country names (matched against a reasonable regexp: A-Z, Dashes and spaces).
Any entry of an invalid character (numbers, other special characters) will be rejected and show a "hint" popup for the user.

A search with valid characters (e.g. "gft") that returns no results will show a message in the grid area.

As the results are returned there is a dynamic results tally that updates in realtime.

### Filter Field
The filter select field is a dynamic field that returns available options for the results set, e.g. Searching for "United", which returns United Kingdom, United Arab Emirates and United States will allow to filter for Europe, North America and Asia continents.
The filter options update in realtime, based on the search results.

### Popup
On selecting a country card in the results grid, a modal will open showing further information, and where available, a map showing it's position in the world.

The pop up can be closed either by clicking outside, or the close button at the top right of the modal.



## Additional Libraries and feature
---

I have stuck to the provided tooling as much as possible with some small additions:

I have used the following API to get flag images for each of the countries:
[https://flagsapi.com](https://flagsapi.com).

There is a problem rendering flags from the "emoji" code, that requires some workarounds. Some context:
[https://stackoverflow.com/questions/54519758/flag-emojis-not-rendering](https://stackoverflow.com/questions/54519758/flag-emojis-not-rendering)
[https://answers.microsoft.com/en-us/windows/forum/all/country-emoji-for-windows/78a3e92b-02a8-4e7c-814e-c1c0596eaf4e](https://answers.microsoft.com/en-us/windows/forum/all/country-emoji-for-windows/78a3e92b-02a8-4e7c-814e-c1c0596eaf4e)

Some fonts support them, some don't. Some OSs support them, some dont.


```
react-leaflet and leaflet
```
To handle the Map

As is a quirk of available data, not all Flags are available and not all countriess can be pointed to in the mapping system, usually the same ones. There are apparently 250 countries returned by the Countries API, I didn't think there were that many. Looking at the returned results there does seem to be some odd inclusions I have never heard of (Aland?). I believe this is the reason why these flags/maps are unavailable.

In both cases there is error handling incase their respective look-ups fail.

```
react-lazy-load-image-component
```
I used this library to handle lazy loading the flag images with extra use cases handled. The library offers triggers based on the intersection observer API, shich I could have written, but also the ability to batch observers and triggers for massive performance benefits. It is a library I have used in the past and found it very useful. Checking in the network tab of dev tools you will see flag images loading as you scroll.

```
gh-pages
```
A library to streamline deploying Apps to Github Pages, where the online version of the challenge is hosted. I would have deployed to Vercel/Netlify but this is quick and easy for these purposes, so I hope I dont lose too many marks.
