/* eslint-disable no-script-url */
/**
 * ****************************************************************************
 * @description     :   Factory to create or call api to get data for all app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * Factory to create or call api to get data for all app
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
const Factory = {
  /**
   * Create data for menus on left-menu
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Array} - List data of menu on left-menu
   * @access : public
   */
  GetMenus: () => {
    let menus = [];
    try {
      menus = [
        {
          id: 1,
          type: 'menu',
          title: 'Analytics Dashboard',
          icon: 'ni-dashboard',
          to: '/dashboard',
          header: {
            showLeftHeader: true,
            dataTitle: {
              icon: 'ni-dashlite bg-purple-dim',
              subText: 'DashLite',
              leadText: 'Dashboard',
            },
          },
        },
        {
          id: 2,
          type: 'menu',
          title: 'Sales Dashboard',
          icon: 'ni-speed',
          to: '',
        },
        {
          id: 3,
          type: 'menu',
          title: 'Crypto Dashboard',
          icon: 'ni-bitcoin-cash',
          to: '',
        },
        {
          id: 4,
          type: 'menu',
          title: 'Invest Dashboard',
          icon: 'ni-invest',
          to: '',
        },
        {
          id: 5,
          type: 'hr',
        },
        {
          id: 6,
          type: 'menu',
          title: 'Mailbox',
          icon: 'ni-inbox',
          to: '',
        },
        {
          id: 7,
          type: 'menu',
          title: 'Messages',
          icon: 'ni-chat',
          to: '',
        },
        {
          id: 8,
          type: 'menu',
          title: 'File Manager',
          icon: 'ni-folder',
          to: '',
        },
        {
          id: 9,
          type: 'menu',
          title: 'Chats - Chat App',
          icon: 'ni-chat-circle',
          to: '/chat',
          header: {
            showLeftHeader: false,
            dataTitle: {
              icon: 'ni-chat-circle bg-info-dim',
              subText: 'Chat',
              leadText: 'NioChats',
            },
          },
        },
        {
          id: 10,
          type: 'hr',
        },
        {
          id: 11,
          type: 'menu',
          title: 'Go to Components',
          icon: 'ni-layers',
          to: '',
        },
      ];
    } catch (e) {
      console.log(`GetMenus: ${e.message}`);
    }
    return menus;
  },
  /**
   * Get menu of current page follow url of page
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @param  : {Array} menus - List menus on left -menu
   * @param  : {string} url - Url of curent pages
   * @returns: {Object} - Information of curent page
   * @access : public
   */
  GetMenu: (menus, url) => {
    let result = {};
    try {
      // Set default information
      result = {
        currentMenu: '/dashboard',
        showLeftHeader: true,
        dataTitle: {
          icon: 'ni-dashlite bg-purple-dim',
          subText: 'DashLite',
          leadText: 'Dashboard',
        },
      };
      let title = 'Analytics Dashboard';
      // Set information for page error
      if (url !== '/') {
        title = 'Error 404';
        result.currentMenu = '/404';
      }
      // Search data menu follow url
      menus.forEach((menu) => {
        if (menu.to && menu.to === url) {
          result.currentMenu = url;
          result.showLeftHeader = menu.header.showLeftHeader;
          result.dataTitle = menu.header.dataTitle;
          title = menu.title;
        }
      });
      // Change title
      document.title = `${title} | DashLite Admin Template`;
    } catch (e) {
      console.log(`GetMenu: ${e.message}`);
    }
    return result;
  },
  /**
   * Create data for chats dropdown on right-header
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Array} - List data of messages on right-header
   * @access : public
   */
  GetChats: () => {
    let messages = [];
    try {
      messages = [
        {
          id: 1,
          title: 'Iliash Hossain',
          content: 'You: Please confrim if you got my last messages.',
          time: 'Now',
          status: 1, // delivered
          onlineStatus: 0, // Online
          isGroup: false,
          color: 'bg-purple',
          letter: 'IH',
        },
        {
          id: 2,
          title: 'Abu Bin Ishtiyak',
          content: 'Hi, I am Ishtiyak, can you help me with this problem ?',
          time: '4:49 AM',
          status: 2, // Unread
          onlineStatus: 1,
          isGroup: false,
          // eslint-disable-next-line max-len
          // image: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-1/p100x100/95702636_1946886815442446_126079069916758016_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=vI76hz64Gp8AX8GjwwX&_nc_ht=scontent-hkg4-1.xx&tp=6&oh=abbb5967f419e3c13801bad1c4093e92&oe=5FC5CD5F'
          color: 'bg-pink',
          letter: 'AB',
        },
        {
          id: 3,
          title: 'George Philips',
          content: 'Have you seens the claim from Rose?',
          time: '6 Apr',
          status: 0, // Unread
          onlineStatus: -1,
          isGroup: false,
          image: './images/avatar/b-sm.jpg',
          // color: 'bg-pink',
          // letter: 'AB'
        },
        {
          id: 4,
          title: 'Softnio Group',
          content:
            'You: I just bought a new computer but i am having some problem',
          time: '27 Mar',
          status: 3, // 0, none, 1:delivered, 2 incomning, 3 sent
          onlineStatus: 1, // 0: offline, 1 online, 2 ???
          isGroup: true,
          images: [
            {
              id: 1,
              image: './images/avatar/c-sm.jpg',
            },
            {
              id: 2,
              color: 'bg-red',
              letter: 'AB',
            },
          ],
        },
        {
          id: 5,
          title: 'Larry Hughes',
          content: 'Hi Frank! How is you doing?',
          time: '3 Apr',
          status: 0, // Unread
          onlineStatus: 1,
          isGroup: false,
          image: './images/avatar/a-sm.jpg',
          // color: 'bg-pink',
          // letter: 'AB'
        },
        {
          id: 6,
          title: 'Tammy Wilson',
          content:
            'You: I just bought a new computer but i am having some problem',
          time: '27 Mar',
          status: 3, // 0, none, 1:delivered, 2 incomning
          onlineStatus: -1,
          isGroup: false,
          // image: './images/avatar/a-sm.jpg'
          color: 'bg-purple',
          letter: 'TW',
        },
      ];
    } catch (e) {
      console.log(`GetChats: ${e.message}`);
    }
    return messages;
  },
  /**
   * Create data for notify dropdown on right-header
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Array} - List data of messages on right-header
   * @access : public
   */
  GetNotify: () => {
    let notify = [];
    try {
      notify = [
        {
          id: 1,
          title: 'Iliash shared <span>Dashlite-v2</span> with you.',
          time: 'Just now',
          icon: 'ni-share',
          color: 'bg-primary-dim',
        },
        {
          id: 2,
          title:
            'Iliash <span>invited</span> you to edit <span>DashLite</span> folder',
          time: '2 hrs ago',
          icon: 'ni-edit',
          color: 'bg-info-dim',
        },
        {
          id: 3,
          title: 'You have shared <span>project v2</span> with Parvez.',
          time: '7 days ago',
          icon: 'ni-share',
          color: 'bg-primary-dim',
        },
        {
          id: 4,
          title: 'Your <span>Subscription</span> renew successfully.',
          time: '2 month ago',
          icon: 'ni-spark',
          color: 'bg-success-dim',
        },
      ];
    } catch (e) {
      console.log(`GetNotify: ${e.message}`);
    }
    return notify;
  },
  /**
   * Create data for sidebar menu on mobile
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Array} - List data of menus on sidebar
   * @access : public
   */
  GetSidebar: () => {
    let menus = [];
    try {
      menus = [
        {
          id: 1,
          type: 'header',
          title: 'Dashboards',
        },
        {
          id: 2,
          type: 'menu',
          title: 'Default Dashboard',
          icon: 'ni-dashboard',
          href: 'javascript:void(0);',
        },
        {
          id: 3,
          type: 'menu',
          title: 'Sales Dashboard',
          icon: 'ni-speed',
          href: 'javascript:void(0);',
        },
        {
          id: 4,
          type: 'menu',
          title: 'Crypto Dashboard',
          icon: 'ni-bitcoin-cash',
          href: 'javascript:void(0);',
        },
        {
          id: 5,
          type: 'menu',
          title: 'Invest Dashboard',
          icon: 'ni-coins',
          href: 'javascript:void(0);',
        },
        {
          id: 6,
          type: 'header',
          title: 'Pre-Built Pages',
        },
        {
          id: 7,
          type: 'menu',
          title: 'User Manage',
          icon: 'ni-users',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'User List - Regular',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'User List - Compact',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: 'User Details - Regular',
              href: 'javascript:void(0);',
            },
            {
              id: 4,
              title: 'User Profile - Regular',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 8,
          type: 'menu',
          title: 'AML / KYCs',
          icon: 'ni-file-docs',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'KYC List - Regular',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'KYC Details - Regular',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 9,
          type: 'menu',
          title: 'Transactions',
          icon: 'ni-tranx',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Tranx List - Basic',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Tranx List - Crypto',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 10,
          type: 'header',
          title: 'Misc Pages',
        },
        {
          id: 11,
          type: 'menu',
          title: 'Auth Pages',
          icon: 'ni-signin',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Login / Signin',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Register / Signup',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: 'Forgot Password',
              href: 'javascript:void(0);',
            },
            {
              id: 4,
              title: 'Success / Confirm',
              href: 'javascript:void(0);',
            },
            {
              id: 5,
              title: 'Classic Version - v2',
              href: 'javascript:void(0);',
              childMenu: [
                {
                  id: 1,
                  title: 'Login / Signin',
                  href: 'javascript:void(0);',
                },
                {
                  id: 2,
                  title: 'Register / Signup',
                  href: 'javascript:void(0);',
                },
                {
                  id: 3,
                  title: 'Forgot Password',
                  href: 'javascript:void(0);',
                },
                {
                  id: 4,
                  title: 'Success / Confirm',
                  href: 'javascript:void(0);',
                },
              ],
            },
            {
              id: 6,
              title: 'No Slider Version - v3',
              href: 'javascript:void(0);',
              childMenu: [
                {
                  id: 1,
                  title: 'Login / Signin',
                  href: 'javascript:void(0);',
                },
                {
                  id: 2,
                  title: 'Register / Signup',
                  href: 'javascript:void(0);',
                },
                {
                  id: 3,
                  title: 'Forgot Password',
                  href: 'javascript:void(0);',
                },
                {
                  id: 4,
                  title: 'Success / Confirm',
                  href: 'javascript:void(0);',
                },
              ],
            },
          ],
        },
        {
          id: 12,
          type: 'menu',
          title: 'Error Pages',
          icon: 'ni-files',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: '404 Classic',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: '504 Classic',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: '404 Modern',
              href: 'javascript:void(0);',
            },
            {
              id: 4,
              title: '504 Modern',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 13,
          type: 'menu',
          title: 'Other Pages',
          icon: 'ni-files',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Blank / Startup',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Faqs / Help',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: 'Terms / Policy',
              href: 'javascript:void(0);',
            },
            {
              id: 4,
              title: 'Regular Page - v1',
              href: 'javascript:void(0);',
            },
            {
              id: 5,
              title: 'Regular Page - v2',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 14,
          type: 'header',
          title: 'Components',
        },
        {
          id: 15,
          type: 'menu',
          title: 'Ui Elements',
          icon: 'ni-layers',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Alerts',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Accordions',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: 'Badges',
              href: 'javascript:void(0);',
            },
            {
              id: 4,
              title: 'Buttons',
              href: 'javascript:void(0);',
            },
            {
              id: 5,
              title: 'Button Group',
              href: 'javascript:void(0);',
            },
            {
              id: 6,
              title: 'Breadcrumb',
              href: 'javascript:void(0);',
            },
            {
              id: 7,
              title: 'Cards',
              href: 'javascript:void(0);',
            },
            {
              id: 8,
              title: 'Carousel',
              href: 'javascript:void(0);',
            },
            {
              id: 9,
              title: 'Modals',
              href: 'javascript:void(0);',
            },
            {
              id: 10,
              title: 'Pagination',
              href: 'javascript:void(0);',
            },
            {
              id: 11,
              title: 'Popovers',
              href: 'javascript:void(0);',
            },
            {
              id: 12,
              title: 'Progress',
              href: 'javascript:void(0);',
            },
            {
              id: 13,
              title: 'Spinner',
              href: 'javascript:void(0);',
            },
            {
              id: 14,
              title: 'Tabs',
              href: 'javascript:void(0);',
            },
            {
              id: 15,
              title: 'Toasts',
              href: 'javascript:void(0);',
            },
            {
              id: 16,
              title: 'Tooltip',
              href: 'javascript:void(0);',
            },
            {
              id: 17,
              title: 'Typography',
              href: 'javascript:void(0);',
            },
            {
              id: 18,
              title: 'Utilities',
              href: 'javascript:void(0);',
              childMenu: [
                {
                  id: 1,
                  title: 'Border',
                  href: 'javascript:void(0);',
                },
                {
                  id: 2,
                  title: 'Colors',
                  href: 'javascript:void(0);',
                },
                {
                  id: 3,
                  title: 'Display',
                  href: 'javascript:void(0);',
                },
                {
                  id: 4,
                  title: 'Embeded',
                  href: 'javascript:void(0);',
                },
                {
                  id: 5,
                  title: 'Flex',
                  href: 'javascript:void(0);',
                },
                {
                  id: 6,
                  title: 'Text',
                  href: 'javascript:void(0);',
                },
                {
                  id: 7,
                  title: 'Sizing',
                  href: 'javascript:void(0);',
                },
                {
                  id: 8,
                  title: 'Spacing',
                  href: 'javascript:void(0);',
                },
                {
                  id: 9,
                  title: 'Other',
                  href: 'javascript:void(0);',
                },
              ],
            },
          ],
        },
        {
          id: 16,
          type: 'menu',
          title: 'Crafted Icons',
          icon: 'ni-dot-box',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'SVG Icon - Exclusive',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Nioicon - HandCrafted',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 17,
          type: 'menu',
          title: 'Tables',
          icon: 'ni-table-view',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Basic Tables',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Special Tables',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: 'DataTables',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 18,
          type: 'menu',
          title: 'Forms',
          icon: 'ni-card-view',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Form Elements',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Form Layouts',
              href: 'javascript:void(0);',
            },
            {
              id: 3,
              title: 'Form Validation',
              href: 'javascript:void(0);',
            },
            {
              id: 4,
              title: 'Wizard Basic',
              href: 'javascript:void(0);',
            },
            {
              id: 5,
              title: 'Rich Editor',
              href: 'javascript:void(0);',
              childMenu: [
                {
                  id: 1,
                  title: 'Summernote',
                  href: 'javascript:void(0);',
                },
                {
                  id: 2,
                  title: 'Quill',
                  href: 'javascript:void(0);',
                },
                {
                  id: 3,
                  title: 'Tinymce',
                  href: 'javascript:void(0);',
                },
              ],
            },
          ],
        },
        {
          id: 19,
          type: 'menu',
          title: 'Charts',
          icon: 'ni-pie',
          href: 'javascript:void(0);',
          childMenu: [
            {
              id: 1,
              title: 'Chart JS',
              href: 'javascript:void(0);',
            },
            {
              id: 2,
              title: 'Knob JS',
              href: 'javascript:void(0);',
            },
          ],
        },
        {
          id: 20,
          type: 'menu',
          title: 'Toastr',
          icon: 'ni-alert-circle',
          href: 'javascript:void(0);',
        },
        {
          id: 21,
          type: 'menu',
          title: 'Sweet Alert',
          icon: 'ni-caution',
          href: 'javascript:void(0);',
        },
        {
          id: 22,
          type: 'menu',
          title: 'Email Template',
          icon: 'ni-text-rich',
          href: 'javascript:void(0);',
        },
      ];
    } catch (e) {
      console.log(`GetSidebar: ${e.message}`);
    }
    return menus;
  },
};

export default Factory;
