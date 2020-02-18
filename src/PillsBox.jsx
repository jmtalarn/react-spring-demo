import React from "react";
// import { Spring } from "react-spring/renderprops";
import { useSpring, animated } from "react-spring";

const Pill = ({ children, index }) => {
  const defaultStyle = {
    padding: "0.5rem",
    border: "1px solid grey",
    borderRadius: "10px",
    position: "absolute",

    left: 0,
    margin: "1rem",
    cursor: "pointer"
  };
  const [pillOpened, openPill] = React.useState(false);
  console.log(`Pill ${children} is ${pillOpened ? "open" : "closed"}`);
  const contentProps = useSpring({
    //height: pillOpened ? "5rem" : "2rem",
    height: pillOpened ? "17rem" : "2rem",
    width: pillOpened ? "35rem" : "3rem",
    // position: pillOpened ? "absolute" : "relative",
    top: pillOpened ? 0 : (index + 1) * 60,
    //   left: "0",
    textAlign: pillOpened ? "left" : "center",
    //zIndex: pillOpened ? "-1" : "0",
    ...defaultStyle
  });
  return (
    <animated.div onClick={() => openPill(!pillOpened)} style={contentProps}>
      {children}
    </animated.div>
  );
};
const PillsBox = () => {
  const numberOfPills = ["Pill A", "Pill B", "Pill C", "Pill D"];

  return (
    <div
    //   style={{
    //     width: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-around"
    //   }}
    >
      {numberOfPills.map((item, index) => (
        <Pill key={`${item}`} index={index}>{`${item}`}</Pill>
      ))}
    </div>
  );
};

export default PillsBox;
