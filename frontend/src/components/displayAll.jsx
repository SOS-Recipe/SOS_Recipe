import React from "react";
import "../styles/displayAll.css";
import { Link } from "react-router-dom";
import axios from 'axios';

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
    this.setState({recipes: this.props.location.state.data})
  }
/*
  async handleClick(e) {
    e.preventDefault();
    let results = [];
    let name = String(document.getElementById("search").value);
    await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then(res => {
        if (res.data.meals) {
        results = res.data.meals;
    
    } else {
        results = [];
    }
        this.setState({recipes: results});
    });
  }

  over(strMeal) {
    console.log(strMeal);
    let i = 0;
    for (i = 0; i < this.props.location.state.data.length; i++) {
      if (strMeal === this.props.location.state.data[i].strMeal) {
        console.log(this.props.location.state.data[i].strMealThumb);
        this.setState({
          head_text: strMeal,
          backgroundImg: this.props.location.state.data[i].strMealThumb,
        });
      }
    }
  }
*/
  render() {
    return (
      <main>
        <div class="flex_container">
          <div class="results_btn">
            {this.state.recipes.map((recipe) => (
              <div class="card"
              id={`${recipe.strMeal}`}
              >
                <img src={`${recipe.strMealThumb}`}></img>
                <div class="container">
                  <h4><b>
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
                  </b></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default displayAll;

/*
TODO:
    crashes if data is null (since map is called on data)
    buttons don't overflow properly
    make it work on smaller screens

    buttons have outline


                        <div class="results_btn">
                          {this.props.location.state.data === null?
                            <p>No results!</p>:
                            {this.props.data.map(recipe => 
                              <button 
                                type="button" 
                                class="btn border-primary btn-light btn-lg btn-block" 
                                onClick>{recipe.strMeal}
                              </button>
                            )}
                          }
                        </div>   

TO GO IN LANDING:
                        <br></br>

*/
