import React, { useState, useEffect, useRef } from "react";
import ButtonDrop from "./ButtonDropdown.module.scss";
function ButtonDropdownV2(props) {
  const [Position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  const [isClick, setIsClick] = useState(false);
  const popRef = useRef();

  const {
    Options,
    value,
    id,
    placeholder,
    onChange,
    children,
    icon,
    isHover,
    disable = false,
  } = props;

  const [isTitle, setIsTitle] = useState("");
  const [heightDropdown, setHeightDropdown] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const pop = popRef.current;
    const Optionslen = Options.length;
    setHeightDropdown(Optionslen * 10);

    setPosition({ top: pop.offsetHeight, bottom: 0, left: 0, right: 0 });
  }, []);

  useEffect(() => {
    if (!isHovering) {
      setIsClick(isHovering);
    }
    if (isHover && isHovering) {
      setIsClick(isHovering);
    }
  }, [isHovering]);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsHovering(false), 200);
  };

  const handleOpen = () => {
    if (disable) return;
    setIsClick(!isClick);
  };

  return (
    <div
      className={`${ButtonDrop["ButtonDropdown"]}  ${
        ButtonDrop["stand_radius"]
      } ${props.className ?? ""}`}
      id={ButtonDrop["button_dropdown"]}
      style={{ ...(props?.style ?? "") }}
      onClick={handleOpen}
      ref={popRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={ButtonDrop["inputs_item"]}>
        <div
          className={`${ButtonDrop["icon_float"]} ${
            isClick ? ButtonDrop["is_change"] : ButtonDrop[""]
          }`}
        >
          {icon}
        </div>
        {children}
      </div>
      <div
        className={`${ButtonDrop["dropdown_body"]} ${
          ButtonDrop["stand_radius"]
        } ${isClick ? ButtonDrop["show"] : ButtonDrop[""]}`}
        style={{ top: Position.top }}
      >
        <ul>
          {Options &&
            Options.map((item, index) => {
              if (value !== item.value) {
                return (
                  <li
                    className={ButtonDrop["stand_input"]}
                    key={index}
                    onClick={() => {
                      setIsTitle(item);
                      onChange(item.value);
                    }}
                  >
                    {item.label}
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
}

export default ButtonDropdownV2;
