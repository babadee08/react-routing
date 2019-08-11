import React, {useState, useEffect}  from 'react';

function ItemDetail({match}) {

    const [item, setItem] = useState({
        images: {}
    });

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
        const item = await data.json();
        console.log(item);
        setItem(item) 
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.transparent} alt="" />
        </div>
    )
}

export default ItemDetail;

