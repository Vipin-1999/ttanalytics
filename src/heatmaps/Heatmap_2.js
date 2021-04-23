import ReactApexCharts from "react-apexcharts";

const HeatMap_2 = (props) => {
  var strokeData = props.location.JSONdata ? props.location.JSONdata : {};

  const getData = (colValues, count) => {
    var i = 0;
    var series = [];

    while (i < count) {
      if (i < 16) {
        var x = (i + 1).toString();
        var y = colValues[i];
      } else {
        if (i === 16) {
          x = "NET";
          y = 100;
        } else {
          x = i.toString();
          y = colValues[i - 1];
        }
      }

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  };

  var newData = new Array(16).fill(0).map(() => new Array(32).fill(0));
  var netRow = new Array(32).fill(100);

  var x_inc = 60; // * 32
  var y_inc = 67.5; // * 16

  strokeData &&
    strokeData.data.forEach((data) => {
      if (data.dir === "R2L") {
        var i1 = 0,
          j1 = 0,
          x_val1 = x_inc,
          y_val1 = y_inc;
        while (data.coords.L[0] > x_val1) {
          x_val1 += x_inc;
          i1++;
        }
        while (data.coords.L[1] > y_val1) {
          y_val1 += y_inc;
          j1++;
        }
        newData[15 - i1][j1]++;
      } else if (data.dir === "L2R") {
        var i2 = 0,
          j2 = 0,
          x_val2 = x_inc,
          y_val2 = y_inc;
        while (data.coords.L[0] > x_val2) {
          x_val2 += x_inc;
          i2++;
        }
        while (data.coords.L[1] > y_val2) {
          y_val2 += y_inc;
          j2++;
        }
        newData[i2][31 - j2]++;
      }
    });

  const state = {
    series: [
      {
        name: "A",
        data: getData(newData[15], 33),
      },
      {
        name: "B",
        data: getData(newData[14], 33),
      },
      {
        name: "C",
        data: getData(newData[13], 33),
      },
      {
        name: "D",
        data: getData(newData[12], 33),
      },
      {
        name: "E",
        data: getData(newData[11], 33),
      },
      {
        name: "F",
        data: getData(newData[10], 33),
      },
      {
        name: "G",
        data: getData(newData[9], 33),
      },
      {
        name: "H",
        data: getData(newData[8], 33),
      },
      {
        name: " ",
        data: getData(netRow, 33),
      },
      {
        name: "I",
        data: getData(newData[7], 33),
      },
      {
        name: "J",
        data: getData(newData[6], 33),
      },
      {
        name: "K",
        data: getData(newData[5], 33),
      },
      {
        name: "L",
        data: getData(newData[4], 33),
      },
      {
        name: "M",
        data: getData(newData[3], 33),
      },
      {
        name: "N",
        data: getData(newData[2], 33),
      },
      {
        name: "O",
        data: getData(newData[1], 33),
      },
      {
        name: "P",
        data: getData(newData[0], 33),
      },
    ],
    options: {
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 0,
                name: " ",
                color: "#03a9f4",
              },
              {
                from: 1,
                to: 1,
                name: " ",
                color: "#ffd600",
              },
              {
                from: 2,
                to: 10,
                name: " ",
                color: "#00c853",
              },
              {
                from: 11,
                to: 50,
                name: " ",
                color: "#f44336",
              },
              {
                from: 99,
                to: 100,
                name: " ",
                color: "#FFFFFF",
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
      },
      title: {
        text: `HeatMap - ${props.location.fileName}`,
      },
    },
  };

  return (
    <div className="chart">
      <div className="heatmap">
        <ReactApexCharts
          options={state.options}
          series={state.series}
          type="heatmap"
          height={600}
          width={1050}
        />
        <div className="row">
          <div className="col m6">
            <b>{props.location.fileName.slice(0, 3)}'s Heatmap</b>
          </div>
          <div className="col m6">
            <b>{props.location.fileName.slice(7, 10)}'s Heatmap</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap_2;
