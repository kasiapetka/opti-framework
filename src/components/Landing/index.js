import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss"

const Landing = () => {
    return (
        <React.Fragment>
            <div class="jumbotron" style={{ padding: '2em 1em' }}>
                <h1>React Optimization framework</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
            <div className="grid-3c-container" style={{ marginTop: '2em ' }}>
                <div className="grid-item card" style={{ maWidth: '500px' }}>
                    <div className="card-body">
                        <h5 className="card-title">
                            WastedRendering
                        </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link className="btn btn-secondary" to="/wasted-rendering">Check the results</Link>
                    </div>
                </div>

                <div className="grid-item card" style={{ maWidth: '500px' }}>
                    <div className="card-body">
                        <h5 className="card-title">
                            WastedRendering
                        </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link className="btn btn-secondary" to="/wasted-rendering">Check the results</Link>
                    </div>
                </div>
                <div className="grid-item card" style={{ maWidth: '500px' }}>
                    <div className="card-body">
                        <h5 className="card-title">
                            WastedRendering
                        </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link className="btn btn-secondary" to="/wasted-rendering">Check the results</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Landing;
