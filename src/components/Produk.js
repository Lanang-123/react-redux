import {useSelector} from "react-redux";
import {convert} from "rupiah-format";

const Produk =  () => {
    
    const {title,price} = useSelector(state=>state.product);
    console.log(title,price);


    return (
      <div id="recipients" className="w-full">
        <table id="example" className="stripe hover tablestyle">
          <thead>
            <tr>
              <th data-priority="1">No</th>
              <th data-priority="2">Nama Produk</th>
              <th data-priority="3">Harga</th>
              <th data-priority="4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">{title}</td>
              <td className="text-center">{convert(price)}</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
}

export default Produk;