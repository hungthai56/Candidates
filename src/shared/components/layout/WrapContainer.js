import IcMenuHd from 'assets/images/icons/Ic-MenuHd';
import { useEffect } from 'react';
import useRouter from 'hooks/use-router';
import EventRegister, {
    EVENT_CHANGE_HEADER,
} from 'utils/EventRegister';
import ShareService from 'utils/ShareService';
import Empty from '../common/empty/empty';
import i18n from "i18nextInit"
import { menuPermission } from 'utils/Permission';
import useRouterV2 from 'hooks/use-router-v2';

function WrapContainer(props) {
    const router = useRouter();
    const routerV2 = useRouterV2();
    const { mainTitle = i18n.t('NHÂN SỰ') } = props;
    useEffect(() => {
        let ShareHeader = ShareService.SHARE_ELEMENT?.Header ?? Empty
        setTimeout(() => {
            EventRegister.emit(EVENT_CHANGE_HEADER, {
                Header: <ShareHeader
                    handleClickIconLeft={() => props.Header.handleClickIconLeft()}
                    title={props.Header?.title}
                    breadcrumb={props.Header?.breadcrumb}
                    menuLeft={props.Header.menuLeft}
                    menuList={menuPermission(-1, routerV2)}
                    mainTitle={mainTitle}
                />
            })
        }, 100);
    }, [router]);
    return props?.children;
}

WrapContainer.defaultProps = {
    Header: {
        title: 'Title',
        breadcrumb: [],
        icon: <IcMenuHd />,
        menuLeft: false,
        menuList: [],
    },
};
export default WrapContainer;
