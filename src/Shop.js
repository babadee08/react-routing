import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
        const items = await data.json();
        // console.log(items);
        setItems(items.items)
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => (
                <h1 key={item.itemid}>
                    <Link to={`shop/${item.itemid}`}>{item.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;