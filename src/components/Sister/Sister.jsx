import { useContext } from "react";
import { MoneyContext } from "../GrandFather/GrandFather";


const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h4>Money : {money}</h4>
            <h2>Sister</h2>
        </div>
    );
};

export default Sister;