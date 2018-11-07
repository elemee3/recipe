import React, { Component } from 'react';
import '../App.css';
import recipes from '../store/Recipes.js';

class RecipeShow extends Component {
    render() {
        const index = this.props.match.params.id
        return(
            <div>
                <a href='/'>
                    <button>Back to Main Page</button>
                </a>
                <h2>{recipes[index].name}</h2>
                <img src={recipes[index].image} />
                <h4>{recipes[index].ingredients.join(', ')}</h4>
                <h4>{recipes[index].instructions}</h4>
            </div>
        )
    }
}

export default RecipeShow;
