import * as d3 from "d3";
import * as config from "./config";
import { legendColor } from "d3-svg-legend";
import {linesColors} from "./config";

export const plotLines = (plotContainer, data) => {
  data.prediction_probas
    .map((
      probArray // convert data to {x: x0, y: y0} format
    ) => probArray.map((el, j) => ({ x: data.mpr_index[j], y: el })))
    .map((el, i) => {
      // add color data
      return {
        data: el,
        lineColor: config.linesColors[i].line,
        areaColor: config.linesColors[i].area
      };
    })
    .forEach(lineData => plotLine(plotContainer, lineData)); // plot lines

  return plotContainer
};

export const plotLegend = (plotContainer, data) => {
  // add legend
  plotContainer
    .append("g")
    .classed("legend", true)
    .attr("transform", "translate(20, 20)");

  const ordinal = d3
    .scaleOrdinal()
    .domain(linesColors.map((el) => el.legend))
    .range(linesColors.map((el) => el.line))
    ;

  const legend = legendColor()
    .shape("path", d3.symbol().type(d3.symbolCircle).size(150)())
    .shapeRadius(2)
    .shapePadding(5)
    .scale(ordinal);

  plotContainer.select(".legend").call(legend);

  return plotContainer;
};

const plotLine = (plotContainer, data) => {
  const line = d3
    .line() // line
    .x(d => config.x(d.x))
    .y(d => config.y(d.y))
    .curve(d3.curveLinear);

  const area = d3
    .area() // area under curve
    .x(d => config.x(d.x))
    .y0(config.height)
    .y1(d => config.y(d.y));

  plotContainer
    .append("path")
    .datum(data.data)
    .classed("line", true)
    .attr("d", line)
    .style("stroke", data.lineColor);

  plotContainer
    .append("path")
    .datum(data.data)
    .classed("auc", true)
    .attr("d", area)
    .style("fill", data.areaColor);

  // plot circles at data points
  plotContainer
    .append("g")
    .selectAll("circles")
    .data(data.data)
    .enter()
    .append("circle")
    .classed("point", true)
    .attr("r", config.circleSize)
    .attr("cx", d => config.x(d.x))
    .attr("cy", d => config.y(d.y))
    .style("fill", data.lineColor);
};
