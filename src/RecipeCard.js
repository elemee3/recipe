import React, { Component } from 'react';
import './App.css';

class RecipeCard extends Component {

    render() {
        let { recipe } = this.props
        let contents = []
        for (let i = 0; i < recipe.ingredients.length; i++) {
            contents.push(recipe.ingredients[i])
        }

        return (
            <div className="Recipe">
                <div className="RecipeContent">
                    <h4>{recipe.name}</h4>
                    <img src={recipe.image} />
                    <br/>
                    {contents.join(', ')}
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default RecipeCard;
