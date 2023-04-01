# Redux React

## Redux configuration
→ Install those packages:
npm install react-redux redux @reduxjs/toolkit

## Create a Redux store
→ Create a file named src/app/store/store.js
→ Import the configureStore API from Redux Tookit

## Provide the Redux Store to React
→ In App.js store and Provider
→ Wrap App component with Redux Provider

## Create Redux State Store
→ Create folder auth in /src/store/auth (For authentication features state)
→ Create **state.js** that contains state class and export default initial state
→ Create **slide.js** that use createSlice({ name, initialState, reducers}) from @reduxjs/toolkit
→ Create **selectors.js** that use createSelector((state) => state.auth.isLoading, (isLoading) => isLoading) from @reduxjs/toolkit
    • First argument selects the state in the store
    • Second argument recevices the state returned by the first argument then return it
→ Create **dispatchers.js** 
→ Add side reducers to the store

## Use Redux State and Actions in React Components
→ Use the React Redux hooks to let React components interact with the Redux store
 • useSelector: read data from store
 • useDispatch: dispatch actions to store

# Redux Toolkit
#

  