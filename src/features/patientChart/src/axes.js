import {axisBottom, axisLeft} from "d3";
import * as config from "./config";


export const plotAxes = (plotContainer) => {

  const xAxis = axisBottom(config.x).tickValues(
    Array(Math.floor((config.xTicks[1] - config.xTicks[0]) / config.xTicks[2]) + 1)
      .fill(undefined)
      .map((_, i) => i * config.xTicks[2] + config.xTicks[0])
  );
  const yAxis = axisLeft(config.y).tickValues(
    Array(Math.floor((config.yTicks[1] - config.yTicks[0]) / config.yTicks[2]) + 1)
      .fill(undefined)
      .map((_, i) => i * config.yTicks[2] + config.yTicks[0])
  );

  plotContainer
    .append("g")
    .classed("x-axis", true)
    .attr("transform", "translate(0," + config.height + ")")
    .call(xAxis);

  plotContainer
    .append("text")
    .classed("axes-label", true)
    .attr("transform", "translate(" + config.width / 2 + "," + (config.height + 45) + ")")
    .text("MPR viewpoint index");

  plotContainer
    .append("g")
    .classed("y-axis", true)
    .call(yAxis);

  plotContainer
    .append("text")
    .classed("axes-label", true)
    .attr("transform", "rotate(-90)")
    .attr("x", -(config.height / 2))
    .attr("y", -40)
    .text("Probability");
  return plotContainer
};