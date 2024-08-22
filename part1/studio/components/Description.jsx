import React from 'react'
import styles from './Description.module.css'

const RecipeAuthor = () => {
    let authorLink = "https://www.seriouseats.com/the-best-roast-potatoes-ever-recipe";
    let authorPhoto = "https://www.seriouseats.com/thmb/knstpu30mxefOzHwl2fE17RSIKE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kenji-lopez-alt-9e7ff3ba54e24328a853d774a05fd4b8.jpg";
    let authorName = "James Kenji López-Alt";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription