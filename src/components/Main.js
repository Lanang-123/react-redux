import Produk from "./Produk.js";
import TambahProduk from "./TambahProduk.js";

const Main = () => {
    return (
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative">
            <Produk />
          </div>

          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 md:px-7 px-7 py-8">
            <TambahProduk />
          </div>
        </div>
      </section>
    );
}

export default Main