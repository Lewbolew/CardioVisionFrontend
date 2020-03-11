import * as d3 from "d3";
import * as config from "./config";
import { plotAxes } from "./axes";
import { plotLines, plotLegend } from "./lines";
import { addScroll } from "./scroll";


export const plot = (container, data) => {
  d3
    .select(container)
    .append("svg")
    .classed("plot", true)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("width", config.outerWidth)
    .attr("height", config.outerHeight)
    .attr("viewBox", [0, 0, config.outerWidth, config.outerHeight])
    .attr("preserveAspectRatio", "xMidYMid meet")
    .append("g")
    .attr(
      "transform",
      "translate(" + config.margin.left + "," + config.margin.top + ")"
    )
    .call(plotAxes)
    .call(plotLines, data)
    .call(addScroll, data)
    .call(plotLegend, config.linesColors);
};
