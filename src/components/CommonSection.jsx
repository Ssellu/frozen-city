import React from "react";
import { useTranslation } from "react-i18next";
import Callout from "./Callout";
import { LaTexInline, LaTexBlock } from "./LaTexInlineBlock";

const CommonSection = ({ title, content, render }) => {
  const { t } = useTranslation();
  return (
    <section className="text-rise gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
      <h2 className="font-bold text-brandLightPurple">{title}</h2>
      <div
        className="mb-8 font-light md:text-lg text-gray-200"
        dangerouslySetInnerHTML={{ __html: t(content) }}
      />
      {render ? render() : ""}
    </section>
  );
};
export const Introduction = () => (
  <CommonSection
    title="Introduction"
    content="Introduction"
    render={() => <img src="/images/intro.png" alt="Intro" />}
  />
);

export const Overview = () => (
  <CommonSection title="Overview" content="Overview" />
);
export const Simulation = () => (
  <CommonSection
    title="Simulation"
    content="Simulation"
    render={() => (
      <>
        <Callout title={"What Is <abbr>CARLA</abbr>?"} content={"AboutCARLA"} />
        <div>
          <h3>Camera Intrinsic</h3>
          <LaTexBlock latexString="size_x = 1024, size_y = 512"></LaTexBlock>
          <LaTexBlock latexString="FoV = 120"></LaTexBlock>
          <LaTexBlock latexString="f = {size_X \over (2 \tan {FoV * \pi \over 360})}"></LaTexBlock>
          <LaTexBlock latexString="C_x = {size_x \over 2}"></LaTexBlock>
          <LaTexBlock latexString="C_y = {size_y \over 2}"></LaTexBlock>
          <h3>수집한 데이터</h3>
          <ul>
            <li>Labeled FPS 30 Stereo 시계열 이미지</li>
            <li>Labeled FPS 30 RGB-D 시계열 이미지</li>
            <li>Ground Truth Positions</li>
          </ul>
          <h3>수집환경</h3>
          <p>
            CARLA에서 기본 제공하는 <strong>Town10HD</strong>환경
          </p>
          <img src="../../images/simulation01.png"></img>
          <h3>수집된 데이터 예시</h3>
          <ul>
            <li>
              Stereo image, left & right (baseline: 1.0m), 1024 X 512
              <div class="image-block">
                <img src="../../images/simulation02.png" class="inline-image" />
                <img src="../../images/simulation03.png" class="inline-image" />
              </div>
            </li>
            <li>
              RGB-D images, 1024 X 512
              <img src="../../images/simulation04.png"></img>
            </li>
            <li>
              Semantic Segmentation image, 1024 X 512
              <img src="../../images/simulation05.png"></img>
            </li>
          </ul>
        </div>
      </>
    )}
  />
);
export const Segmentation = () => (
  <CommonSection
    title="Sementic Segmentation"
    content="Segmentation"
    render={() => (
      <>
        <h3>PP-LiteSeg-T1</h3>
        <p>
          <a
            href="https://paperswithcode.com/sota/real-time-semantic-segmentation-on-cityscapes"
            target="_blank"
          >
            SOTA{" "}
          </a>
          에 기재된 모델 중 다음과 같은 기준을 통해 모델을 선정하였습니다. :
        </p>
        <ul>
          <li>mIoU는 70% 이상이어야 한다.</li>
          <li>런타임 FPS는 30이상이어야 한다.</li>
          <li>상대적으로 Light한 모델이어야한다.</li>
          <li>정돈된 모듈화</li>
          <li>PR, Fork 등 커뮤니티가 활성화되어 있어야 한다.</li>
          <li>논문 상의 테스트 하드웨어가 지나치게 고성능이지 않아야 한다.</li>
        </ul>
        <p>
          위 기준을 바탕으로
          <a
            href="https://paperswithcode.com/sota/real-time-semantic-segmentation-on-cityscapes"
            target="_blank"
          >
            SOTA
          </a>
          에 기재된 모델 중{" "}
          <a href="https://github.com/PaddlePaddle/PaddleSeg" target="_blank">
            PeddleSeg
          </a>{" "}
          플랫폼 기반의{" "}
          <a href="https://arxiv.org/pdf/2204.02681v1.pdf" target="_blank">
            <strong>PP-LiteSeg-T1</strong>
          </a>{" "}
          모델을 선정하였습니다.
          <img src="../../images/segmentation01.png" />
        </p>
        <Callout
          title="PP-LiteSeg-T1(PaddleSeg)"
          content={
            "PaddleSeg란 PaddlePaddle R&D 딥러닝 플랫폼을 기반으로 한 Real Time Segmentation을 위해 고안된 오픈소스 알고리즘으로, 특히 기반이 되는 PaddlePaddle 프레임워크는 제조, 농업, 엔터프라이즈 서비스 등을 포함한 광범위한 부문에서 널리 채택되었으며 535만 이상의 개발자, 20만 개 이상의 회사에 서비스를 제공하고 67만 개의 모델을 생성합니다. PaddleSeg는 mIoU 72%, FPS 273.6으로 GPU는 1080Ti로 테스트를 진행한 모델이며 실시간 시맨틱 분할 작업을 위해 특히 Flexible and Lightweight Decoder(FLD)를 사용하여 기존 디코더의 계산 오버헤드를 줄였습니다. 또한 Feature 표현을 강화하기 위해 Unified Attention Fusion Module (UAFM)를 제안하였고 또한 Simple Pyramid Pooling Module(SPPM)을 사용한 global contextual prior 방식을 통해 기존 CNN이 가지고 있던 Contextual 문제점을 개선하였습니다.<img src='../../images/segmentation03.gif'/>"
          }
        />
        <h4>Training And Validation</h4>
        <p>학습은 두 가지 데이터 셋을 활용하여 각각 진행하였습니다.</p>
        <table>
          <thead>
            <th>Dataset</th>
            <th>Number of Batch</th>
            <th>Number of Iteration</th>
            <th>Number of Classes</th>
            <th>Training Specs</th>
          </thead>
          <tbody>
            <tr>
              <th>Cityscapes(Pretrained)</th>
              <td>4</td>
              <td>160000</td>
              <td>33</td>
              <td>1080Ti</td>
            </tr>
            <tr>
              <th>CARLA(Customized)</th>
              <td>4</td>
              <td>60000</td>
              <td>10</td>
              <td>Amazon EC2 P4 Instances</td>
            </tr>
          </tbody>
        </table>
        <h4>Inference Result</h4>
        <h5>Cityscapes(Pretrained), mIoU 85%</h5>
        <div class="image-block">
          <img src="../../images/segmentation04.png" class="inline-image" />
          <img src="../../images/segmentation05.png" class="inline-image" />
        </div>
        <h5>CARLA(Customized), mIoU 48%</h5>
        <div class="image-block">
          <img src="../../images/segmentation06.png" class="inline-image" />
          <img src="../../images/segmentation07.png" class="inline-image" />
        </div>
        <p>
          CARLA 데이터셋을 사용한 커스텀 학습 모델은 mIoU가 50%가 채 안되는 것을
          확인하였습니다. 그 이유는 CARLA Map에 사용된 자동차의 종류가 15종으로
          많지 않고, 나무나 건물의 모양새 또한 다양하지 않아 편향된
          Overfitting이 발생한 것으로 예상됩니다. 우리는 데이터셋의 양을 늘리는
          것과, Batch와 Iteration 수를 늘리는 것 등 재학습의 물리적 한계가 있어
          Cityscapes로 학습된 Pretrained 모델을 활용하기로 하였습니다. 다음은
          Pretrained 모델을 통해 추론된 Segment를 CARLA 이미지에 마스킹한
          결과입니다.
          <div class="image-block">
            <img src="../../images/segmentation08.png" class="inline-image" />
            <img src="../../images/segmentation09.png" class="inline-image" />
          </div>
        </p>
        <h3>커스텀 모델</h3>
        <p>
          구현 난이도 및 성능 고려하여{" "}
          <a href="https://paperswithcode.com/method/deeplabv3#:~:text=DeepLabv3%20is%20a%20semantic%20segmentation,by%20adopting%20multiple%20atrous%20rates.">
            deeplab v3+
          </a>{" "}
          model을 base로 채택하였습니다.
          <br />
          기존 deeplab v3의 encoder-decoder구조에 branch를 추가하였으며,
          <img src="../../images/segmentation10.png"></img>
          Backbone Network로{" "}
          <a href="https://arxiv.org/abs/1610.02357" target="_blank">
            Xception
          </a>{" "}
          네트워크를 선정하였습니다. Xception이{" "}
          <a href="https://arxiv.org/pdf/1512.03385.pdf" target="_blank">
            ResNet
          </a>
          과 비교하였을 때 더 좋은 속도 및 정확도를 확인할 수 있었습니다. 또한{" "}
          <a href="https://arxiv.org/pdf/1911.10194.pdf" target="_blank">
            Panoptic-deeplab
          </a>
          을 참고하여 branch 수를 2개로 증가하였습니다.
          <img src="../../images/segmentation11.png"></img>
          <div>
            <a
              href="https://file.notion.so/f/f/06dca0ce-f298-4cef-b4c1-05a0ce9ad7bb/badebd38-9567-405c-a0ec-2a2fadde26a8/model_shape.png?id=0a9633e7-79ce-4410-8a22-9bc421c15aba&table=block&spaceId=06dca0ce-f298-4cef-b4c1-05a0ce9ad7bb&expirationTimestamp=1694044800000&signature=X_7_5YUWtYwk5OSsujnvFys5MbShJzNj_dFK_NzBtSc&downloadName=model_shape.png"
              target="_blank"
            >
              완성된 모델
            </a>
            <a href="https://github.com/kongbuhaja/SM_SLAM" target="_blank">
              GitHub
            </a>
          </div>
        </p>
        <h4>Training And Validation</h4>
        <table>
          <thead>
            <th>Dataset</th>
            <th>Number of Batches</th>
            <th>Number of Epochs</th>
            <th>Number of Classes</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <th>Cityscapes</th>
              <td>4</td>
              <td>50</td>
              <td>34</td>
            </tr>
            <tr>
              <th>CARLA(Small)</th>
              <td>4</td>
              <td>30</td>
              <td>9</td>
            </tr>
            <tr>
              <th>CARLA(Large)</th>
              <td>2</td>
              <td>30</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
        <h4>Inference Result</h4>
        <div class="image-block">
          <img src="../../images/segmentation12.gif" class="inline-image" />
          <img src="../../images/segmentation13.gif" class="inline-image" />
        </div>
      </>
    )}
  />
);
export const VisualSLAM = () => (
  <CommonSection
    title="Visual SLAM"
    content=""
    render={() => (
      <>
        <p>
          Visual SLAM을 활용하는 Mapping 단계에서는 <strong>ORB-SLAM2</strong>를
          사용했으며, 전반적인 프로젝트의 성능 비교를 위하여 우리 프로젝트와
          비슷한 목적을 가진
          <strong>DynaSLAM</strong> 두 SLAM 아키텍처를 실험을 통해
          비교하였습니다.
          <br />
        </p>
        <Callout
          title="ORB-SLAM2"
          content="<abbr><a href='https://github.com/raulmur/ORB_SLAM2' target='_blank'>ORB-SLAM2</a></abbr> (Oriented FAST and Rotated BRIEF Simultaneous Localization And Mapping2)은 컴퓨터 비전 및 로보틱스 분야에서 널리 사용되는 SLAM 알고리즘 중 하나입니다. 이 알고리즘은 카메라를 통해 캡처한 이미지만을 사용하여 동시에 위치를 추정하고 지도를 구성합니다. ORB-SLAM은 특히 실시간 처리가 가능하며, 단일 카메라를 사용하는 모노큘러 구성부터 스테레오 카메라, RGB-D (Depth) 카메라까지 다양한 카메라 구성에 적용할 수 있습니다."
        />
        <Callout
          title="DynaSLAM"
          content="
          <abbr><a href='https://github.com/BertaBescos/DynaSLAM' target='_blank'>DynaSLAM</a></abbr>은 동적 환경에서 작동하는 
          SLAM 알고리즘의 한 종류입니다. <br />
        기존의 SLAM 알고리즘들은 대체로 정적인 환경에서 잘 작동하지만, 
        움직이는 객체나 변화하는 환경에는 취약합니다. <br />
        DynaSLAM은 이러한 동적 요소를 고려하여 특히 동적 환경에서도 견고한 성능을 보이는 것을 목표로 하며,
        동적 환경에서의 로봇 탐색, 자율 주행 자동차, 증강 현실과 같은 다양한 응용 분야에서 유용하게 사용될 수 있습니다. <br />
        
        주요 특징으로는 다음과 같습니다.
        <ul>
        <li>
        동적 객체 검출: DynaSLAM은 동적 객체를 실시간으로 검출하고 분류합니다. 
        이로써 이동 중인 자동차나 보행자와 같은 동적 객체로 인한 오차를 줄일 수 있습니다.
        </li>
        <li>
        Semantic Segmentation: 이미지 내의 각 픽셀이 어떤 클래스에 속하는지 분류함으로써, 
        동적 객체와 정적 배경을 구분합니다. 이 정보는 맵 구성 시 동적 객체를 제외하여 더 정확한 맵을 만듭니다.
        </li>
        <li>
        장면 복원: DynaSLAM은 정적 환경뿐만 아니라 동적 환경에서도 3D 맵을 구성할 수 있습니다. 
        이는 로보틱스, 가상 현실, 증강 현실에서 유용하게 사용될 수 있습니다.
        </li>
        <li>
        Multi-Sensor Support: 
        DynaSLAM은 다양한 센서 입력을 지원하며, 특히 딥 러닝을 통한 세맨틱 분류가 가능하다는 점에서 
        다른 SLAM 알고리즘들과 차별화됩니다.
        </li>
        <li>
        Re-localization and Loop Closing: DynaSLAM 역시 기존 SLAM 알고리즘들처럼 루프 클로징과 재위치 찾기 기능을 제공합니다. 
        하지만 이러한 기능들이 동적 환경에도 견고하게 작동한다는 점이 특징입니다.
        </li>
        </ul>
        "
        />

        <h3>Semantic Segmentation Masking</h3>
        <p>우리는 다음 순서에 따라 동적객체에 대한 마스킹을 진행하였습니다.</p>
        <ol className="numbered">
          <li>
            CARLA 시뮬레이터의 Stereo 카메라 혹은 Monocular 이미지를 로드합니다.
            <img src="../../images/vslam00.png"></img>
          </li>
          <li>
            Semantic Segmetation를 진행합니다.
            <img src="../../images/vslam01.png"></img>
          </li>
          <li>
            추론된 동적 객체(차량, 오토바이, 보행자 등)의 좌표를 로드합니다.{" "}
          </li>
          <li>원본 이미지를 흑백 이미지로 변경합니다.</li>
          <li>
            추론된 좌표를 흑백 이미지에 마스킹합니다.
            <img src="../../images/vslam02.png"></img>
          </li>
        </ol>

        <p>적용된 파라미터는 다음과 같습니다.</p>
        <table>
          <tr>
            <th>ORBextractor.nFeatures</th>
            <td>5000</td>
            <td>
              2000으로 설정한 경우(너무 적게 검출한 경우) 특징점이 검출되지
              않았습니다. 반대로 20000은 마스킹된 객체 테두리가 지나치게 많이
              검출되었습니다.
            </td>
          </tr>
          <tr>
            <th>ORBextractor.scaleFactor</th>
            <td>1.2</td>
          </tr>
          <tr>
            <th>ORBextractor.nLevels</th>
            <td>8</td>
          </tr>
          <tr>
            <th>ORBextractor.iniThFAST</th>
            <td>20</td>
            <td>
              특징점 검출 시 초기 임계값(높을수록 코너는 적게 검출됩니다.)
            </td>
          </tr>
          <tr>
            <th>ORBextractor.minThFAST</th>
            <td>7</td>
            <td>ORB 특징점의 최소 임계값</td>
          </tr>
        </table>
        <h3>ORB-SLAM2</h3>
        <p>
          ORB-SLAM의 mono slam 방법을 사용하여 원본 이미지를 사용 했을 때와,
          CARLA에서 제공하는 Semantic Segmentation을 사용하여 동적 객체를 마스킹
          했을 때를 비교하였습니다.
        </p>
        <ul>
          <li>
            원본 이미지
            <img src="../../images/vslam03.png"></img>
          </li>
          <li>
            마스킹 한 경우
            <img src="../../images/vslam04.png"></img>
          </li>
          <li>
            의도한 대로 차량등의 대부분의 동적객체는 feature가 추출되지
            않았습니다. 하지만, 나무의 경우 뾰족한 부분이 그대로 마스킹 되어
            나무 주변의 feature가 의도와 반하여 추출되는 것이 확인되었습니다.
            <br />
            결국 가로수는 마스킹 대상에서 제외하는 것으로 결정하였습니다. 단,
            이것이 가능했던 이유는 CARLA 시뮬레이션 환경에서는 나무가 거의
            움직이지 않았기때문입니다.
            <img src="../../images/vslam05.png"></img>
          </li>
          <h3></h3>ORB-SLAM2의 결과
          <p>
            시뮬레이션 내용에서 모든 직진 부분은 수직으로 설정 되었습니다.
            하지만, 파란 선이 빨간 선보다 조금 더 기울어져 있는 것을 볼 수
            있습니다. 이는 차량과 같은 동적 객체의 feature가 잘 제거 되어
            rotation error가 줄어 든 것으로 보입니다.
          </p>
          <img src="../../images/vslam06.png"></img>
        </ul>
        <h3>우리 프로젝트와 DynaSLAM 비교</h3>
        <figure>
          <figcaption>
            DynaSLAM은 매우 안정적으로 동적 객체는 Feature 추출이 안되는 것이
            확인됩니다.
          </figcaption>
          <img src="../../images/vslam07.png" />
        </figure>
        <figure>
          <figcaption>
            우리 프로젝트 또한 차량이 어느 정도 마스킹 되었으며, feature가
            정상적으로 추출되지 않았음이 확인되었습니다.
          </figcaption>
          <img src="../../images/conclusion02.gif" />
        </figure>
        <figure>
          <figcaption>
            <img src="../../images/conclusion01.png" />
          </figcaption>
        </figure>
      </>
    )}
  />
);
export const Conclusion = () => (
  <CommonSection title="Conclusion" content="Conclusion" />
);
