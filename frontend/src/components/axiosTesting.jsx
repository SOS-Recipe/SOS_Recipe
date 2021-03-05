import React from 'react'
import axios from 'axios'

class AxiosTest extends Recact.Component {
    state = {
        recipes: [],
    };

    ComponentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        console.log(res.data);
        this.setState({recipes: res.data});
    }

    render() {
        return(
            <>
                <ul>{this.state.recipes.map(recipe => <li>{recipe.strMeal}</li>)}</ul>
            </>
        )
    }

}
export default AxiosTest;