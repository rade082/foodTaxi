import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";

function Menu() {
  const [dataSet, setData] = useState([]);
  const [menuArray, setMenuArray] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://foodtaxi-a59cc-default-rtdb.firebaseio.com/menu.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          category: responseData[key].category,
          url: responseData[key].url,
        });
      }
      setData(loadedMeals);
      setMenuArray(loadedMeals);
    };
    fetchMenu().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  const filterProduct = (category) => {
    const updatedList = menuArray.filter((item) => item.category === category);
    setData(updatedList);
  };

  const FilterMenu = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => setData(menuArray)}
          >
            All
          </button>
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProduct("appetizer")}
          >
            Appetizer
          </button>
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProduct("main-course")}
          >
            Main Course
          </button>
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProduct("dessert")}
          >
            Dessert
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 fw-bolder text-center">Menu</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <FilterMenu />
        {dataSet.map((item) => (
          <MenuList
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
