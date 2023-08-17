import React from "react";
import WrapContainer from "shared/components/layout/WrapContainer";
import IcplusColor from "assets/images/icons/ic-plusColor";
import AddNewRecruitmentProposal from "shared/containers/recuitment-proposal/AddNewRecuitmentProposal";
import RouterPath from "router/RouterPath";

export default function index() {
  const breadcrumb = [
    {
      Name: "Danh sách đề xuất",
      Path: RouterPath.RECRUITMENTPRO,
    },
    {
      Name: "Tạo mới đề xuất tuyển dụng",
    },
  ];
  document.title = "Tạo mới đề xuất tuyển dụng";

  return (
    <WrapContainer
      Header={{
        icon: <IcplusColor />,
        title: "Tuyển dụng",
        breadcrumb,
        menuLeft: false,
      }}
    >
      <AddNewRecruitmentProposal />
    </WrapContainer>
  );
}
