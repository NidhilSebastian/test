import React from "react";
import NavBarLeft from './NavBarLeft';
import ContentRouting from './ContentRouting'

const Layout = (props) => {
    return (
        <>
        <NavBarLeft {...props}></NavBarLeft>
        <div className="sp-content-body">
             <div className="raw">
                <div className="col-md-12">
                    <ContentRouting>
                    </ContentRouting>
                </div>
            </div>
        </div>
    </>
    );
}

export default Layout;