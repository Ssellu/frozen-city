import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import translationEN from "./locales/en/translation.json";
// import translationKO from "./locales/ko/translation.json";

const resources = {
  en: {
    translation: {
      Introduction:
        "While Visual SLAM technologies perform well in static environments, they often struggle in dynamic settings where moving objects are present. Features extracted from these moving objects can interfere with the accurate calculation of the camera's trajectory, leading to cumulative errors that can compromise the SLAM system. In this project, we aim to mitigate this issue by using deep learning-based Semantic Segmentation to identify and remove dynamic objects. By applying these refined images to Visual SLAM, we seek to achieve a measurable improvement in performance.",
      Overview: `We have designed and implemented the following workflow:`,
      OverviewListItem01: `Utilize the 'CARLA' simulator, based on Unreal Engine, to obtain images for Semantic Segmentation and V-SLAM. The CARLA simulator allows for the adjustment of various environmental factors, including weather, and provides diverse vehicle models as dynamic objects, making it suitable for this project. We have generated Stereo, RGB-D, and Monocular time-series images from the CARLA simulator for use in Semantic Segmentation and V-SLAM.`,
      OverviewListItem02: `For Semantic Segmentation, we conduct training and performance evaluation using two models: the PaddleSeg model and a custom-built model that we have developed.`,
      OverviewListItem03: `Mask the inferred dynamic objects on the images.`,
      OverviewListItem04: `Extract features from the masked images.`,
      OverviewListItem05: `Apply VSLAM to the extracted features to construct a Map.`,
      OverviewListItem06: `Compare the mapping results in the ORB-SLAM2 V-SLAM framework between the original images and the masked images in both Mono, Stereo, and RGB-D modes.`,
      OverviewListItem07: `Summarize the insights gained and areas for improvement through our experiments. The use of images masked through Semantic Segmentation showed slight improvements when compared to SLAM techniques that do not consider dynamic objects, thereby validating the efficacy of our proposed method.`,

      Simulation: `To acquire images needed for Semantic Segmentation and V-SLAM, we opted for the CARLA simulator. The CARLA simulator provides fine-grained control over environmental conditions such as weather, road objects, and traffic flow. This makes it highly versatile, suitable not only for autonomous driving scenarios but also for meeting the diverse requirements of our project. In this project, we have used CARLA to extract Stereo, RGB-D, and Monocular images. These images serve as training, testing, and inference sets for Semantic Segmentation, as well as Ground Truth Maps for V-SLAM mapping.`,
      AboutCARLA: `<abbr><a href="https://carla.org/" target="_blank">CARLA</a></abbr>(Car Learning to Act) simulator is an open-source platform that provides a realistic environment for the development, training, and validation of autonomous driving systems. With high-fidelity graphics and physics, CARLA aims to provide a near-to-real-world scenario, making it easier to ensure the safety and performance of autonomous vehicles before they are deployed in real life. It supports various weather conditions, different types of roads, and includes a variety of sensors to assist in data collection. Moreover, CARLA is compatible with ROS (Robot Operating System) and can be integrated with machine learning libraries, offering a comprehensive ecosystem for researchers and developers in the field of autonomous driving.`,

      Simulation2Title: `Data Collection`,
      Simulation2ContentListItem1: `Labeled FPS 30 Stereo Time-Series Image`,
      Simulation2ContentListItem2: `Labeled FPS 30 RGB-D Time-Series Image`,
      Simulation2ContentListItem3: `Ground Truth Positions`,

      Simulation3Title: `Data Collection Environment`,
      Simulation3Content: `The default environment provided by CARLA: <strong>Town10HD</strong>.`,

      Simulation4Title: `Examples of Collected Data`,
      Simulation4Content: ``,

      Simulation5Title: ``,
      Simulation5Content: ``,

      Segmentation: `The following criteria were used to select the 
      <a href="https://github.com/PaddlePaddle/PaddleSeg" target="_blank">
        PeddleSeg
      </a> 
      platform-based 
      <a href="https://arxiv.org/pdf/2204.02681v1.pdf" target="_blank">
        <strong>PP-LiteSeg-T1</strong>
      </a> 
      model. <br />
      The criteria for model selection are as follows:`,
      SegmentationCriteria01: `<a href="https://paperswithcode.com/sota/real-time-semantic-segmentation-on-cityscapes" target="_blank">SOTA</a> model is required.
      <img src="../../images/segmentation01.png" />`,
      SegmentationCriteria02: `mIoU must be over 70%.`,
      SegmentationCriteria03: `Runtime FPS must be over 30.`,
      SegmentationCriteria04: `It should be a relatively light model.`,
      SegmentationCriteria05: `Well-organized modularization.`,
      SegmentationCriteria06: `The community, such as PR, Fork, should be active.`,
      SegmentationCriteria07: `The test hardware in the paper should not be overly high-performance.`,

      PaddleSeg: `PaddleSeg is an open-source algorithm designed for Real Time Segmentation based on the PaddlePaddle R&D deep learning platform. The underlying PaddlePaddle framework is widely adopted across a broad spectrum of sectors, including manufacturing, agriculture, and enterprise services. It serves over 5.35 million developers and more than 200,000 companies, producing 670,000 models. PaddleSeg boasts an mIoU of 72% and an FPS of 273.6, having been tested on a GPU model 1080Ti. It notably employs the Flexible and Lightweight Decoder (FLD) to reduce the computational overhead of traditional decoders for real-time semantic segmentation tasks. Additionally, it introduces the Unified Attention Fusion Module (UAFM) to bolster feature representation and addresses the contextual limitations inherent in traditional CNNs by using the Simple Pyramid Pooling Module (SPPM) for a global contextual prior approach.
      <img src='../../images/segmentation03.gif'/>
      `,

      TrainingAndValidationTableInfo: `Training was conducted using two different datasets.`,
      TrainingAndValidationTableHeader01: `Dataset`,
      TrainingAndValidationTableHeader02: `N of Batch`,
      TrainingAndValidationTableHeader03: `N of Iteration`,
      TrainingAndValidationTableHeader04: `N of Classes`,
      TrainingAndValidationTableHeader05: `Training Specs`,

      InferenceResultConclusion: `The custom-trained model using the CARLA dataset was found to have an mIoU of less than 50%. The reason is believed to be the limited variety of cars in the CARLA Map, with only 15 types, and the lack of diversity in the shapes of trees and buildings, leading to biased overfitting. Due to physical constraints on retraining, such as increasing the amount of data and the number of batches and iterations, we decided to use a pretrained model trained on Cityscapes. Below are the results of masking the CARLA image with the segment inferred through the pretrained model.`,

      CustomSementicSegmentation: `Considering implementation difficulty and performance, we adopted the 
      <a href="https://paperswithcode.com/method/deeplabv3#:~:text=DeepLabv3%20is%20a%20semantic%20segmentation,by%20adopting%20multiple%20atrous%20rates.">
        deeplab v3+
      </a> 
      model as our base.
      <br />
      We added a branch to the existing encoder-decoder structure of deeplab v3.
      <img src="../../images/segmentation10.png"></img>
      For the Backbone Network, we selected 
      <a href="https://arxiv.org/abs/1610.02357" target="_blank">Xception</a>. 
      Compared to 
      <a href="https://arxiv.org/pdf/1512.03385.pdf" target="_blank">ResNet</a>, 
      Xception demonstrated better speed and accuracy. Moreover, referencing 
      <a href="https://arxiv.org/pdf/1911.10194.pdf" target="_blank">Panoptic-deeplab</a>, 
      we increased the number of branches to two.
      <img src="../../images/segmentation11.png"></img>
      <div>
        <a href="https://github.com/kongbuhaja/SM_SLAM" target="_blank">
          GitHub
        </a>
      </div>
      `,

      CustomizedTrainingAndValidationTableHeader01: `Dataset`,
      CustomizedTrainingAndValidationTableHeader02: `N of Batches`,
      CustomizedTrainingAndValidationTableHeader03: `N of Iterations`,
      CustomizedTrainingAndValidationTableHeader04: `N of Classes`,

      VisualSLAM: `<p>During the Mapping phase utilizing Visual SLAM, we used <strong>ORB-SLAM2</strong>. For an overall performance comparison of the project, we experimented and compared our project with another SLAM architecture with a similar purpose, <strong>DynaSLAM</strong>.
      <br /></p>
      `,

      ORB_SLAM2: `<abbr><a href='https://github.com/raulmur/ORB_SLAM2' target='_blank'>ORB-SLAM2</a></abbr> (Oriented FAST and Rotated BRIEF Simultaneous Localization And Mapping2) is one of the widely-used SLAM algorithms in the fields of computer vision and robotics. This algorithm estimates position and constructs a map simultaneously using only images captured by a camera. ORB-SLAM is particularly capable of real-time processing and can be applied to various camera configurations, from monocular setups using a single camera to stereo cameras and RGB-D (Depth) cameras.
      `,

      DynaSLAM: `<abbr><a href='https://github.com/BertaBescos/DynaSLAM' target='_blank'>DynaSLAM</a></abbr> is a type of SLAM algorithm designed to operate in dynamic environments. <br />
      While traditional SLAM algorithms generally work well in static environments, they are vulnerable to moving objects and changing surroundings. <br />
      DynaSLAM aims to provide robust performance especially in dynamic environments, and can be beneficially employed in a variety of application areas such as robot navigation in dynamic settings, autonomous vehicles, and augmented reality. <br />
      
      The main features are as follows:
      <ul>
      <li>
      Dynamic Object Detection: DynaSLAM detects and classifies dynamic objects in real-time. This reduces errors caused by moving objects like cars and pedestrians.
      </li>
      <li>
      Semantic Segmentation: By classifying which class each pixel in an image belongs to, DynaSLAM distinguishes between dynamic objects and static backgrounds. This information is used to exclude dynamic objects when constructing a map, resulting in a more accurate map.
      </li>
      <li>
      Scene Reconstruction: DynaSLAM can construct a 3D map not only in static but also in dynamic environments. This can be very useful in robotics, virtual reality, and augmented reality.
      </li>
      <li>
      Multi-Sensor Support: DynaSLAM supports various sensor inputs and differentiates itself from other SLAM algorithms by allowing semantic classification through deep learning.
      </li>
      <li>
      Re-localization and Loop Closing: DynaSLAM, like traditional SLAM algorithms, offers loop closing and re-localization features. However, a distinctive feature is that these functions operate robustly even in dynamic environments.
      </li>
      </ul>
      `,

      SemanticSegmentationMaskingInfo: `We proceeded with the masking of dynamic objects in the following order:`,
      SemanticSegmentationMasking01: `Load the Stereo camera or Monocular images from the CARLA simulator.`,
      SemanticSegmentationMasking02: `Perform Semantic Segmentation.`,
      SemanticSegmentationMasking03: `Load the coordinates of the inferred dynamic objects (vehicles, motorcycles, pedestrians, etc.).`,
      SemanticSegmentationMasking04: `Convert the original image to a black and white image.`,
      SemanticSegmentationMasking05: `Mask the inferred coordinates on the black and white image.`,

      ParametersInfo: `The applied ORBextractor parameters for the model are as follows:`,

      ParametersHeader01Info1: `Parameter`,
      ParametersHeader01Info2: `Value`,
      ParametersHeader01Info3: `Information`,

      ParametersHeader01: `nFeatures`,
      ParametersHeader01Col1: `5000`,
      ParametersHeader01Col2: `When set to 2000 (if set too low), no feature points were detected. Conversely, 20000 resulted in excessive detection around the masked object edges.`,

      ParametersHeader02: `scaleFactor`,
      ParametersHeader02Col1: `1.2`,
      ParametersHeader02Col2: ``,

      ParametersHeader03: `nLevels`,
      ParametersHeader03Col1: `8`,
      ParametersHeader03Col2: ``,

      ParametersHeader04: `iniThFAST`,
      ParametersHeader04Col1: `20`,
      ParametersHeader04Col2: `Initial threshold for feature point detection (the higher, the fewer corners are detected).`,

      ParametersHeader05: `minThFAST`,
      ParametersHeader05Col1: `7`,
      ParametersHeader05Col2: `Minimum threshold for ORB feature points.`,

      ORB_SLAM2Info: `We compared the use of the original image with the mono slam method of ORB-SLAM and when dynamic objects were masked using the Semantic Segmentation provided by CARLA.`,
      ORB_SLAM2List1: `Original Image`,
      ORB_SLAM2List2: `After Masking`,
      ORB_SLAM2List3_1: `As intended, most dynamic objects like vehicles were not extracted as features. However, for trees, the pointed parts were masked as they are, resulting in the extraction of features around the trees contrary to the intention.`,
      ORB_SLAM2List3_2: `Ultimately, we decided to exclude street trees from the masking targets. This was possible because, in the CARLA simulation environment, the trees hardly moved.`,

      ORB_SLAM2Result: `Results of ORB-SLAM2`,
      ORB_SLAM2ResultInfo: `In the simulation content, all straight parts were set vertically. However, you can see that the blue line is slightly more tilted than the red line. It appears that the rotation error has decreased as the features of dynamic objects, such as vehicles, were well removed.`,

      Comparation: `Comparison between our project and DynaSLAM`,
      Comparation1: `DynaSLAM was observed to very reliably prevent feature extraction from dynamic objects.`,
      Comparation2: `In our project too, it was confirmed that vehicles were masked to some extent, and features were not normally extracted.`,

      Conclusion: `<p>
      Our project utilized the CARLA simulator to generate an outdoor driving dataset and performed Semantic Segmentation on dynamic objects. The ultimate goal was to enhance the accuracy of Visual SLAM.
      <br />
      When compared with other SLAM technologies that consider dynamic objects, such as DynaSLAM, our approach showed similar results, thereby validating its effectiveness. However, we identified several limitations and areas for improvement, gaining valuable insights in the process.
      </p>
      <p>
        A significant limitation was that our model was undertrained, leading to Underfitting. Specifically, the model was not sufficiently trained on various vehicles, plants, and weather conditions present in the CARLA simulator. As a result, our custom CARLA dataset showed a lower mIoU score.
      </p>
      <p>
        In the case of objects significantly affected by wind, such as roadside trees and flags, they could be classified as static objects in the CARLA environment due to the low wind intensity. A particular reason for classifying them as static was that simple masking methods made the masked edges act as new features, rendering the masking process ineffective. If we plan to apply our project to the real world, this issue must be resolved. Upon exploring solutions, we concluded that more advanced masking techniques, such as inpaint methods, and additional information like Instance Segmentation are needed.
      </p>
      <p>
        Although hardware limitations prevented us from conducting real-time tests, we believe that utilizing the ROS-bridge package for real-time testing in a ROS environment would be an effective strategy for future validation and improvement.
      </p>
      `,
    },
  },
  ko: {
    translation: {
      Introduction:
        "Visual SLAM 기술은 정적 환경에서는 높은 성능을 보이지만, 움직이는 객체가 많은 동적 환경에서는 그 성능이 떨어집니다. 움직이는 객체에도 특징점이 추출되어 카메라의 이동 경로를 정확히 추정하기 어렵게 만듭니다. 이로 인해 오류가 누적되어, 결국 SLAM 시스템에 문제를 일으킬 수 있습니다. 이 프로젝트에서는 딥러닝 기반의 Semantic Segmentation을 활용하여 동적 객체를 식별하고 제거합니다. 이렇게 정제된 이미지를 Visual SLAM에 적용하여, 성능 향상을 목표로 합니다.",
      Overview: `우리는 다음의 워크플로를 설계하고 구현하였습니다:`,
      OverviewListItem01: `Unreal Engine을 기반으로 하는 ‘CARLA’ 시뮬레이터를 사용하여 Semantic Segmentation과 V-SLAM에 사용할 이미지를 얻습니다. CARLA 시뮬레이터는 환경, 날씨 등을 조절 할 수 있으며,  동적 객체로써 다양한 종류의 차량 모델도 제공하여 이번 프로젝트에 적당할 것으로 생각하여 선정하였습니다. CARLA 시뮬레이터의 Stereo image와 RGB-D, Monocular 시계열 이미지를 생성하여 Semantic Segmentation과 V-SLAM에 사용하였습니다.`,
      OverviewListItem02: `Semantic Segmentation인 PaddleSeg 모델과 직접 구현한 커스텀 모델 두 모델을 사용하여 학습 및 성능 평가를 진행합니다. `,
      OverviewListItem03: `추론한 동적 물체들을 이미지 상에서 Masking 처리합니다.`,
      OverviewListItem04: `Masking 처리된 이미지를 대상으로 피쳐를 추출합니다.`,
      OverviewListItem05: `추출된 피쳐에 VSLAM을 적용하여 Map을 구성합니다`,
      OverviewListItem06: `ORB-SLAM2 V-SLAM 프레임워크를 사용하여 Mono, Stereo, RGB-D 두가지 방식으로 원본으로 Mapping한 결과와 마스킹 후 Mapping한 결과를 비교합니다.`,
      OverviewListItem07: `실험을 통해 얻은 인사이트와 개선해야 할 사항을 정리합니다. Semantic Segmentation을 통해 마스킹한 이미지를 사용한 ORB-SLAM과 동적 객체를 고려하지 않은 SLAM 기법과 비교해  보았을 때 약간의 개선된 결과를 보여주어 제시한 방법이 타당함을 보여주었습니다.`,

      Simulation: `Semantic Segmentation과 V-SLAM에 필요한 이미지를 얻기 위해 CARLA 시뮬레이터를 선택하였습니다. CARLA 시뮬레이터는 환경, 기상 조건, 도로 상의 물체, 통행량 등을 세밀하게 조절할 수 있어, 자율주행 환경뿐만 아니라 본 프로젝트의 다양한 요구사항에도 높은 활용성이 있다고 판단하였습니다. 본 프로젝트에서는 CARLA를 통해 Stereo, RGB-D, Monocular 이미지를 추출하여 사용하였으며, 이는 Semantic Segmentation의 학습셋, 테스트셋, 추론셋뿐만 아니라 V-SLAM Mapping의 Ground Truth Map으로도 활용되었습니다.`,
      Simulation2Title: `데이터 수집`,
      Simulation2ContentListItem1: `Labeled FPS 30 Stereo 시계열 이미지`,
      Simulation2ContentListItem2: `Labeled FPS 30 RGB-D 시계열 이미지`,
      Simulation2ContentListItem3: `Ground Truth Positions`,

      Simulation3Title: `데이터 수집 환경`,
      Simulation3Content: `CARLA에서 기본 제공하는 <strong>Town10HD</strong>환경.`,
      Simulation4Title: `수집된 데이터 예시`,
      Simulation4Content: ``,

      Simulation5Title: ``,
      Simulation5Content: ``,

      AboutCARLA: `<abbr><a href="https://carla.org/" target="_blank">CARLA</a></abbr> (Car Learning to Act) 시뮬레이터는 자율주행 시스템의 개발, 훈련, 및 검증을 위한 실감나는 환경을 제공하는 오픈소스 플랫폼입니다. 고품질의 그래픽과 물리 엔진을 통해 현실 세계와 유사한 시나리오를 제공하며, 이를 통해 자율주행 차량이 실제로 도입되기 전에 안전성과 성능을 보다 쉽게 확인할 수 있습니다. 다양한 기상 조건, 여러 종류의 도로, 그리고 데이터 수집을 돕는 다양한 센서를 지원합니다. 또한, CARLA는 ROS (Robot Operating System)와 호환되며, 머신 러닝 라이브러리와 통합될 수 있어 자율주행 분야의 연구자와 개발자에게 종합적인 생태계를 제공합니다.`,

      Segmentation: `다음 모델 선정 기준을 바탕으로
      <a href="https://github.com/PaddlePaddle/PaddleSeg" target="_blank">PeddleSeg</a> 플랫폼 기반의 <a href="https://arxiv.org/pdf/2204.02681v1.pdf" target="_blank"><strong>PP-LiteSeg-T1</strong></a> 모델을 선정하였습니다. <br />
      모델 선정 기준은 다음과 같습니다:`,
      SegmentationCriteria01: `<li className="list-group-item text-rise text-grey-200">
      <a
        href="https://paperswithcode.com/sota/real-time-semantic-segmentation-on-cityscapes"
        target="_blank"
      >SOTA</a>모델이어야 한다.
      <img src="../../images/segmentation01.png" />`,
      SegmentationCriteria02: `mIoU는 70% 이상이어야 한다.`,
      SegmentationCriteria03: `런타임 FPS는 30이상이어야 한다.`,
      SegmentationCriteria04: `상대적으로 Light한 모델이어야한다.`,
      SegmentationCriteria05: `정돈된 모듈화`,
      SegmentationCriteria06: `PR, Fork 등 커뮤니티가 활성화되어 있어야 한다.`,
      SegmentationCriteria07: `논문 상의 테스트 하드웨어가 지나치게 고성능이지 않아야 한다.`,

      PaddleSeg: `PaddleSeg란 PaddlePaddle R&D 딥러닝 플랫폼을 기반으로 한 Real Time Segmentation을 위해 고안된 오픈소스 알고리즘으로, 특히 기반이 되는 PaddlePaddle 프레임워크는 제조, 농업, 엔터프라이즈 서비스 등을 포함한 광범위한 부문에서 널리 채택되었으며 535만 이상의 개발자, 20만 개 이상의 회사에 서비스를 제공하고 67만 개의 모델을 생성합니다. PaddleSeg는 mIoU 72%, FPS 273.6으로 GPU는 1080Ti로 테스트를 진행한 모델이며 실시간 시맨틱 분할 작업을 위해 특히 Flexible and Lightweight Decoder(FLD)를 사용하여 기존 디코더의 계산 오버헤드를 줄였습니다. 또한 Feature 표현을 강화하기 위해 Unified Attention Fusion Module (UAFM)를 제안하였고 또한 Simple Pyramid Pooling Module(SPPM)을 사용한 global contextual prior 방식을 통해 기존 CNN이 가지고 있던 Contextual 문제점을 개선하였습니다.<img src='../../images/segmentation03.gif'/>`,

      TrainingAndValidationTableInfo: `학습은 두 가지 데이터 셋을 활용하여 각각 진행하였습니다.`,
      TrainingAndValidationTableHeader01: `데이터셋`,
      TrainingAndValidationTableHeader02: `배치 개수`,
      TrainingAndValidationTableHeader03: `이터레이션 횟수`,
      TrainingAndValidationTableHeader04: `클래스 개수`,
      TrainingAndValidationTableHeader05: `학습 스펙`,

      InferenceResultConclusion: `CARLA 데이터셋을 사용한 커스텀 학습 모델은 mIoU가 50%가 채 안되는 것을 확인하였습니다. 그 이유는 CARLA Map에 사용된
      자동차의 종류가 15종으로 많지 않고, 나무나 건물의 모양새 또한
      다양하지 않아 편향된 Overfitting이 발생한 것으로 예상됩니다.
      우리는 데이터셋의 양을 늘리는 것과, Batch와 Iteration 수를
      늘리는 것 등 재학습의 물리적 한계가 있어 Cityscapes로 학습된
      Pretrained 모델을 활용하기로 하였습니다. 다음은 Pretrained
      모델을 통해 추론된 Segment를 CARLA 이미지에 마스킹한 결과입니다.`,

      CustomSementicSegmentation: `구현 난이도 및 성능 고려하여{" "}
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
        <a href="https://github.com/kongbuhaja/SM_SLAM" target="_blank">
          GitHub
        </a>
      </div>`,

      CustomizedTrainingAndValidationTableHeader01: `데이터셋`,
      CustomizedTrainingAndValidationTableHeader02: `배치 개수`,
      CustomizedTrainingAndValidationTableHeader03: `이터레이션 횟수`,
      CustomizedTrainingAndValidationTableHeader04: `클래스 개수`,

      VisualSLAM: `<p>Visual SLAM을 활용하는 Mapping 단계에서는 <strong>ORB-SLAM2</strong>를
      사용했으며, 전반적인 프로젝트의 성능 비교를 위하여 우리 프로젝트와
      비슷한 목적을 가진
      <strong>DynaSLAM</strong> 두 SLAM 아키텍처를 실험을 통해
      비교하였습니다.
      <br /></p>`,

      ORB_SLAM2: `<abbr><a href='https://github.com/raulmur/ORB_SLAM2' target='_blank'>ORB-SLAM2</a></abbr> (Oriented FAST and Rotated BRIEF Simultaneous Localization And Mapping2)은 컴퓨터 비전 및 로보틱스 분야에서 널리 사용되는 SLAM 알고리즘 중 하나입니다. 이 알고리즘은 카메라를 통해 캡처한 이미지만을 사용하여 동시에 위치를 추정하고 지도를 구성합니다. ORB-SLAM은 특히 실시간 처리가 가능하며, 단일 카메라를 사용하는 모노큘러 구성부터 스테레오 카메라, RGB-D (Depth) 카메라까지 다양한 카메라 구성에 적용할 수 있습니다.`,
      DynaSLAM: `<abbr><a href='https://github.com/BertaBescos/DynaSLAM' target='_blank'>DynaSLAM</a></abbr>은 동적 환경에서 작동하는 
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
      `,

      SemanticSegmentationMaskingInfo: `우리는 다음 순서에 따라 동적객체에 대한 마스킹을 진행하였습니다.:`,
      SemanticSegmentationMasking01: `CARLA 시뮬레이터의 Stereo 카메라 혹은 Monocular 이미지를 로드합니다.`,
      SemanticSegmentationMasking02: `Semantic Segmetation를 진행합니다.`,
      SemanticSegmentationMasking03: `추론된 동적 객체(차량, 오토바이, 보행자 등)의 좌표를 로드합니다.`,
      SemanticSegmentationMasking04: `원본 이미지를 흑백 이미지로 변경합니다.`,
      SemanticSegmentationMasking05: `추론된 좌표를 흑백 이미지에 마스킹합니다.`,

      ParametersInfo: `모델에 적용된 ORBextractor 파라미터는 다음과 같습니다.`,
      ParametersHeader01Info1: `파라미터명`,
      ParametersHeader01Info2: `값`,
      ParametersHeader01Info3: `설명`,

      ParametersHeader01: `nFeatures`,
      ParametersHeader01Col1: `5000`,
      ParametersHeader01Col2: `2000으로 설정한 경우(너무 적게 검출한 경우) 특징점이 검출되지 않았습니다. 반대로 20000은 마스킹된 객체 테두리가 지나치게 많이 검출되었습니다.`,

      ParametersHeader02: `scaleFactor`,
      ParametersHeader02Col1: `1.2`,
      ParametersHeader02Col2: ``,

      ParametersHeader03: `nLevels`,
      ParametersHeader03Col1: `8`,
      ParametersHeader03Col2: ``,

      ParametersHeader04: `iniThFAST`,
      ParametersHeader04Col1: `20`,
      ParametersHeader04Col2: `특징점 검출 시 초기 임계값(높을수록 코너는 적게 검출됩니다.)`,

      ParametersHeader05: `minThFAST`,
      ParametersHeader05Col1: `7`,
      ParametersHeader05Col2: `ORB 특징점의 최소 임계값`,

      ORB_SLAM2Info: `ORB-SLAM의 mono slam 방법을 사용하여 원본 이미지를 사용 했을 때와, CARLA에서 제공하는 Semantic Segmentation을 사용하여 동적 객체를 마스킹 했을 때를 비교하였습니다.`,
      ORB_SLAM2List1: `원본 이미지`,
      ORB_SLAM2List2: `마스킹 한 경우`,
      ORB_SLAM2List3_1: `의도한 대로 차량등의 대부분의 동적객체는 feature가 추출되지
      않았습니다. 하지만, 나무의 경우 뾰족한 부분이 그대로 마스킹
      되어 나무 주변의 feature가 의도와 반하여 추출되는 것이
      확인되었습니다.`,
      ORB_SLAM2List3_2: `결국 가로수는 마스킹 대상에서 제외하는 것으로 결정하였습니다.
      단, 이것이 가능했던 이유는 CARLA 시뮬레이션 환경에서는 나무가
      거의 움직이지 않았기때문입니다.`,

      ORB_SLAM2Result: `ORB-SLAM2의 결과`,
      ORB_SLAM2ResultInfo: `시뮬레이션 내용에서 모든 직진 부분은 수직으로 설정 되었습니다.
      하지만, 파란 선이 빨간 선보다 조금 더 기울어져 있는 것을 볼 수
      있습니다. 이는 차량과 같은 동적 객체의 feature가 잘 제거 되어
      rotation error가 줄어 든 것으로 보입니다.`,

      Comparation: `우리 프로젝트와 DynaSLAM 비교`,
      Comparation1: `DynaSLAM은 매우 안정적으로 동적 객체는 Feature 추출이 안되는 것이 확인됩니다.`,
      Comparation2: `우리 프로젝트 또한 차량이 어느 정도 마스킹 되었으며, feature가 정상적으로 추출되지 않았음이 확인되었습니다.`,

      Conclusion: `<p>
      우리 프로젝트는 CARLA 시뮬레이터를 이용하여 실외 주행 데이터셋을 생성하고, 이를 통해 동적 객체에 대한 Semantic Segmentation을 수행하였습니다. 이 과정을 통해 Visual SLAM의 정확도를 높이는 것이 최종 목표였습니다.
        <br />
        이러한 접근법을 다른 동적 객체를 고려한 SLAM 기술(예를 들면 DynaSLAM)과 비교했을 때 유사한 성과를 보였으며, 이를 통해 저희 방법의 유효성을 확인할 수 있었습니다. 그러나 몇 가지 한계점과 개선할 부분을 확인하고 중요한 통찰을 얻을 수 있었습니다.
      </p>
      <p>
        주요한 한계 중 하나는 모델이 충분히 학습되지 않아 Underfitting이 발생했다는 것입니다. 특히, CARLA 시뮬레이터 내 다양한 차량, 식물, 날씨 조건 등에 대해 모델이 충분히 학습되지 않았으며, 이로 인해 우리의 맞춤형 CARLA 데이터셋에서는 mIoU 점수가 낮게 나왔습니다.
      </p>
      <p>
        바람에 큰 영향을 받는 객체들(가로수, 깃발 등)의 경우 CARLA 환경에서는 바람의 세기가 약하여 정적 객체로 분류할 수 있었습니다. 특별히 정적 객체로 분류한 이유가 있었는데, 그것은 이들을 단순한 방식으로 masking 했을 경우
                Masking된 경계가 새로운 피쳐로 인식되어 Masking 작업이 무의미해지기 때문이었습니다. 현실 세계에 우리 프로젝트를 적용할 것이라 생각한다면 이 문제는 반드시 해결해야하는 문제이기에 이를 위한 해결 방안을 모색한 결과, 이를 해결하기 위해서는 단순한 방식의 마스킹이
                아닌 inpaint 기법(주위 배경의 평균 색상을 추출하여 부드럽게 배경을
                채우는 기법)을 사용하고, Semantic Segmentation 외의 정보(e.g. Instance
                Segementation 정보)등이 추가적으로 필요하다고 결론지었습니다.
      </p>
      <p>
        또한, 하드웨어의 한계로 실시간 테스트를 진행하지 못한 점이 아쉬웠습니다만 추후에 ROS-bridge 패키지를 활용하여 ROS 환경에서 실시간 테스트를 진행하는 것도 추후 검증과 개선을 위한 좋은 방안이 될 것으로 생각됩니다.
      </p>
      `,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
