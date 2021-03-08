import React from "react";
import '../styles/recipe.css';
import myRecipe from '../testrecipe.json';

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
        let queryKeys = Object.keys(myRecipe.meals[0]);

        let i = 0;
        let ingredient_items = [];

        for(i = 0; i < 20; i++) {
            if (myRecipe.meals[0][queryKeys[i+9]] && myRecipe.meals[0][queryKeys[i+29]]) {
                if (myRecipe.meals[0][queryKeys[i+9]] !== "" || myRecipe.meals[0][queryKeys[i+29]] !== "") {
                    ingredient_items[i] = {measurement: myRecipe.meals[0][queryKeys[i+29]],
                                        ingredient: myRecipe.meals[0][queryKeys[i+9]]};
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
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page-header">
                                    <h1 class="text-center">
                                        {myRecipe.meals[0].strMeal}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <h2 class="text-center">
                                    Ingredients
                                </h2>
                                <ul>
                                    {this.state.ingredient_items.map(ingredient_item => 
                                        (<li>{ingredient_item.measurement} - {ingredient_item.ingredient}</li>))}
                                </ul>
                            </div>
                            <div class="col-md-8">
                                <h2 class="text-center">
                                    Instructions
                                </h2>
                                <p class="text-left">
                                    {myRecipe.meals[0].strInstructions}
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