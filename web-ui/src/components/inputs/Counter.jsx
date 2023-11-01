import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./input.css"


const Counter = ({
     title,
     subtitle,
     value,
     onChange
}) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value]);

    const onReduce = useCallback(() => {
        if (value === 1) {
            return;
        }

        onChange(value - 1);
    }, [onChange, value]);

    return (
        <div className="counter">
            <div className="counter1">
                <div className="counter-header">{title}</div>
                <div className="counter-sub">
                    {subtitle}
                </div>
            </div>
            <div className="counter-body">
                <div
                    onClick={onReduce}
                    className="minus"
                >
                    <AiOutlineMinus />
                </div>
                <div
                    className="number"
                >
                    {value}
                </div>
                <div
                    onClick={onAdd}
                    className="minus"
                >
                    <AiOutlinePlus />
                </div>
            </div>
        </div>
    );
}

export default Counter;
