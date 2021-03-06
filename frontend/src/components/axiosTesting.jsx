import React from 'react'
import axios from 'axios'

class AxiosTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }

    componentDidMount() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`).then(res => {
            console.log(res);
            const recipes = JSON.parse(res.data);
            this.setState({recipes: recipes});
        });
    }

    render() {
        return(
            <>
                {/* <ul>{this.state.recipes.map(recipe =>{<li key={recipe.idMeal}>{recipe.strMeal}</li>})}</ul> */}
                <p>{this.state.recipes.strMeal}</p>
            </>
        )
    }

}
export default AxiosTest;