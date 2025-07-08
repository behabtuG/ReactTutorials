// import React from "react";
// import { BookProvider } from "./context/BookProvider";
// import ParentComponent from "../src/components/ParentComponent";
// import BookList from "./components/contexts/BookList";
// import AddBook from "./components/contexts/AddBook";

// const App = () => {
//   return (
//     <BookProvider>
//       <ParentComponent />
//       <h1>My Book List</h1>
//       <BookList />
//       <AddBook />
//     </BookProvider>
//   );
// };

// export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import BookList from "./components/redux/BookList";
// import AddBook from "./components/redux/AddBook";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>My Book List</h1>
//         <BookList />
//         <AddBook />
//       </div>
//     </Provider>
//   );
// };

// export default App;

// App.js

import React from "react";
import { RecoilRoot } from "recoil";
import BookList from "./components/recoil/BookList";
import AddBook from "./components/recoil/AddBook";
import Counter from "./components/zustand/Counter";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <div>
          <h1>My Book List</h1>
          <BookList />
          <AddBook />
        </div>
      </RecoilRoot>

      <div>
        <Counter />
      </div>
    </>
  );
};

export default App;
//? To use Recoil in your app, you need to wrap your entire app with the RecoilRoot component.
//? This component makes the Recoil state available to all the components in your app.
