import React from "react";
import "../styles/displayAll.css";
import { Link } from "react-router-dom";
import axios from "axios";

class displayAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head_text: "",
      queryKeys: [],
      ingredient_items: [],
      clicked: false,
      backgroundImg: `url('../images/landing-background.jpg')`,
      recipes: [],
    };
  }

  componentDidMount() {
    document.title = "SOS_Recipe";
    console.log(this.props.location.state.data);
    this.setState({ recipes: this.props.location.state.data });
  }

  render() {
    return (
      <main>
        <div class="flex_container">
          <div class="results_btn">
            {this.state.recipes.map((recipe) => (
              <div
                class="card"
                id={`${recipe.strMeal}`}
                style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
              >
                <h4>
                  <b>
                    <Link
                      id={`recipe:${recipe.strMeal}`}
                      to={{
                        pathname: "/Recipe",
                        state: {
                          data: this.props.location.state.data,
                          recipe: recipe,
                        },
                      }}
                    >
                      {recipe.strMeal}
                    </Link>
                  </b>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default displayAll;
