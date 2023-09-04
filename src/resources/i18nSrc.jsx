import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Introduction:
        "While Visual SLAM technologies perform well in static environments, they often struggle in dynamic settings where moving objects are present. Features extracted from these moving objects can interfere with the accurate calculation of the camera's trajectory, leading to cumulative errors that can compromise the SLAM system. In this project, we aim to mitigate this issue by using deep learning-based Semantic Segmentation to identify and remove dynamic objects. By applying these refined images to Visual SLAM, we seek to achieve a measurable improvement in performance.",
      // ... more key-value pairs for English translation
      Overview: `<p>We have designed and implemented the following workflow:</p>
      <ol>
      <li>Prepare the image dataset for training. We used the Cityscapes Datasets.</li>
      <li>Conduct training and performance evaluation using both the PaddleSeg model and a custom model.</li>
      <li>Mask the inferred dynamic objects on the images.</li>
      <li>Extract features from the masked images.</li>
      <li>Apply VSLAM to the extracted features to construct a Map.</li>
      <li>Compare the Mapping results between the original and the masked images.</li>
      <li>Summarize the insights gained and areas for improvement through the experiments.</li>
      </ol>`,
      Simulation: `For acquiring images to be used in Semantic Segmentation and V-SLAM, we have chosen the CARLA simulator. The CARLA simulator allows for the customization of environmental factors such as weather, road objects, and traffic density, making it highly versatile not just for autonomous driving scenarios but also for the specific requirements of our project. We have leveraged CARLA to extract Stereo, RGB-D, and Monocular images, which serve as training, testing, and inference sets for Semantic Segmentation as well as target locations for V-SLAM mapping.`,
      AboutCarla: `The CARLA (Car Learning to Act) simulator is an open-source platform that provides a realistic environment for the development, training, and validation of autonomous driving systems. With high-fidelity graphics and physics, CARLA aims to provide a near-to-real-world scenario, making it easier to ensure the safety and performance of autonomous vehicles before they are deployed in real life. It supports various weather conditions, different types of roads, and includes a variety of sensors to assist in data collection. Moreover, CARLA is compatible with ROS (Robot Operating System) and can be integrated with machine learning libraries, offering a comprehensive ecosystem for researchers and developers in the field of autonomous driving.`, 
    },
  },
  ko: {
    translation: {
      Introduction:
        "Visual SLAM 기술은 정적 환경에서는 높은 성능을 보이지만, 움직이는 객체가 많은 동적 환경에서는 그 성능이 떨어집니다. 움직이는 객체에도 특징점이 추출되어 카메라의 이동 경로를 정확히 추정하기 어렵게 만듭니다. 이로 인해 오류가 누적되어, 결국 SLAM 시스템에 문제를 일으킬 수 있습니다. 이 프로젝트에서는 딥러닝 기반의 Semantic Segmentation을 활용하여 동적 객체를 식별하고 제거합니다. 이렇게 정제된 이미지를 Visual SLAM에 적용하여, 성능 향상을 목표로 합니다.",
      Overview: `<p>우리는 다음의 워크플로를 설계하고 구현하였습니다:</p>
      <ol>
      <li>학습시킬 이미지 데이터셋을 준비합니다. 우리는 \`Cityscapes Datasets\`을 사용하였습니다.</li>
      <li>PaddleSeg 모델과 커스텀 모델 두 모델을 사용하여 학습 및 성능 평가를 진행합니다.</li>
      <li>추론한 동적 물체들을 이미지 상에서 Masking 처리합니다.</li>
      <li>Masking 처리된 이미지를 대상으로 피쳐를 추출합니다.</li>
      <li>추출된 피쳐에 VSLAM을 적용하여 Map을 구성합니다.</li>
      <li>원본으로 Mapping한 결과와 마스킹 후 Mapping한 결과를 비교합니다.</li>
      <li>실험을 통해 얻은 인사이트와 개선해야 할 사항을 정리합니다.</li>
      </ol>`,
      Simulation: `Semantic Segmentation과 V-SLAM에 필요한 이미지를 얻기 위해 CARLA 시뮬레이터를 선택하였습니다. CARLA 시뮬레이터는 환경, 기상 조건, 도로 상의 물체, 통행량 등을 세밀하게 조절할 수 있어, 자율주행 환경뿐만 아니라 본 프로젝트의 다양한 요구사항에도 높은 활용성이 있다고 판단하였습니다. 본 프로젝트에서는 CARLA를 통해 Stereo, RGB-D, Monocular 이미지를 추출하여 사용하였으며, 이는 Semantic Segmentation의 학습셋, 테스트셋, 추론셋뿐만 아니라 V-SLAM Mapping의 타겟 위치로도 활용되었습니다.`,
      AboutCarla: `CARLA (Car Learning to Act) 시뮬레이터는 자율주행 시스템의 개발, 훈련, 및 검증을 위한 실감나는 환경을 제공하는 오픈소스 플랫폼입니다. 고품질의 그래픽과 물리 엔진을 통해 현실 세계와 유사한 시나리오를 제공하며, 이를 통해 자율주행 차량이 실제로 도입되기 전에 안전성과 성능을 보다 쉽게 확인할 수 있습니다. 다양한 기상 조건, 여러 종류의 도로, 그리고 데이터 수집을 돕는 다양한 센서를 지원합니다. 또한, CARLA는 ROS (Robot Operating System)와 호환되며, 머신 러닝 라이브러리와 통합될 수 있어 자율주행 분야의 연구자와 개발자에게 종합적인 생태계를 제공합니다.`, 
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
