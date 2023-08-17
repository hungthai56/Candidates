import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@findxdn/erp-theme';
import HeadCommonPopup from '../component/HeadCommonPopup';

const FormWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  padding: '20px 20px 10px 20px',
  width: '300px',
  textAlign: 'center',
  maxHeight: '198px',
});

const FormItemWrapper = styled('div')({
  textAlign: 'center',
});

const FormButtonWrapper = styled('div')({
  textAlign: 'center',
  heigh: 'auto',
});

export default function SaveNotiPopup(props) {
  const { showVisible, payload } = props;
  const handleCloseButton = () => {
    if (payload?.callback) {
      payload?.callback();
    }
    showVisible();
  };
  return (
    <div>
      <HeadCommonPopup onHandleRight={showVisible} content="Thông báo" />
      <FormWrapper>
        <FormItemWrapper>
          <div sx={{ text: 'center' }}>{payload?.message}</div>
        </FormItemWrapper>

        <FormButtonWrapper>
          <Button
            onClick={() => handleCloseButton()}
            className="btn bases__font--14 bases__height--38 button-pos-default background-green"
          >
            Đóng
          </Button>
        </FormButtonWrapper>
      </FormWrapper>
    </div>
  );
}
