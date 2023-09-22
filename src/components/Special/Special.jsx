import { useContext } from "react";
import { AssetContext } from "../GrandFather/GrandFather";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Has : {asset}</p>
            <p>Name : {gift}</p>
        </div>
    );
};

export default Special;