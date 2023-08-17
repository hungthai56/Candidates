import React from "react";
import WrapContainer from "shared/components/layout/WrapContainer";
import IcplusColor from "assets/images/icons/ic-plusColor";
import RecruitmentProposalDetail from "shared/containers/recuitment-proposal/RecruitmentProposalDetail";
import { useParams } from "react-router";
import RouterPath from "router/RouterPath";
export default function index() {
  let { id } = useParams();
  const breadcrumb = [
    {
      Name: "Danh sách đề xuất",
      Path: RouterPath.RECRUITMENTPRO,
    },
    {
      Name: "Chi tiết đề xuất tuyển dụng",
    },
  ];
  document.title = "Chi tiết đề xuất tuyển dụng";

  return (
    <WrapContainer
      Header={{
        icon: <IcplusColor />,
        title: "Đề xuất tuyển dụng",
        breadcrumb,
        menuLeft: false,
      }}
    >
      <RecruitmentProposalDetail ProposeId={id} />
    </WrapContainer>
  );
}
