import React from 'react'
import classes from './HobbyLinks.module.css';

export const HobbyLinks = () => {
    const hobbyLinks = [
        "https://www.rei.com/",
        "https://www.adorama.com/"
    ]
    const listHobbyLinks = hobbyLinks.map(link => <a href={link}>{link}<br /></a>)
    return (
        <div className={classes.backgroundColor}>
            <h3>My Hobbies</h3>
            {listHobbyLinks}
        </div>
    )
}