import { Box } from '@findxdn/erp-theme';
import React from 'react';
import ButtonCommon from 'shared/components/common/button/ButtonCommon';
import CustomFormProvider from 'shared/components/common/custom-form/CustomFormProvider';
import FormItem from 'shared/components/common/form/FormItem';
import TextLabelCommon from 'shared/components/common/label/TextLabel';
import LoadingSkeleton from '../../LoadingSkeleton';

function PointSettingLoader(props) {
    return (
        <div>
            <Box className={''}>
                <LoadingSkeleton height={50} />
            </Box>
            <div className={''}>
                <Box>
                    <div className={''}>
                        <div className={''}>
                            <FormItem className={''}>
                                <div className="d-flex flex-row align-items-center pb-4">
                                    <LoadingSkeleton width={200} height={32} className='mr-3'/>
                                    {/* <span className={''}>
                                        =
                                    </span> */}
                                    <LoadingSkeleton width={200} height={32} className='ml-3'/>
                                </div>
                            </FormItem>
                            <FormItem className='mb-4'>
                                <div className="d-flex flex-row align-items-center">
                                    <LoadingSkeleton width={200} height={32} className='mr-3'/>
                                    {/* <span className={''}>
                                        =
                                    </span> */}
                                    <LoadingSkeleton width={200} height={32} className='ml-3'/>
                                </div>
                                {/* <span className='font-italic '>
                                    Nếu không cài đặt Tỉ lệ tiêu điểm, thì hệ
                                    thống sẽ lấy tỷ lệ tích điểm để tính
                                </span> */}
                            </FormItem>
                            <FormItem className='pb-4'>
                                {/* <TextLabelCommon>
                                    {
                                        'Một lần tiêu điểm tích lũy cần sử dụng tối thiểu '
                                    }
                                </TextLabelCommon> */}
                                <LoadingSkeleton width={200} height={32} />
                            </FormItem>
                            <FormItem className='pb-4'>
                                {/* <TextLabelCommon>
                                    {
                                        'Một lần tiêu điểm tích lũy chỉ được sử dụng tối đa'
                                    }
                                </TextLabelCommon> */}
                                <LoadingSkeleton width={200} height={32} />
                            </FormItem>
                            <FormItem className={''}>
                                {/* <TextLabelCommon>
                                    {
                                        'Tự động tiêu điểm tích lũy khi khách có từ'
                                    }
                                </TextLabelCommon> */}
                                <LoadingSkeleton width={200} height={32} />
                            </FormItem>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default PointSettingLoader;
