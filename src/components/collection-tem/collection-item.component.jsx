import React from "react";
import "./collection-item.styles.scss";
// we made function because we dont need any state, but we need certain values to be passed in.

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
      <div className="collection-footer">
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div>

    
  </div>
)
export default CollectionItem;
