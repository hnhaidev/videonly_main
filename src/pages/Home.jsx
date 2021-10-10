import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RollingBanner from "../components/rollingbanner/RollingBanner";
import Tutorial from "../components/tutorial/Tutorial";
import LongBanner from "../components/LongBanner";
import Introduce from "../components/Introduce";
import Rectangle from "../components/Rectangle";
import Progress from "../components/Progress";

const Home = () => {
  const [header] = useState({
    mainBanner: "./assets/images/mainbanner@3x.png",
    logo: "./assets/images/videonly-logo@3x.png",
    heading: "비디온리는<br>오직 당신의 브랜드만를 위해<br>템플릿을 만듭니다",
    paragraph: "나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.",
  });

  const [listBanner] = useState([
    "/assets/images/rolling-banner-01@3x.png",
    "/assets/images/rolling-banner-02@3x.png",
    "/assets/images/rolling-banner-03@3x.png",
    "/assets/images/rolling-banner-04@3x.png",
    "/assets/images/rolling-banner-05@3x.png",
    "/assets/images/rolling-banner-06@3x.png",
  ]);

  const [listTutorial] = useState([
    {
      heading: "첫번째",
      paragraph: "내 브랜드에 맞는 영상 만들기",
      image: "./assets/images/thumbnail-01@3x.png",
      icon: "./assets/icons/arrow-icon@3x.png",
    },
    {
      heading: "두번째",
      paragraph: "작업자들이 소통하며 템플릿 영상 작업",
      image: "./assets/images/thumbnail-02@3x.png",
      icon: "./assets/icons/arrow-icon@3x.png",
    },
    {
      heading: "세번째",
      paragraph: "단 하나 뿐인 내 브랜드 영상 제작 완료",
      image: "./assets/images/thumbnail-03@3x.png",
      icon: "./assets/icons/arrow-icon@3x.png",
    },
  ]);

  const [longbanner] = useState({
    banner: "./assets/images/longbanner-01@3x.png",
    heading: "퀄리티있는 브랜딩, 비디온리 하세요",
    paragraph: "나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!",
  });

  const [introduce] = useState({
    image: "./assets/images/img-01@3x.png",
    title: "What is the videonly",
    heading: "비디온리는 무엇인가요?",
    paragraph:
      "세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나 뿐인 템플릿, 직접 경험해보세요.",
  });

  const [introduce2] = useState({
    image: "./assets/images/img-02@3x.png",
    title: "How do I make a video",
    heading: "영상제작은 어떻게하나요?",
    paragraph:
      "오직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울 것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록 컨설팅을 합니다. 세계에서 단 하나뿐인 템플릿, 어렵게 생각하지 마세요. 비디 온리와 함께라면 쉽고 간편하게 만들 수 있습니다.",
  });

  const [rectangle] = useState([
    {
      icon: "./assets/icons/icon-01@3x.png",
      title: "사용중인 기업",
      count: 41,
    },
    {
      icon: "./assets/icons/icon-02@3x.png",
      title: "완료한 템플릿",
      count: 164,
    },
    {
      icon: "./assets/icons/icon-03@3x.png",
      title: "체험가능한  템플릿",
      count: 82,
    },
  ]);

  const [longbanner2] = useState({
    banner: "./assets/images/longbanner-02@3x.png",
    heading: "팀원들과 함께 공유하며 작업하세요",
    paragraph:
      "작업량이 많을 때, 마감으로 정신없을 때<br>바쁠 때 주고받는 파일이 말썽이라면? 비디온리 하세요!",
  });

  const [progress] = useState({
    heading: "한 눈에 보는 템플릿 절차",
    paragraph:
      "비디온리가 아직 고민되시나요?<br>비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.",
    items: [
      {
        icon: "./assets/icons/big-icon-01@3x.png",
        title: "이미지 찾기",
        subTitle: "내 회사에 맞는 이미지를 찾아 정합니다.",
      },
      {
        icon: "./assets/icons/big-icon-02@3x.png",
        title: "만들기",
        subTitle: "정해둔 이미지에 맞춰 템플릿을 만듭니다.",
      },
      {
        icon: "./assets/icons/big-icon-03@3x.png",
        title: "정리하기",
        subTitle: "회사와 비디온리가 소통을 통해 퀄리티를 높입니다.",
      },
      {
        icon: "./assets/icons/big-icon-04@3x.png",
        title: "제작 완료",
        subTitle: "세상에 단 하나 뿐인 영상 제작 완료!",
      },
    ],
  });
  return (
    <>
      <Header header={header} />
      <RollingBanner listBanner={listBanner} />
      <Tutorial listTutorial={listTutorial} />
      <LongBanner longbanner={longbanner} />
      <Introduce introduce={introduce} reverse={true} />
      <Introduce introduce={introduce2} reverse={false} />
      <Rectangle rectangle={rectangle} />
      <LongBanner longbanner={longbanner2} isButton={true} />
      <Progress progress={progress} />
      <Footer />
    </>
  );
};

export default Home;
