const POS_PREFIX = 'pos';
const STK_PREFIX = 'stk';
const HRM_PREFIX = 'hrm';
const PRD_PREFIX = 'prd';
const BASE_PREFIX = 'base';
const WA_PREFIX = 'wa';
const RCM_PREFIX = 'rcm';

const ApiConstants = {
    // AUTH
    LOGIN: `${BASE_PREFIX}/auth/login`,
    LOGOUT: `${BASE_PREFIX}/auth/login/logout`,
    REFRESH_TOKEN: `${BASE_PREFIX}/auth/login/refresh-token`,
    GET_USER: `${BASE_PREFIX}/auth/me`,

    // BANNER
    GET_BANNER: `${WA_PREFIX}/slider-managements`,
    CREATE_BANNER: `${WA_PREFIX}/slider-managements`,
    DELETE_BANNER: `${WA_PREFIX}/slider-managements`,
    UPDATE_BANNER: `${WA_PREFIX}/slider-managements`,
    GET_BANNER_MASTER: `${WA_PREFIX}/slider-managements/data/master`,
    
    // RECRUITMENT
    GET_RECRUITMENT_PROPOSAL: `${RCM_PREFIX}/recruitmentProposals`,
    DELETE_RECRUITMENT_PROPOSAL: `${RCM_PREFIX}/recruitmentProposals/delete`,
    CREATE_RECRUITMENT_PROPOSAL: `${RCM_PREFIX}/recruitmentProposals`,
    CHANGE_STATUS: `${RCM_PREFIX}/recruitmentProposals/update-status`,
    UPDATE_RECRUITMENT_PROPOSAL: `${RCM_PREFIX}/recruitmentProposals`,
    GET_PROPOSAL_DETAIL:  `${RCM_PREFIX}/recruitmentProposals`,
    GET_PROPOSAL_MASTER: `${RCM_PREFIX}/recruitmentProposals/master`,
    GET_CANDIDATES: `${RCM_PREFIX}/candidates`,
    DELETE_CANDIDATES: `${RCM_PREFIX}/candidates/delete`,
    CREATE_CANDIDATE_MANAGER: `${RCM_PREFIX}/candidates`,
    CHANGE_STATUS: `${RCM_PREFIX}/candidates/update-status`,
    UPDATE_CANDIDATE_MANAGER: `${RCM_PREFIX}/candidates`,
    GET_CANDIDATE_DETAIL:  `${RCM_PREFIX}/candidates`,
    GET_RECRUITMENT:  `${RCM_PREFIX}/candidates/recruitment`,
    GET_CANDIDATE_MASTER: `${RCM_PREFIX}/candidates/data/master`,
    GET_DATA_EMPLOYEES: `${RCM_PREFIX}/recruitments/emp/employees`,
    
};

export default ApiConstants;

export {
    POS_PREFIX,
    STK_PREFIX,
    HRM_PREFIX,
    PRD_PREFIX,
    BASE_PREFIX,
    WA_PREFIX,
    RCM_PREFIX,
};
