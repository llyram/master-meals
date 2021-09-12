import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonRecipe = () => {
    // const classes = `skeleton ${type}`
    return(
        <div className="recipe">
            <SkeletonElement type="image" />
            <SkeletonElement type="title" />
            <SkeletonElement type="para" />

        </div>
    )
}

export default SkeletonRecipe;