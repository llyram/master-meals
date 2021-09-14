import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.css';

const SkeletonRecipe = () => {
    // const classes = `skeleton ${type}`
    return(
        <div className="skeleton-card">
            <SkeletonElement type="image" />
            <SkeletonElement type="title" />
            <SkeletonElement type="para" />

        </div>
    )
}

export default SkeletonRecipe;