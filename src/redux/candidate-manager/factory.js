import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';
import Constants from 'utils/Constants';
import Constant from 'utils/Constants'
const AppFactory = {
    dataMasterPropose: () =>
        ApiOperation.request({
            url: ApiConstants.GET_PROPOSAL_MASTER,
            method: 'GET',
        }),
    fetchCandidateList: (data) => {
        let param = {};
        if (data[Constants.QueryParam.Limit.VALUE]) {
            param['PageSize'] = data[Constants.QueryParam.Limit.VALUE];
        } else {
            param['PageSize'] = Constants.PRODUCT_LIST_PAGINATION.LIMIT;
        }

        if (
            data[Constants.QueryParam.Status.VALUE]
        ) {
            if (
                data[Constants.QueryParam.Status.VALUE] == 50
            ) {
                param['Type'] = 1;
            } else {
                param['Status'] = data[Constants.QueryParam.Status.VALUE];
            }
        }
        if (
            data[Constants.QueryParam.Status.VALUE]
        ) {
            param['Status'] = data[Constants.QueryParam.Status.VALUE];
        }
        if (
            data[Constants.QueryParam.RecruitmentId.VALUE]
        ) {
            param['RecruitmentId'] = data[Constants.QueryParam.RecruitmentId.VALUE];
        }
        if (
            data[Constants.QueryParam.Search.VALUE]
        ) {
            param['Search'] = data[Constants.QueryParam.Search.VALUE];
        }
        if (
            data[Constants.QueryParam.DateTo.VALUE]
        ) {
            param['DateOfApplication'] = data[Constants.QueryParam.DateTo.VALUE];
        }
        return ApiOperation.request({
            url: ApiConstants.GET_CANDIDATES,
            method: 'GET',
            params: param,
        })
    },
    createCandidate: (data) => {
        let FileImage = data?.FileImage;
        let FileCv = data?.FileCv.ListFile.acceptedFiles;
        let CandidateExperiences = data?.CandidateExperiences;
        let CandidateReferences = data?.CandidateReferences;
        const formData = new FormData();
        Object.keys(data).map(key => {
            if (typeof data[key] === 'object') {
            } else if (typeof data[key] === 'number') {
                formData.append(`${key}`, data[key] ? data[key] : 0)
            } else {
                formData.append(`${key}`, data[key] ? data[key] : "")
            }
        })

        if (CandidateExperiences?.length > 0) {
            CandidateExperiences?.map((x, index) => {
                formData.append(`CandidateExperiences[${index}].CompanyName`, x.CompanyName ? String(x.CompanyName) : "")
                formData.append(`CandidateExperiences[${index}].Position`, x.Position ? String(x.Position) : "")
                formData.append(`CandidateExperiences[${index}].TimeEnd`, x.TimeEnd ? String(x.TimeEnd) : "")
                formData.append(`CandidateExperiences[${index}].TimeStart`, x.TimeStart ? String(x.TimeStart) : "")
            })
        }
        if (CandidateReferences?.length > 0) {
            CandidateReferences?.map((x, index) => {
                formData.append(`CandidateEducations[${index}].Type`, x.Type ? Number(x.Type) : 0)
                formData.append(`CandidateEducations[${index}].Major`, x.Major ? String(x.Major) : "")
                formData.append(`CandidateEducations[${index}].ModeOfStudy`, x.ModeOfStudy ? String(x.ModeOfStudy) : "")
                formData.append(`CandidateEducations[${index}].School`, x.School ? Number(x.School) : 0)
            })
        }
        if (FileImage?.length > 0) {
            formData.append('FileImage', FileImage?.[0].file);
        }
        if (FileCv?.length > 0) {
            formData.append('FileCv', FileCv[0]);
        }

        return ApiOperation.request({
            url: `${ApiConstants.CREATE_CANDIDATE_MANAGER}`,
            method: 'POST',
            data: formData,
        })
    },
    changeStatusStatus: (data) => {
        return ApiOperation.request({
            url: ApiConstants.CHANGE_STATUS,
            method: 'POST',
            data,
        });
    },
    updateCandidate: (data) => {
        let FileImage = data?.FileImage;
        let FileCv = data?.FileCv.ListFile.acceptedFiles;
        let CandidateExperiences = data?.CandidateExperiences;
        let CandidateReferences = data?.CandidateReferences;
        const formData = new FormData();
        Object.keys(data).map(key => {
            if (typeof data[key] === 'object') {
            } else if (typeof data[key] === 'number') {
                formData.append(`${key}`, data[key] ? data[key] : 0)
            } else {
                formData.append(`${key}`, data[key] ? data[key] : "")
            }
        })

        if (CandidateExperiences?.length > 0) {
            CandidateExperiences?.map((x, index) => {
                formData.append(`CandidateExperiences[${index}].CompanyName`, x.CompanyName ? String(x.CompanyName) : "")
                formData.append(`CandidateExperiences[${index}].Position`, x.Position ? String(x.Position) : "")
                formData.append(`CandidateExperiences[${index}].TimeEnd`, x.TimeEnd ? String(x.TimeEnd) : "")
                formData.append(`CandidateExperiences[${index}].TimeStart`, x.TimeStart ? String(x.TimeStart) : "")
            })
        }
        if (CandidateReferences?.length > 0) {
            CandidateReferences?.map((x, index) => {
                formData.append(`CandidateEducations[${index}].Type`, x.Type ? Number(x.Type) : 0)
                formData.append(`CandidateEducations[${index}].Major`, x.Major ? String(x.Major) : "")
                formData.append(`CandidateEducations[${index}].ModeOfStudy`, x.ModeOfStudy ? String(x.ModeOfStudy) : "")
                formData.append(`CandidateEducations[${index}].School`, x.School ? x.School : 0)
            })
        }
        if (FileImage?.length > 0) {
            formData.append('FileImage', FileImage?.[0].file);
        }
        if (FileCv?.length > 0) {
            formData.append('FileCv', FileCv[0]);
        }

        return ApiOperation.request({
            url: `${ApiConstants.UPDATE_CANDIDATE_MANAGER}`,
            method: 'PUT',
            data: formData,
        })
    },
    requestCandidateDetail: (payload) => {
        return ApiOperation.request({
            url: `${ApiConstants.GET_CANDIDATE_DETAIL}/${payload}`,
            method: 'GET',
            data: payload,
        });
    },
    getRecruitment: (payload) => {
        return ApiOperation.request({
            url: `${ApiConstants.GET_RECRUITMENT}/${payload}`,
            method: 'GET',
            data: payload,
        });
    },
    requestCandidateMaster: (data) => {
        let param = {};
        if (data[Constants.QueryParam.Limit.VALUE]) {
            param['PageSize'] = data[Constant.QueryParam.Limit.VALUE];
        } else {
            param['PageSize'] = Constants.PRODUCT_LIST_PAGINATION.LIMIT;
        }
        return ApiOperation.request({
            url: ApiConstants.GET_CANDIDATE_MASTER,
            method: 'GET',
            data: param,
        })
    },
    deleteCandidate: (data) => {
        return ApiOperation.request({
            url: ApiConstants.DELETE_CANDIDATES,
            method: 'POST',
            data,
        });
    },
    fetchEmployees: (data) => {
        return ApiOperation.request({
            url: ApiConstants.GET_DATA_EMPLOYEES,
            method: 'GET',
            data,
        });
    },
};
export default AppFactory;
