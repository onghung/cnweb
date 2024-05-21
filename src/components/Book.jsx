import { Link } from 'react-router-dom';
import './Book.css';

function Book({ data }) {
    const {
        id,
        images,
        name,
        quantity_sold,
        list_price,
        original_price,
        current_seller
    } = data;

    const discount = original_price && current_seller.price 
        ? Math.round(((original_price - current_seller.price) / original_price) * 100) 
        : 0;

    return (
        <Link to={`book/${id}`} className="card" style={{ width: "19rem" }}>
            <img src={images[0]?.base_url || 'default.jpg'} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5>{name}</h5>
                <div>
                    <img src="start.png"/>
                    <img src="start.png"/>
                    <img src="start.png"/>
                    <img src="start.png"/>
                    <img src="start.png"/>
                    <span>  | {quantity_sold?.text || "Đã bán 1000+"}</span>
                </div>
                <div className="price-discount">
                    <h4>{list_price}<sup style={{ top: "-0.5em" }}> ₫ </sup></h4>
                    <h5 className="discount">{discount}%</h5>
                </div>
            </div>
        </Link>
    );
}

export default Book;
