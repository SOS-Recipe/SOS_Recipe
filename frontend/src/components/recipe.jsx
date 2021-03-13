import React from "react";
import '../styles/recipe.css';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryKeys: [],
            ingredient_items: [],
            clicked: false,
        };
    }

    componentDidMount() {
        document.title="SOS_Recipe"
        let queryKeys = Object.keys(this.props.location.state.recipe);

        let i = 0;
        let ingredient_items = [];

        for(i = 0; i < 20; i++) {
            if (this.props.location.state.recipe[queryKeys[i+9]] && this.props.location.state.recipe[queryKeys[i+29]]) {
                if (this.props.location.state.recipe[queryKeys[i+9]] !== "" || this.props.location.state.recipe[queryKeys[i+29]] !== "") {
                    ingredient_items[i] = {measurement: this.props.location.state.recipe[queryKeys[i+29]],
                                        ingredient: this.props.location.state.recipe[queryKeys[i+9]]};
                }
            }
        }

        this.setState({ingredient_items: ingredient_items, queryKeys: queryKeys});
    }

    render() {
        return(
            <main>
                <div class="Recipe-component">
                    <div class="container-fluid">
                        <div class ="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                                <img class="img-fluid img-rounded center-block d-block mx-auto" src={this.props.location.state.recipe.strMealThumb} alt={this.props.location.state.recipe.strMeal}/>
                            </div>
                            <div class="col-md-4">   
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page-header">
                                    <h1 class="text-center">
                                        {this.props.location.state.recipe.strMeal}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <h2 class="text-center">
                                    Ingredients
                                </h2>
                                <ul class="recipe-list">
                                    {this.state.ingredient_items.map(ingredient_item => 
                                        (<li>{ingredient_item.measurement} - {ingredient_item.ingredient}</li>))}
                                </ul>
                            </div>
                            <div class="col-md-8">
                                <h2 class="text-center">
                                    Instructions
                                </h2>
                                <p class="text-left recipe-text">
                                    {this.props.location.state.recipe.strInstructions}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Recipe;