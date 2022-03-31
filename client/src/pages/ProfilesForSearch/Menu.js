import React from "react";
import image from "../../assets/images/profile.jfif";
const Menu = ({ items }) => {
  return (
    <>
      {" "}
      <div className="section-center">
        {items.map((menuItem) => {
          const { id, name, email, city, price, speciality } = menuItem;
          return (
            <article key={id} className="menu-item">
              <img
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 400 / 2,
                  marginLeft: 80,
                }}
                // src={img}
                src={image}
                alt={name}
                className="photo"
              />
              <div className="item-info">
                <header>
                  <h5>{name}</h5>
                  <h5 className="price">{price} $/min</h5>
                </header>
                <p className="item-text">{speciality}</p>
                <p className="item-text" style={{ color: "#2cb1bc" }}>
                  {city}
                </p>
              </div>
            </article>
          );
        })}{" "}
      </div>
    </>
  );
};

export default Menu;
