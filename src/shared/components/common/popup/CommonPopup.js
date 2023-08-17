import React, { useEffect, useState } from "react";
import DeleteConfirmPopup from "./NotiPopup/DeletePopup";
import EventRegister, {
  EVENT_SHOW_POPUP,
  EVENT_SHOW_POPUP2,
  EVENT_SHOW_POPUP_ACCEPT,
  EVENT_SHOW_POPUP_CANCEL_POST,
  EVENT_SHOW_POPUP_DELETE,
  FIRST_POPUP,
  POPUP_TEXT_TYPE,
  EVENT_SHOW_POPUP_COMMENT,
  EVENT_SHOW_POPUP_HISTORY_REPORT,
  EVENT_SHOW_POPUP_IMAGES_POST,
  EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER,
  NEWS_POPUP,
  RECRUITMENT_POPUP,
} from "utils/EventRegister";

import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { handleScroll } from "utils/Helper";
import $ from "jquery";
import PopupName from "./PopupName";
import TextPopup from "./TextPopup";
import CancelPostPopup from "./CancelPostPopup/CancelPostPopup";
import ChangeColumnTablePopup from "./ChangeColumnTablePopup/ChangeColumnTablePopup";

function CommonPopup(props) {
  const zIndex = props?._key == FIRST_POPUP ? 1050 : 1052;
  const [visible, showVisible] = useState(false);
  const [type, setType] = useState();
  const [payload, setPayload] = useState(null);
  useEffect(() => {
    const eventName =
      props?._key == FIRST_POPUP ? EVENT_SHOW_POPUP : EVENT_SHOW_POPUP2;
    const reloadEvent = EventRegister.on(eventName, (params) => {
      showVisible(false);
      setTimeout(() => {
        if (params) {
          setType(params.type);
          showVisible(params.open);
          setPayload(params?.payload);
        }
      }, 100);
    });
    return () => {
      EventRegister.off(reloadEvent);
    };
  }, []);

  useEffect(() => {
    // const _class = props?._key == FIRST_POPUP ? 'popup-open' : 'popup-open-layer2';
    // handleScroll(visible, _class);
    // if (visible) {
    //     document.body.style.overflow = 'hidden';
    // } else {
    //     document.body.style.overflow = 'scroll';
    // }
    // return () => {
    //     document.body.style.overflow = 'scroll';
    // };
  }, [visible]);

  const hiddenPopup = () => {
    showVisible(false);
    payload?.backdropCallback && payload.backdropCallback();
  };

  const getType = () => {
    switch (type) {
      case EVENT_SHOW_POPUP_CANCEL_POST:
        return <CancelPostPopup payload={payload} showVisible={hiddenPopup} />;
      case EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER:
        return (
          <ChangeColumnTablePopup payload={payload} showVisible={hiddenPopup} />
        );
      case PopupName.DELETE_POPUP:
        return (
          <DeleteConfirmPopup payload={payload} showVisible={hiddenPopup} />
        );
      default:
        return <TextPopup payload={payload} showVisible={hiddenPopup} />;
    }
  };
  return (
    // visible && (
    //     <div className={classes['CommonPopup']}>
    //         <div
    //             className={`wrap_common_popup ${visible ? 'show' : ''} ${payload?.data?.className ?? ''
    //             }`}
    //             id="commonPopup"
    //             onClick={hiddenPopup}
    //             style={{ zIndex: zIndex + 1 }}
    //         >
    //             <div className="popup-dialog">
    //                 <div
    //                     className="popup-content"
    //                     onClick={handleStopPropagation}
    //                 >
    //                     {getType() ?? <></>}
    //                 </div>
    //             </div>
    //         </div>
    //         <div
    //             style={{ zIndex }}
    //             className={`popup-backdrop fade ${visible ? 'show' : ''}`}
    //         />
    //     </div>
    // )
    <Dialog
      maxWidth={false}
      onClose={(payload?.isClickOutside ?? true) && hiddenPopup}
      open={visible}
    >
      <DialogContent dividers sx={{ padding: 0 }}>
        {getType() ?? <></>}
      </DialogContent>
    </Dialog>
  );
}

export default CommonPopup;
