const {createStore} = require("redux");
const {rootReducer} = require("./Reducers/root.reducer/root.reducer");


const store = createStore(rootReducer);

export default store;