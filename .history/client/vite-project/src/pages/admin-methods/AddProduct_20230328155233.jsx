// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [error, setError] = useState("");
//   const api = import.meta.env.VITE_REACT_APP_BACKEND;
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [photos, setPhotos] = useState([]);
//   const [category, setCategory] = useState("");
//   const [brand, setBrand] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const handleAddProduct = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("photos", photos);
//     formData.append("category", category);
//     formData.append("brand", brand);
//     formData.append("quantity", quantity);

//     await axios
//       .post(`${api}admin/product/add`, {
//         withCredentials: true,
//         // name: name,
//         // price: price,
//         // description: description,
//         // photos: photos,
//         // category: category,
//         // brand: brand,
//         // quantity: quantity,
//         formData,
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
//       <div className="">
//         <h1 className="text-3xl py-6 text-cyan-500">Admin Sign In</h1>
//         <form onSubmit={handleAddProduct} encType="multipart/form-data">
//           <p className="md:text-xl">
//             Product Name<span className="text-red-500">*</span>
//           </p>
//           <input
//             type="text"
//             className="border-2 p-2 dark:text-black"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//           <br />
//           <small>Product name should not be more than 120 characters</small>

//           <p className="md:text-xl ">
//             Price<span className="text-red-500">*</span>
//           </p>
//           <input
//             type="number"
//             className="border-2 p-2 dark:text-black"
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//           />
//           <br />
//           <small>Product price cannot be more than 99999</small>

//           <p className="md:text-xl ">
//             Description<span className="text-red-500">*</span>
//           </p>
//           <input
//             type="text"
//             className="border-2 p-2 dark:text-black"
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//           />
//           <p className="md:text-xl ">
//             Photos<span className="text-red-500">*</span>
//           </p>
//           <input
//             id="photo"
//             type="file"
//             multiple
//             className="border-2 p-2 dark:text-white"
//             onChange={(e) => {
//               const files = e.target.files;
//               console.log(files);
//               setPhotos(files);
//             }}
//           />

//           <p className="md:text-xl ">
//             Category<span className="text-red-500">*</span>
//           </p>
//           <div className="flex flex-col m-auto">
//             <select
//               className="border-2 text-black text-xl"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option className="border-2" value="Electronics">
//                 Electronics
//               </option>
//               <option className="border-2" value="Home and Kitchen">
//                 Home and Kitchen
//               </option>
//               <option className="border-2" value="Clothing and Accessories">
//                 Clothing and Accessories
//               </option>
//               <option className="border-2" value="Beauty">
//                 Beauty
//               </option>
//               <option className="border-2" value="Toys and Games">
//                 Toys and Games
//               </option>
//             </select>
//           </div>

//           <p className="md:text-xl ">
//             Brand<span className="text-red-500">*</span>
//           </p>
//           <input
//             type="text"
//             className="border-2 p-2 dark:text-black"
//             onChange={(e) => setBrand(e.target.value)}
//             value={brand}
//           />

//           <p className="md:text-xl ">
//             Quantity<span className="text-red-500">*</span>
//           </p>
//           <input
//             type="number"
//             className="border-2 p-2 dark:text-black"
//             onChange={(e) => setQuantity(e.target.value)}
//             value={quantity}
//           />
//           <button
//             className="my-4 text-xl border-2 p-1.5 bg-cyan-700 w-[50%] m-auto"
//             onClick={handleAddProduct}
//           >
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    photos: [],
    category: "",
    brand: "",
    quantity: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const inputValue = type === "file" ? event.target.files[0] : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataWithPhotos = new FormData();
      formDataWithPhotos.append("name", formData.name);
      formDataWithPhotos.append("description", formData.description);
      formDataWithPhotos.append("price", formData.price);

      for (let i = 0; i < formData.photos.length; i++) {
        formDataWithPhotos.append("photos", formData.photos[i]);
      }

      const response = await axios.post("/api/products", formDataWithPhotos, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      // handle success
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="text" name="description" onChange={handleInputChange} />
      <input type="number" name="price" onChange={handleInputChange} />
      <input type="file" name="photos" onChange={handleInputChange} multiple />

      {errorMessage && <p>{errorMessage}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
