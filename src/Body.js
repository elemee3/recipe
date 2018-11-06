import React, { Component } from 'react';
import RecipeCard from './RecipeCard'
import './App.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                },
                {
                    id: 0,
                    name: 'Mac & Cheese',
                    ingredients: ['1 Part Mac', '1 Part Cheese'],
                    image: "https://www.thechunkychef.com/wp-content/uploads/2016/12/Family-Favorite-Baked-Mac-and-Cheese-1.jpg"
                },
                {
                    id: 1,
                    name: 'Burger',
                    ingredients: ['1 Part Meat', '1 Part Bread'],
                    image: "http://static-12.sinclairstoryline.com/resources/media/2b8a785a-6dfd-4040-8e55-e2513828bd25-large16x9_RedsTavernDoubleBurger.jpg?1527629035706"
                },
                {
                    id: 2,
                    name: 'Stroganov',
                    ingredients: ['1 Part Beef', '1 Part Alcohol'],
                    image: "https://www.wellplated.com/wp-content/uploads/2018/02/Slow-Cooker-Beef-Stroganoff-healthy-600x736.jpg"
                }
            ]
        }
    }
  render() {
      let { recipes } = this.state
      let recipeDisplay = recipes.map((recipe, index) => {
          return (
              <a href="#"><RecipeCard recipe={recipes[index]} /></a>
          )
      })
    return (
        <div className="Body">
            {recipeDisplay}
        </div>
    );
  }
}

export default Body;
