1. Create a Store : import configureStore  ```store.js stores all the main values of the codes```

2. createSlice (todoSlice.js)   and nanoid to generate uniqueId
        write functions in reducer in createSlice
        export reducer functions from todoSlice.actions seperately

3. store needs all the reducers access to update data
    export default todoSlice.reducers,
    import in store.js

4. Dispatch reducer ko use krke  store me changes karta hai
5. from AddTodo dispatch(addTodo(input)) - changes will be made in store-
    to removeTodo send id using useDispatch

6. use useSelector(state => state.todos) to retrieve data from the store