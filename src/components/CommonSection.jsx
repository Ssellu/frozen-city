import React from "react";
import { useTranslation } from "react-i18next";
import Callout from "./Callout";
import { LaTexInline, LaTexBlock } from "./LaTexInlineBlock";
import LanguageSelector from "./LanguageSelector";

const CommonSection = ({ title, content, render }) => {
  const { t } = useTranslation();
  return (
    <section className="text-rise gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
      <h2 className="font-bold">{title}</h2>
      <div
        className="mb-8 font-light md:text-lg text-gray-200"
        dangerouslySetInnerHTML={{ __html: t(content) }}
      />
      {render ? render() : ""}
    </section>
  );
};

export const TitleSection = () => {
  return (
    <section className="text-rise gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
      <h1 style={{ display: "inline-block", width: "100%" }}>
        <LanguageSelector />
        Frozen City
        <div style={{ display: "inline-block" }}>
          <img
            src="../images/teams_001.png"
            alt="slkumquat@gmail.com"
            format="webp"
            delay="300"
            style={{
              opacity: 1,
              transform: "translate3d(20px, 0px, 1px) scale(0.8) ",
            }}
            className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded"
          />
          <img
            src="../images/teams_002.png"
            alt="pcar530@gmail.com"
            format="webp"
            delay="300"
            style={{
              opacity: 1,
              transform: "translate3d(-15px, 0px, 2px) scale(0.8)",
            }}
            className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded "
          />
          <img
            src="../images/teams_003.png"
            width="96"
            height="96"
            alt="etrongt@kakao.com"
            format="webp"
            delay="300"
            style={{
              opacity: 1,
              transform: "translate3d(-50px, 0px, 3px) scale(0.8)",
            }}
            className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded"
          />
          <img
            src="../images/teams_004.png"
            width="96"
            height="96"
            alt="ssellu.lee@gmail.com"
            format="webp"
            delay="300"
            style={{
              opacity: 1,
              transform: "translate3d(-85px, 0px, 4px) scale(0.8)",
            }}
            className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded"
          />
        </div>
      </h1>
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

export const Overview = () => {
  const { t } = useTranslation();
  return (
    <CommonSection
      title="Overview"
      render={() => (
        <>
          <p className="text-rise">{t("Overview")}</p>
          <ol className="list-group numbered text-rise numbered">
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem01")}
            </li>
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem02")}
            </li>
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem03")}
            </li>
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem04")}
            </li>
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem05")}
            </li>
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem06")}
            </li>
            <li className="list-group-item d-flex text-rise">
              {t("OverviewListItem07")}
            </li>
          </ol>
        </>
      )}
    />
  );
};
export const Simulation = () => {
  const { t } = useTranslation();
  return (
    <CommonSection
      title="Simulation"
      content="Simulation"
      render={() => (
        <>
          <Callout
            title={"What is <abbr>CARLA</abbr>?"}
            content={"AboutCARLA"}
          />
          <div className="card mb-3 mt-12 text-rise">
            <h4 className="card-header">Camera Intrinsic</h4>
            <div className="card-body">
              <p className="pst-group-item">
                <LaTexBlock latexString="size_x = 1024, size_y = 512"></LaTexBlock>
              </p>
              <p className="pst-group-item">
                <LaTexBlock latexString="FoV = 120"></LaTexBlock>
              </p>
              <p className="pst-group-item">
                <LaTexBlock latexString="f = {size_X \over (2 \tan {FoV * \pi \over 360})}"></LaTexBlock>
              </p>
              <p className="pst-group-item">
                <LaTexBlock latexString="C_x = {size_x \over 2}"></LaTexBlock>
              </p>
              <p className="pst-group-item">
                <LaTexBlock latexString="C_y = {size_y \over 2}"></LaTexBlock>
              </p>
            </div>
          </div>
          <div className="card mb-3 mt-12">
            <h3
              className="card-header"
              dangerouslySetInnerHTML={{ __html: t("Simulation2Title") }}
            />
            <div className="card-body">
              <ol className="list-group numbered text-rise">
                <li className="list-group-item d-flex text-rise">
                  {t("Simulation2ContentListItem1")}
                </li>
                <li className="list-group-item d-flex text-rise">
                  {t("Simulation2ContentListItem2")}
                </li>
                <li className="list-group-item d-flex text-rise">
                  {t("Simulation2ContentListItem3")}
                </li>
              </ol>
            </div>
          </div>
          <div className="card mb-3 mt-12">
            <h3
              className="card-header"
              dangerouslySetInnerHTML={{ __html: t("Simulation3Title") }}
            />
            <div className="card-body">
              <p
                className="pst-group-item text-rise"
                dangerouslySetInnerHTML={{ __html: t("Simulation3Content") }}
              />

              <img src="../../images/simulation01.png"></img>
            </div>
          </div>
          <div className="card mb-3 mt-12">
            <h3
              className="card-header"
              dangerouslySetInnerHTML={{ __html: t("Simulation4Title") }}
            />
            <div className="card-body">
              <ol class="list-group numbered text-rise">
                <li className="list-group-item text-rise">
                  Stereo image, left & right (baseline: 1.0m), 1024 X 512
                  <div className="image-block">
                    <img
                      src="../../images/simulation02.png"
                      className="inline-image"
                    />
                    <img
                      src="../../images/simulation03.png"
                      className="inline-image"
                    />
                  </div>
                </li>
                <li className="list-group-item text-rise text-grey-200">
                  RGB-D images, 1024 X 512
                  <img src="../../images/simulation04.png"></img>
                </li>
                <li className="list-group-item text-rise text-grey-200">
                  Semantic Segmentation image, 1024 X 512
                  <img src="../../images/simulation05.png"></img>
                </li>
              </ol>
            </div>
          </div>
        </>
      )}
    />
  );
};
export const Segmentation = () => {
  const { t } = useTranslation();
  return (
    <CommonSection
      title="Sementic Segmentation"
      content="Segmentation"
      render={() => (
        <>
          <ol class="list-group numbered text-rise">
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria01") }}
            />
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria02") }}
            />
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria03") }}
            />
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria04") }}
            />
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria05") }}
            />
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria06") }}
            />
            <li
              className="list-group-item text-rise text-grey-200"
              dangerouslySetInnerHTML={{ __html: t("SegmentationCriteria07") }}
            />
          </ol>

          <Callout title="PP-LiteSeg-T1(PaddleSeg)" content="PaddleSeg" />

          <div className="card mb-3 mt-12">
            <h4 className="card-header">Training And Validation</h4>
            <div className="card-body">
              <p
                dangerouslySetInnerHTML={{
                  __html: t("TrainingAndValidationTableInfo"),
                }}
              />
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      {t("TrainingAndValidationTableHeader01")}
                    </th>
                    <th scope="col">
                      {t("TrainingAndValidationTableHeader02")}
                    </th>
                    <th scope="col">
                      {t("TrainingAndValidationTableHeader03")}
                    </th>
                    <th scope="col">
                      {t("TrainingAndValidationTableHeader04")}
                    </th>
                    <th scope="col">
                      {t("TrainingAndValidationTableHeader05")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-secondary">
                    <th scope="row">Cityscapes(Pretrained)</th>
                    <td>4</td>
                    <td>160000</td>
                    <td>33</td>
                    <td>1080Ti</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">CARLA(Customized)</th>
                    <td>4</td>
                    <td>60000</td>
                    <td>10</td>
                    <td>Amazon EC2 P4 Instances</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card mb-3 mt-12">
            <h4 className="card-header">Inference Result</h4>
            <div className="card-body">
              <h5>Cityscapes(Pretrained), mIoU 85%</h5>
              <div className="image-block">
                <img
                  src="../../images/segmentation04.png"
                  className="inline-image"
                />
                <img
                  src="../../images/segmentation05.png"
                  className="inline-image"
                />
              </div>
              <h5>CARLA(Customized), mIoU 48%</h5>
              <div className="image-block">
                <img
                  src="../../images/segmentation06.png"
                  className="inline-image"
                />
                <img
                  src="../../images/segmentation07.png"
                  className="inline-image"
                />
              </div>
              <p>
                {t("InferenceResultConclusion")}
                <div className="image-block">
                  <img
                    src="../../images/segmentation08.png"
                    className="inline-image"
                  />
                  <img
                    src="../../images/segmentation09.png"
                    className="inline-image"
                  />
                </div>
              </p>
            </div>
          </div>
        </>
      )}
    />
  );
};
export const CustomSementicSegmentation = () => {
  const { t } = useTranslation();
  return (
    <CommonSection
      title="Customized Sementic Segmentation"
      content="CustomSementicSegmentation"
      render={() => (
        <>
          <div className="card mb-3 mt-12">
            <h4 className="card-header">Training And Validation</h4>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>{t("CustomizedTrainingAndValidationTableHeader01")}</th>
                    <th>{t("CustomizedTrainingAndValidationTableHeader02")}</th>
                    <th>{t("CustomizedTrainingAndValidationTableHeader03")}</th>
                    <th>{t("CustomizedTrainingAndValidationTableHeader04")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-secondary">
                    <th>Cityscapes</th>
                    <td>4</td>
                    <td>50</td>
                    <td>34</td>
                  </tr>
                  <tr className="table-secondary">
                    <th>CARLA(Small)</th>
                    <td>4</td>
                    <td>30</td>
                    <td>9</td>
                  </tr>
                  <tr className="table-secondary">
                    <th>CARLA(Large)</th>
                    <td>2</td>
                    <td>30</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card mb-3 mt-12">
            <h4 className="card-header">Inference Result</h4>
            <div className="card-body">
              <div className="image-block">
                <img
                  src="../../images/segmentation12.gif"
                  className="inline-image"
                />
                <img
                  src="../../images/segmentation13.gif"
                  className="inline-image"
                />
              </div>
            </div>
          </div>
        </>
      )}
    />
  );
};

export const VisualSLAM = () => {
  const { t } = useTranslation();
  return (
    <CommonSection
      title="Visual SLAM"
      content="VisualSLAM"
      render={() => (
        <>
          <Callout title="ORB-SLAM2" content="ORB_SLAM2" />
          <Callout title="DynaSLAM" content="DynaSLAM" />
          <div className="card mb-3 mt-12">
            <h4 className="card-header">Semantic Segmentation Masking</h4>
            <div className="card-body">
              <p>{t("SemanticSegmentationMaskingInfo")}</p>
              <ol class="list-group numbered text-rise">
                <li className="list-group-item text-rise">
                  {t("SemanticSegmentationMasking01")}
                  <img src="../../images/vslam00.png"></img>
                </li>
                <li className="list-group-item text-rise">
                  {t("SemanticSegmentationMasking02")}
                  <img src="../../images/vslam01.png"></img>
                </li>
                <li className="list-group-item text-rise">
                  {t("SemanticSegmentationMasking03")}
                </li>
                <li className="list-group-item text-rise">
                  {t("SemanticSegmentationMasking04")}
                </li>
                <li className="list-group-item text-rise">
                  {t("SemanticSegmentationMasking05")}
                  <img src="../../images/vslam02.png"></img>
                </li>
              </ol>
            </div>
          </div>
          <div className="card mb-3 mt-12">
            <h4 className="card-header">Parameters</h4>
            <div className="card-body">
              <p>{t("ParametersInfo")}</p>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>{t("ParametersHeader01Info1")}</th>
                    <th>{t("ParametersHeader01Info2")}</th>
                    <th>{t("ParametersHeader01Info3")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{t("ParametersHeader01")}</th>
                    <td className="table-secondary">
                      {t("ParametersHeader01Col1")}
                    </td>
                    <td className="table-secondary">
                      {t("ParametersHeader01Col2")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t("ParametersHeader02")}</th>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader02Col1")}
                    </td>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader02Col2")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t("ParametersHeader03")}</th>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader03Col1")}
                    </td>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader03Col2")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t("ParametersHeader04")}</th>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader04Col1")}
                    </td>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader04Col2")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{t("ParametersHeader05")}</th>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader05Col1")}
                    </td>
                    <td scope="col" className="table-secondary">
                      {t("ParametersHeader05Col2")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card mb-3 mt-12">
            <h4 className="card-header">ORB-SLAM2</h4>
            <div className="card-body">
              <p>{t("ORB_SLAM2Info")}</p>
              <ul>
                <li>
                  {t("ORB_SLAM2List1")}
                  <img src="../../images/vslam03.png"></img>
                </li>
                <li>
                  {t("ORB_SLAM2List2")}
                  <img src="../../images/vslam04.png"></img>
                </li>
                <li>
                  {t("ORB_SLAM2List3_1")}
                  <br />
                  {t("ORB_SLAM2List3_2")}
                  <img src="../../images/vslam05.png"></img>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-3 mt-12">
            <h4 className="card-header">{t("ORB_SLAM2Result")}</h4>
            <div className="card-body">
              <p>{t("ORB_SLAM2ResultInfo")}</p>
              <img src="../../images/vslam06.png"></img>
            </div>
          </div>

          <div className="card mb-3 mt-12">
            <h4 className="card-header">{t("Comparation")}</h4>
            <div className="card-body">
              <figure>
                <figcaption>{t("Comparation1")}</figcaption>
                <img src="../../images/vslam07.png" />
              </figure>
              <figure>
                <figcaption>{t("Comparation2")}</figcaption>
                <img src="../../images/conclusion02.gif" />
              </figure>
              <figure>
                <figcaption>
                  <img src="../../images/conclusion01.png" />
                </figcaption>
              </figure>
            </div>
          </div>
        </>
      )}
    />
  );
};

export const Conclusion = () => (
  <CommonSection title="Conclusion" content="Conclusion" />
);
