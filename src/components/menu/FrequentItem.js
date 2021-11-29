import React,{useState,useEffect} from "react";
import MenuList from "./MenuList";


function FrequentItem() {
  const [menuArray, setMenuArray] = useState([]);
  const[httpError, setHttpError] = useState();
  useEffect(() => {
   const fetchMenu = async () => {
    const response = await fetch('https://foodtaxi-a59cc-default-rtdb.firebaseio.com/recent.json');
    if(!response.ok){
      throw new Error('Something went wrong');
    }
    const responseData = await response.json();

    const loadedMeals = [];
    for(const key in responseData){
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
        category:responseData[key].category,
        url:responseData[key].url
      });
    }
    setMenuArray(loadedMeals);
   };
    fetchMenu().catch(error=>{
    setHttpError(error.message );
  }); 
  }, [])
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 fw-bolder text-center">Trending Item</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {menuArray.map((item) => (
          <MenuList
            key={item.id}
            id={item.id}
            title={item.name}
            description={item.description}
            price={item.price}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentItem;
