import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled'
import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/system'
import IcCheckbox from 'assets/images/icons/ic-checkbox'
import IcCheckboxCheck from 'assets/images/icons/ic-checkbox-check'
import React from 'react'

const green = {
    500: '#138300',
}

const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
}

const Root = styled('span')(
    ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${green[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
)
function MyCheckbox ({ labelCheck, isSwitch, name, ...props }) {

    const handleChange = (e) => {
        const { checked } = e.target
    }
    const configCheckbox = {
        onchange: handleChange,
    }
    const label = {
        componentsProps: {
            input: { id: 'switchToggle' },
        },
    }
    return (
        <div>
            {isSwitch ? (
                <SwitchUnstyled
                    color="green[500]"
                    component={Root}
                    {...label}
                    {...configCheckbox}
                />
            ) : (
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<IcCheckbox />}
                            checkedIcon={<IcCheckboxCheck />}
                            {...configCheckbox}
                        />
                    }
                    label={labelCheck}
                    sx={{
                        marginLeft: '-9px',
                        '& .MuiFormControlLabel-label': {
                            fontSize: 14,
                        },
                    }}
                />
            )}
            {/* {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null} */}
        </div>
    )
}
export default MyCheckbox
