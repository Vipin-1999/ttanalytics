// import Heatmaps from "./Heatmaps";
// import React, { createRef } from "react";
// import { useScreenshot, createFileName } from "use-react-screenshot";
// import HeatMap_2 from "./Heatmap_2";

// const ImageCapture = (props) => {
//   const ref = createRef(null);
//   const [image, takeScreenShot] = useScreenshot();
//   const getImage = () => {
//     takeScreenShot(ref.current);
//   };

//   const download = (image, { name = "img", extension = "png" } = {}) => {
//     const a = document.createElement("a");
//     a.href = image;
//     a.download = createFileName(extension, name);
//     a.click();
//   };

//   const downloadImage = () => {
//     const name = props.location.fileName;
//     if (image) {
//       download(image, { name: name, extension: "png" });
//       window.M.toast({ html: "Image downloaded successfully!" });
//     } else {
//       window.M.toast({ html: "Take a screenshot before downloading.." });
//     }
//   };

//   return (
//     <div>
//       <div
//         ref={ref}
//         style={{
//           border: "1px solid #ccc",
//           paddingTop: "20px",
//           paddingBottom: "20px",
//           marginTop: "20px",
//           height: "100%",
//         }}
//         className="center"
//       >
//         {/* <Heatmaps props={props.location} /> */}
//         <HeatMap_2 props={props.location} />
        
//       </div>
//       <br />
//       <br />
//       <div>
//         <div className="row">
//           <div className="col s12 m6">
//             <div className="input-field">
//               <button
//                 className="btn waves-effect waves-light teal lighten-1"
//                 onClick={getImage}
//               >
//                 Take screenshot
//               </button>
//             </div>
//           </div>
//           <div className="col s12 m6">
//             <div className="input-field">
//               <button
//                 className="btn waves-effect waves-light deep-orange darken-1"
//                 onClick={downloadImage}
//               >
//                 Download Image
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="center">
//         {image ? (
//           <img
//             id="screenshot_image"
//             width={"100%"}
//             src={image}
//             alt={"ScreenShot"}
//           />
//         ) : (
//           <>
//             <p className="amber-text">
//               Screenshot taken will be displayed here
//             </p>
//             <div className="divider" style={{ width: "1070px" }}></div>
//           </>
//         )}
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// };

// export default ImageCapture;
