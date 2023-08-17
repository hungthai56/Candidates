import React from "react";
import WrapContainer from "shared/components/layout/WrapContainer";
import IcplusColor from "assets/images/icons/ic-plusColor";
import AddNewRecruitmentProposal from "shared/containers/recuitment-proposal/AddNewRecuitmentProposal";
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
      Name: "Chỉnh sửa đề xuất tuyển dụng",
    },
  ];
  document.title = "Chỉnh sửa đề xuất tuyển dụng";

  return (
    <WrapContainer
      Header={{
        icon: <IcplusColor />,
        title: "Tuyển dụng",
        breadcrumb,
        menuLeft: false,
      }}
    >
      <AddNewRecruitmentProposal ProposeId={id} />
    </WrapContainer>
  );
}
