import {useState,useEffect} from "react"
import {useDispatch} from "react-redux"
import {update} from "../features/ProdukSlice.js"

const TambahProduk = () => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const dispatch = useDispatch();


    const updateProduct = (e) => {
        e.preventDefault();
        dispatch(update({title,price}))
    }

    return (
      <div>
        <h2 className="text-indigo-700  mb-1 font-medium title-font text-center text-3xl">
          Tambah Data
        </h2>
        <form onSubmit={updateProduct}>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Harga
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default TambahProduk