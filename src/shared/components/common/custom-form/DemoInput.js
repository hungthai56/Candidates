import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import _ from "lodash";
// import { IcEyeClose } from "../../assets/icons/index";
// import MessageError from "../../utils/MessageError";
import { Theme, useTheme } from "@mui/material/styles";
import { alpha, styled } from "@mui/material/styles";
// import "./DemoInput.scss";

const style = {
    width: "100%",
    fontSize: 14,
    color: "#333333",
    zIndex: "1",
    "& .MuiInputBase-input": {
        padding: "4px 10px",
        "$ .MuiOutlinedInput-input": {
            padding: "4px 10px",
        },
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: "5px",
        height: "32px",
        width: "100%",
        fontSize: 14,
        color: "#333333",
        zIndex: "1",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#d8d7d7",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#138300",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #138300",
        },
    },
};

const DemoInput = (props) => {
    const {
        name,
        placeholder,
        value,
        onChange,
        onBlur,
        errors,
        type,
        defaultValue,
        isPassword,
        className,
        setValue
    } = props;
    console.log("input errors222", errors)
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }

    const [showIcRight, setShowIcRight] = useState(true);

    const handleOnclickIconRight = () => {
        setShowIcRight(!showIcRight);
    };

    const handleOnChange = (val) => {
        onChange(val);
        setValue(name, val)
    }

    return (
        <Box className={className} sx={{ width: "100%", padding: "0px" }}>
            <TextField
                {...props._props}
                sx={style}
                name={name}
                onBlur={onBlur}
                onChange={handleOnChange}
                value={value}
                defaultValue={defaultValue}
                type={isPassword ? "password" : type}
                error={showError}
                fullWidth
                placeholder={placeholder}
            />
            {isPassword && (
                <div
                    className="iconRight-textInput"
                    role="button"
                    onClick={handleOnclickIconRight}
                >
                    {/* <IcEyeClose /> */}
                </div>
            )}
            {showError && (
                errors[name].message
                // <MessageError type={errors[name].type} message={errors[name].message} />
            )}
        </Box>
    );
};

export default DemoInput;