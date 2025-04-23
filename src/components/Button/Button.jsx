import getButtonStyleType from "./getButtonStyleType";

function Button({ text, buttonType, styleType, onClickHandler }) {

    return (
        <button
            type={buttonType}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyleType(styleType)} text-white rounded-md transition-all`}>
            {text}
        </button>
    );
}

export default Button;