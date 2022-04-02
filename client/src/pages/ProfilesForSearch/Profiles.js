import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import FormRow from "../../components/FormRow";
import image from "../../assets/images/profile.jfif";
import axios from "axios";
import "../../css/profiles.css";
import styled from "styled-components";
import SearchCard from "../../components/SearchCard";

class Profiles extends React.Component {
  state = {
    name: "",
    email: "",
    city: "",
    price: "",
    speciality: "",
    items: [],
    cit: "",
    specialit: "",
    search: "",
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  removeFromLocalStorage = () => {
    {
      localStorage.removeItem("city");
    }
    {
      localStorage.removeItem("specialty");
    }
  };

  getBlogPost = () => {
    axios
      .get(
        localStorage.getItem("city").trim().length === 0 ||
          localStorage.getItem("speciality").trim().length === 0
          ? `/api/avocats`
          : `/api/avocat?city=${localStorage
              .getItem("city")
              .trim()}&speciality=${localStorage.getItem("speciality").trim()}`
      )
      .then((response) => {
        const data = response.data;
        this.setState({ items: data });
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  displayBlogPost = (items) => {
    return items
      .filter((menuItem) => {
        const { name } = menuItem;
        if (this.state.search == "") {
          return menuItem;
        } else if (
          name.toLowerCase().includes(this.state.search.toLocaleLowerCase())
        ) {
          return menuItem;
        }
      })
      .map((menuItem) => {
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
      });
  };
  render() {
    return (
      <main>
        <section className="menu section">
          <div className="title">
            {/* <h2>The Hedear</h2> */}
            <FormRow
              style={{ justifyContent: "center", marginTop: 15, width: 300 }}
              type="text"
              name="search"
              placeholder="entrer le nom d'un avocat .."
              value={this.state.search}
              handleChange={this.handleChange}
            />
            <div className="underline"></div>
          </div>

          <div className="section-center">
            {this.displayBlogPost(this.state.items)}
          </div>
        </section>
      </main>
    );
  }
}

export default Profiles;

const EmptyContainer = styled.section`
  text-align: center;
  h5 {
    text-transform: none;
  }
  span {
    color: var(--primary-500);
  }
`;
