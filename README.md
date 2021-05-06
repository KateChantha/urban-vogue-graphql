## UrbanVogue online shopping

built with React and graphQL

## Why graphQL approach

to help solving REST api problems of

1. over fecthing / under fetching data
2. REST api make an expensive request to multiple endponts. For qraphQL, we don't have to be aware of the different endpoint or any changes at the endpoint that we need to make a request to in order to get the data that we need.

## Migrating to graphQL

#### form Rest api to graphQL

1. convert Rest api server to graphQL server.
2. to make a request to graphQL endpoint, we neww to pass it either a 'query' or 'mutation'.
3. establish a connection to a grapQL server (see index.js).

#### from Redux to graphQL

1. swtich front end state management from Redux to apollo client.

## Data Flow

### collections-overview.container -> collections-overview.component

1. create a container - collections-overview.container.jsx -- do the fetching data

- bring in Query component from react-apollo to fetch data and it will give us back a function which has an access to many different properties that get passed in
- in this file, propeties that we care about is { loading, error, data }

```
import { Query } from 'react-apollo';

const CollectionsOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />

        return <CollectionsOverview collections={data.collections} />
      }}
    </Query>
  )
}
```

- conditional rendering if loading then return Spinner otherwies return CollectionOverview component and pass collection data that we just fetch to it.

2. in conllections-overview.component.jsx -- do the rendering data

- remove redux map state to prop data binding, since the collection data is passed in as a prop from collections-overview.container

3. in shop.component.jsx

- this is the page where we show CollectionOverview container
- for a quick refactor trick, we repalce file path to /collections-overview.container instead of .component, then use an alias import naming so that we don't have to chage JSX markup

### collections.container -> collections.component

1. create a collections.container -- to fetch data and pass data as a props tp collections.component

- writing query with variables in Query component

```
const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    { //... }
  </Query>
);

```

2. in collection.component, remove Redux binding since data is comming from props.
