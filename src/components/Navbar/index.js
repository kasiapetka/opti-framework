import React from "react";
import { GrDocumentPerformance } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

const pageNavbar = (props) => (
    <div style={{ padding: '1em' }} >
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="/#"><GrDocumentPerformance style={{ marginTop: '-4px', marginRight: '5px' }} /><strong> OptiFrame</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
            <div className="form-inline">
                <a className="btn btn-outline-dark" href="https://github.com/kasiapetka/opti-framework" target="_blank" role="button">
                    <AiFillGithub style={{ fontSize: '20px', marginRight: '5px', marginTop: '-5px', }} />GitHub</a>
            </div>

        </nav >
    </div >
);

export default pageNavbar;