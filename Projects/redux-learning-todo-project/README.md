1. Set up react project with tailwind
2. install redux packages
    - npm install @reduxjs/toolkit
    - npm install react-redux

### Step - 1 : Create a store
    src
      ---store
           --store.js

To create a store we have a function `configureStore`

### Step - 2 : Create slices
    src
      ---slices
           --todo.js
        
To create a store we have a function `createSlice`, it takes 3 things inside of it
- name of the slice
- initialState
- reducers

there are 2 compulsory things that you've to pass on the every reducers which are `state` & `action`

* export 2 things from slice
    - export our action (each method which is there on the reducers)
    - export our reducer  (entire reducer)

### step - 3 : import slice in your store

### step - 4 provide this store to the application

