import "./button.css"

const Button= ({
   label,
   onClick,
   disabled,
   outline,
   small,
   icon: Icon
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="button-modal"
        >
            {Icon && (
                <Icon size={24} className="icon"/>
            )}
            {label}
        </button>
    );
}

export default Button;
