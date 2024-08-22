import React from 'react'
import styles from './Ingredients.module.css';

const RecipeIngredients = () => {
    let ingredients = ["kosher salt", "baking soda", "Yukon Gold potatoes", "extra-virgin olive oil", "rosemary"];
    let listIngredients = ingredients.map(ingredient => <li>{ingredient}</li>)
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                {listIngredients}
            </ul>
        </div>
    )
}

export default RecipeIngredients