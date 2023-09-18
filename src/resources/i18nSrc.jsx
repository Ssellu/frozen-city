import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Introduction:
        "While Visual SLAM technologies perform well in static environments, they often struggle in dynamic settings where moving objects are present. Features extracted from these moving objects can interfere with the accurate calculation of the camera's trajectory, leading to cumulative errors that can compromise the SLAM system. In this project, we aim to mitigate this issue by using deep learning-based Semantic Segmentation to identify and remove dynamic objects. By applying these refined images to Visual SLAM, we seek to achieve a measurable improvement in performance.",
      // ... more key-value pairs for English translation
      Overview: `<p>We have designed and implemented the following workflow:</p>
      <ol class="numbered">
      <li class="text-rise">Utilize the 'CARLA' simulator, based on Unreal Engine, to obtain images for Semantic Segmentation and V-SLAM. The CARLA simulator allows for the adjustment of various environmental factors, including weather, and provides diverse vehicle models as dynamic objects, making it suitable for this project. We have generated Stereo, RGB-D, and Monocular time-series images from the CARLA simulator for use in Semantic Segmentation and V-SLAM.</li>
      <li class="text-rise">For Semantic Segmentation, we conduct training and performance evaluation using two models: the PaddleSeg model and a custom-built model that we have developed.</li>
      <li class="text-rise">Mask the inferred dynamic objects on the images.</li>
      <li class="text-rise">Extract features from the masked images.</li>
      <li class="text-rise">Apply VSLAM to the extracted features to construct a Map.</li>
      <li class="text-rise">Compare the mapping results in the ORB-SLAM2 V-SLAM framework between the original images and the masked images in both Mono, Stereo, and RGB-D modes.</li>
      <li class="text-rise">Summarize the insights gained and areas for improvement through our experiments. The use of images masked through Semantic Segmentation showed slight improvements when compared to SLAM techniques that do not consider dynamic objects, thereby validating the efficacy of our proposed method.</li>
      </ol>`,
      Simulation: `To acquire images needed for Semantic Segmentation and V-SLAM, we opted for the CARLA simulator. The CARLA simulator provides fine-grained control over environmental conditions such as weather, road objects, and traffic flow. This makes it highly versatile, suitable not only for autonomous driving scenarios but also for meeting the diverse requirements of our project. In this project, we have used CARLA to extract Stereo, RGB-D, and Monocular images. These images serve as training, testing, and inference sets for Semantic Segmentation, as well as Ground Truth Maps for V-SLAM mapping.`,
      AboutCARLA: `<abbr><a href="https://carla.org/" target="_blank">CARLA</a></abbr>(Car Learning to Act) simulator is an open-source platform that provides a realistic environment for the development, training, and validation of autonomous driving systems. With high-fidelity graphics and physics, CARLA aims to provide a near-to-real-world scenario, making it easier to ensure the safety and performance of autonomous vehicles before they are deployed in real life. It supports various weather conditions, different types of roads, and includes a variety of sensors to assist in data collection. Moreover, CARLA is compatible with ROS (Robot Operating System) and can be integrated with machine learning libraries, offering a comprehensive ecosystem for researchers and developers in the field of autonomous driving.`,
      Segmentation: `We have conducted training and inference using both a state-of-the-art model as listed in the <a href="https://paperswithcode.com/sota/real-time-semantic-segmentation-on-cityscapes" target="_blank">SOTA</a> and our custom model. We selected the model based on the following criteria:`,

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
      Overview: `<p>우리는 다음의 워크플로를 설계하고 구현하였습니다:</p>
      <ol class="numbered">
      <li class="text-rise">Unreal Engine을 기반으로 하는 ‘CARLA’ 시뮬레이터를 사용하여 Semantic Segmentation과 V-SLAM에 사용할 이미지를 얻습니다. CARLA 시뮬레이터는 환경, 날씨 등을 조절 할 수 있으며,  동적 객체로써 다양한 종류의 차량 모델도 제공하여 이번 프로젝트에 적당할 것으로 생각하여 선정하였습니다. CARLA 시뮬레이터의 Stereo image와 RGB-D, Monocular 시계열 이미지를 생성하여 Semantic Segmentation과 V-SLAM에 사용하였습니다.</li>
      <li class="text-rise">Semantic Segmentation인 PaddleSeg 모델과 직접 구현한 커스텀 모델 두 모델을 사용하여 학습 및 성능 평가를 진행합니다. </li>
      <li class="text-rise">추론한 동적 물체들을 이미지 상에서 Masking 처리합니다.</li>
      <li class="text-rise">Masking 처리된 이미지를 대상으로 피쳐를 추출합니다.</li>
      <li class="text-rise">추출된 피쳐에 VSLAM을 적용하여 Map을 구성합니다.</li>
      <li class="text-rise">ORB-SLAM2 V-SLAM 프레임워크를 사용하여 Mono, Stereo, RGB-D 두가지 방식으로 원본으로 Mapping한 결과와 마스킹 후 Mapping한 결과를 비교합니다.</li>
      <li class="text-rise">실험을 통해 얻은 인사이트와 개선해야 할 사항을 정리합니다. Semantic Segmentation을 통해 마스킹한 이미지를 사용한 ORB-SLAM과 동적 객체를 고려하지 않은 SLAM 기법과 비교해  보았을 때 약간의 개선된 결과를 보여주어 제시한 방법이 타당함을 보여주었습니다.</li>
      </ol>`,
      Simulation: `Semantic Segmentation과 V-SLAM에 필요한 이미지를 얻기 위해 CARLA 시뮬레이터를 선택하였습니다. CARLA 시뮬레이터는 환경, 기상 조건, 도로 상의 물체, 통행량 등을 세밀하게 조절할 수 있어, 자율주행 환경뿐만 아니라 본 프로젝트의 다양한 요구사항에도 높은 활용성이 있다고 판단하였습니다. 본 프로젝트에서는 CARLA를 통해 Stereo, RGB-D, Monocular 이미지를 추출하여 사용하였으며, 이는 Semantic Segmentation의 학습셋, 테스트셋, 추론셋뿐만 아니라 V-SLAM Mapping의 Ground Truth Map으로도 활용되었습니다.`,
      AboutCARLA: `<abbr><a href="https://carla.org/" target="_blank">CARLA</a></abbr> (Car Learning to Act) 시뮬레이터는 자율주행 시스템의 개발, 훈련, 및 검증을 위한 실감나는 환경을 제공하는 오픈소스 플랫폼입니다. 고품질의 그래픽과 물리 엔진을 통해 현실 세계와 유사한 시나리오를 제공하며, 이를 통해 자율주행 차량이 실제로 도입되기 전에 안전성과 성능을 보다 쉽게 확인할 수 있습니다. 다양한 기상 조건, 여러 종류의 도로, 그리고 데이터 수집을 돕는 다양한 센서를 지원합니다. 또한, CARLA는 ROS (Robot Operating System)와 호환되며, 머신 러닝 라이브러리와 통합될 수 있어 자율주행 분야의 연구자와 개발자에게 종합적인 생태계를 제공합니다.`,
      Segmentation: `우리는 논문으로 기재된 신기술 모델과 직접 커스텀한 모델을 각각 선정하여 학습과 추론을 진행하였습니다.`,

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
