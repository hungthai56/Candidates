import { produce } from 'immer';
import actions from './action';
const initState = {
    isLoading: false,
    paging: {},
    Status: [],
    id: 0,
    Blocks: [],
    Branches: [],
    Type: [],
    Genders: [],
    listCandidate: [],
    SearchCondition: [],
    MaritalStatus: [],
    TakeRecruitmentInfoBy: [],
    WorkTypes: [],
    Positions: [],
    Recruiments: [],
    Recruitment: {},
    BranchesId: [],
    Employees: [],
    Collaborators: [],
    ModeOfStudy: [],
    NumberCandidate: [],
    ListCountCandidateStatus: [],
    CandidateDetail: [],
};
export default (stateRull = initState, { type, payload }) =>
    produce(stateRull, (draft) => {
        switch (type) {
            case actions.FETCH_PROPOSED_LOCATION:
                draft.isLoading = true;
                break;
            case actions.FETCH_PROPOSED_LOCATION_SUCCESS:
                draft.isLoading = false;
                draft.listProposal = payload.RecruitmentProposals;
                draft.paging = payload.Paging
                break;
            case actions.FETCH_PROPOSED_LOCATION_FAILURE:
                draft.isLoading = false;
                break;
            case actions.FETCH_CANDIDATES_LIST:
                draft.isLoading = true;
                break;
            case actions.FETCH_CANDIDATES_LIST_SUCCESS:
                draft.listCandidate = payload.Candidates;
                draft.SearchCondition = payload.SearchCondition;
                draft.paging = payload.Paging;
                draft.isLoading = false;
                break;
            case actions.FETCH_CANDIDATES_LIST_FAILURE:
                draft.isLoading = false;
                break;
            case actions.GET_CANDIDATE_DETAIL:
                draft.isLoading = true;
                break;
            case actions.GET_CANDIDATE_DETAIL_SUCCESS:
                draft.isLoading = false;
                draft.CandidateDetail = payload
                break;
            case actions.FETCH_CANDIDATES_MASTER:
                draft.isLoading = true;
                break;
            case actions.FETCH_CANDIDATES_MASTER_SUCCESS:
                draft.isLoading = false;
                draft.Genders = payload.Genders;
                draft.Blocks = payload.Blocks;
                draft.Status = payload.Status;
                draft.Branches = payload.Branches;
                draft.Type = payload.EducationLevel;
                draft.MaritalStatus = payload.MaritalStatus;
                draft.Positions = payload.Positions;
                draft.TakeRecruitmentInfoBy = payload.TakeRecruitmentInfoBy;
                draft.WorkTypes = payload.WorkTypes;
                draft.Recruiments = payload.Recruiments;
                draft.Collaborators = payload.Collaborators;
                draft.ModeOfStudy = payload.ModeOfStudy;
                draft.ListCountCandidateStatus = payload.ListCountCandidateStatus;
                break;
            case actions.CREATE_CANDIDATES:
                draft.isLoading = true;
                break;
            case actions.CREATE_CANDIDATES_SUCCESS:
                draft.isLoading = false;
                draft.id = payload.Data.Id;
                break;
            case actions.CREATE_CANDIDATES_FAILED:
                draft.isLoading = false;
                break;

            case actions.UPDATE_CANDIDATES:
                draft.isLoading = true;
                break;
            case actions.UPDATE_CANDIDATES_SUCCESS:
                draft.isLoading = false;
                draft.id = payload.Data.Id;
                break;
            case actions.UPDATE_CANDIDATES_FAILED:
                draft.isLoading = false;
                break;

            case actions.GET_RECRUITMENT_BY_ID:
                draft.isLoading = true;
                break;
            case actions.GET_RECRUITMENT_BY_ID_SUCCESS:
                draft.isLoading = false;
                draft.Recruitment = payload;
                draft.BranchesId = payload.Branches
                break;
            case actions.GET_RECRUITMENT_BY_ID_FAILED:
                draft.isLoading = false;
                break;

            case actions.FETCH_EMPLOYEES:
                draft.isLoading = true;
                break;
            case actions.FETCH_EMPLOYEES_SUCCESS:
                draft.Employees = payload.Employees
                break;
            case actions.FETCH_EMPLOYEES_FAILURE:
                draft.isLoading = false;
                break;

            case actions.CHANGE_STATUS_CANDIDATE:
                draft.isLoading = true;
                break;
            case actions.CHANGE_STATUS_CANDIDATE_SUCCESS:
                draft.isLoading = false;
                draft.statusId = payload.payload;
                break;
            case actions.CHANGE_STATUS_CANDIDATE_FAILED:
                draft.isLoading = false;
                break;
            case actions.DELETE_CANDIDATES:
                draft.isLoading = true;
                break;
            case actions.DELETE_CANDIDATES_SUCCESS:
                draft.isLoading = false;
                draft.statusId = payload.payload;
                break;
            case actions.DELETE_CANDIDATES_FAILED:
                draft.isLoading = false;
                break;
            default:
                return draft;
        }
    });
