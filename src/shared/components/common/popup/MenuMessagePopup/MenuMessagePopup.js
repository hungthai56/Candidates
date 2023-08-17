import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
// import faker from '@faker-js/faker';
import EventRegister, { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP2 } from 'utils/EventRegister';
import PopupName from '../PopupName';
import HeadCommonPopup from '../component/HeadCommonPopup';
import FormSelect from '../../custom-form/FormSelect';
import Validator from 'utils/Validator';
import FormInput from '../../custom-form/FormInput';
import CustomFormProvider from '../../custom-form/CustomFormProvider';
import LoadingButton from '../../button-loading/ButtonLoading';
import TextLabelCommon from '../../label/TextLabel';
import { useSelector } from 'react-redux';
import FormColor from '../../custom-form/FormColor';
import FormImage from '../../custom-form/FormImage';
import { random } from 'lodash';

const FormWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    minWidth: '770px',
});

const FormItemWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
});

const FormButtonWrapper = styled('div')({
    display: 'flex',
    gap: '15px',
    justifyContent: 'flex-end',
    marginTop: 20
});


function FormSelectCommon(props) {
    const { label, name, validate, placeholder, options, group = false, isPortal = false, menuPlacement = 'bottom' } = props;
    return (
        <FormItemWrapper>
            <TextLabelCommon require={validate?.length > 0 && true}>{label}</TextLabelCommon>
            <FormSelect
                fieldName={name}
                validate={[...validate]}
                placeholder={placeholder}
                options={options}
                group={group}
                menuPlacement={menuPlacement}
                isPortal={isPortal}
            />
        </FormItemWrapper>
    );
}



function FormImageCommon(props) {
    const { label, name, validate, size } = props;
    return (
        <FormItemWrapper>
            <TextLabelCommon require>{label}</TextLabelCommon>
            <FormImage
                fieldName={name}
                validate={[...validate]}
                size={size}
            />
        </FormItemWrapper>
    );
}

function FormInputColorPicker(props) {
    const { label, name } = props;
    return (
        <FormItemWrapper>
            <p>{label}</p>
            <div style={{ display: 'flex', gap: 15 }}>
                <FormColor
                    fieldName={name}
                    validate={[]}
                />
            </div>
        </FormItemWrapper>
    );
}


export default function MenuMessagePopup(props) {
    const { showVisible, payload } = props;
    const appendNewItem = payload?.appendNewItem;
    const updateItem = payload?.updateItem;
    const data = payload?.data;
    const {
        master, masterProduct
    } = useSelector(state => state.MenuProduct)

    const methods = useForm({
        defaultValues: {
            Name: null,
            Type: null,
            CategoryId: null,
            Tags: null,
            TagId: null,
            Link: null,
            Image: null,
            SizeId: null,
            ColorId: null,
            TextColor: null,
            BgColor: null,
            Status: 2,
        },
    });

    const menuTypeOptions = [
        { value: 1, label: 'Loại sản phẩm', key: 1 },
        { value: 2, label: 'Thẻ', key: 2 },
        { value: 3, label: 'Bộ sưu tập', key: 3 },
        { value: 4, label: 'Link', key: 4 },
        { value: 5, label: 'Hình ảnh', key: 5 },
    ];

    const [productOptions, setProductOptions] = useState([]);
    const [colorOptions, setColorOptions] = useState([]);
    const [size, setSize] = useState([]);
    const [collections, setCollections] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);
    const [level, setLevel] = useState(0);

    useEffect(() => {
        methods.setValue("Status", 2);
        methods.setValue("Type", 1);
    }, [])

    useEffect(() => {
        if (data) {
            methods.setValue("Name", data?.Name);
            methods.setValue("Type", data?.Type);
            methods.setValue("CategoryId", data?.CategoryId);
            methods.setValue("Tags", data?.Tags);
            methods.setValue("TagId", data?.TagId);
            methods.setValue("Link", data?.Link);
            methods.setValue("Image", data?.Image);
            methods.setValue("FileImage", [
                {
                    dataUrl: data?.Image
                },
            ]);
            methods.setValue("SizeId", data?.SizeId);
            methods.setValue("ColorId", data?.ColorId);
            methods.setValue("TextColor", data?.TextColor);
            methods.setValue("Status", data?.IsShow ? 2 : 1);
            methods.setValue("BgColor", data?.BgColor);
            methods.setValue("Id", data?.Id);
            setLevel(data?.Level)
        } else {
            methods.reset({
                Name: '',
                Type: null,
                CategoryId: null,
                Tags: null,
                TagId: null,
                Link: null,
                Image: null,
                SizeId: null,
                Color: null,
                TextColor: null,
                BgColor: null,
                Status: 2,
                Id: ''
            })
        }
        return () => {
            methods.reset({
                Name: '',
                Type: null,
                CategoryId: null,
                Tags: null,
                TagId: null,
                Link: null,
                Image: null,
                SizeId: null,
                Color: null,
                TextColor: null,
                BgColor: null,
                Status: 2,
                Id: ''
            })
        }

    }, [data])

    useEffect(() => {
        if (payload?.level && payload?.level == 1) {
            methods.setValue("Type", 0);
        }
    }, [payload?.level])

    useEffect(() => {
        return () => {
            methods.reset({
                Name: '',
                Type: null,
                CategoryId: null,
                Tags: null,
                TagId: null,
                Link: null,
                Image: null,
                SizeId: null,
                Color: null,
                TextColor: null,
                BgColor: null,
                Status: 2,
                Id: ''
            })
        }
    }, [])

    useEffect(() => {
        if (master) {
            setCollections(master?.Collections?.map(x => {
                return {
                    key: x?.Id,
                    value: x?.Id,
                    label: x?.Name,
                }
            }))
            setColorOptions(master?.Colors?.map(x => {
                return {
                    key: x?.Id,
                    value: x?.Id,
                    label: x?.Name,
                }
            }))
            setSize(master?.Sizes?.map(x => {
                return {
                    key: x?.Id,
                    value: x?.Id,
                    label: x?.Name,
                }
            }))
            setTagsOptions(master?.Tags?.map(x => {
                return {
                    key: x?.Id,
                    value: x?.Id,
                    label: x?.Name,
                }
            }))

            setStatusOptions([
                {
                    key: 1,
                    value: 1,
                    label: "Ẩn"
                },
                {
                    key: 2,
                    value: 2,
                    label: "Hiện"
                }
            ])

            let categoryData = [];
            master?.Categories?.forEach((cat) => {
                let object = {};
                object.label = cat?.Name;
                object.options = [];
                cat.ChildCategories?.map((child) => {
                    object.options.push({
                        key: child.Id,
                        label: child.Name,
                        value: child?.Id,
                    });
                });
                return categoryData.push(object);
            });
            let objectParent = {};
            objectParent.label = "Danh mục cha";
            objectParent.options = [];
            master?.Categories?.forEach((cat) => {

                return objectParent.options.push({
                    key: cat.Id,
                    label: cat.Name,
                    value: cat?.Id,
                });
            });
            categoryData.unshift(objectParent);

            setProductOptions(categoryData);
        }

        if (masterProduct) {

        }
    }, [master, masterProduct])

    if (payload?.LevelCreate < 2) {
        menuTypeOptions.pop();
    }

    useEffect(() => {
        // if (checkFirstRender.current) {
        //     checkFirstRender.current = false;
        //     return;
        // }
        // if (payload?.action === 'create') {
        // } else {
        //     methods.reset(data);
        // }
    }, [payload]);

    const handleSubmitBannerCreatePopup = (_data) => {
        if (!data?.Id) {
            const newMenuItem = {
                ..._data,
                Type: _data?.Type || 0,
                Id: payload?.ParentId < 0 ? payload?.ParentId - 1 : -1,
                IsShow: _data?.Status == 2 ? true : false
            };
            const message = "Bạn có chắc chắn thêm menu không ?";
            EventRegister.emit(EVENT_SHOW_POPUP2, {
                type: PopupName.SAVE_POPUP,
                open: true,
                payload: {
                    data: _data,
                    handleSave: () => {
                        appendNewItem(newMenuItem);

                        showVisible();
                    },
                    message,
                },
            });
        } else {
            const newMenuItem = { ...data, Id: _data.Id, ..._data, IsShow: _data?.Status == 2 ? true : false, Type: _data?.Type || 0, };
            const message = "Bạn có muốn chỉnh sửa không ?";
            EventRegister.emit(EVENT_SHOW_POPUP2, {
                type: PopupName.SAVE_POPUP,
                open: true,
                payload: {
                    handleSave: () => {
                        updateItem(newMenuItem);
                        showVisible();
                    },
                    handleCancel: () => {
                        // EventRegister.emit(EVENT_SHOW_POPUP2, {
                        //     type: PopupName.MENU_MESSAGE,
                        //     open: true,
                        //     payload: {
                        //         action: 'update',
                        //         data: newMenuItem,
                        //         updateItem,
                        //         level,
                        //     },
                        // });
                    },
                    message,
                },
            });
        }
    };

    const watchMenuType = methods.watch('Type');

    const renderMenuType = (menuType) => {
        switch (menuType) {
            case 1:
                return (
                    <Grid item xs={12}>
                        <FormSelectCommon
                            label="Loại sản phẩm"
                            name="CategoryId"
                            options={productOptions}
                            placeholder="Chọn sản phẩm"
                            validate={[Validator.required]}
                            group
                        />
                    </Grid>
                );
            case 2:
                return (
                    <Grid item xs={12}>
                        <FormSelectCommon
                            label="Thẻ"
                            name="Tags"
                            options={tagsOptions}
                            placeholder="Chọn thẻ"
                            validate={[Validator.required]}
                        />
                    </Grid>
                );
            case 3:
                return (
                    <Grid item xs={12}>
                        <FormItemWrapper>
                            <TextLabelCommon require>
                                Bộ sưu tập
                            </TextLabelCommon>
                            <FormSelect
                                fieldName={"TagId"}
                                validate={[Validator.required]}
                                placeholder={"Bộ sưu tập"}
                                options={collections}
                                group={false}
                                menuPlacement={"top"}
                                isPortal={false}
                            />
                        </FormItemWrapper>

                    </Grid>
                );
            case 4:
                return (
                    <Grid item xs={12}>
                        <FormItemWrapper>
                            <TextLabelCommon require>Đường dẫn liên kết</TextLabelCommon>
                            <FormInput
                                fieldName={"Link"}
                                validate={[Validator.required, Validator.url]}
                                placeholder={"Nhập đường dẫn liên kết"}
                            />
                        </FormItemWrapper>
                    </Grid>
                );
            case 5:
                return (
                    <>
                        <Grid item xs={12}>
                            <FormImageCommon
                                label="Hình ảnh"
                                name="FileImage"
                                size={{}}
                                // { width: 1920, height: 1920 }
                                validate={[Validator.required]}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormItemWrapper>
                                <TextLabelCommon require>Đường dẫn liên kết</TextLabelCommon>
                                <FormInput
                                    fieldName={"Link"}
                                    validate={[Validator.required, Validator.url]}
                                    placeholder={"Nhập đường dẫn liên kết"}
                                />
                            </FormItemWrapper>
                        </Grid></>
                );
        }
    };

    return (
        <div>
            <HeadCommonPopup
                onHandleRight={showVisible}
                content="Thông tin danh mục"
            />
            <FormWrapper>
                <CustomFormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(handleSubmitBannerCreatePopup)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormItemWrapper>
                                    <TextLabelCommon require>Tên hiển thị</TextLabelCommon>
                                    <FormInput
                                        fieldName={"Name"}
                                        validate={[Validator.required]}
                                        placeholder={"Nhập tên hiển thị"}
                                    />
                                </FormItemWrapper>
                            </Grid>

                            <Grid item xs={12}>
                                <FormItemWrapper>
                                    <TextLabelCommon>
                                        Loại menu
                                    </TextLabelCommon>
                                    <FormSelect
                                        fieldName="Type"
                                        options={menuTypeOptions}
                                        placeholder="Chọn loại menu"
                                        validate={[]}
                                    />
                                </FormItemWrapper>
                            </Grid>

                            {renderMenuType(watchMenuType)}

                            {(watchMenuType == 1 || watchMenuType == 2 || watchMenuType == 3) && (
                                <Grid item container xs={12} spacing={2}>
                                    <Grid item xs={6}>
                                        <FormSelectCommon
                                            label="Kích thước"
                                            name="SizeId"
                                            options={size}
                                            placeholder="Kích thước"
                                            validate={[]}
                                            menuPlacement="top"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormSelectCommon
                                            label="Màu sắc"
                                            name="ColorId"
                                            options={colorOptions}
                                            placeholder="Màu sắc"
                                            validate={[]}
                                            menuPlacement="top"
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            <Grid item container xs={12} spacing={2}>
                                <Grid item xs={6}>
                                    <FormInputColorPicker
                                        label="Màu chữ"
                                        name="TextColor"
                                        placeholder="Màu chữ"
                                        validate={[]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormInputColorPicker
                                        label="Màu nền"
                                        name="BgColor"
                                        placeholder="Màu nền"
                                        validate={[]}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <FormSelectCommon
                                    label="Trạng thái"
                                    name="Status"
                                    options={statusOptions}
                                    placeholder="Chọn trạng thái"
                                    validate={[]}
                                />
                            </Grid>
                        </Grid>

                        <FormButtonWrapper>
                            <LoadingButton
                                onClick={showVisible}
                                typeColor="background-gray"
                            >
                                Đóng
                            </LoadingButton>
                            <LoadingButton
                                type="submit"
                            >
                                Lưu
                            </LoadingButton>
                        </FormButtonWrapper>
                    </form>
                </CustomFormProvider>
            </FormWrapper>
        </div>
    );
}
