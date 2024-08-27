import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.foodnetwork.ca/chefs-hosts/";
   let authorPhoto = "https://api.vip.foodnetwork.ca/wp-content/uploads/2021/08/Anna_Olson-2.jpg?w=2048&quality=75";
   let authorName = "Anna Olsen";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["peach", "brown sugar", "cinnamon", "lemon juice", "salt"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Peach Pie</h1>
            <p>If you’re a fan of peach season, then you’re in for a treat with these peach hand pies! They are filled with ripe, juicy peaches that are wrapped in store-bought puff pastry, which cuts the prep time down significantly! This allows you to have more time out in the sun at your summer BBQ and picnics! These peach hand pies are also great as a make-ahead dessert! Just assemble and freeze until you’re ready to bake them!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://api.vip.foodnetwork.ca/wp-content/uploads/2024/08/Peach-hand-pies-feat.jpg?w=2048&quality=75" alt="Peach Pie" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
