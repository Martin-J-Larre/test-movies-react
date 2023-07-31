import { useState } from "react";
import PropTypes from "prop-types";
import { Start } from "./components/Start";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const StarContainerStyle = {
  display: "flex",
};

StartRating.propTypes = {
  maxRating: PropTypes.number,
  messages: PropTypes.array,
  color: PropTypes.string,
  size: PropTypes.number,
};

export const StartRating = ({
  maxRating = 5,
  messages = [],
  color = "#fcc419",
  size = 40,
}) => {
  const [rating, setRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={StarContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Start
            key={i}
            onRate={() => setRating(i + 1)}
            full={hoverStar ? hoverStar >= i + 1 : rating >= i + 1}
            onHoverIn={() => setHoverStar(i + 1)}
            onHoverOut={() => setHoverStar(0)}
            hoverStar={hoverStar}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[hoverStar ? hoverStar - 1 : rating - 1]
          : hoverStar || rating || ""}
      </p>
    </div>
  );
};
