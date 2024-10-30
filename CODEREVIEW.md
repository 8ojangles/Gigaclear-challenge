
General
---

- **Lines 5 and 7:** `ContinenntsComponent`
    - Spelling
- **Lines 16 and 22:** `ContinentsQery`
    - Spelling


Format
---

- **Line 2:** `import styled from 'styled-components';`
    - unused import, should be removed. Code pushed to higher environments (DEV/QA/UAT/Staging etc...) should be as clean as possible.
- **Line 5:** `type ContinenntsComponent = () => {};`
    - **Type** is incorrect and unneccessary. Should be either `React.FC` or `React.Node` depending on use-case
        - `const Continents: React.ReactNode = () => {}`
        - `const Continents: React.FC = () => {}`
- **Line 22:** `const { loading, error, data } = useQuery<ContinentsQery>(CONTINENTS);`
    - Both `loading` and `error` are unused
- **Lines 24 and 30:** `const bold = 700;` and ``class={`font-${bold}`}``
    - JSX error: `class` should be `className`
    - Unneccessary declaration (24).
    - No need for string-literal. Should be `class="font-700"`
        - dynamic intopolation of string would interfere with Tailwind compilation, omitting required styles from outputted CSS bundle
    - `font-700` is not a valid Tailwind class, should be `font-bold`
- **Line 26:** `const isEurope etc...`
    - Function argument and return should be typed:
        - `const isEurope = (c: string): boolean =>`
    - Logic is "backwards", i.e. a false check and is pointlessly confusing (if not europe then false else true), complicating parsing and understanding of intent amd functionality. Either:
        - Rename the function `isNotEurope`
        - Reformat the logic: `c === 'Europe' ? true : false;`
        - Can also be rewritten to `return c === 'Europe'`
    - Function is not neccessarily needed:
        - replace with native methods: `name.includes('Europe')`
        - If a string matching function is needed, should be extracted to utility function imported from utility file or similar. Allows reuse across application. E.g.
            - `export function strMatch(str: string, matchingValue: string): boolean {}`
            - `strMatch(name, 'Europe');` 
- **Line 32:** `<div className={isEurope(name) && 'text-red-800'}>`
    - Type Error: `className` has a type of `string | undefined`, the contained statement has a return type of `string | boolean`
        - rewrite to `isEurope(name) ? 'text-red-800' : ''`
    - As an output of a `map` function this element would require a `key` attribute to allow React to monitor and optimise the `map` output on re-renders
        - ``<div key={`list-continents-${name}`} className={isEurope(name) && 'text-red-800'}>``
            - note that in-built `index` parameter should not be used as, or part of, the key.


Structure
---
The `CONTINENTS` query and `ContinentsQery` interface (lines 7 and 16) are declared within the body of the component.

These should either be extracted and declared outside (above) the component function, or better still, declared in a seperate definitions file and imported in the `Continents` component.

This would allow for the codebase to be structured in a consistant way with other queries, mutations and definitions, plus be able to reuse elsewhere in the application.

Mark-up
---
As written, this component outputs a list so should be marked-up as such for basic accessibility and symantic correctness:
```javascript
<ul>
{data?.continents.map(({ name }) => (
    <li className={isEurope(name) && 'text-red-800'}>{name}</li>
))}
</ul>

```

State Handling
---
Aside from the unused declarations within the `useQuery` hook (`loading, error`), there is no Loading state or error handling for the data fetch.

With any API request there is no guarentee the service is running, will timeout, the request is formatted correctly (in the case of dynmaic queries), there are no results, or many other failing states.

There should be adequate handling of each of these possibilities to inform the user at every point. The following is a simple example of using the hook to populate the JSX depending on the state of the fetch and provide feedback to the user. 

```javascript
{loading && <p>Fetching data...</p>}
{error && <p>{`Error! ${error.message}`}</p>}
{data && data.length === 0 && (
    <p>No Results</p>
)}
{data && data.length > 0 && (
    <>
        <ul>
        {data?.continents.map(({ name }) => (
            <li className={isEurope(name) && 'text-red-800'}>{name}</li>
        ))}
        </ul>
    </>
)}
```

Architecture
---
Given this is a simple example for the purposes of review, this component still presents a number of problems. There is little possibility of reuse as the data fetch and rendered output are tightly coupled. It is inherantly a list component so would be better served via a composition of lower-level or primitive components. The following example shows a rough idea of handling different display outputs.

```javascript
type AllowedListTypes = "SimpleList" | "CardList";

type Props = {
    displayType: AllowedListTypes;
    listProps: {
        listType: string;
        onclickHandler?: function
    }
}

export const Continents: React.FC = (props: Props) => {

    const { displayType, listProps } = props;

    // data fetching etc...

    // pass instance of function to allow for React to cache and optimise:
    const isHighlighted = (name) => name.includes('Europe');

    return (
        <div>
            <h3 class={`font-${bold}`}>Continents:</h3>
            {loading && <p>Fetching data...</p>}
            {error && <p>{`Error! ${error.message}`}</p>}
            {data && data.length === 0 && (
                <p>No Results</p>
            )}
            {data && data.length > 0 && (
                <>
                    {displayType === 'SimpleList' && (
                        <ListContainer {...listProps}>
                            {data?.continents.map(({ name }) => (
                                <ListItem key={`list-continents-${name}`} highlighted={isHighlighted} contents={name}>
                            ))}
                        </ListContainer>
                    )} 
                    {displayType === 'CardList' && (
                        <CardListContainer {...listProps}>
                            {data?.continents.map(({ name }) => (
                                <CardItem key={`list-continents-${name}`} highlighted={isHighlighted} contents={name}>
                            ))}
                        </ListContainer>
                    )} 
                <>
            )}
        </div>
    );
}

```

Those lower-level components (`ListContainer, ListItem, etc...`) could (should) be imported from a shared component folder or library maintained externally to the app. These can then be optimised and developed seperately. This could be further adapted with components passed in via the `children` prop to the Continents component so the output could be even more dynamic (and potentially renamed to "DataListComponent"!).

Tests (Continents.test.tsx)
---
The single test in this file, when fixed, is too simplistic to be useful in a production setting.

There should be tests to cover the potential outcomes of the data fetch (Loading, loaded and error), the original case to find an example and a wider test to check that all data has been loaded. A `mock` of the data fetching can be created using the API schema as a guide, then passed into ApolloClient's `MockedProvider` helper to simulate the fetch during tests. For example, using the demo code I created above:
```javascript
const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
    }
  }
`;

// Mock data for the GET_CONTINENTS query
const mocks = [
  {
    request: {
      query: GET_CONTINENTS,
    },
    result: {
      data: {
        continents: [
          { name: 'Europe' },
          { name: 'Asia' },
        ],
      },
    },
  },
];

it('should display loading state initially', () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Continents />
        </MockedProvider>
    );

    expect(screen.getByText('Fetching data...')).toBeInTheDocument();
});

it('should display error message on error', async () => {
    const errorMocks = [
        {
        request: {
            query: GET_CONTINENTS,
        },
        error: new Error('An error occurred'),
        },
    ];

    render(
        <MockedProvider mocks={errorMocks} addTypename={false}>
            <Continents />
        </MockedProvider>
    );

    const errorMessage = await waitFor(() => screen.getByText('Error :('));
    expect(errorMessage).toBeInTheDocument();
});

it('should display Europe in the list of Continents', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Continents />
        </MockedProvider>
    );

    const item = await waitFor(() => screen.getByText('Europe'));
    expect(item).toBeInTheDocument();
});
```
