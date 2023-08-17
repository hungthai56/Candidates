import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import { useForm, Controller } from 'react-hook-form';
import {
  TextInput,
  Button,
  TextLabel,
  CustomDatePicker,
  CustomTimepicker,
  CustomCheckbox,
} from '@findxdn/erp-theme';
import moment from 'moment';
import SingleImageUpload from 'library/components/image/SingleImageUpload';
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import actionGeneral from 'redux/general/action';
import HeadCommonPopup from '../component/HeadCommonPopup';
import PopupName from '../PopupName';

const FormWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '30px',
  minWidth: '850px',
  maxHeight: '600px',
  overflowY: 'scroll',
});

const FormItemWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '50%',
});
const FormItemInputWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
});
const FormItemImgWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '31,5%',
});

const FormButtonWrapper = styled('div')({
  display: 'flex',
  gap: '15px',
  justifyContent: 'flex-end',
});

function FormInput(props) {
  const { label, name, control, placeholder, errors } = props;
  return (
    <FormItemInputWrapper>
      <p>{label}</p>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Không được để trống',
          },
        }}
        render={({ field, ref }) => (
          <TextInput
            {...field}
            ref={ref}
            placeholder={placeholder}
            errors={errors}
          />
        )}
        name={name}
      />
    </FormItemInputWrapper>
  );
}

function FormDatePicker(props) {
  const { label, name, control, placeholder, options } = props;
  return (
    <FormItemWrapper>
      <p>{label}</p>
      <Controller
        control={control}
        render={({ field, ref }) => (
          <CustomDatePicker
            {...field}
            ref={ref}
            options={options}
            placeholder={placeholder}
          />
        )}
        name={name}
      />
    </FormItemWrapper>
  );
}

function FormImage(props) {
  const { label, name, control, errors, size, isRequired } = props;
  return (
    <FormItemImgWrapper>
      <p>
        {label}
        {isRequired && (
          <span style={{ color: 'red', marginLeft: '3px' }}>*</span>
        )}
      </p>
      <Controller
        rules={{
          required: {
            value: true,
            message: 'Vui lòng tải ảnh lên',
          },
        }}
        control={control}
        render={({ field, ref }) => (
          <SingleImageUpload {...field} ref={ref} errors={errors} size={size} />
        )}
        name={name}
      />
    </FormItemImgWrapper>
  );
}

export default function GuiUpdatePopup(props) {
  const { showVisible, payload } = props;
  const checkRenderFirstTime = useRef(true);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: null,
      link: null,
      page: null,
      position: null,
      startDate: null,
      startTime: null,
      repeat: false,
      endDate: null,
      endTime: null,
      logoImage: null,
      storeImage: null,
      hompageImage: null,
      webImage: null,
      standbyImage: null,
      authImage: null,
      appImage: null,
    },
  });

  useEffect(() => {
    if (checkRenderFirstTime.current) {
      checkRenderFirstTime.current = false;
      return;
    }
    if (payload?.type === 'cancel') {
      const guiDataFromCancel = {
        name: payload?.data?.name,
        link: payload?.data?.link,
        page: payload?.data?.page,
        position: payload?.data?.position,
        startDate: payload?.data?.startDate,
        startTime: payload?.data?.endDate,
        repeat: payload?.data?.repeat,
        endDate: payload?.data?.endDate,
        endTime: payload?.data?.endTime,
        logoImage: payload?.data?.logoImage,
        storeImage: payload?.data?.storeImage,
        homepageImage: payload?.data?.homepageImage,
        standbyImage: payload?.data?.standbyImage,
        authImage: payload?.data?.authImage,
        appImage: payload?.data?.appImage,
      };
      reset(guiDataFromCancel);
    } else {
      const guiDataFromEdit = {
        name: payload?.data?.guiName,
        link: payload?.data?.guiPage,
        page: payload?.data?.guiPage,
        position: payload?.data?.bannerPosition,
        startDate: moment(
          payload?.data?.guiStartDate.split(' ')[0],
          'DD/MM/YYYY',
        ),
        startTime: moment(payload?.data?.guiStartDate.split(' ')[1], 'hh:mm'),
        endDate: moment(payload?.data?.guiEndDate.split(' ')[0], 'DD/MM/YYYY'),
        endTime: moment(payload?.data?.guiEndDate.split(' ')[1], 'hh:mm'),
        repeat: payload?.data?.guiRepeat,
        logoImage: [{ dataUrl: payload?.data?.guiImage }],
        storeImage: [{ dataUrl: payload?.data?.guiImage }],
        homepageImage: [{ dataUrl: payload?.data?.guiImage }],
        standbyImage: [{ dataUrl: payload?.data?.guiImage }],
        authImage: [{ dataUrl: payload?.data?.guiImage }],
        appImage: [{ dataUrl: payload?.data?.guiImage }],
      };
      reset(guiDataFromEdit);
    }
  }, [payload]);

  const handleSubmitCategoryUpdatePopup = (data) => {
    showVisible();
    EventRegister.emit(EVENT_SHOW_POPUP, {
      type: PopupName.SAVE_POPUP,
      open: true,
      payload: {
        data,
        message: 'Bạn có chắc chắn muốn lưu giao diện đã cập nhật không?',
        handleSave: () => {
          const callback = () => {
            dispatch({
              type: actionGeneral.FETCH_GENERAL,
            });
          };
          dispatch({
            type: actionGeneral.ADD_GENERAL,
            payload: { data, callback },
          });
        },
        handleCancel: () => {
          EventRegister.emit(EVENT_SHOW_POPUP, {
            type: PopupName.ADD_GENERAL,
            open: true,
            payload: {
              type: 'cancel',
              data,
            },
          });
        },
      },
    });
  };

  return (
    <div>
      <HeadCommonPopup
        onHandleRight={showVisible}
        content="Cập nhật giao diện"
      />
      <FormWrapper onSubmit={handleSubmit(handleSubmitCategoryUpdatePopup)}>
        <Grid container>
          <FormInput
            label="Tên giao diện"
            name="name"
            control={control}
            placeholder="Nhập tên giao diện"
            errors={errors}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextLabel> Thời gian bắt đầu áp dụng</TextLabel>
            <div className="d-flex rounded double-input">
              <FormDatePicker
                name="startDate"
                control={control}
                placeholder="dd/mm/yy"
                className="input-left"
              />
              <FormItemWrapper>
                <p></p>
                <Controller
                  control={control}
                  render={({ field, ref }) => (
                    <CustomTimepicker
                      {...field}
                      ref={ref}
                      placeholder="hh:mm"
                    />
                  )}
                  name="startTime"
                />
              </FormItemWrapper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextLabel> Thời gian kết thúc áp dụng</TextLabel>
            <div className="d-flex rounded double-input">
              <FormDatePicker
                name="endDate"
                control={control}
                placeholder="dd/mm/yy"
              />
              <FormItemWrapper>
                <p></p>
                <Controller
                  control={control}
                  render={({ field, ref }) => (
                    <CustomTimepicker
                      {...field}
                      ref={ref}
                      placeholder="hh:mm"
                    />
                  )}
                  name="endTime"
                />
              </FormItemWrapper>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <div
            className="d-flex align-items-center"
            style={{ marginLeft: '-10px' }}
          >
            <Controller
              control={control}
              render={({ field, ref }) => (
                <CustomCheckbox {...field} ref={ref} />
              )}
              name="repeat"
            />
            <span>Lặp lại qua các năm</span>
          </div>
        </Grid>

        <Grid container>
          <FormImage
            label="Logo (320 * 168)"
            isRequired
            name="logoImage"
            control={control}
            errors={errors}
            size={{ width: 320, height: 168 }}
          />
        </Grid>

        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <p
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              ẢNH WEB
            </p>
          </Grid>
          <Grid item xs={4}>
            <FormImage
              label="Ảnh đầu hệ thống của hàng "
              name="storeImage"
              control={control}
              errors={errors}
              size={{ width: 1920, height: 760 }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormImage
              label="Ảnh đầu trang chủ"
              name="homepageImage"
              control={control}
              errors={errors}
              size={{ width: 768, height: 304 }}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <p
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              ẢNH DI ĐỘNG
            </p>
          </Grid>
          <Grid item xs={4}>
            <FormImage
              label="Màn hình chờ (490 * 1040)"
              isRequired
              name="standbyImage"
              control={control}
              errors={errors}
              size={{ width: 1920, height: 760 }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormImage
              label="Ảnh đăng kí/đăng nhập (480 * 170)"
              isRequired
              name="authImage"
              control={control}
              errors={errors}
              size={{ width: 768, height: 304 }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormImage
              label="Ảnh đầu trang chủ (768 * 304)"
              name="appImage"
              control={control}
              errors={errors}
              size={{ width: 768, height: 304 }}
            />
          </Grid>
        </Grid>

        <FormButtonWrapper>
          <Button
            onClick={showVisible}
            className="bases__font--14 bases__height--34 border-green"
          >
            Đóng
          </Button>
          <Button
            type="submit"
            className="bases__font--14 bases__height--34 button-pos-default background-green"
          >
            Lưu
          </Button>
        </FormButtonWrapper>
      </FormWrapper>
    </div>
  );
}
