import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './FormMultiImage.module.scss';
import MessageError from './../message-error/MessageError';

export default function AutoCompleteCommon(props) {
  const { options, errors, name, limitTags = 2 } = props;

  let dataDefault = [];
  options?.map((v) => {
    let index = props?.value?.findIndex((x) => x == v?.key);
    if (index != -1) {
      dataDefault.push(v);
    }
    return v;
  });

  return (
    <>
      <Autocomplete
        sx={{
          height: 32,
        }}
        className={styles.FormControl}
        disableCloseOnSelect={true}
        limitTags={limitTags}
        disablePortal
        id="multiple-limit-tags"
        multiple
        value={dataDefault ?? []}
        onChange={(event, newValue) => {
          props.onChange(
            [...newValue].map((v) => {
              return v.key;
            }),
          );
        }}
        options={options}
        getOptionLabel={(option) => option?.label}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option?.label} {...getTagProps({ index })} />
          ))
        }
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField
            {...params}
            // label={props.placeholder}
            placeholder={props.value?.length == 0 && props.placeholder}
            sx={{
              outline: 'none',
              border: errors && errors[name] ? '1px solid red' : 'none',
              borderRadius: errors && errors[name] ? 1 : 0,
            }}
          />
        )}
      />
      <>
        {errors && errors[name] && (
          <>
            <MessageError message={errors[name]?.message} />
          </>
        )}
      </>
    </>
  );
}
