import React from 'react';

function Products({ name, imagePath ,updateItemCount}) {

  const handleChange=(event)=>{
    const currentValue = event.target.value;
    updateItemCount(name, currentValue);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "25%" }}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Products;
