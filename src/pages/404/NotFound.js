/**
 * ****************************************************************************
 * @description     :   Page 404 for error not found
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * import libraries
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
* import for redux
*/
// import Actions from 'redux/app/actions';

/**
* Create main component for page not found
* -----------------------------------------
* @author : QuyPN - 2020/12/03 - create
* @access : public
*/
function NotFound() {
    return (
        <div className="nk-main ">
            <div className="nk-wrap nk-wrap-nosidebar">
                <div className="nk-content ">
                    <div className="nk-block nk-block-middle wide-md mx-auto">
                        <div className="nk-block-content nk-error-ld text-center">
                            <img className="nk-error-gfx" src="/images/gfx/error-404.svg" alt="" />
                            <div className="wide-xs mx-auto">
                                <h3 className="nk-error-title">Oops! Why you’re here?</h3>
                                <p className="nk-error-text">
                  We are very sorry for inconvenience. It looks like you’re try to
                  access a page that either has been deleted or never existed.
                                </p>
                                <Link
                                    to="/"
                                    className="btn btn-lg btn-primary mt-2"
                                    title="Home"
                                >
                  Back To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(NotFound);
