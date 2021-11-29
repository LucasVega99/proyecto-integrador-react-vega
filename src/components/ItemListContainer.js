import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    return (
        <div>
            
            <ItemCount nombreProducto='Adidas Superstar' stock={25} />
            <ItemCount nombreProducto='Adidas Supernova' stock={15}/>
            <ItemCount nombreProducto='Nike Air Max 270' stock={25}/>
            <ItemCount nombreProducto='Nike Zoom Gravity' stock={5}/>
        </div>
    )
}

export default ItemListContainer;