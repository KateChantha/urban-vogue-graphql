## UrbanVogue online shopping

built with React and graphQL

### Data Flow

#### collections-overview.container to collections-overview.component

1. in collections-overview.container.jsx -- do the fteching data

- bring in Query component from react-apollo to fetch data and it will give us back a function which has an access to many different properties that get passed in
- in this file, propeties that we care about is { loading, error, data }
- conditional rendering if loading then return Spinner otherwies return CollectionOverview component and pass collection data that we just fetch to it.

2. in conllections-overview.component.jsx -- do the rendering data

- remove redux map state to prop data binding, since the collection data is passed in as a prop from collections-overview.container

3. in shop.component.jsx

- this is the page where we show CollectionOverview container
- for a quick refactor trick, we repalce file path to /collections-overview.container instead of .component, then use an alias import naming so that we don't have to chage JSX markup
