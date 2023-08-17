import { TextInput } from '@findxdn/erp-theme';
import { useEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Controller, useFormContext } from 'react-hook-form';
import { useClickAway } from 'react-use';
import styled, { css } from 'styled-components';
import Utils from 'utils/Utils';
import Validator from 'utils/Validator';

const ColorCircleWrapper = styled.div`
  position: relative;
  padding: 4px;
  border: 1px solid #d8d7d7;
  display: flex;
  border-radius: 50%;

  .react-colorful-wrapper {
    position: absolute;
    left: 0px;
    top: 40px;
    z-index: 2;

    .react-colorful {
      padding: 16px;
      border-radius: 12px;
      background: #33333a;
      box-shadow: 0 6px 12px #999;
      gap: 10px;
    }

    .react-colorful__hue {
      order: -1;
    }

    .react-colorful__alpha,
    .react-colorful__hue {
      height: 14px;
      border-radius: 5px;
    }

    .react-colorful__hue-pointer,
    .react-colorful__alpha-pointer {
      width: 20px;
      height: 20px;
    }
  }
`;

const ColorCircle = styled.div`
  width: 24px;
  height: 24x;
  border-radius: 50%;

  ${(props) =>
        props.color &&
        css`
      background-color: ${props.color};
    `}
`;

function FormColor(props) {
    const {
        fieldName,
        validate = [],
        placeholder,
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();

    const wrapRef = useRef()
    return (
        <div className={`w-100 ${props?.className ?? ""}`} ref={wrapRef}>
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field }) => {
                        const [color, setColor] = useState('#000');
                        const [open, setOpen] = useState(false);
                        const colorPickerRef = useRef(null);

                        useClickAway(colorPickerRef, () => {
                            setOpen(false);
                        });

                        const changeColor = (color) => {
                            setColor(color);
                            setOpen(true)
                            field.onChange(color);
                        };

                        useEffect(()=>{
                            if(field.value){
                                setColor(field.value)
                            }
                        },[field.value])
                        return (
                            <div ref={colorPickerRef} style={{
                                display: 'flex',
                                gap: 10
                            }}> 
                                <ColorCircleWrapper>
                                    <ColorCircle color={color} onClick={() => setOpen(true)} />
                                    {open && (
                                        <div ref={colorPickerRef} className="react-colorful-wrapper">
                                            <HexColorPicker
                                                ref={colorPickerRef}
                                                color={color}
                                                onChange={changeColor}
                                            />
                                        </div>
                                    )}
                                </ColorCircleWrapper>
                                <TextInput
                                    {...field}
                                    placeholder={placeholder ?? "Chọn màu"}
                                    errors={errors}
                                    readOnly
                                />
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
}
FormColor.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
    className: ""
};
export default FormColor;
