import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './ChangeColumnTablePopup.module.scss';
import HeadCommonPopup from './../component/HeadCommonPopup';
import IconLine from './../../../icons/icon-line';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    background: isDragging ? 'white' : '',
    boxShadow: isDragging ? '0px 1px 4px rgba(0, 0, 0, 0.3)' : '',
    ...draggableStyle,
});

export default function ChangeColumnTablePopupReactTable(props) {
    const { payload, showVisible } = props;
    const [data, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const newData = payload?.allColumns?.map((column) => ({
            id: column.id,
            title: column.Header,
            isVisible: column.isVisible,
        }));
        setData(newData);
    }, [payload?.allColumns]);

    const onSubmitClose = () => {
        showVisible(false);
        handleCloseButton();
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            data,
            result.source.index,
            result.destination.index,
        );
        setData(items);
    };

    const getListStyle = (isDraggingOver) => ({
        background: isDraggingOver ? 'white' : '',
        padding: grid,
        width: '100%',
    });

    const handleCloseButton = () => {
        showVisible(false);
        let params = {};
        history.replace({
            search: params,
        });
    };

    const handleSaveButton = () => {
        showVisible(false);
        payload?.setColumnOrder(data.map((d) => d.id));
        payload?.setHiddenColumns(
            data.map((item) => {
                if (!item.isVisible) {
                    return item.id;
                }
            }),
        );
    };

    const handleDefaultButton = () => {
        const defaultColumns = [{}, ...payload?.defaultColumns];
        const newData = defaultColumns.map((column) => ({
            id: column.accessor,
            title: column.Header,
            isVisible: true,
        }));
        setData(newData);
    };

    const toggleCheckbox = (checkboxIndex) => {
        let newData = [...data];
        newData[checkboxIndex].isVisible = !data[checkboxIndex].isVisible;
        setData(newData);
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <HeadCommonPopup
                onHandleRight={showVisible}
                content="Điều chỉnh cột hiển thị"
            />
            <div className={styles.mainTitle}>
                <li>
                    <a>
                        Tích chọn mục bạn muốn hiển thị ra danh sách đơn hàng{' '}
                    </a>
                </li>
                <li>
                    <a>
                        Giữ chuột tại một mục và kéo thả để thay đổi thứ tự các
                        mục{' '}
                    </a>
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
                                {data?.map((item, index) => {
                                    if (index === 0) {
                                        return;
                                    }
                                    return (
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
                                                        provided.draggableProps
                                                            .style,
                                                    )}
                                                    className={`d-flex justify-content-between align-items-center flex-row ${styles.row}`}
                                                >
                                                    <Checkbox
                                                        color="success"
                                                        onChange={() =>
                                                            toggleCheckbox(
                                                                index,
                                                            )
                                                        }
                                                        checked={item.isVisible}
                                                    />

                                                    <p className="flex-1 w-100">
                                                        {item.title}
                                                    </p>
                                                    <span
                                                        className={styles.drop}
                                                    >
                                                        <IconLine />
                                                    </span>
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            <div
                className={`d-flex justify-content-end align-items-center mt-3 pb-4 ${styles.paginationPopup}`}
            >
                <Button
                    className="mr-2"
                    variant="outlined"
                    color="error"
                    onClick={onSubmitClose}
                    children="Thoát"
                />
                <Button
                    className="mr-2"
                    variant="outlined"
                    color="success"
                    onClick={handleDefaultButton}
                    children="Mặc định"
                />
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleSaveButton}
                    children="Lưu"
                />
            </div>
        </div>
    );
}
