import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

/**
 * Creates a breadcrumb navigation element
 *
 * @param path: a slash / separated path that should be split up
 * @param base: base path that needs to be in front of the generated links
 */

class BreadcrumbNavigation extends Component {
    render() {
        const {path, base} = this.props;
        const splitPath = path.split('/');
        let linkPath = "/" + base;
        return (
            <div>
                {splitPath.map( (item) =>{
                        linkPath = linkPath + "/" + item;
                        return (
                            <React.Fragment key={item}>
                                {" > "}
                                <Link
                                    to={linkPath}
                                >
                                    {item}
                                </Link>
                            </React.Fragment>
                        )
                    }
                )}
            </div>
        )
    }
}

BreadcrumbNavigation.propTypes = {
    path: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired,
};

export default BreadcrumbNavigation;