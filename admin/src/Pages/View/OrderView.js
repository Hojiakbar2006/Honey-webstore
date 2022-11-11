import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function OrderView() {
  const [orderView, setOrderView] = useState([]);
  const Location = useLocation();
  const id = Location.pathname.split("/").pop();

  useEffect(() => {
    axios
      .get(`https://honey.pandashop.uz/order/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        setOrderView(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const date =
    new Date(orderView.date).toLocaleDateString() +
    " " +
    new Date(orderView.date).toLocaleTimeString();

  return (
    <section id="viewSection">
      <div>
        <figure>
          <img src={orderView.img} alt="" />
        </figure>
        <div>
          <h3>{orderView.name}</h3>
          <h3>Vaqti: {date}</h3>
          <h3>Narxi: {orderView.price} sum</h3>
          <h3>Xudud: {orderView.territory}</h3>
          <h3>Telfon: {orderView.phone}</h3>
          <h3>ko'rishlar soni: {orderView.view}</h3>
          <h3>
            Buyurtma xolati:{" "}
            {orderView.status === 0 ? "Tasdiqlanmagan" : "Tasdiqlangan"}
          </h3>
          <div className="btn-group">
            <button>Buyurtmani bekor qilish</button>
            <button>Buyurtmani Tasdiqlash</button>
          </div>
        </div>
      </div>
    </section>
  );
}
