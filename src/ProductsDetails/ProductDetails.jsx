import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData();

    const {_id, photoURL, productName, brandName, productType, productPrice, description, rating } = product ;


    return (
        <div>
            
            <div>
                <img src={photoURL}></img>
                <h2>hello</h2>
                <h2>{productName}</h2>
            </div>


        </div>
    );
};

export default ProductDetails;