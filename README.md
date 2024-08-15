# Gigaclear Frontend Code Challenge

This document contains instructions for candidates to follow as part of the Gigaclear Frontend Code Challenge. We look forward to your submission.

## Stack

- _TypeScript_
- _React.js_
- _Styled Components_ for styling
- _Apollo client_ for fetching data from GraphQL API
- _Jest/React-testing-library_ for tests

This task can be completed with any framework/library you wish, although Gigaclear uses React / Next.js so is the preferred framework.

# Instructions
Please complete the steps below and create an app based on [these wireframes](wireframes) provided.

1. Please make a Code Review of _Continents.tsx_ and _Continents.test.tsx_. Create file _CODEREVIEW.md_ and put your thoughts inside.
2. Remove _Continents_ component and _README_ preview from _App.tsx_.
3. Fix test in _Continents.test.tsx_.
4. Create the pages with the core functionality listed below.
5. Include tests for the pages.

## Functionality
App will load and display data for countries from [this public Countries GraphQL API](https://countries.trevorblades.com). If you are not familiar with GraphQL, you can check _Continents.tsx_.

Clicking on a country will take the user to the country details page that displays information of the selected country.

## Countries page

<details>
<summary>Show wireframe</summary>
<p>

#### List of countries and country details

![Countries page](/CountryListPage.png)

</p>
</details>

- This page shows countries from the API.
- The user should be able to search for a country using an input field.
- There should be a dropdown to filter countries by continent.

## Country details page

<details>
<summary>Show wireframe</summary>
<p>

#### List of countries and country details

![Country Details page](/CountryDetailsPage.png)

</p>
</details>

Users should be able to:
- This page shows information of the selected country.
- There should be a back button to return to the list of countries.

## Submitting your code
- You can submit you code (please do not include node_modules folder) using a zipped file, GitHub/other git hosting service or an online editor like CodeSandbox/Codepen/Stackblitz.
- Include any instructions required to run the app in the _README_ file.

## Finally

Good luck and have fun with this challenge! 💪
