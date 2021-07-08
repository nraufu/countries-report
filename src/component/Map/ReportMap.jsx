import { Fragment } from "react";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";

new svgMap({
  targetElementID: "svgMap",
  data: {
    data: {
      report: {
        name: "Completed report assessment:",
        format: "{0} / 2",
        thresholdMax: 2,
        thresholdMin: 1,
      },
    },
    applyData: "report",
    values: {
      AF: { report: 1 },
      AL: { report: 2 },
      DZ: { report: 0 },
      BI: { report: 1 },
      RW: { report: 2 },
      TZ: { report: 2 },
      CG: { report: 1 },
      CD: { report: 1 },
    },
  },
});

const ReportMap = () => {
  return (
    <Fragment>
      <div className="map my-5">
        <h2 className="text-info">Reports Map</h2>
        {/* <div id="svgMap"></div> */}
      </div>
    </Fragment>
  );
};

export default ReportMap;
