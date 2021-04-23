// import React, { Component } from "react";
// import HeatMap from "react-heatmap-grid";

// var JSONdata = "";
// var strokeData = {};

// class TableAnalytics extends Component {
//   onReaderLoad(event) {
//     JSONdata = event.target.result;
//   }
//   inputHandler = (event) => {
//     var reader = new FileReader();
//     reader.onload = this.onReaderLoad;
//     reader.readAsText(event.target.files[0]);
//   };
//   submitHandler = (event) => {
//     event.preventDefault();
//     strokeData = JSON.parse(JSONdata);
//   };
//   render() {
//     const xLabels = new Array(6);
//     xLabels[0] = "|<----------";
//     xLabels[1] = "L";
//     xLabels[2] = "---------->|";
//     xLabels[3] = "|<----------";
//     xLabels[4] = "R";
//     xLabels[5] = "---------->|";

//     var dataValue = 0;

//     const yLabels = [" ", " ", " "];
//     var data = new Array(yLabels.length)
//       .fill(0)
//       .map(() => new Array(xLabels.length).fill(0).map(() => ++dataValue));

//     var newData = new Array(3).fill(0).map(() => new Array(6).fill(0));

//     strokeData.data &&
//       strokeData.data.forEach((data) => {
//         if (data.dir === "R2L") {
//           if (data.coords.L[0] <= 320) {
//             if (data.coords.L[1] <= 360) {
//               newData[2][0]++;
//             }
//             if (data.coords.L[1] > 360 && data.coords.L[1] <= 720) {
//               newData[1][0]++;
//             }
//             if (data.coords.L[1] > 720) {
//               newData[0][0]++;
//             }
//           }
//           if (data.coords.L[0] > 320 && data.coords.L[0] <= 640) {
//             if (data.coords.L[1] <= 360) {
//               newData[2][1]++;
//             }
//             if (data.coords.L[1] > 360 && data.coords.L[1] <= 720) {
//               newData[1][1]++;
//             }
//             if (data.coords.L[1] > 720) {
//               newData[0][1]++;
//             }
//           }
//           if (data.coords.L[0] > 640 && data.coords.L[0] <= 960) {
//             if (data.coords.L[1] <= 360) {
//               newData[2][2]++;
//             }
//             if (data.coords.L[1] > 360 && data.coords.L[1] <= 720) {
//               newData[1][2]++;
//             }
//             if (data.coords.L[1] > 720) {
//               newData[0][2]++;
//             }
//           }
//           if (data.coords.L[0] > 960 && data.coords.L[0] <= 1280) {
//             if (data.coords.L[1] <= 360) {
//               newData[2][3]++;
//             }
//             if (data.coords.L[1] > 360 && data.coords.L[1] <= 720) {
//               newData[1][3]++;
//             }
//             if (data.coords.L[1] > 720) {
//               newData[0][3]++;
//             }
//           }
//           if (data.coords.L[0] > 1280 && data.coords.L[0] <= 1600) {
//             if (data.coords.L[1] <= 360) {
//               newData[2][4]++;
//             }
//             if (data.coords.L[1] > 360 && data.coords.L[1] <= 720) {
//               newData[1][4]++;
//             }
//             if (data.coords.L[1] > 720) {
//               newData[0][4]++;
//             }
//           }
//           if (data.coords.L[0] > 1600 && data.coords.L[0] <= 1920) {
//             if (data.coords.L[1] <= 360) {
//               newData[2][5]++;
//             }
//             if (data.coords.L[1] > 360 && data.coords.L[1] <= 720) {
//               newData[1][5]++;
//             }
//             if (data.coords.L[1] > 720) {
//               newData[0][5]++;
//             }
//           }
//         } else if (data.dir === "L2R") {
//           if (data.coords.R[0] <= 320) {
//             if (data.coords.R[1] <= 360) {
//               newData[2][0]++;
//             }
//             if (data.coords.R[1] > 360 && data.coords.R[1] <= 720) {
//               newData[1][0]++;
//             }
//             if (data.coords.R[1] > 720) {
//               newData[0][0]++;
//             }
//           }
//           if (data.coords.R[0] > 320 && data.coords.R[0] <= 640) {
//             if (data.coords.R[1] <= 360) {
//               newData[2][1]++;
//             }
//             if (data.coords.R[1] > 360 && data.coords.R[1] <= 720) {
//               newData[1][1]++;
//             }
//             if (data.coords.R[1] > 720) {
//               newData[0][1]++;
//             }
//           }
//           if (data.coords.R[0] > 640 && data.coords.R[0] <= 960) {
//             if (data.coords.R[1] <= 360) {
//               newData[2][2]++;
//             }
//             if (data.coords.R[1] > 360 && data.coords.R[1] <= 720) {
//               newData[1][2]++;
//             }
//             if (data.coords.R[1] > 720) {
//               newData[0][2]++;
//             }
//           }
//           if (data.coords.R[0] > 960 && data.coords.R[0] <= 1280) {
//             if (data.coords.R[1] <= 360) {
//               newData[2][3]++;
//             }
//             if (data.coords.R[1] > 360 && data.coords.R[1] <= 720) {
//               newData[1][3]++;
//             }
//             if (data.coords.R[1] > 720) {
//               newData[0][3]++;
//             }
//           }
//           if (data.coords.R[0] > 1280 && data.coords.R[0] <= 1600) {
//             if (data.coords.R[1] <= 360) {
//               newData[2][4]++;
//             }
//             if (data.coords.R[1] > 360 && data.coords.R[1] <= 720) {
//               newData[1][4]++;
//             }
//             if (data.coords.R[1] > 720) {
//               newData[0][4]++;
//             }
//           }
//           if (data.coords.R[0] > 1600 && data.coords.R[0] <= 1920) {
//             if (data.coords.R[1] <= 360) {
//               newData[2][5]++;
//             }
//             if (data.coords.R[1] > 360 && data.coords.R[1] <= 720) {
//               newData[1][5]++;
//             }
//             if (data.coords.R[1] > 720) {
//               newData[0][5]++;
//             }
//           }
//         }
//       });
//     data = newData;
//     return (
//       <div>
//         <div className="container">
//           <form onSubmit={(event) => this.submitHandler(event)}>
//             <div className="file-field input-field">
//               <div className="btn">
//                 <span>File</span>
//                 <input
//                   type="file"
//                   onChange={(event) => this.inputHandler(event)}
//                 />
//               </div>
//               <span>
//                 <div className="right">
//                   <button
//                     className="btn waves-effect waves-light"
//                     type="submit"
//                     name="action"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </span>
//               <div className="file-path-wrapper">
//                 <input className="file-path validate" type="text" />
//               </div>
//             </div>
//           </form>
//         </div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <div className="container center">
//           <HeatMap
//             xLabels={xLabels}
//             yLabels={yLabels}
//             xLabelsLocation={"bottom"}
//             xLabelWidth={50}
//             data={data}
//             height={80}
//             squares
//             onClick={(x, y) => alert(`Clicked ${x + 1}, ${y + 1}`)}
//             cellStyle={(background, value, min, max, data, x, y) => ({
//               background: `rgba(66, 86, 244, ${
//                 1 - (max - value) / (max - min)
//               })`,
//               fontSize: "20px",
//             })}
//             cellRender={(value) => value && `${value}`}
//             title={(value, unit) => `${value}`}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default TableAnalytics;
