import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {store} from "./redux/store";
import './utils/interceptor';

const Home = React.lazy(() => import('./container/home'));

const Loading = () => <div>loading...</div>;

function App() {
  return (
      <BrowserRouter>
          <React.Suspense fallback={<Loading/>}>
              <Provider store={store}>
                  <Switch>
                      <Route exact path="/" component={Home} />
                 </Switch>
              </Provider>
          </React.Suspense>
      </BrowserRouter>
  );
}

export default App;
