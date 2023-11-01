import { IconType } from "react-icons";
import "./input.css"

const CategoryBox = ({
         icon: Icon,
         label,
         selected,
         onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`category-input
                ${selected ? 'selected' : 'unselected'}`
            }>
            <Icon size={30} />
            <div className="category-input-label">
                {label}
            </div>
        </div>
    );
}

export default CategoryBox;
