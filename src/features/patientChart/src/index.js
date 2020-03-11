import * as d3 from "d3";
import { plot } from "./plotter";
import { preprocessData } from "./preprocessing";
import "../styles/common.css";

let json = {
  "LCX": [
    {
      "mpr_index": "32",
      "path_to_img": "imgs/1693284930_32.png",
      "path_to_mask": "masks/1693284930_32.png",
      "prediction_probas": [
        0.82452214,
        0.17184454,
        0.0036332898
      ]
    },
    {
      "mpr_index": "12",
      "path_to_img": "imgs/1693284930_12.png",
      "path_to_mask": "masks/1693284930_12.png",
      "prediction_probas": [
        0.6622414,
        0.31533056,
        0.022427954
      ]
    },
    {
      "mpr_index": "42",
      "path_to_img": "imgs/1693284930_42.png",
      "path_to_mask": "masks/1693284930_42.png",
      "prediction_probas": [
        0.7459656,
        0.24519831,
        0.008836071
      ]
    },
    {
      "mpr_index": "15",
      "path_to_img": "imgs/1693284930_15.png",
      "path_to_mask": "masks/1693284930_15.png",
      "prediction_probas": [
        0.69890624,
        0.28469577,
        0.016397944
      ]
    },
    {
      "mpr_index": "31",
      "path_to_img": "imgs/1693284930_31.png",
      "path_to_mask": "masks/1693284930_31.png",
      "prediction_probas": [
        0.8350635,
        0.16173233,
        0.0032041152
      ]
    },
    {
      "mpr_index": "38",
      "path_to_img": "imgs/1693284930_38.png",
      "path_to_mask": "masks/1693284930_38.png",
      "prediction_probas": [
        0.8000858,
        0.19460735,
        0.005306904
      ]
    },
    {
      "mpr_index": "25",
      "path_to_img": "imgs/1693284930_25.png",
      "path_to_mask": "masks/1693284930_25.png",
      "prediction_probas": [
        0.57012147,
        0.39704317,
        0.03283532
      ]
    },
    {
      "mpr_index": "19",
      "path_to_img": "imgs/1693284930_19.png",
      "path_to_mask": "masks/1693284930_19.png",
      "prediction_probas": [
        0.65260875,
        0.3239323,
        0.023459004
      ]
    },
    {
      "mpr_index": "43",
      "path_to_img": "imgs/1693284930_43.png",
      "path_to_mask": "masks/1693284930_43.png",
      "prediction_probas": [
        0.7823433,
        0.2114597,
        0.0061970595
      ]
    },
    {
      "mpr_index": "22",
      "path_to_img": "imgs/1693284930_22.png",
      "path_to_mask": "masks/1693284930_22.png",
      "prediction_probas": [
        0.66306114,
        0.3194176,
        0.017521273
      ]
    },
    {
      "mpr_index": "48",
      "path_to_img": "imgs/1693284930_48.png",
      "path_to_mask": "masks/1693284930_48.png",
      "prediction_probas": [
        0.78002316,
        0.21353686,
        0.0064399648
      ]
    },
    {
      "mpr_index": "20",
      "path_to_img": "imgs/1693284930_20.png",
      "path_to_mask": "masks/1693284930_20.png",
      "prediction_probas": [
        0.67362493,
        0.30733344,
        0.019041613
      ]
    },
    {
      "mpr_index": "40",
      "path_to_img": "imgs/1693284930_40.png",
      "path_to_mask": "masks/1693284930_40.png",
      "prediction_probas": [
        0.7849319,
        0.20866108,
        0.0064069615
      ]
    },
    {
      "mpr_index": "10",
      "path_to_img": "imgs/1693284930_10.png",
      "path_to_mask": "masks/1693284930_10.png",
      "prediction_probas": [
        0.686943,
        0.29249975,
        0.02055722
      ]
    },
    {
      "mpr_index": "16",
      "path_to_img": "imgs/1693284930_16.png",
      "path_to_mask": "masks/1693284930_16.png",
      "prediction_probas": [
        0.6575617,
        0.32039827,
        0.022040054
      ]
    },
    {
      "mpr_index": "47",
      "path_to_img": "imgs/1693284930_47.png",
      "path_to_mask": "masks/1693284930_47.png",
      "prediction_probas": [
        0.8256661,
        0.17046216,
        0.003871587
      ]
    },
    {
      "mpr_index": "45",
      "path_to_img": "imgs/1693284930_45.png",
      "path_to_mask": "masks/1693284930_45.png",
      "prediction_probas": [
        0.8293499,
        0.16699786,
        0.00365217
      ]
    },
    {
      "mpr_index": "1",
      "path_to_img": "imgs/1693284930_1.png",
      "path_to_mask": "masks/1693284930_1.png",
      "prediction_probas": [
        0.4608953,
        0.4587011,
        0.08040365
      ]
    },
    {
      "mpr_index": "50",
      "path_to_img": "imgs/1693284930_50.png",
      "path_to_mask": "masks/1693284930_50.png",
      "prediction_probas": [
        0.82059157,
        0.17532134,
        0.0040871548
      ]
    },
    {
      "mpr_index": "36",
      "path_to_img": "imgs/1693284930_36.png",
      "path_to_mask": "masks/1693284930_36.png",
      "prediction_probas": [
        0.83540845,
        0.1613383,
        0.0032532993
      ]
    },
    {
      "mpr_index": "14",
      "path_to_img": "imgs/1693284930_14.png",
      "path_to_mask": "masks/1693284930_14.png",
      "prediction_probas": [
        0.6856468,
        0.29727376,
        0.01707941
      ]
    },
    {
      "mpr_index": "46",
      "path_to_img": "imgs/1693284930_46.png",
      "path_to_mask": "masks/1693284930_46.png",
      "prediction_probas": [
        0.8500216,
        0.1471899,
        0.002788497
      ]
    },
    {
      "mpr_index": "3",
      "path_to_img": "imgs/1693284930_3.png",
      "path_to_mask": "masks/1693284930_3.png",
      "prediction_probas": [
        0.47966242,
        0.4508352,
        0.06950237
      ]
    },
    {
      "mpr_index": "27",
      "path_to_img": "imgs/1693284930_27.png",
      "path_to_mask": "masks/1693284930_27.png",
      "prediction_probas": [
        0.67528695,
        0.30894175,
        0.015771315
      ]
    },
    {
      "mpr_index": "49",
      "path_to_img": "imgs/1693284930_49.png",
      "path_to_mask": "masks/1693284930_49.png",
      "prediction_probas": [
        0.7864723,
        0.20758379,
        0.0059438464
      ]
    },
    {
      "mpr_index": "23",
      "path_to_img": "imgs/1693284930_23.png",
      "path_to_mask": "masks/1693284930_23.png",
      "prediction_probas": [
        0.7064065,
        0.28045383,
        0.013139688
      ]
    },
    {
      "mpr_index": "41",
      "path_to_img": "imgs/1693284930_41.png",
      "path_to_mask": "masks/1693284930_41.png",
      "prediction_probas": [
        0.7810369,
        0.2125603,
        0.0064028003
      ]
    },
    {
      "mpr_index": "35",
      "path_to_img": "imgs/1693284930_35.png",
      "path_to_mask": "masks/1693284930_35.png",
      "prediction_probas": [
        0.8379753,
        0.15884359,
        0.0031811474
      ]
    },
    {
      "mpr_index": "39",
      "path_to_img": "imgs/1693284930_39.png",
      "path_to_mask": "masks/1693284930_39.png",
      "prediction_probas": [
        0.7487517,
        0.24227756,
        0.008970806
      ]
    },
    {
      "mpr_index": "21",
      "path_to_img": "imgs/1693284930_21.png",
      "path_to_mask": "masks/1693284930_21.png",
      "prediction_probas": [
        0.7219339,
        0.26601046,
        0.012055646
      ]
    },
    {
      "mpr_index": "4",
      "path_to_img": "imgs/1693284930_4.png",
      "path_to_mask": "masks/1693284930_4.png",
      "prediction_probas": [
        0.48706594,
        0.44431606,
        0.068618
      ]
    },
    {
      "mpr_index": "2",
      "path_to_img": "imgs/1693284930_2.png",
      "path_to_mask": "masks/1693284930_2.png",
      "prediction_probas": [
        0.49199483,
        0.44304892,
        0.06495623
      ]
    },
    {
      "mpr_index": "8",
      "path_to_img": "imgs/1693284930_8.png",
      "path_to_mask": "masks/1693284930_8.png",
      "prediction_probas": [
        0.61124617,
        0.3566064,
        0.032147374
      ]
    },
    {
      "mpr_index": "37",
      "path_to_img": "imgs/1693284930_37.png",
      "path_to_mask": "masks/1693284930_37.png",
      "prediction_probas": [
        0.8312532,
        0.1652056,
        0.0035411809
      ]
    },
    {
      "mpr_index": "18",
      "path_to_img": "imgs/1693284930_18.png",
      "path_to_mask": "masks/1693284930_18.png",
      "prediction_probas": [
        0.62458724,
        0.3463787,
        0.029034067
      ]
    },
    {
      "mpr_index": "29",
      "path_to_img": "imgs/1693284930_29.png",
      "path_to_mask": "masks/1693284930_29.png",
      "prediction_probas": [
        0.7823831,
        0.21129954,
        0.0063174074
      ]
    },
    {
      "mpr_index": "33",
      "path_to_img": "imgs/1693284930_33.png",
      "path_to_mask": "masks/1693284930_33.png",
      "prediction_probas": [
        0.83139795,
        0.16523887,
        0.0033632282
      ]
    },
    {
      "mpr_index": "11",
      "path_to_img": "imgs/1693284930_11.png",
      "path_to_mask": "masks/1693284930_11.png",
      "prediction_probas": [
        0.6860764,
        0.29399127,
        0.019932296
      ]
    },
    {
      "mpr_index": "7",
      "path_to_img": "imgs/1693284930_7.png",
      "path_to_mask": "masks/1693284930_7.png",
      "prediction_probas": [
        0.5447713,
        0.4065528,
        0.048675805
      ]
    },
    {
      "mpr_index": "13",
      "path_to_img": "imgs/1693284930_13.png",
      "path_to_mask": "masks/1693284930_13.png",
      "prediction_probas": [
        0.74093026,
        0.24832265,
        0.010747016
      ]
    },
    {
      "mpr_index": "26",
      "path_to_img": "imgs/1693284930_26.png",
      "path_to_mask": "masks/1693284930_26.png",
      "prediction_probas": [
        0.63981575,
        0.33927312,
        0.020911137
      ]
    },
    {
      "mpr_index": "24",
      "path_to_img": "imgs/1693284930_24.png",
      "path_to_mask": "masks/1693284930_24.png",
      "prediction_probas": [
        0.67448294,
        0.30898845,
        0.016528638
      ]
    },
    {
      "mpr_index": "9",
      "path_to_img": "imgs/1693284930_9.png",
      "path_to_mask": "masks/1693284930_9.png",
      "prediction_probas": [
        0.66161186,
        0.3150657,
        0.023322418
      ]
    },
    {
      "mpr_index": "30",
      "path_to_img": "imgs/1693284930_30.png",
      "path_to_mask": "masks/1693284930_30.png",
      "prediction_probas": [
        0.80305177,
        0.1920501,
        0.0048981025
      ]
    },
    {
      "mpr_index": "6",
      "path_to_img": "imgs/1693284930_6.png",
      "path_to_mask": "masks/1693284930_6.png",
      "prediction_probas": [
        0.532468,
        0.41434076,
        0.053191215
      ]
    },
    {
      "mpr_index": "28",
      "path_to_img": "imgs/1693284930_28.png",
      "path_to_mask": "masks/1693284930_28.png",
      "prediction_probas": [
        0.75397676,
        0.23737782,
        0.00864535
      ]
    },
    {
      "mpr_index": "17",
      "path_to_img": "imgs/1693284930_17.png",
      "path_to_mask": "masks/1693284930_17.png",
      "prediction_probas": [
        0.6622651,
        0.31666344,
        0.021071395
      ]
    },
    {
      "mpr_index": "44",
      "path_to_img": "imgs/1693284930_44.png",
      "path_to_mask": "masks/1693284930_44.png",
      "prediction_probas": [
        0.79832107,
        0.19641262,
        0.005266239
      ]
    },
    {
      "mpr_index": "5",
      "path_to_img": "imgs/1693284930_5.png",
      "path_to_mask": "masks/1693284930_5.png",
      "prediction_probas": [
        0.49376878,
        0.43966988,
        0.066561334
      ]
    },
    {
      "mpr_index": "34",
      "path_to_img": "imgs/1693284930_34.png",
      "path_to_mask": "masks/1693284930_34.png",
      "prediction_probas": [
        0.8383655,
        0.15845235,
        0.0031821125
      ]
    }
  ]
};



export const app = async () => {
  let data = json;//await d3.json("../static/data/data.json");
  data = preprocessData(data);
  const container = document.querySelector(".plot-wrapper");
  plot(container, data);
};

