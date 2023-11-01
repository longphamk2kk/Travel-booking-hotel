import "./heading.css"

const Heading = ({
     title,
     subtitle,
     center
}) => {
    return (
        <div className="heading">
            <div className="title">
                {title}
            </div>
            <div className="sub_title">
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;
