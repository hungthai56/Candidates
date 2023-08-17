const prefix = '/rcm';
export default class RouterPath {
    static SHELL_HOME = '/';

    static HOME = `${prefix}`;

    static LOGIN = `${prefix}/login`;

    static LOGIN2 = '/login2';

    // static TEST = `${prefix}/test`;
    static RECRUITMENTPRO = `${prefix}/recruitment-proposal`;
    static ADD_NEW_PROPOSAL = `${prefix}/recruitment-proposal/create`;
    static RECRUITMENT_PROPOSAL_DETAIL = `${prefix}/recruitment-proposal/detail/:id`;
    static UPDATE_PROPOSAL = `${prefix}/recruitment-proposal/update/:id`;
    static CANDIDATES = `${prefix}/candidates-manager`;
    static ADD_NEW_CANDIDATES = `${prefix}/candidates-manager/create`;
    static CANDIDATE_DETAILS = `${prefix}/candidates-manager/detail/:id`;
    static UPDATE_CANDIDATES = `${prefix}/candidates-manager/update/:id`;

    // Recruitment
    

    static getRouteWithId(path, id) {
        return path.replace(':id', id);
    }

    static getRouteWithCustomerId(path, id1, id2) {
        return path.replace(':id1', id1).replace(':id2', id2);
    }

    static ROUTER = null;
    static LOCATION = null;

    static push (val) {
        this.ROUTER.push({
            pathname: val
        })
    }

    static LAYOUT = null;
}
