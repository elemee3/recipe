import React, { Component } from 'react';
import RecipeCard from './RecipeCard'
import '../App.css';
import {Link} from 'react-router-dom';
import recipes from '../store/Recipes.js';

class RecipeIndex extends Component {
  render() {
      let recipeDisplay = recipes.map((recipe, index) => {
          return (
            <Link to={`/recipes/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
            </Link>
          )
      })
    return (
        <div>
            <Link to='/new'>
                <button>Add New Recipe</button>
            </Link>
            <div className="RecipeIndex">
                {recipeDisplay}
            </div>
        </div>
    );
  }
}

export default RecipeIndex;
