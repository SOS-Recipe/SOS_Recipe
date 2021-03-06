import React from "react";
import '../styles/recipe.css';

class Recipe extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
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
                                        Recipe Title
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
                                    <li class="list-item">
                                        Item 1
                                    </li>
                                    <li class="list-item">
                                        Item 2
                                    </li>
                                    <li class="list-item">
                                        Item 3
                                    </li>
                                    <li class="list-item">
                                        Item 4
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-8">
                                <h2 class="text-center">
                                    Instructions
                                </h2>
                                <p class="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam laoreet ut sapien non aliquet. Aliquam tempus, 
                                    quam sit amet interdum consectetur, elit justo facilisis 
                                    justo, id lobortis nulla ligula in augue. Sed dictum nunc 
                                    elit. Donec maximus, nibh ac vulputate elementum, erat odio
                                    porta urna, vitae blandit nisl ante nec nibh. Suspendisse 
                                    et neque a libero efficitur egestas nec iaculis quam. In 
                                    vel eros ornare, imperdiet lacus vitae, consectetur odio. 
                                    Proin pretium porta nibh. Sed ut commodo massa, et tempor neque.
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