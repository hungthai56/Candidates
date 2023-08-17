import { Block } from "@mui/icons-material";
// const aroll = [].sort((a, b) => b.id - a.id)
// for (let i = 1; i < 50; i++) {
//     aroll.push({
//         key: i,
//         supplierCode: "NCC4555" + i.toString(),
//         nameSupplier: 'Kho buôn Hoài Lương' + i.toString(),
//         category: 'Ngành may mặc',
//         barcode: "322",
//         codeDebit: "111112021" + i.toString(),
//         phoneLink: "0358749335",
//         email: "kimthanh993@gmail.com",
//         address: "72 Núi Thành, Đà Nẵng",
//         status: 2,
//         wards: "Hoà Thuận Đông",
//         district: "Hải Châu",
//         city: "Đà Nẵng",
//         deleted: false,

//     })

// }

// const GET_DATA = aroll;
export default class Constants {
  static DEMO = 'demo';

  static STATUS_POST = {
    STATUS_APPROVE: 20,
    STATUS_WAIT_APPROVE: 10,
    STATUS_NOT_APPROVE: 30,
    STATUS_REPORT: 50,
    ALL: 0,
  };

  static TEXT_STATUS = {
    STATUS_APPROVE: {
      VALUE: 20,
      NAME: "Đã duyệt",
    },
    STATUS_WAIT_APPROVE: {
      VALUE: 10,
      NAME: "Chờ duyệt",
    },
    STATUS_NOT_APPROVE: {
      VALUE: 30,
      NAME: "Không duyệt",
    },
  };
  static TEXT_POST = {
    STATUS_APPROVE: {
      VALUE: 20,
      NAME: 'Đã duyệt'
    },
    STATUS_WAIT_APPROVE: {
      VALUE: 10,
      NAME: 'Chờ xét duyệt'
    },
    STATUS_NOT_APPROVE: {
      VALUE: 30,
      NAME: 'Không duyệt'
    },
    STATUS_REPORT: {
      VALUE: 50,
      NAME: 'Bị báo cáo'
    },
    ALL: {
      VALUE: 0,
      NAME: 'Tất cả'
    },
  };

  static TEXT_CANDIDATES = {
    STATUS_RECRUITMENT: {
      VALUE: 10,
      NAME: 'Ứng tuyển'
    },
    STATUS_PREQUALIFICATION: {
      VALUE: 20,
      NAME: 'Sơ tuyển'
    },
    STATUS_INTERVIEW: {
      VALUE: 30,
      NAME: 'Phỏng vấn'
    },
    STATUS_REFUSE: {
      VALUE: 60,
      NAME: 'Từ chối'
    },
    STATUS_ELECT: {
      VALUE: 40,
      NAME: 'Trúng tuyển'
    },
    STATUS_WAIT_JOB: {
      VALUE: 50,
      NAME: 'Chờ nhận việc'
    },
    ALL: {
      VALUE: 0,
      NAME: 'Tất cả'
    },
  };

  static TEXT_CANDIDATES_DETAIL = {
    STATUS_DETAIL: {
      VALUE: 10,
      NAME: 'Chi tiết'
    },
    STATUS_ATTACH: {
      VALUE: 20,
      NAME: 'Đính kèm'
    }
  };

  static TEXT_POST_TYPE = {
    STATUS_APPROVE: ' ĐÃ PHÊ DUYỆT',
    STATUS_WAIT_APPROVE: 'CHỜ XÉT DUYỆT',
    STATUS_NOT_APPROVE: ' KHÔNG ĐƯỢC PHÊ DUYỆT',
    STATUS_REPORT: ' BỊ BÁO CÁO',
    ALL: 'TẤT CẢ',
  };

  static TEXT_PROPOSE_TYPE = {
    STATUS_LOADING: 'Chờ duyệt',
    STATUS_ACCEPT: 'Đã duyệt',
    STATUS_BAN: 'Không duyệt'
  };

  static PRODUCT_LIST_PAGINATION = {
    LIMIT: 50,
    OFFSET: 0,
  };

  static ROUTER_URL = {
    PAGE: 'p',
    CUSTOMER_ID: 'cm',
    USERNAME: 'u',
    TYPE: 't',
    OFFSET: 'of',
    DATE: 'd',
    SEARCH_ALL: 's',
    TIME_FROM: 'tf',
    TIME_TO: 'tt',
    TAB: 'tab',
    TAB_CHILD: 'tab_c',
    TYPE_SEARCH: 'ts',
  };

  static STATUS_COMMENT = {
    STATUS_REPORT: '3',
    HIDDEN: '2',
    SHOW: '1',
    ALL: '0',
  };

  static TITLE_POPUP = {
    DELETE_POST: 'Bạn có chắc chắn muốn xoá bài viết này',
    APPROVE_NOT_POST: 'Lý do không duyệt bài viết',
    DELETE_COMMENT: 'Bạn có chắc chắn muốn xoá bình luận này',
    APPROVE_POST: 'Bạn có chắc chắn phê duyệt bài viết này',
  };

  static TEXT_COMMENT = {
    STATUS_HIDDEN_COMMENT: 'BỊ ẨN',
    // STATUS_SHOW_COMMENT: 'BÌNH LUẬN HIỆN',
    ALL: 'TẤT CẢ',
    STATUS_REPORT: 'BỊ BÁO CÁO',
  };

  static TYPE_RENDER_TABLE = {
    DATE: 'DATE',
    TEXT: 'TEXT',
    CHOOSE: 'CHOOSE',
    OPTION: 'OPTION',
  };

  static STATUS_POST_DETAIL = {
    COMMENT: '1',
    INFO: '0',
  };

  static TEXT_POST_DETAIL = {
    COMMENT: 'QUẢN LÝ BÌNH LUẬN',
    INFO: 'THÔNG TIN CHUNG',
  };

  static FILTER_NUMBER_POST = {
    COMMENT: 7,
    REACTION: 8,
    SHARE: 9,
    VIEW: 10,
    HIDDEN: 11,
  };

  static CONVERT_FILTER_NUMBER_POST = {
    NumberComment: 3,
    NumberReaction: 4,
    NumberShare: 5,
    NumberView: 6,
    NumberCommentHidden: 7,
  };

  static TYPE_COMMENT_FILTER = {
    COMMENT_REPORT: 1,
  };

  static TYPE_POST_FILTER = {
    TYPE_REPORT: 1,
  };

  static STATUS_REPORT_POST = {
    NEW: '10',
    RESOLVE: '20',
    OPEN: '30',
  };

  static URL_PARAMS = {
    page: 'CurrentPage',
    offset: 'PageSize',
    Search: 'Search',
    from_date: 'From',
    to_date: 'To',
    st: 'Status',
    code: 'Code',
    position: 'Position',
    show: 'Gender',
    t: 'Type',
    fs: 'CountFrom',
    ts: 'CountTo',
    surveyId: 'SurveyId',
    limit: 'Limit',
    Block: 'Block',
    branchid: 'Branchid'
  };

  static SIDEBAR_MENU = {
    HOME: {
      VALUE: 'MENU09001',
      NAME: '',
      PARENT: 'MENU09001'
    },
    BANNER: {
      VALUE: 'MENU09003',
      NAME: 'banner',
      PARENT: 'MENU09002'
    },
    MEGA_MENU: {
      VALUE: 'MENU09024',
      NAME: 'category-news',
      PARENT: 'MENU09002'
    },
    SOCIAL: {
      VALUE: 'MENU09020',
      NAME: 'social',
      PARENT: 'MENU09019'
    },
    SOCIAL_DETAIL: {
      VALUE: '',
      NAME: 'post-detail',
      PARENT: 'MENU09019'
    },
    GUI: {
      VALUE: 'MENU09004',
      NAME: 'gui',
      PARENT: 'MENU09002'
    },
    HOMEPAGE_PRODUCT: {
      VALUE: 'MENU09005',
      NAME: 'home-product',
      PARENT: 'MENU09002'
    },
    CATEGORY: {
      VALUE: 'MENU09006',
      NAME: 'category',
      PARENT: 'MENU09002'
    },
    ABOUT_US: {
      VALUE: 'MENU09007',
      NAME: 'about-us',
      PARENT: 'MENU09007'
    },
    TERMS_POLICIES: {
      VALUE: 'MENU09008',
      NAME: '',
      PARENT: 'MENU09008'
    },
    SHOPPING: {
      VALUE: 'MENU09014',
      NAME: 'shopping',
      PARENT: 'MENU09014'
    },
    GENERAL: {
      VALUE: 'MENU09015',
      NAME: 'general',
      PARENT: 'MENU09015'
    },
    OTHER_LINKS: {
      VALUE: 'MENU09016',
      NAME: 'other-links',
      PARENT: 'MENU09016'
    },
    SECURITY_QUESTIONS: {
      VALUE: 'MENU09017',
      NAME: 'security-questions',
      PARENT: 'MENU09017'
    },
    EMAIL: {
      VALUE: 'MENU09018',
      NAME: 'email',
      PARENT: 'MENU09018'
    },
    HOMEPAGE_NEWS: {
      VALUE: 'MENU09021',
      NAME: '',
      PARENT: 'MENU09002'
    },
    DETAIL_NEWS: {
      VALUE: 'MENU09021',
      NAME: 'homepage-news',
      PARENT: 'MENU09002'
    },
    UPDATE_NEWS: {
      VALUE: '',
      NAME: 'news',
      PARENT: 'MENU09021'
    },
    MEMBER_CUSTOMER: {
      VALUE: 'MENU09009',
      NAME: 'member-customer',
      PARENT: 'MENU09008'
    },
    TERMS_USE: {
      VALUE: 'MENU09010',
      NAME: 'terms-use',
      PARENT: 'MENU09008'
    },
    DELIVERY_POLICY: {
      VALUE: 'MENU09011',
      NAME: 'delivery-policy',
      PARENT: 'MENU09008'
    },
    WARRANTY_POLICY: {
      VALUE: 'MENU09012',
      NAME: 'warranty',
      PARENT: 'MENU09008'
    },
    NOTICE_POLICY: {
      VALUE: 'MENU09013',
      NAME: 'notices',
      PARENT: 'MENU09008'
    },
    HOMEPAGE_MENU: {
      VALUE: 'MENU09023',
      NAME: 'homepage-menu',
      PARENT: 'MENU09002'
    },
    HOMEPAGE_ADS: {
      VALUE: 'MENU09022',
      NAME: 'homepage-ads',
      PARENT: 'MENU09002'
    },
    CATEGORY_NEWS_CREATE_PAGE: {
      VALUE: 'MENU09024',
      NAME: 'category-news-create',
      PARENT: 'MENU09002'
    },
    CATEGORY_NEWS_UPDATE_PAGE: {
      VALUE: 'MENU09024',
      NAME: 'category-news-update',
      PARENT: 'MENU09002'
    },
    SURVEY_PAGE: {
      VALUE: 'MENU09025',
      NAME: 'survey',
      PARENT: 'MENU09002'
    },
    SEO_CATEGORY: {
      VALUE: 'MENU09025',
      NAME: 'homepage',
      PARENT: 'MENU09002'
    },
    SEO_CATEGORY_CREATE_PARENT: {
      VALUE: 'MENU09025',
      NAME: 'seo-category',
      PARENT: 'MENU09002'
    },
    UPDATE_SEO_CATEGORY: {
      VALUE: 'MENU09025',
      NAME: 'seo-category',
      PARENT: 'MENU09002'
    },
    RECRUITMENT: {
      VALUE: 'MENU09027',
      NAME: '',
      PARENT: 'MENU09027'
    },
    UPDATE_RECRUITMENT: {
      VALUE: '',
      NAME: 'recruitment',
      PARENT: 'MENU09027'
    },
    SEO_INFO: {
      VALUE: 'MENU09032',
      NAME: 'homepage',
      PARENT: 'MENU09002'
    },
  }
  static FormInputFormat = {
    MONEY: {
      VALUE: 'money',
    },
    TEXT: {
      VALUE: 'text',
    },
  };
  static QueryParam = {
    Page: {
      VALUE: 'page',
    },
    Limit: {
      VALUE: 'l',
    },
    Offset: {
      VALUE: 'offset',
    },
    CategoryName: {
      VALUE: 'cn',
    },
    ProductName: {
      VALUE: 'pn',
    },
    SKU: {
      VALUE: 'sku',
    },
    Status: {
      VALUE: 'st',
    },
    PriceFrom: {
      VALUE: 'pf',
    },
    PriceTo: {
      VALUE: 'pt',
    },
    Gender: {
      VALUE: 'g',
    },
    Category: {
      VALUE: 'c',
    },
    Color: {
      VALUE: 'c',
    },
    Size: {
      VALUE: 's',
    },
    Type: {
      VALUE: 't',
    },
    SearchTag: {
      VALUE: 'search',
    },
    type_Tab_Category: {
      VALUE: 'type',
    },
    CategoryParent: {
      VALUE: 'pr',
    },
    ColorName: {
      VALUE: 'colorname',
    },
    ColorCode: {
      VALUE: 'colorcode',
    },
    ListProduct: {
      VALUE: 'listProduct',
    },
    BranchId: {
      VALUE: 'branchid',
    },
    Brand: {
      VALUE: 'brand',
    },
    TimeApply: {
      VALUE: 'ta',
    },
    PurchaseName: {
      VALUE: 'pname',
    },
    VoucherType: {
      VALUE: 'vtype',
    },
    VoucherCode: {
      VALUE: 'vcode',
    },
    MSMH: {
      VALUE: 'msmh',
    },
    CustomerName: {
      VALUE: 'cname',
    },
    CustomerCode: {
      VALUE: 'customercode',
    },
    Phone: {
      VALUE: 'phone',
    },
    Duration: {
      VALUE: 'dr',
    },
    TypeAccumulatedPoint: {
      VALUE: 'tap',
    },
    NameProgram: {
      VALUE: 'np',
    },
    Apply: {
      VALUE: 'apply',
    },
    Priority: {
      VALUE: 'priority',
    },
    CreateByPerson: {
      VALUE: 'cby',
    },
    TimeFromPost: {
      VALUE: 'tfp',
    },
    TimeToPost: {
      VALUE: 'ttp',
    },
    ViewWatchPostFrom: {
      VALUE: 'vf',
    },
    ViewWatchPostTo: {
      VALUE: 'vt',
    },
    CodePromotion: {
      VALUE: 'cp',
    },
    TypePromotion: {
      VALUE: 'tp',
    },
    Content: {
      VALUE: 'content',
    },
    Test: {
      VALUE: 'test',
    },
    Note: {
      VALUE: 'note',
    },
    TimeGoldHourFrom: {
      VALUE: 'tgf',
    },
    TimeGoldHourTo: {
      VALUE: 'tgt',
    },
    PriceSaleFrom: {
      VALUE: 'psf',
    },
    PriceSaleTo: {
      VALUE: 'pst',
    },
    PriceBlockFrom: {
      VALUE: 'pbf',
    },
    PriceBlockTo: {
      VALUE: 'pbt',
    },
    QuantitySellFrom: {
      VALUE: 'qsf',
    },
    QuantitySellTo: {
      VALUE: 'qst',
    },
    QuantityOrderFrom: {
      VALUE: 'qò',
    },
    QuantityOrderTo: {
      VALUE: 'qot',
    },
    TimeSupperSaleFrom: {
      VALUE: 'ssf',
    },
    TimeSupperSaleTo: {
      VALUE: 'sst',
    },
    Check: {
      VALUE: 'check',
    },
    FromDate: {
      VALUE: 'fd',
    },
    ToDate: {
      VALUE: 'td',
    },
    DiscountName: {
      VALUE: 'dn',
    },
    ApplyForDiscount: {
      VALUE: 'af',
    },
    Classify: {
      VALUE: 'tdiscount',
    },
    GiftDate: {
      VALUE: 'gd'
    },
    IsPromotion: {
      VALUE: 'ipr'
    },
    QuantityVoucher: {
      VALUE: 'pv'
    },
    SpecialType: {
      VALUE: 'SpecialType'
    },
    Search: {
      VALUE: 'Search'
    },
    Positions: {
      VALUE: 'Position'
    },
    Code: {
      VALUE: "code"
    },
    FromSeen: {
      VALUE: 'fs'
    },
    ToSeen: {
      VALUE: 'ts'
    },
    From: {
      VALUE: 'from_date'
    },
    To: {
      VALUE: 'to_date'
    },
    ShowIn: {
      VALUE: 'show'
    },
    SurveyId: {
      VALUE: "SurveyId"
    },
    FromRate: {
      VALUE: "FromRate"
    },
    ToRate: {
      VALUE: "ToRate"
    },
    Question: {
      VALUE: "q"
    },
    Answer: {
      VALUE: "a"
    },
    Block: {
      VALUE: "Block"
    },
    WorkType: {
      VALUE: "WorkType"
    },
    DateTo: {
      VALUE: "DateTo"
    },
    RecruitmentId: {
      VALUE: "rec"
    }
  };
  static TABLE_SCREEN = {
    POST: {
      VALUE: 'SRC0900201'
    },
    BANNER: {
      VALUE: 'SRC0900401'
    },
    CANDIDATES: {
      VALUE: 'SRC0900501'
    },
  }
  static GENDER = {
    BOY: {
      VALUE: 5
    },
    GIRL: {
      VALUE: 6
    },
    CHILDREN: {
      VALUE: 99
    }
  }

  static BANNER_SHOW = {
    WEB: {
      VALUE: 1,
      TEXT: "Hiển thị trên Web"
    },
    APP: {
      VALUE: 2,
      TEXT: 'Hiển thị trên App'
    },
    ALL: {
      VALUE: 3,
      TEXT: 'Tất cả'
    }
  }

  // APPLY_FOR PAGE_STRUCTURES
  static T072 = {
    WEB: {
      VALUE: 2,
      TEXT: "Hiển thị trên Web"
    },
    APP: {
      VALUE: 1,
      TEXT: 'Hiển thị trên App'
    }
  }

  static CATEGORY_PANEL = {
    GENDER: {
      TEXT: 'Ngành hàng',
      VALUE: 0
    },
    CATEGORY: {
      TEXT: 'Nhóm hàng',
      VALUE: 1
    },
    CATEGORY_GENDER: {
      TEXT: 'Mã Nhóm / Ngành hàng',
      VALUE: 2
    }
  };

  // Product gender
  static G002 = {
    MALE: {
      NAME: "Nam",
      VALUE: '1'
    },
    FEMALE: {
      NAME: 'Nữ',
      VALUE: '2'
    },
    UNISEX: {
      NAME: 'Unisex',
      VALUE: '3'
    },
    COUPLE: {
      NAME: 'Đồ cặp',
      VALUE: '4'
    },
    BOY: {
      NAME: 'Bé trai',
      VALUE: '5'
    },
    GIRL: {
      NAME: 'Bé gái',
      VALUE: '6'
    },
  }

  static LEVEL_CATEGORY = {
    PARENT: {
      VALUE: 1
    },
    CHILDREN: {
      VALUE: 2
    }
  }

  static INPUT_STATUS = [{ value: 1, label: 'Hiển thị' }, { value: 2, label: 'Ẩn' }]
  static STATUS_HANDLE = [
    { value: 10, color: '#FF8246' },
    { value: 20, color: '#00A7CC' },
    { value: 30, color: '#7130FB' },
    { value: 40, color: '#008A5A' },
    { value: 50, color: '#0E49B5' },
    { value: 60, color: '#F85555' },
  ]
  static SEARCH_PROPOSAL = [{ value: 1, label: 'Trưởng phòng Design' }, { value: 2, label: 'Ban quản lý' }]
  static ISONBUSiIESSTRIP = [{ value: true, label: 'Có' }, { value: false, label: 'Không' }]

  static API_FAKE = {
    "TitleProposal": [
      { "label": "Người tạo", "field": "UserCreate", "id": "UserCreate", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Mã đề xuất", "field": "Code", "id": "Code", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Tên đề xuất", "field": "Title", "id": "Title", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Trạng thái", "field": "Status", "id": "Status", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Vị trí đề xuất", "field": "Position", "id": "Position", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Hình thức", "field": "WorkType", "id": "WorkType", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Hạn tuyển", "field": "DateTo", "id": "DateTo", "minWidth": 150, "align": "left", "isOnclick": true },
      { "label": "Số lượng", "field": "Quantity", "id": "Quantity", "minWidth": 150, "align": "left", "isOnclick": true },
    ]
  }
}

export const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};
export const getComparator = (order, orderBy) =>
  order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
export const stableSort = (array, comparator) => {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
};
