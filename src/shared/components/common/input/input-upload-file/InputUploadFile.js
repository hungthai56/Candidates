import React, { useEffect } from 'react';
import styles from './InputDropdown.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MessageError from '../../message-error/MessageError';
import IconUploadUp from '../../../icons/ic-Logo';
import Dropzone from "react-dropzone"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import { IcImport } from 'assets/icon/CRM';
import IconImport from '../../../../components/icons/Icon-import'

function InputUploadFile(props) {
    const [lineColor, setLineColor] = useState(false);
    const {
        id,
        name,
        className,
        classNameInput,
        defaultValue,
        placeholder,
        onChange = () => { },
        disabled = false,
        errors,
        maxFiles = 1,
        value,
        style,
    } = props;
    const [listFile, setListFile] = React.useState([])
    const [listFileDefault, setListFileDefault] = React.useState(defaultValue)
    useEffect(() => {
        setListFileDefault(defaultValue)
        onChange({ ListFile: listFile, Attachments: defaultValue })
    }, [defaultValue])
    const handleDrop = ((acceptedFiles) => {
        setListFile(acceptedFiles, ...listFile)
        onChange({ ListFile: { acceptedFiles, ...listFile }, Attachments: listFileDefault })
    })
    let isError = errors[name]?.message ? true : false;

    const handleDelete = ((e, file) => {
        if (file?.Id !== null && typeof file?.Id !== "undefined") {
            const dataAttachments = listFileDefault.filter(item => item.Id !== file.Id)
            setListFileDefault(dataAttachments)
            onChange({ ListFile: listFile, Attachments: dataAttachments })
        }
        else if (file !== null) {
            const dataFile = listFile.filter(item => item !== file)
            setListFile(dataFile)
            onChange({ ListFile: dataFile, Attachments: listFileDefault })
        }
    })

    useEffect(() => {

        if (value?.ListFile?.acceptedFiles) {
            setListFile(value?.ListFile?.acceptedFiles)
        } else {
            setListFile([])
        }
    }, [value])
    return (
        <div>
            <Dropzone onDrop={handleDrop} maxFiles={maxFiles} disabled={disabled}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{
                            height: '32px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            border: '0.5px solid #d8d7d7',
                            borderRadius: '3px',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '16px',
                            alignItems: 'center',
                            ...style,
                        }}
                        {...getRootProps()}
                        className={`${isError ? styles.error : ''}`}
                    >
                        <input {...getInputProps()} />
                        <Stack
                            direction="row"
                            spacing={1}
                            style={{
                                width: 'calc(100% - 44px)',
                                maxWidth: 'calc(100% - 44px)',
                                padding: '10px',
                                overflow: 'overlay',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                            }}>
                            {
                                listFile?.map((file, key) => {
                                    return (
                                        <Chip
                                            label={file?.name}
                                            key={key}
                                            disabled={disabled}
                                            onDelete={(e) => handleDelete(e, file)}
                                            style={{
                                                height: '24px',
                                                borderRadius: '3px',
                                            }}
                                        />
                                    )
                                })
                            }
                            {
                                listFileDefault?.map((file, key) => {
                                    return (
                                        <Chip
                                            label={file?.FileName}
                                            key={file?.Id}
                                            disabled={disabled}
                                            onDelete={(e) => handleDelete(e, file)}
                                            style={{
                                                height: '24px',
                                                borderRadius: '3px',
                                            }}
                                        />
                                    )
                                })
                            }
                        </Stack>
                        <div style={{
                            width: '44px',
                            height: '30px',
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            justifyItems: 'end',
                            paddingRight: '10px',
                            alignItems: 'center',
                            borderRadius: '0px 3px 3px 0px',
                        }}>
                            {/* <IconUploadUp /> */}
                            <IconImport />
                        </div>
                    </div>
                )}
            </Dropzone>
            <div>
                {isError && (
                    <div>
                        <MessageError message={errors[name]?.message} />
                    </div>
                )}
            </div>
        </div>
    );
}

InputUploadFile.propTypes = {
    isMax: PropTypes.bool,
    max: PropTypes.number,
    name: PropTypes.string,
    className: PropTypes.string,
    // defaultValue: PropTypes.number,
    typeInputProps: PropTypes.string,
};
export default InputUploadFile;
