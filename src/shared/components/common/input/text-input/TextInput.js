// import { Box } from '@findxdn/erp-theme';
// import { Tooltip } from '@mui/material';
// import _ from 'lodash';
// import MessageError from '../../message-error/MessageError';
// import styles from "./TextInput.module.scss";

import { CustomTextInput as ThemeCustomTextInput } from '@findxdn/erp-theme';
const TextInput = (props) => {
    return (
        <ThemeCustomTextInput {...props} />
    )
}
// function TextInput (props) {
//     const {
//         name,
//         placeholder,
//         value = '',
//         onChange = () => { },
//         readOnly = false,
//         onBlur,
//         errors = null,
//         type = 'text',
//         defaultValue = '',
//         isPassword = false,
//         isTooltip = false,
//         className,
//         textAlign = 'left',
//         onKeyUp,
//         onKeyDown,
//         onKeyPress,
//         onChangeType = null,
//         disabled = false,
//     } = props;

//     let showError = false;

//     let arr = name.split(".");

//     let error = null

//     if (arr.length >= 1 && errors !== null) {
//         let result = arr.reduce((rs, e) => {
//             if (rs[e]) {
//                 return rs = rs[e]
//             }
//             return {}

//         }, errors)
//         error = result
//         showError = !_.isEmpty(error);
//     }

//     return (
//         <div className={styles["TextInput"]}>
//             <Tooltip
//                 placement="bottom"
//                 arrow
//                 classes={{ arrow: styles["arrow"], tooltip: styles["tooltip"] }}
//                 title={(showError && isTooltip) ? (
//                     <MessageError
//                         type={error?.type}
//                         message={error?.message}
//                         style={{ color: "red", marginTop: "0px" }}
//                     />
//                 ) : ""}>
//                 <input disabled={disabled}  name={props.name} ref={props.fieldRef} type="text" {...props} className={`${showError ? styles["error"] : styles["success"]}`} />
//             </Tooltip>
//             {
//                 (showError && !isTooltip) ? (
//                     <MessageError type={error?.type} message={error?.message} />
//                 ) : <></>
//             }
//         </div>
//     )
// }
export default TextInput;