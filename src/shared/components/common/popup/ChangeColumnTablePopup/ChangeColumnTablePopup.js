import React, { useEffect, useState } from 'react'
import styles from './ChangeColumnTablePopup.module.scss'
import HeadCommonPopup from '../component/HeadCommonPopup'
import { useHistory } from 'react-router'
import { Button, Checkbox } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ButtonCommon from 'shared/components/common/button/ButtonCommon';
import { useDispatch, useSelector } from 'react-redux'
import actionTableConfig from 'redux/table-config/action'
import LoadingButton from '../../button-loading/ButtonLoading'
import IconLine from 'assets/icon/IconLine'

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    background: isDragging ? 'white' : '',
    boxShadow: isDragging ? '0px 1px 4px rgba(0, 0, 0, 0.3)' : '',
    ...draggableStyle,
})

export default function ChangeColumnTablePopup(props) {
    const { payload, showVisible, config } = props
    const history = useHistory()
    const [data, setData] = useState()
    const SettingTable = useSelector(state => state.TableConfig)
    useEffect(() => {
        let arr = SettingTable?.template?.find(x=>x?.Key == payload?.data?.type) ?? [];
        arr.HeadCell = arr?.HeadCell?.map(x=>{
            if(x?.isHidden == true){
                x['isHidden'] = true;
            }else{
                x['isHidden'] = false
            }
            if(x?.unEnabled == true){
                x['unEnabled'] = true;
            }else{
                x['unEnabled'] = false;
            }

            return x;
        })
        setData(arr.HeadCell)
    }, [SettingTable,payload?.data?.type])

    const dispatch = useDispatch();
    const onSubmitClose = () => {
        showVisible(false)
        handleClose()
    }

    const handleClose = () => {
        showVisible(false)
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return
        }
        const items = reorder(data, result.source.index, result.destination.index)
        setData(items)
    }

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'white' : '',
        padding: grid,
        width: '100%',
    })

    const onSubmitSave = () => {
        showVisible(false)
        // payload?.callback?.setDataHeader(data)
        if(payload?.data?.isRequest){
            dispatch({
                type: actionTableConfig.REQUEST_CHANGE_COLUMN_TABLE,
                payload: {
                    HeadCell: data,
                    Key: payload?.data?.type
                }
            })
        }else{
            dispatch({
                type: actionTableConfig.CHANGE_COLUMN_TABLE,
                payload: {
                    HeadCell: data,
                    Key: payload?.data?.type
                }
            })
        }
    }
    const onSubmitDefault = () => {
        // let dataNew = payload?.data?.dataDefault?.map((v) => {
        //     return {
        //         ...v,
        //         checked: true,
        //     }
        // })
        // payload?.callback?.setDataHeader(dataNew ?? []);
        // setData(dataNew ?? [])
        showVisible(false)
        if(payload?.data?.isRequest){
            dispatch({
                type: actionTableConfig.REQUEST_RESET_COLUMN_TABLE,
                payload:{
                    Key: payload?.data?.type
                }
            })
        }else{
            dispatch({
                type: actionTableConfig.RESET_COLUMN_TABLE,
                payload:{
                    Key: payload?.data?.type
                }
            })
        }
    }

    const handleChangeCheckBox = (e) => {
        let newData = [...data]
        let index = newData.findIndex(
            (v) => v["id"] == e["id"],
        )
        if (index != -1) {
            newData[index] = {
                ...newData[index],
                isHidden: !newData[index]?.isHidden,
            }
        }
        setData(newData)
    }

    return (
        <div style={{ backgroundColor: 'white' ,borderRadius: 10}}>
            <HeadCommonPopup
                onHandleRight={handleClose}
                content="Điều chỉnh cột hiển thị"
            />
            <div className={styles.mainTitle}>
                <li>
                    <a>Tích chọn mục bạn muốn hiển thị ra danh sách đơn hàng </a>
                </li>
                <li>
                    <a>Giữ chuột tại một mục và kéo thả để thay đổi thứ tự các mục </a>
                </li>
            </div>
            <div className={styles.mainPopup}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                className="w-100"
                            >
                                {data?.map((item, index) => (
                                    <Draggable
                                        className="w-100"
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style,
                                                )}
                                                className={`d-flex justify-content-between align-items-center flex-row ${styles.row}`}
                                            >
                                                <Checkbox
                                                    onClick={() => !item?.unEnabled && handleChangeCheckBox(item)}
                                                    color="success"
                                                    inputProps={{
                                                        'aria-labelledby': '',
                                                    }}
                                                    checked={!item?.isHidden ? true : false}
                                                    disabled={item?.unEnabled}
                                                />
                                                <p className="flex-1 w-100">
                                                    {item['label'] || item?.title}
                                                </p>
                                                <span className={styles.drop}>
                                                    <IconLine />
                                                </span>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            <div
                className={`d-flex justify-content-end align-items-center mt-3 pb-4 ${styles.paginationPopup}`}
            >
                <LoadingButton
                    className="mr-2"
                    variant="outlined"
                    typeColor="background-gray"
                    onClick={onSubmitClose}
                    children="Đóng"
                />
                <LoadingButton
                    className="mr-2"
                    variant="outlined"
                    typeColor="background-green"
                    onClick={onSubmitDefault}
                    children="Mặc định"
                    isOutlined
                />
                <LoadingButton
                    variant="contained"
                    typeColor="background-green"
                    onClick={onSubmitSave}
                    children="Lưu"
                />
            </div>
        </div>
    )
}
