import * as React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <h2>Github Repos</h2>
            <ul>
                <li>
                    <Link to="/kubernetes/kubernetes">kubernetes/kubernetes</Link>
                </li>
                <li>
                    <Link to="/facebook/react">facebook/react</Link>
                </li>
            </ul>
            <Route path="/:userId/:repoName" component={Child} />{" "}
        </div>
    </Router>
);

const Child = ({ match }) => (
    <div>
        <h3>
            ID: {match.params.userId}/{match.params.repoName}
        </h3>
    </div>
);

export { Child };
export default App;
