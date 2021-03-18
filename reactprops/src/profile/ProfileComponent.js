import React from "react";
import PropTypes from "prop-types";
function ProfileComponent(props) {
    return (
        <>
            <img
                src={props.children}
                alt={props.firstname}
                style={props.styleimage}
            ></img>
            <div style={props.styleinfo}>
                <h1>First Name:{props.firstname}</h1>
                <h1>Last Name:{props.lastname}</h1>
                <h1>Address:{props.address}</h1>
                <h1>Profession:{props.profession}</h1>
                <a
                    href="/"
                    onClick={props.functiontouse(
                        props.firstname + " " + props.lastname
                    )}
                >
                    click alert
                </a>
            </div>
        </>
    );
}
ProfileComponent.defaultProps = {
    firstname: "xxxx",
    lastname: "xxxx",
    address: "xxx@xxx.xxx",
    profession: "xxxx",
};
ProfileComponent.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address: PropTypes.string,
    profession: PropTypes.string,
};
export default ProfileComponent;
