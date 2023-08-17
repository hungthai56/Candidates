import React from 'react';
import styled, { css } from 'styled-components';
import FormSelectV2 from './FormSelect';
import FormInput from './FormInput';
import FormAutocomplete from './FormAutocomplete';
import FormCheckbox from './FormCheckbox';
import FormDatePicker from './FormDatePicker';
import FormTimepicker from './FormTimepicker';
import FormInputV2 from '../common/custom-form/FormInput';
import FormSelect from '../common/custom-form/FormSelect';

const InputLabel = styled.label`
  margin-bottom: 8px;
  ${(props) =>
        props.isRequired &&
        css`
      &::after {
        content: '*';
        margin-left: 3px;
        color: #ff3434;
      }
    `}
`;

export default function CommonInput(props) {
    const { type, label, rules = [] } = props;
    const renderInput = (inputType) => {
        switch (inputType) {
            case 'select':
                return <FormSelectV2 {...props} />;
            case 'select-v2':
                return <FormSelect {...props} />;
            case 'autocomplete':
                return <FormAutocomplete {...props} />;
            case 'checkbox':
                return <FormCheckbox {...props} />;
            case 'date':
                return <FormDatePicker {...props} />;
            case 'time':
                return <FormTimepicker {...props} />;
            case 'input-v2':
                return <FormInputV2 {...props} />;
            default:
                return <FormInput {...props} />;
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 7
        }}>
            {label && <InputLabel isRequired={rules?.length > 0 || props?.validate?.length > 0}>{label}</InputLabel>}
            {renderInput(type)}
        </div>
    );
}
