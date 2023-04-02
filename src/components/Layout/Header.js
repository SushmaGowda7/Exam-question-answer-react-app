import React, { Fragment } from "react"
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Exam Question and Answer</h1>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName={classes.active} exact >Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to="/results" activeClassName={classes.active}>Results</NavLink>
                            </li>
                        </ul>
                    </nav>
            </header>
        </Fragment>
    );
};

export default Header;