// import HeatMap from "react-heatmap-grid";

// const Heatmaps = (props) => {
//   console.log(props);
//   var strokeData = props.props.JSONdata ? props.props.JSONdata : {};
//   const xLabels = new Array(32).fill(" ");
//   xLabels[0] = "|<--";
//   xLabels[1] = "-----";
//   xLabels[2] = "-----";
//   xLabels[3] = "-----";
//   xLabels[4] = "-----";
//   xLabels[5] = "-----";
//   xLabels[6] = "-----";
//   xLabels[7] = "-----";
//   xLabels[8] = "L";
//   xLabels[9] = "-----";
//   xLabels[10] = "-----";
//   xLabels[11] = "-----";
//   xLabels[12] = "-----";
//   xLabels[13] = "-----";
//   xLabels[14] = "-----";
//   xLabels[15] = "-->|";
//   xLabels[16] = "|<--";
//   xLabels[17] = "-----";
//   xLabels[18] = "-----";
//   xLabels[19] = "-----";
//   xLabels[20] = "-----";
//   xLabels[21] = "-----";
//   xLabels[22] = "-----";
//   xLabels[23] = "-----";
//   xLabels[24] = "R";
//   xLabels[25] = "-----";
//   xLabels[26] = "-----";
//   xLabels[27] = "-----";
//   xLabels[28] = "-----";
//   xLabels[29] = "-----";
//   xLabels[30] = "-----";
//   xLabels[31] = "-->|";

//   var dataValue = 0;

//   const yLabels = [
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//   ];

//   var data = new Array(yLabels.length)
//     .fill(0)
//     .map(() => new Array(xLabels.length).fill(0).map(() => ++dataValue));

//   var newData = new Array(16).fill(" ").map(() => new Array(32).fill(" "));

//   var x_inc = 60; // * 32
//   var y_inc = 67.5; // * 16

//   strokeData &&
//     strokeData.data.forEach((data) => {
//       if (data.dir === "R2L") {
//         var i1 = 0,
//           j1 = 0,
//           x_val1 = x_inc,
//           y_val1 = y_inc;
//         while (data.coords.L[0] > x_val1) {
//           x_val1 += x_inc;
//           i1++;
//         }
//         while (data.coords.L[1] > y_val1) {
//           y_val1 += y_inc;
//           j1++;
//         }
//         newData[15 - i1][j1]++;
//       } else if (data.dir === "L2R") {
//         var i2 = 0,
//           j2 = 0,
//           x_val2 = x_inc,
//           y_val2 = y_inc;
//         while (data.coords.L[0] > x_val2) {
//           x_val2 += x_inc;
//           i2++;
//         }
//         while (data.coords.L[1] > y_val2) {
//           y_val2 += y_inc;
//           j2++;
//         }
//         newData[i2][31 - j2]++;
//       }
//     });

//   // var dataNew = new Array(16).fill(0).map(() => new Array(32).fill(0));

//   // for (var a = 0; a < 32; a++) {
//   //   for (var b = 0; b < 16; b++) {
//   //     dataNew[a][b] = newData[a][b];
//   //   }
//   // }

//   data = newData;

//   return (
//     <>
//       <div className="row">
//         <div className="col s12 center">
//           <span className="btn-flat">{props.props.fileName + ", " + new Date().toString().slice(0, 15)}</span>
//           <div className="divider black" style={{ padding: "1px" }}></div>
//           <br />
//           <HeatMap
//             xLabels={xLabels}
//             yLabels={yLabels}
//             xLabelsLocation={"bottom"}
//             xLabelWidth={50}
//             data={data}
//             height={29}
//             squares
//             onClick={(x, y) =>
//               x < 16
//                 ? window.M.toast({ html: "Left Side of the table" })
//                 : window.M.toast({ html: "Right side of the table" })
//             }
//             // onClick={(x, y) => window.M.toast({html : `${x}, ${y}`})}
//             cellStyle={(background, value, min, max, data, x, y) => ({
//               background: `rgba(221, 44, 0, ${
//                 1 - (max - value) / (max - min)
//               })`,
//               fontSize: "10px",
//             })}
//             cellRender={(value) => value && `${value}`}
//             title={(value, unit) => `${value}`}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Heatmaps;
