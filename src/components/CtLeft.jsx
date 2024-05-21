import React, { useState } from "react";
import { books } from '../../data.json';
import './CtLeft.css'

function CtLeft({ onFilterChange } ) {
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);

  const handleCheckboxChange = (sellerName) => {
    try {
      const filteredBooks = books.filter((item) => {
        return item.current_seller.name === sellerName;
      });
      const selectedSuppliers = filteredBooks.map(book => book.current_seller.name);
      onFilterChange(selectedSuppliers);
    } catch (error) {
      console.error("Error books:", error);
    }
  };
  

    return (
        <div className='danhmuc'>
        <h5>Danh Mục Sản Phẩm</h5>
        <p>English Books</p>
        <p>Sách tiếng Việt </p>
        <p>Văn phòng phẩm</p>
        <p>Quà lưu niệm</p>  
        <h5>Nhà cung cấp</h5>   
        <div>
        <input
            type="checkbox"
            name="nhassachFahasa"
            onChange={() => handleCheckboxChange("Nhà sách Fahasa")}
          />
          <label >Nhà sách Fahasa</label>
        </div>
        <div>
        <input
            type="checkbox"
            name="bamboobooks"
            onChange={() => handleCheckboxChange("Bamboo Books")}
          />
          <label >Bamboo Books</label>
        </div>
        <div>
        <input
            type="checkbox"
            name="timesbook"
            onChange={() => handleCheckboxChange("Times Books")}
          />
          <label >Times Books</label>
        </div>
        <div>
        <input
            type="checkbox"
            name="nhassachtreonline"
            onChange={() => handleCheckboxChange("Nhà Sách Trẻ Online")}
          />
          <label >Nhà Sách Trẻ Online</label>
        </div>
        <div>
        <input
          type="checkbox"
          name="Vbooks"
          onChange={() => handleCheckboxChange("Vbooks")}
                  />
          <label >VBooks</label>
        </div>
        <h5>Đánh Giá</h5>
        <div>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="start.png"/>
        </div><br/>
        <div>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="startnull.png"/>
        </div><br/>
        <div>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="start.png"/>
          <img src="startnull.png"/>
          <img src="startnull.png"/>
        </div>
      </div>
    );
}

export default CtLeft;