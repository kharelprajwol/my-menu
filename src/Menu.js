const Menu = ({items}) => {
    return (
        <div>
            {items.map((data) => {
                const {id,title,img,desc,price} = data;
                return(
                    <div>
                        <img src={img} alt={title}/>
                        <h4>{title}</h4>
                        <h4>{price}</h4>
                        <p>{desc}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;
