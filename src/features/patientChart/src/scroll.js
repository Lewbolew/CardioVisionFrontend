import * as d3 from "d3";
import * as config from "./config";


export const addScroll = (plotContainer, data) => {
  const scrollGroup = plotContainer.append("g").classed("scroll-group", true);
  // select mask element
  const mask = document.querySelector(".mask");

  const scrollLine = scrollGroup
    .append("path")
    .classed("scroll-line", true)
    .style("opacity", 0);

  scrollGroup
    .append("rect")
    .attr("width", config.width + 10)
    .attr("height", config.height)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mouseover", mouseoverHandler)
    // .call(addMaskResizeHandler, mask)
    .call(addMousemoveHandler, mask, data.path_to_mask);

  return plotContainer;
};

const mouseoverHandler = () => {
  d3.select(".scroll-line")
    .style("stroke-width", config.circleSize * 2 + 1)
    .style("opacity", "1");
};

function addMousemoveHandler(scrollGroup, mask, data) {

  scrollGroup.on("mousemove", function () {
    const mouse = d3.mouse(this);
    const x = Math.min(
      Math.max(config.xTicks[0], Math.floor(config.x.invert(mouse[0]) + 0.5)),
      config.xTicks[1]
    );

    d3.select(".scroll-line").attr(
      "d",
      () => `M ${config.x(x)}, ${config.height} ${config.x(x)}, 0`
    );

    //  change image path of mask
    mask.setAttribute("src", "" + data[x - config.xTicks[0]]);
  });
  return scrollGroup;
}

const addMaskResizeHandler = (scrollGroup, mask) => {
  // const isActivated = false;

  const transformMaskClass = "mask--fullsize";
  mask.addEventListener("click", () => {

    if (!mask.classList.contains(transformMaskClass)) {
      mask.classList.add(transformMaskClass);
    } else {
      mask.classList.remove(transformMaskClass);
    }
  });

  // const activationButton = document.querySelector(".mask__control");
  // activationButton.addEventListener("click", () => {
  //   mask.setAttribute("src", "data/" + data[x - config.xTicks[0]]);
  // });
  return scrollGroup;
};


// const createSlideShow = (scrollGroup, data) => {
//   const slidesContainer = document.querySelector(".slide-show");
//
//   data.forEach((path, i) => {
//     const image = document.createElement("img");
//     image.src = "data/" + path;
//     image.classList.add("slide");
//     image.style.left = `${i * config.slidesStride}px`;
//     image.style.width = `${config.slideWidth}px`;
//     slidesContainer.appendChild(image);
//   });
//
//   const horizMargin = window.innerWidth - config.slideWidth - (data.length - 1) * config.slidesStride;
//   console.log(horizMargin);
//   slidesContainer.style.margin = `${config.slideShowVertMargin}px ${horizMargin}px`;
//   return scrollGroup;
// };
