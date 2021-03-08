import React from "react";
import "../styles/search.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            head_text: "",
            queryKeys: [],
            ingredient_items: [],
            clicked: false,
        };
    }

    componentDidMount() {
        document.title="SOS_Recipe"
        console.log(this.props.location.state.data);
    }

    handleClick(e, meal) {
        for(let i=0; i < this.props.data.length; i++) {
            if(this.props.data[i].strMeal === meal) {
                
            }
        }
    }
    outputFunc(recipe){
      
      this.setState({ingredient_items: ingredient_items, queryKeys: queryKeys});
    }

    render() {
        return(

            <main>
                <div class="flex_container">
                    <div class="search_results_wrapper">
                        <form class="search_form" name="searchbar">
                            <input class="search" type="search" placeholder="Search for a recipe" id="search" autofocus required/>
                            <button type ="submit" class="go_btn">Go</button>
                            <select name="catagory" id="catagory_drop" class="catagory_drop">
                                <option value="">Any Catagory</option>
                                <option value="Beef">Beef</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Goat">Goat</option>
                                <option value="Lamb">Lamb</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Pork">Pork</option>
                                <option value="Seafood">Seafood</option>
                                <option value="Side">Side</option>
                                <option value="Starter">Starter</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Vegetarian">Vegetarian</option>
                            </select>
                            <select name="region" id="region_drop" class="region_drop">
                                <option value="">Any Area</option>
                                <option value="American">American</option>
                                <option value="British">British</option>
                                <option value="Canadian">Canadian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Dutch">Dutch</option>
                                <option value="Egyptian">Egyptian</option>
                                <option value="French">French</option>
                                <option value="Greek">Greek</option>
                                <option value="Indian">Indian</option>
                                <option value="Irish">Irish</option>
                                <option value="Italian">Italian</option>
                                <option value="Jamaican">Jamaican</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Kenyan">Kenyan</option>
                                <option value="Malaysian">Malaysian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Moroccan">Moroccan</option>
                                <option value="Polish">Polish</option>
                                <option value="Portuguese">Portuguese</option>
                                <option value="Russian">Russian</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Thai">Thai</option>
                                <option value="Tunisian">Tunisian</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Unknown">Unknown</option>
                                <option value="Vietnamese">Vietnamese</option>                               
                            </select>
                        </form>
                        <div class="results_btn">
                          {this.props.location.state.data.map(recipe => 
                            <button 
                              type="button" 
                              class="btn border-primary btn-light btn-lg btn-block" 
                              onClick={this.outputFunc.bind(recipe)}>{recipe.strMeal}
                            </button>
                          )}
                        </div>   
                    </div>
                    <div class="output">
                        <h1 id = "mealName">
                          strMeal
                        </h1>
                        <div class = "ing_meas_wrap">
                            <div class="ingredients">
                                strIngredient
                            </div>
                            <div class="measurements">
                                strMeasure
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Search;

/*
strMeal =           meal name
strCategory =       main ingredient
strArea =           region
strInstructions
strMealThumb =      meal image
strIngredient<num> =ingredient <num>, only up to 20
strMeasure<num> =   measurement of ingredient <num>, only up to 20

TODO:
    crashes if data is null (since map is called on data)
    buttons don't overflow properly
    button hover doesn't display in output
    button click doesn't go to recipe page
    make it work on smaller screens

    buttons have strMealThumb as background image
    buttons have outline
    output has dynamic information


                        <div class="results_btn">
                          {this.props.data === null?
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


    condRenBut(data) {
      if (data === null) {
        return <p>No</p>
      }
      else{
        data.map(recipe => 
          <button 
            type="button" 
            class="btn border-primary btn-light btn-lg btn-block" 
            onClick>{recipe.strMeal}
          </button>
        )
      }
    }




TO GO IN LANDING:
                        <br></br>
                        <select name="catagory" id="catagory_drop" class="catagory_drop">
                            <option value="">Any Catagory</option>
                            <option value="Beef">Beef</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Goat">Goat</option>
                            <option value="Lamb">Lamb</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Pork">Pork</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Side">Side</option>
                            <option value="Starter">Starter</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Vegetarian">Vegetarian</option>
                        </select>
                        <select name="region" id="region_drop" class="region_drop">
                            <option value="">Any Area</option>
                            <option value="American">American</option>
                            <option value="British">British</option>
                            <option value="Canadian">Canadian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Dutch">Dutch</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="French">French</option>
                            <option value="Greek">Greek</option>
                            <option value="Indian">Indian</option>
                            <option value="Irish">Irish</option>
                            <option value="Italian">Italian</option>
                            <option value="Jamaican">Jamaican</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Kenyan">Kenyan</option>
                            <option value="Malaysian">Malaysian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Moroccan">Moroccan</option>
                            <option value="Polish">Polish</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Russian">Russian</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Thai">Thai</option>
                            <option value="Tunisian">Tunisian</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Unknown">Unknown</option>
                            <option value="Vietnamese">Vietnamese</option>                               
                        </select>
                        {this.state.clicked? 
                        <Search data={this.state.recipes}/> :
                        null}
*/
