import { Redirect } from 'react-router';
import { AdminGuard } from './guards/AdminGuard';
import RouterPath from './RouterPath';
import MainLayout from 'shared/components/layout/MainLayout';
import AppConfig from 'utils/AppConfig';
import TestPage from 'pages/test/index'
import CandidatesManager from 'pages/candidate-manager/CandidatesManager'
import AddNewCandidate from 'pages/candidate-manager/AddNewCandidate'
import UpdateCandidate from 'pages/candidate-manager/UpdateCandidate'
import CandidateDetail from 'pages/candidate-manager/CandidateDetail'
import RecruitmentProposal from 'pages/recuitment-proposal/RecruitmentProposal'
import CreateRecruitmentProposal from 'pages/recuitment-proposal/AddNewRecuitmentProposal'
import UpdateRecruitmentProposal from 'pages/recuitment-proposal/UpdateRecuitmentProposal'
import RecruitmentProposalDetail from 'pages/recuitment-proposal/RecruitmentProposalDetail'

const Routes = [
    {
        layout: MainLayout,
        routes: [
            // {
            //     id: 'TEST',
            //     path: RouterPath.TEST,
            //     guards: [AdminGuard],
            //     component: <TestPage />,
            //     fallback: () => {
            //         AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
            //         return null;
            //     },
            // },
            {
                id: 'ADD_NEW_PROPOSAL',
                path: RouterPath.ADD_NEW_PROPOSAL,
                guards: [AdminGuard],
                component: <CreateRecruitmentProposal />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            {
                id: 'UPDATE_PROPOSAL',
                path: RouterPath.UPDATE_PROPOSAL,
                guards: [AdminGuard],
                component: <UpdateRecruitmentProposal />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            {
                id: 'RECRUITMENT_PROPOSAL_DETAIL',
                path: RouterPath.RECRUITMENT_PROPOSAL_DETAIL,
                guards: [AdminGuard],
                component: <RecruitmentProposalDetail />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            {
                id: 'RECRUITMENTPRO',
                path: RouterPath.RECRUITMENTPRO,
                guards: [AdminGuard],
                component: <RecruitmentProposal />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            {
                id: 'CANDIDATE_DETAILS',
                path: RouterPath.CANDIDATE_DETAILS,
                guards: [AdminGuard],
                component: <CandidateDetail />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            
            {
                id: 'ADD_NEW_CANDIDATES',
                path: RouterPath.ADD_NEW_CANDIDATES,
                guards: [AdminGuard],
                component: <AddNewCandidate />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            {
                id: 'UPDATE_CANDIDATES',
                path: RouterPath.UPDATE_CANDIDATES,
                guards: [AdminGuard],
                component: <UpdateCandidate />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            
            {
                id: 'CANDIDATES',
                path: RouterPath.CANDIDATES,
                guards: [AdminGuard],
                component: <CandidatesManager />,
                fallback: () => {
                    AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
                    return null;
                },
            },
            
            // {
            //     id: 'HOME_PAGE_PRODUCT_CREATE',
            //     path: RouterPath.HOME_PAGE_PRODUCT_CREATE,
            //     guards: [AdminGuard],
            //     component: <CreateProduct />,
            //     fallback: () => {
            //         AppConfig.SHARE_ROUTER.push({ pathname: RouterPath.LOGIN })
            //         return null;
            //     },
            // },
            
        ]
    }
];

export default Routes;
