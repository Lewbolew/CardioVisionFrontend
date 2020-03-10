import { scaleLinear } from "d3";

export const margin = { top: 30, right: 30, bottom: 60, left: 60 },
  outerWidth = 1000,
  outerHeight = 500,
  width = outerWidth - margin.left - margin.right,
  height = outerHeight - margin.top - margin.bottom,
  xTicks = [1, 50, 1],
  yTicks = [0, 1, 0.2],
  circleSize = 4;

export const x = scaleLinear()
    .domain(xTicks.slice(0, 2))
    .range([0, width]),
  y = scaleLinear()
    .domain(yTicks.slice(0, 2))
    .range([height, 0]);

export const linesColors = [
  {
    line: "#0c7b13",
    area: "#bad5e8",
    legend: "Normal"
  },
  {
    line: "#f3bf5b",
    area: "#ffe3b3",
    legend: "Non-significant"
  },
  {
    line: "#e20e0b",
    area: "#e18772",
    legend: "Significant"
  }
];

export const slidesStride = 20,
  slideWidth = 150,
slideShowVertMargin = 30;
