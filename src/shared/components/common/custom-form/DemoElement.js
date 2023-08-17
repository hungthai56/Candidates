import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import _ from "lodash";
import { IcDateTime } from "library/components/assets/icons";


const style = {
    width: "100%",
    fontSize: 14,
    color: "#333333",
    zIndex: "1",
    margin: "0px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "5px",
        height: "32px",
        width: "100%",
        borderColor: "#138300",
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

const DemoElement = (props) => {
    const { errors, name, styled, inputFormat = "dd/MM/yyyy", className, setValue, value = "" } =
        props;
    const handleOnchange = (newValue) => {
        props.onChange && props.onChange(newValue)
        setValue(name, newValue)
    };
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} required>
            <DatePicker
                ref={props.ref}
                onChange={(e)=>props.onChange(e)}
                value={props?.value}
                className={className}
                // value={value}
                // onChange={handleOnchange}
                components={{
                    OpenPickerIcon: IcDateTime,
                }}
                inputFormat={inputFormat}
                renderInput={(params) => {
                    return <TextField
                        {...params}
                        error={showError}
                        fullWidth
                        sx={styled ? styled : style}
                    />
                }}
            />
            {showError && (
                errors[name].message
            )}
        </LocalizationProvider>
    );
};

export default DemoElement;