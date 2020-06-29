import React from "react";
import PropTypes from "prop-types";
import './ingredients.css';

class Ingredients extends React.Component {
  render() {
    let ingredients = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredients = <div className="breadBottom"></div>;
        break;
      case "bread-top":
        ingredients = (
          <div className="breadTop">
            <div className="seeds1"></div>
            <div className="seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredients = <div className="meat"></div>;
        break;
      case "cheese":
        ingredients = <div className="cheese"></div>;
        break;
      case "bacon":
        ingredients = <div className="bacon"></div>;
        break;
      case "salad":
        ingredients = <div className="salad"></div>;
        break;
      default:
        ingredients = null;
        break;
    }

    return ingredients;
  }
}

//prop type validation
Ingredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredients;
