import React from "react";


class Header extends React.Component {
    componentDidMount() {
        document.title="SOS_Recipe"
    }
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href='#'>SOS Recipe</a>
                            </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#'>Search</a>
                            </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#'>About</a>
                            </li>
                    </ul>
            </nav>
        )
    }
}

export default Header;