import React, { useState, useEffect } from "react";
import trash from "../../Assets/Images/trash.svg";
import addIcon from "../../Assets/Images/Add Img.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

export function EditProduct() {
  const [imagesData, setImagesData] = useState([]);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const Location = useLocation();
  const id = Location.pathname.split("/").pop();
  
 
console.log(images);  
console.log(imagesData);

 function updateImg() {
   const formData = new FormData();
   const newImgArr = [];
   const deleteImg = []; // img url

   for (let i = 0; i < newImgArr.length; i++) {
     formData.append("img", newImgArr[i]);
   }
   formData.append("data", JSON.stringify({ delete: [...deleteImg] }));

   axios(`https://honey.pandashop.uz/product/update/img/${id}`, {
     headers: {
       "Content-Type": "multipart/form-data",
       token: "Admin tokeni",
     },
     data: formData,
   })
     .then((res) => {
       console.log(res.data.data);
     })
     .catch((err) => {
       console.log(err.response.data.message);
     });
 }


  
  useEffect(() => {
    axios
      .get(`https://honey.pandashop.uz/product/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        toast(res.data.message)
        setProduct(res.data)
        setImagesData(res.data.img || []);
      })
      .catch((err) => {
       toast(err.response.message);
      });
  }, [id]);

//   useEffect(()=>{
     

// })


const data = product
  return (
    <section id="crudContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios(`https://honey.pandashop.uz//product/update/text`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: "Admin tokeni",
            },
            data,
          })
            .then((res) => {
              toast(res.data.message);
            })
            .catch((err) => {
              console.log(err.response.data.message);
            });
        }}
      >
        <input
          placeholder="Nomi"
          type="text"
          name="name"
          value={product.name || ""}
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
          }}
        />
        <input
          placeholder="Narxi"
          type="number"
          name="price"
          value={product.price || ""}
          onChange={(e) => {
            setProduct({ ...product, price: e.target.value });
          }}
        />
        <input
          placeholder="Xududi"
          type="text"
          name="territory"
          value={product.territory || ""}
          onChange={(e) => {
            setProduct({ ...product, territory: e.target.value });
          }}
        />
        <input
          placeholder="Weight"
          type="text"
          name="weight"
          value={product.weight || ""}
          onChange={(e) => {
            setProduct({ ...product, weight: e.target.value });
          }}
        />
        <div>
          {imagesData.map((img, index) => {
            return (
              <figure className="mapImgCard" key={index} id="figure">
                <button
                  type="button"
                  className="trashBtn"
                  onClick={() => {
                    setImagesData(imagesData.filter((item, i) => i !== index));
                    updateImg().newImgArr.push(URL.createObjectURL(img));
                  }}
                >
                  <img src={trash} alt="trash" />
                </button>
                <img src={img} alt={img} />
              </figure>
            );
          })}
          <label
            className="card"
            style={imagesData.length === 4 ? { display: "none" } : {}}
          >
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              multiple="multiple"
              onChange={(e) => {
                setImages(URL.createObjectURL([...images, ...e.target.files]));
                const MyFiles = [...imagesData];
                for (let i = 0; i < e.target.files.length; i++) {
                  if (MyFiles.length < 4) {
                    MyFiles.push(e.target.files[i]);
                  } else {
                    MyFiles.splice(0, 1);
                    MyFiles.push(e.target.files[i]);
                  }
                }
                setImagesData(MyFiles);
              }}
            />
            <img src={addIcon} alt="" />
          </label>
        </div>
        <textarea
          placeholder="Message"
          name="about"
          value={product.about || ""}
          onChange={(e) => {
            setProduct({ ...product, about: e.target.value });
          }}
        />
        <input type="submit" value="Maxsulotni Taxrirlash" />
      </form>
    </section>
  );
}
