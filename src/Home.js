import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";
const Home = () => {
  console.warn(data.productData);
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
