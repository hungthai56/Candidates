
import Cookies from 'js-cookie';

export const GuestGuard = async () => {

    const token_header =  Cookies.get('user') && JSON.parse(Cookies.get('user'))?.Token || '';


    return !token_header;
};