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
            this.setState({recipes: res.data.meals});
            console.log(this.state.recipes)
        });
    }

    render() {
        return(
            <>
            <body>
                <ul>{this.state.recipes.map(recipe =>{<li key={recipe.idMeal}>{recipe.strMeal}</li>})}</ul>
            </body>
            </>
        )
    }

}
export default AxiosTest;