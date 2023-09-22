import { useContext } from "react";
import { AssetContext } from "../GrandFather/GrandFather";

const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
    <p>Name : {gift}</p>
        </div>
    );
};

export default Friend;