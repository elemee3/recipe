import React, { Component } from 'react';
import '../App.css';
import recipes from '../store/Recipes.js';

class New extends Component {
    render() {
        return (
            <div>
                <h2>Create a New Recipe</h2>
                <form>
                    <p>Recipe Name: <input type="text" name="name" /></p>
                    <p>Ingredients: <input type="text" name="ingredients" /></p>
                    <p>Instructions: <input type="text" name="instructions" /></p>
                    <input type="submit" value="Add Recipe" />
                </form>
            </div>
        )
    }
}

export default New;
