import { Controller, useFormContext } from 'react-hook-form';
import Validator from 'utils/Validator';
import PropTypes from 'prop-types';
import Utils from 'utils/Utils';
import { useRef } from 'react';
import TreeSelect from '../input/tree-select/TreeSelect';

function FormTreeSelect(props) {
    const {
        defaultValue,
        fieldName,
        validate = [],
        placeholder,
        options,
        disabled = false,
        isTooltip = false,
        isMenuPortal = false,
        group = false,
        isMulti = false,
        maxToShowProps = 1,
        hideSelectedOptions = false,
        menuPlacement = 'auto',
        optionsAll
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();

    let portalStyles = {};
    let menuPortalTarget = {};
    if (isMenuPortal) {
        portalStyles['zIndex'] = 9999;
        menuPortalTarget['menuPortalTarget'] = document.body;
    }

    const wrapRef = useRef();

    return (
        <div ref={wrapRef} className={`w-100 ${props?.className}`}>
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        return (
                            <TreeSelect
                                name={fieldName}
                                fieldref={ref}
                                onChange={(e) => {
                                    onChange(e);
                                    Utils.triggerSubmit(wrapRef);
                                }}
                                onBlur={onBlur}
                                value={
                                    isMulti ? (value ? [...value] : []) : value
                                }
                                options={options?.map((v) => {
                                    return {
                                        ...v,
                                        value: v?.key,
                                    };
                                })}
                                optionsAll={optionsAll}
                                defaultValue={defaultValue}
                                placeholder={placeholder}
                                errors={errors}
                                disabled={disabled}
                                isTooltip={isTooltip}
                                {...menuPortalTarget}
                                styles={{
                                    menuPortal: (base) => ({
                                        ...base,
                                        ...portalStyles,
                                    }),
                                }}
                                group={group}
                                isMulti={isMulti}
                                maxToShowProps={maxToShowProps}
                                hideSelectedOptions={hideSelectedOptions}
                                _props={{
                                    menuPlacement: menuPlacement,
                                }}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
}
FormTreeSelect.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
};
FormTreeSelect.propTypes = {
    isMenuPortal: PropTypes.bool,
};
export default FormTreeSelect;
