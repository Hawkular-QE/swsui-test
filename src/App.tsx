import * as React from "react";

import { Route, Switch } from "react-router-dom";
import { Button } from "patternfly-react";

interface AppState {
  clickCounter: number;
}

class Main extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clickCounter: 0
    };
  }

  render() {
    return (
      <Switch>
        <Route
          exact={true}
          path="/"
          render={props => (
            <Home
              {...props}
              onClickHandler={this.onClickHandler}
              counter={this.state.clickCounter}
            />
          )}
        />
        <Route exact={true} path="/:userId/:repoName" component={Child} />
      </Switch>
    );
  }

  onClickHandler = event => {
    this.setState(current => ({ clickCounter: current.clickCounter + 1 }));
  };
}

const Home = ({ onClickHandler, counter }) => (
  <div>
    <p>Home</p>
    <p>Click counter: {counter}</p>
    <Button onClick={onClickHandler}>Submit</Button>
  </div>
);

const Child = ({ match }) => (
  <div>
    <h3>
      Repo: {match.params.userId}/{match.params.repoName}
    </h3>
  </div>
);

export { Main, Child, Home };
