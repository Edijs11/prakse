var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 113,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

// app/routes/data.tsx
var data_exports = {};
__export(data_exports, {
  default: () => Data
});

// app/components/Damage.tsx
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var colors = {
  "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)": "#FF5733",
  Infrastrukt\u016Bra: "#33FF57",
  Me\u017Es: "#3366FF"
}, CustomTooltip = ({ payload, legendVisibility, colors: colors4 }) => {
  let total = 0;
  payload.forEach((entry2) => {
    total += entry2.value;
  });
  let date = payload.length > 0 ? payload[0].payload.created : "";
  return /* @__PURE__ */ jsxDEV2(
    "div",
    {
      style: {
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsxDEV2("p", { children: date }, void 0, !1, {
          fileName: "app/components/Damage.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        payload.map((entry2, index) => /* @__PURE__ */ jsxDEV2(
          "p",
          {
            style: {
              color: legendVisibility[entry2.dataKey] ? colors4[entry2.dataKey] : `${colors4[entry2.dataKey]}80`
            },
            children: [
              entry2.dataKey,
              ": ",
              entry2.value
            ]
          },
          index,
          !0,
          {
            fileName: "app/components/Damage.tsx",
            lineNumber: 36,
            columnNumber: 9
          },
          this
        )),
        /* @__PURE__ */ jsxDEV2("p", { children: [
          "Total: ",
          total
        ] }, void 0, !0, {
          fileName: "app/components/Damage.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Damage.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
};
function Damage({ data, name }) {
  let [selectedRange, setSelectedRange] = React.useState("1year"), [legendVisibility, setLegendVisibility] = React.useState({
    "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)": !0,
    Infrastrukt\u016Bra: !0,
    Me\u017Es: !0
  }), handleLegendClick = (type) => {
    setLegendVisibility((prevVisibility) => ({
      ...prevVisibility,
      [type]: !prevVisibility[type]
    }));
  }, handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };
  if (!data || data.length === 0)
    return /* @__PURE__ */ jsxDEV2("div", { children: "No data available" }, void 0, !1, {
      fileName: "app/components/Damage.tsx",
      lineNumber: 72,
      columnNumber: 12
    }, this);
  let formatDate = (dateString) => {
    let date = new Date(dateString), day = String(date.getDate()).padStart(2, "0"), month = String(date.getMonth() + 1).padStart(2, "0"), year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }, today = /* @__PURE__ */ new Date(), rangeStartDate;
  selectedRange === "1month" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  ) : selectedRange === "3months" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 3,
    today.getDate()
  ) : selectedRange === "6months" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 6,
    today.getDate()
  ) : rangeStartDate = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );
  let dateRange = [];
  for (let d = new Date(rangeStartDate); d <= today; d.setDate(d.getDate() + 1))
    dateRange.push(formatDate(d.toISOString().split("T")[0]));
  let groupedData = {};
  data.filter((item) => {
    let itemDate = new Date(item.created);
    return itemDate >= rangeStartDate && itemDate <= today;
  }).forEach(
    (item) => {
      let { created, type, count } = item, formattedDate = formatDate(created);
      groupedData[formattedDate] || (groupedData[formattedDate] = {}), groupedData[formattedDate][type] ? groupedData[formattedDate][type] += count : groupedData[formattedDate][type] = count;
    }
  );
  let formattedGroupedData = dateRange.map((created) => ({
    created,
    ...groupedData[created] || {}
  }));
  return /* @__PURE__ */ jsxDEV2("div", { children: [
    /* @__PURE__ */ jsxDEV2("h1", { className: "text-2xl font-semibold flex justify-center items-center", children: name }, void 0, !1, {
      fileName: "app/components/Damage.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(
      "form",
      {
        style: {
          display: "flex",
          justifyContent: "right",
          alignItems: "center"
        },
        className: "pr-11",
        children: [
          /* @__PURE__ */ jsxDEV2("div", { children: /* @__PURE__ */ jsxDEV2("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV2(
              "input",
              {
                type: "radio",
                value: "1month",
                checked: selectedRange === "1month",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Damage.tsx",
                lineNumber: 170,
                columnNumber: 13
              },
              this
            ),
            " ",
            "1 M\u0113nesis"
          ] }, void 0, !0, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 169,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 168,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2("div", { children: /* @__PURE__ */ jsxDEV2("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV2(
              "input",
              {
                type: "radio",
                value: "3months",
                checked: selectedRange === "3months",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Damage.tsx",
                lineNumber: 181,
                columnNumber: 13
              },
              this
            ),
            " ",
            "3 M\u0113ne\u0161i"
          ] }, void 0, !0, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 180,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 179,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2("div", { children: /* @__PURE__ */ jsxDEV2("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV2(
              "input",
              {
                type: "radio",
                value: "6months",
                checked: selectedRange === "6months",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Damage.tsx",
                lineNumber: 192,
                columnNumber: 13
              },
              this
            ),
            " ",
            "6 M\u0113ne\u0161i"
          ] }, void 0, !0, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 191,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 190,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2("div", { children: /* @__PURE__ */ jsxDEV2("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV2(
              "input",
              {
                type: "radio",
                value: "1year",
                checked: selectedRange === "1year",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Damage.tsx",
                lineNumber: 203,
                columnNumber: 13
              },
              this
            ),
            " ",
            "Gads"
          ] }, void 0, !0, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 202,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 201,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Damage.tsx",
        lineNumber: 160,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV2(
      BarChart,
      {
        width: 1500,
        height: 400,
        data: formattedGroupedData,
        margin: {
          top: 10,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ jsxDEV2(CartesianGrid, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 225,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2(XAxis, { dataKey: "created" }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 226,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2(YAxis, {}, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 227,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2(
            Tooltip,
            {
              content: /* @__PURE__ */ jsxDEV2(
                CustomTooltip,
                {
                  legendVisibility,
                  colors
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Damage.tsx",
                  lineNumber: 230,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Damage.tsx",
              lineNumber: 228,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(Legend, { onClick: (e) => handleLegendClick(e.value) }, void 0, !1, {
            fileName: "app/components/Damage.tsx",
            lineNumber: 236,
            columnNumber: 9
          }, this),
          Object.keys(legendVisibility).map((type) => /* @__PURE__ */ jsxDEV2(
            Bar,
            {
              dataKey: type,
              fill: colors[type],
              opacity: legendVisibility[type] ? 1 : 0.5
            },
            type,
            !1,
            {
              fileName: "app/components/Damage.tsx",
              lineNumber: 238,
              columnNumber: 11
            },
            this
          ))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Damage.tsx",
        lineNumber: 214,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Damage.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

// app/components/Observation.tsx
import React2 from "react";
import {
  Bar as Bar2,
  BarChart as BarChart2,
  CartesianGrid as CartesianGrid2,
  Legend as Legend2,
  Tooltip as Tooltip2,
  XAxis as XAxis2,
  YAxis as YAxis2
} from "recharts";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var colors2 = {
  "Boj\u0101 g\u0101jis": "#FF5733",
  "Tie\u0161i nov\u0113roti dz\u012Bvnieki": "#33FF57",
  "Kl\u0101tb\u016Btnes paz\u012Bmes": "#3366FF"
}, CustomTooltip2 = ({ payload, legendVisibility, colors: colors4 }) => {
  let total = 0;
  return payload.forEach((entry2) => {
    total += entry2.value;
  }), /* @__PURE__ */ jsxDEV3(
    "div",
    {
      style: {
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsxDEV3("p", { children: payload.length > 0 ? payload[0].payload.created : "" }, void 0, !1, {
          fileName: "app/components/Observation.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        payload.map((entry2, index) => /* @__PURE__ */ jsxDEV3(
          "p",
          {
            style: {
              color: legendVisibility[entry2.dataKey] ? colors4[entry2.dataKey] : `${colors4[entry2.dataKey]}80`
            },
            children: [
              entry2.dataKey,
              ": ",
              entry2.value
            ]
          },
          index,
          !0,
          {
            fileName: "app/components/Observation.tsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        )),
        /* @__PURE__ */ jsxDEV3("p", { children: [
          "Kop\u0101: ",
          total
        ] }, void 0, !0, {
          fileName: "app/components/Observation.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Observation.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
};
function Observation({ data, name }) {
  let [selectedRange, setSelectedRange] = React2.useState("1year"), [legendVisibility, setLegendVisibility] = React2.useState({
    "Boj\u0101 g\u0101jis": !0,
    "Tie\u0161i nov\u0113roti dz\u012Bvnieki": !0,
    "Kl\u0101tb\u016Btnes paz\u012Bmes": !0
  }), handleLegendClick = (type) => {
    setLegendVisibility((prevVisibility) => ({
      ...prevVisibility,
      [type]: !prevVisibility[type]
    }));
  }, handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };
  if (!data || data.length === 0)
    return /* @__PURE__ */ jsxDEV3("div", { children: "No data available" }, void 0, !1, {
      fileName: "app/components/Observation.tsx",
      lineNumber: 70,
      columnNumber: 12
    }, this);
  let formatDate = (dateString) => {
    let date = new Date(dateString), day = String(date.getDate()).padStart(2, "0"), month = String(date.getMonth() + 1).padStart(2, "0"), year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }, today = /* @__PURE__ */ new Date(), rangeStartDate;
  selectedRange === "1month" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  ) : selectedRange === "3months" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 3,
    today.getDate()
  ) : selectedRange === "6months" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 6,
    today.getDate()
  ) : rangeStartDate = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );
  let dateRange = [];
  for (let d = new Date(rangeStartDate); d <= today; d.setDate(d.getDate() + 1))
    dateRange.push(formatDate(d.toISOString().split("T")[0]));
  let groupedData = {};
  data.filter((item) => {
    let itemDate = new Date(item.created);
    return itemDate >= rangeStartDate && itemDate <= today;
  }).forEach(
    (item) => {
      let { created, type, count } = item, formattedDate = formatDate(created);
      groupedData[formattedDate] || (groupedData[formattedDate] = {}), groupedData[formattedDate][type] ? groupedData[formattedDate][type] += count : groupedData[formattedDate][type] = count;
    }
  );
  let formattedGroupedData = dateRange.map((created) => ({
    created,
    ...groupedData[created] || {}
  }));
  return /* @__PURE__ */ jsxDEV3("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-2xl font-semibold text-2xl font-semibold flex justify-center items-center", children: name }, void 0, !1, {
      fileName: "app/components/Observation.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(
      "form",
      {
        style: {
          display: "flex",
          justifyContent: "right",
          alignItems: "center"
        },
        className: "pr-11",
        children: [
          /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                type: "radio",
                value: "1month",
                checked: selectedRange === "1month",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Observation.tsx",
                lineNumber: 163,
                columnNumber: 13
              },
              this
            ),
            " ",
            "1 M\u0113nesis"
          ] }, void 0, !0, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 161,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                type: "radio",
                value: "3months",
                checked: selectedRange === "3months",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Observation.tsx",
                lineNumber: 174,
                columnNumber: 13
              },
              this
            ),
            " ",
            "3 M\u0113ne\u0161i"
          ] }, void 0, !0, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 173,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 172,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                type: "radio",
                value: "6months",
                checked: selectedRange === "6months",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Observation.tsx",
                lineNumber: 185,
                columnNumber: 13
              },
              this
            ),
            " ",
            "6 M\u0113ne\u0161i"
          ] }, void 0, !0, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 184,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 183,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                type: "radio",
                value: "1year",
                checked: selectedRange === "1year",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/Observation.tsx",
                lineNumber: 196,
                columnNumber: 13
              },
              this
            ),
            " ",
            "Gads"
          ] }, void 0, !0, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 195,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 194,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Observation.tsx",
        lineNumber: 153,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(
      BarChart2,
      {
        width: 1500,
        height: 400,
        data: formattedGroupedData,
        margin: {
          top: 10,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ jsxDEV3(CartesianGrid2, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 218,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(XAxis2, { dataKey: "created" }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 219,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(YAxis2, {}, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 220,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(
            Tooltip2,
            {
              content: /* @__PURE__ */ jsxDEV3(
                CustomTooltip2,
                {
                  legendVisibility,
                  colors: colors2
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Observation.tsx",
                  lineNumber: 223,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Observation.tsx",
              lineNumber: 221,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(Legend2, { onClick: (e) => handleLegendClick(e.value) }, void 0, !1, {
            fileName: "app/components/Observation.tsx",
            lineNumber: 229,
            columnNumber: 9
          }, this),
          Object.keys(legendVisibility).map((type) => /* @__PURE__ */ jsxDEV3(
            Bar2,
            {
              dataKey: type,
              fill: colors2[type],
              opacity: legendVisibility[type] ? 1 : 0.5
            },
            type,
            !1,
            {
              fileName: "app/components/Observation.tsx",
              lineNumber: 231,
              columnNumber: 11
            },
            this
          ))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Observation.tsx",
        lineNumber: 207,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Observation.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}

// app/components/ReportCount.tsx
import React3 from "react";
import {
  Bar as Bar3,
  BarChart as BarChart3,
  CartesianGrid as CartesianGrid3,
  Legend as Legend3,
  Tooltip as Tooltip3,
  XAxis as XAxis3,
  YAxis as YAxis3
} from "recharts";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var colors3 = {
  hunt_reports_count: "#FF5733",
  observation_reports_count: "#33FF57",
  damage_reports_count: "#3366FF"
}, CustomTooltip3 = ({ payload, legendVisibility }) => {
  let total = 0;
  return payload.forEach((entry2) => {
    total += entry2.value;
  }), /* @__PURE__ */ jsxDEV4(
    "div",
    {
      style: {
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ jsxDEV4("p", { children: payload.length > 0 ? payload[0].payload.created_date : "" }, void 0, !1, {
          fileName: "app/components/ReportCount.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        payload.map((entry2, index) => /* @__PURE__ */ jsxDEV4(
          "p",
          {
            style: {
              color: legendVisibility[entry2.dataKey] ? colors3[entry2.dataKey] : `${colors3[entry2.dataKey]}80`
            },
            children: [
              entry2.dataKey,
              ": ",
              entry2.value
            ]
          },
          index,
          !0,
          {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        )),
        /* @__PURE__ */ jsxDEV4("p", { children: [
          "Kop\u0101: ",
          total
        ] }, void 0, !0, {
          fileName: "app/components/ReportCount.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ReportCount.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
};
function ReportCount({ data, name }) {
  let [selectedRange, setSelectedRange] = React3.useState("1year"), [legendVisibility, setLegendVisibility] = React3.useState({
    hunt_reports_count: !0,
    observation_reports_count: !0,
    damage_reports_count: !0
  }), handleLegendClick = (type) => {
    setLegendVisibility((prevVisibility) => ({
      ...prevVisibility,
      [type]: !prevVisibility[type]
    }));
  }, handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };
  if (!data || data.length === 0)
    return /* @__PURE__ */ jsxDEV4("div", { children: "No data available" }, void 0, !1, {
      fileName: "app/components/ReportCount.tsx",
      lineNumber: 70,
      columnNumber: 12
    }, this);
  let formatDate = (dateString) => {
    let date = new Date(dateString), day = String(date.getDate()).padStart(2, "0"), month = String(date.getMonth() + 1).padStart(2, "0"), year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }, today = /* @__PURE__ */ new Date(), rangeStartDate;
  selectedRange === "1month" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  ) : selectedRange === "3months" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 3,
    today.getDate()
  ) : selectedRange === "6months" ? rangeStartDate = new Date(
    today.getFullYear(),
    today.getMonth() - 6,
    today.getDate()
  ) : rangeStartDate = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );
  let dateRange = [];
  for (let d = new Date(rangeStartDate); d <= today; d.setDate(d.getDate() + 1))
    dateRange.push(formatDate(d.toISOString().split("T")[0]));
  let filteredData = dateRange.map((date) => {
    let foundItem = data.find((item) => formatDate(item.created_date) === date);
    return foundItem ? {
      ...foundItem,
      created_date: formatDate(foundItem.created_date)
    } : {
      created_date: date
    };
  });
  return console.log(filteredData), /* @__PURE__ */ jsxDEV4("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-2xl font-semibold text-2xl font-semibold flex justify-center items-center", children: name }, void 0, !1, {
      fileName: "app/components/ReportCount.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(
      "form",
      {
        style: {
          display: "flex",
          justifyContent: "right",
          alignItems: "center"
        },
        className: "pr-11",
        children: [
          /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                type: "radio",
                value: "1month",
                checked: selectedRange === "1month",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/ReportCount.tsx",
                lineNumber: 149,
                columnNumber: 13
              },
              this
            ),
            " ",
            "1 M\u0113nesis"
          ] }, void 0, !0, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 148,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 147,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                type: "radio",
                value: "3months",
                checked: selectedRange === "3months",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/ReportCount.tsx",
                lineNumber: 160,
                columnNumber: 13
              },
              this
            ),
            " ",
            "3 M\u0113ne\u0161i"
          ] }, void 0, !0, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 158,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                type: "radio",
                value: "6months",
                checked: selectedRange === "6months",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/ReportCount.tsx",
                lineNumber: 171,
                columnNumber: 13
              },
              this
            ),
            " ",
            "6 M\u0113ne\u0161i"
          ] }, void 0, !0, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 170,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("label", { className: "px-1", children: [
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                type: "radio",
                value: "1year",
                checked: selectedRange === "1year",
                onChange: handleRangeChange
              },
              void 0,
              !1,
              {
                fileName: "app/components/ReportCount.tsx",
                lineNumber: 182,
                columnNumber: 13
              },
              this
            ),
            " ",
            "Gads"
          ] }, void 0, !0, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 181,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 180,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ReportCount.tsx",
        lineNumber: 139,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4(
      BarChart3,
      {
        width: 1500,
        height: 500,
        data: filteredData,
        margin: { top: 10, right: 30, left: 20, bottom: 5 },
        children: [
          /* @__PURE__ */ jsxDEV4(CartesianGrid3, { strokeDasharray: "3 3" }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 198,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4(XAxis3, { dataKey: "created_date" }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 199,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4(YAxis3, {}, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 200,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4(
            Tooltip3,
            {
              content: /* @__PURE__ */ jsxDEV4(CustomTooltip3, { legendVisibility }, void 0, !1, {
                fileName: "app/components/ReportCount.tsx",
                lineNumber: 202,
                columnNumber: 20
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/ReportCount.tsx",
              lineNumber: 201,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(Legend3, { onClick: (e) => handleLegendClick(e.value) }, void 0, !1, {
            fileName: "app/components/ReportCount.tsx",
            lineNumber: 204,
            columnNumber: 9
          }, this),
          Object.keys(legendVisibility).map((type) => /* @__PURE__ */ jsxDEV4(
            Bar3,
            {
              dataKey: type,
              fill: colors3[type],
              opacity: legendVisibility[type] ? 1 : 0.5
            },
            type,
            !1,
            {
              fileName: "app/components/ReportCount.tsx",
              lineNumber: 227,
              columnNumber: 11
            },
            this
          ))
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ReportCount.tsx",
        lineNumber: 192,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ReportCount.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

// report_count.json
var report_count_default = [
  {
    created_date: "2024-03-14",
    hunt_reports_count: 9,
    observation_reports_count: 0,
    damage_reports_count: 1
  },
  {
    created_date: "2024-03-13",
    hunt_reports_count: 73,
    observation_reports_count: 15,
    damage_reports_count: 4
  },
  {
    created_date: "2024-03-12",
    hunt_reports_count: 51,
    observation_reports_count: 18,
    damage_reports_count: 6
  },
  {
    created_date: "2024-03-11",
    hunt_reports_count: 44,
    observation_reports_count: 13,
    damage_reports_count: 12
  },
  {
    created_date: "2024-03-10",
    hunt_reports_count: 51,
    observation_reports_count: 16,
    damage_reports_count: 4
  },
  {
    created_date: "2024-03-09",
    hunt_reports_count: 65,
    observation_reports_count: 15,
    damage_reports_count: 2
  },
  {
    created_date: "2024-03-08",
    hunt_reports_count: 35,
    observation_reports_count: 8,
    damage_reports_count: 2
  },
  {
    created_date: "2024-03-07",
    hunt_reports_count: 43,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2024-03-06",
    hunt_reports_count: 40,
    observation_reports_count: 11,
    damage_reports_count: 2
  },
  {
    created_date: "2024-03-05",
    hunt_reports_count: 46,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2024-03-04",
    hunt_reports_count: 36,
    observation_reports_count: 12,
    damage_reports_count: 3
  },
  {
    created_date: "2024-03-03",
    hunt_reports_count: 52,
    observation_reports_count: 12,
    damage_reports_count: 13
  },
  {
    created_date: "2024-03-02",
    hunt_reports_count: 69,
    observation_reports_count: 23,
    damage_reports_count: 7
  },
  {
    created_date: "2024-03-01",
    hunt_reports_count: 54,
    observation_reports_count: 13,
    damage_reports_count: 6
  },
  {
    created_date: "2024-02-29",
    hunt_reports_count: 43,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2024-02-28",
    hunt_reports_count: 39,
    observation_reports_count: 12,
    damage_reports_count: 2
  },
  {
    created_date: "2024-02-27",
    hunt_reports_count: 28,
    observation_reports_count: 16,
    damage_reports_count: 8
  },
  {
    created_date: "2024-02-26",
    hunt_reports_count: 34,
    observation_reports_count: 8,
    damage_reports_count: 8
  },
  {
    created_date: "2024-02-25",
    hunt_reports_count: 34,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2024-02-24",
    hunt_reports_count: 38,
    observation_reports_count: 16,
    damage_reports_count: 3
  },
  {
    created_date: "2024-02-23",
    hunt_reports_count: 53,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2024-02-22",
    hunt_reports_count: 69,
    observation_reports_count: 17,
    damage_reports_count: 3
  },
  {
    created_date: "2024-02-21",
    hunt_reports_count: 64,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2024-02-20",
    hunt_reports_count: 48,
    observation_reports_count: 21,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-19",
    hunt_reports_count: 39,
    observation_reports_count: 28,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-18",
    hunt_reports_count: 46,
    observation_reports_count: 23,
    damage_reports_count: 6
  },
  {
    created_date: "2024-02-17",
    hunt_reports_count: 54,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-16",
    hunt_reports_count: 89,
    observation_reports_count: 31,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-15",
    hunt_reports_count: 95,
    observation_reports_count: 36,
    damage_reports_count: 3
  },
  {
    created_date: "2024-02-14",
    hunt_reports_count: 70,
    observation_reports_count: 35,
    damage_reports_count: 2
  },
  {
    created_date: "2024-02-13",
    hunt_reports_count: 75,
    observation_reports_count: 30,
    damage_reports_count: 0
  },
  {
    created_date: "2024-02-12",
    hunt_reports_count: 29,
    observation_reports_count: 30,
    damage_reports_count: 0
  },
  {
    created_date: "2024-02-11",
    hunt_reports_count: 105,
    observation_reports_count: 49,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-10",
    hunt_reports_count: 115,
    observation_reports_count: 58,
    damage_reports_count: 3
  },
  {
    created_date: "2024-02-09",
    hunt_reports_count: 88,
    observation_reports_count: 51,
    damage_reports_count: 2
  },
  {
    created_date: "2024-02-08",
    hunt_reports_count: 70,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-07",
    hunt_reports_count: 60,
    observation_reports_count: 17,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-06",
    hunt_reports_count: 64,
    observation_reports_count: 54,
    damage_reports_count: 0
  },
  {
    created_date: "2024-02-05",
    hunt_reports_count: 82,
    observation_reports_count: 23,
    damage_reports_count: 4
  },
  {
    created_date: "2024-02-04",
    hunt_reports_count: 11,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2024-02-03",
    hunt_reports_count: 85,
    observation_reports_count: 18,
    damage_reports_count: 2
  },
  {
    created_date: "2024-02-02",
    hunt_reports_count: 84,
    observation_reports_count: 36,
    damage_reports_count: 1
  },
  {
    created_date: "2024-02-01",
    hunt_reports_count: 51,
    observation_reports_count: 7,
    damage_reports_count: 2
  },
  {
    created_date: "2024-01-31",
    hunt_reports_count: 94,
    observation_reports_count: 20,
    damage_reports_count: 3
  },
  {
    created_date: "2024-01-30",
    hunt_reports_count: 68,
    observation_reports_count: 21,
    damage_reports_count: 1
  },
  {
    created_date: "2024-01-29",
    hunt_reports_count: 82,
    observation_reports_count: 23,
    damage_reports_count: 2
  },
  {
    created_date: "2024-01-28",
    hunt_reports_count: 150,
    observation_reports_count: 47,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-27",
    hunt_reports_count: 469,
    observation_reports_count: 84,
    damage_reports_count: 5
  },
  {
    created_date: "2024-01-26",
    hunt_reports_count: 115,
    observation_reports_count: 52,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-25",
    hunt_reports_count: 98,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2024-01-24",
    hunt_reports_count: 65,
    observation_reports_count: 28,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-23",
    hunt_reports_count: 127,
    observation_reports_count: 25,
    damage_reports_count: 2
  },
  {
    created_date: "2024-01-22",
    hunt_reports_count: 77,
    observation_reports_count: 30,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-21",
    hunt_reports_count: 222,
    observation_reports_count: 48,
    damage_reports_count: 7
  },
  {
    created_date: "2024-01-20",
    hunt_reports_count: 477,
    observation_reports_count: 48,
    damage_reports_count: 6
  },
  {
    created_date: "2024-01-19",
    hunt_reports_count: 121,
    observation_reports_count: 46,
    damage_reports_count: 3
  },
  {
    created_date: "2024-01-18",
    hunt_reports_count: 136,
    observation_reports_count: 27,
    damage_reports_count: 5
  },
  {
    created_date: "2024-01-17",
    hunt_reports_count: 97,
    observation_reports_count: 42,
    damage_reports_count: 1
  },
  {
    created_date: "2024-01-16",
    hunt_reports_count: 64,
    observation_reports_count: 16,
    damage_reports_count: 4
  },
  {
    created_date: "2024-01-15",
    hunt_reports_count: 105,
    observation_reports_count: 13,
    damage_reports_count: 2
  },
  {
    created_date: "2024-01-14",
    hunt_reports_count: 173,
    observation_reports_count: 44,
    damage_reports_count: 3
  },
  {
    created_date: "2024-01-13",
    hunt_reports_count: 472,
    observation_reports_count: 71,
    damage_reports_count: 5
  },
  {
    created_date: "2024-01-12",
    hunt_reports_count: 83,
    observation_reports_count: 20,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-11",
    hunt_reports_count: 82,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2024-01-10",
    hunt_reports_count: 117,
    observation_reports_count: 37,
    damage_reports_count: 1
  },
  {
    created_date: "2024-01-09",
    hunt_reports_count: 124,
    observation_reports_count: 35,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-08",
    hunt_reports_count: 73,
    observation_reports_count: 25,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-07",
    hunt_reports_count: 63,
    observation_reports_count: 28,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-06",
    hunt_reports_count: 297,
    observation_reports_count: 19,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-05",
    hunt_reports_count: 65,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-04",
    hunt_reports_count: 26,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2024-01-03",
    hunt_reports_count: 31,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-02",
    hunt_reports_count: 33,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2024-01-01",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-31",
    hunt_reports_count: 31,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-30",
    hunt_reports_count: 271,
    observation_reports_count: 15,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-29",
    hunt_reports_count: 63,
    observation_reports_count: 25,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-28",
    hunt_reports_count: 119,
    observation_reports_count: 32,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-27",
    hunt_reports_count: 119,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-26",
    hunt_reports_count: 146,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-25",
    hunt_reports_count: 46,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-24",
    hunt_reports_count: 24,
    observation_reports_count: 27,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-23",
    hunt_reports_count: 317,
    observation_reports_count: 21,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-22",
    hunt_reports_count: 68,
    observation_reports_count: 14,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-21",
    hunt_reports_count: 54,
    observation_reports_count: 15,
    damage_reports_count: 2
  },
  {
    created_date: "2023-12-20",
    hunt_reports_count: 58,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-19",
    hunt_reports_count: 55,
    observation_reports_count: 20,
    damage_reports_count: 10
  },
  {
    created_date: "2023-12-18",
    hunt_reports_count: 43,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-17",
    hunt_reports_count: 84,
    observation_reports_count: 17,
    damage_reports_count: 3
  },
  {
    created_date: "2023-12-16",
    hunt_reports_count: 414,
    observation_reports_count: 29,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-15",
    hunt_reports_count: 84,
    observation_reports_count: 30,
    damage_reports_count: 2
  },
  {
    created_date: "2023-12-14",
    hunt_reports_count: 87,
    observation_reports_count: 32,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-13",
    hunt_reports_count: 93,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-12",
    hunt_reports_count: 72,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-11",
    hunt_reports_count: 59,
    observation_reports_count: 15,
    damage_reports_count: 8
  },
  {
    created_date: "2023-12-10",
    hunt_reports_count: 103,
    observation_reports_count: 37,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-09",
    hunt_reports_count: 402,
    observation_reports_count: 50,
    damage_reports_count: 4
  },
  {
    created_date: "2023-12-08",
    hunt_reports_count: 92,
    observation_reports_count: 16,
    damage_reports_count: 1
  },
  {
    created_date: "2023-12-07",
    hunt_reports_count: 78,
    observation_reports_count: 24,
    damage_reports_count: 9
  },
  {
    created_date: "2023-12-06",
    hunt_reports_count: 107,
    observation_reports_count: 35,
    damage_reports_count: 12
  },
  {
    created_date: "2023-12-05",
    hunt_reports_count: 74,
    observation_reports_count: 25,
    damage_reports_count: 4
  },
  {
    created_date: "2023-12-04",
    hunt_reports_count: 82,
    observation_reports_count: 17,
    damage_reports_count: 5
  },
  {
    created_date: "2023-12-03",
    hunt_reports_count: 110,
    observation_reports_count: 42,
    damage_reports_count: 2
  },
  {
    created_date: "2023-12-02",
    hunt_reports_count: 366,
    observation_reports_count: 50,
    damage_reports_count: 0
  },
  {
    created_date: "2023-12-01",
    hunt_reports_count: 65,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-30",
    hunt_reports_count: 129,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-11-29",
    hunt_reports_count: 158,
    observation_reports_count: 54,
    damage_reports_count: 2
  },
  {
    created_date: "2023-11-28",
    hunt_reports_count: 153,
    observation_reports_count: 25,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-27",
    hunt_reports_count: 101,
    observation_reports_count: 22,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-26",
    hunt_reports_count: 199,
    observation_reports_count: 40,
    damage_reports_count: 9
  },
  {
    created_date: "2023-11-25",
    hunt_reports_count: 496,
    observation_reports_count: 34,
    damage_reports_count: 1
  },
  {
    created_date: "2023-11-24",
    hunt_reports_count: 112,
    observation_reports_count: 20,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-23",
    hunt_reports_count: 40,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-22",
    hunt_reports_count: 80,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-21",
    hunt_reports_count: 80,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-20",
    hunt_reports_count: 135,
    observation_reports_count: 10,
    damage_reports_count: 6
  },
  {
    created_date: "2023-11-19",
    hunt_reports_count: 364,
    observation_reports_count: 28,
    damage_reports_count: 1
  },
  {
    created_date: "2023-11-18",
    hunt_reports_count: 330,
    observation_reports_count: 12,
    damage_reports_count: 2
  },
  {
    created_date: "2023-11-17",
    hunt_reports_count: 18,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2023-11-16",
    hunt_reports_count: 100,
    observation_reports_count: 20,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-15",
    hunt_reports_count: 92,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-14",
    hunt_reports_count: 98,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-11-13",
    hunt_reports_count: 79,
    observation_reports_count: 4,
    damage_reports_count: 7
  },
  {
    created_date: "2023-11-12",
    hunt_reports_count: 148,
    observation_reports_count: 14,
    damage_reports_count: 16
  },
  {
    created_date: "2023-11-11",
    hunt_reports_count: 437,
    observation_reports_count: 18,
    damage_reports_count: 11
  },
  {
    created_date: "2023-11-10",
    hunt_reports_count: 110,
    observation_reports_count: 7,
    damage_reports_count: 4
  },
  {
    created_date: "2023-11-09",
    hunt_reports_count: 87,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-08",
    hunt_reports_count: 108,
    observation_reports_count: 8,
    damage_reports_count: 3
  },
  {
    created_date: "2023-11-07",
    hunt_reports_count: 101,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-06",
    hunt_reports_count: 65,
    observation_reports_count: 10,
    damage_reports_count: 4
  },
  {
    created_date: "2023-11-05",
    hunt_reports_count: 188,
    observation_reports_count: 12,
    damage_reports_count: 6
  },
  {
    created_date: "2023-11-04",
    hunt_reports_count: 373,
    observation_reports_count: 19,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-03",
    hunt_reports_count: 145,
    observation_reports_count: 16,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-02",
    hunt_reports_count: 173,
    observation_reports_count: 24,
    damage_reports_count: 0
  },
  {
    created_date: "2023-11-01",
    hunt_reports_count: 150,
    observation_reports_count: 17,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-31",
    hunt_reports_count: 129,
    observation_reports_count: 7,
    damage_reports_count: 2
  },
  {
    created_date: "2023-10-30",
    hunt_reports_count: 24,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-29",
    hunt_reports_count: 191,
    observation_reports_count: 11,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-28",
    hunt_reports_count: 530,
    observation_reports_count: 23,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-27",
    hunt_reports_count: 120,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-26",
    hunt_reports_count: 82,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-25",
    hunt_reports_count: 111,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-24",
    hunt_reports_count: 129,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-23",
    hunt_reports_count: 119,
    observation_reports_count: 7,
    damage_reports_count: 2
  },
  {
    created_date: "2023-10-22",
    hunt_reports_count: 144,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-21",
    hunt_reports_count: 368,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-20",
    hunt_reports_count: 112,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-19",
    hunt_reports_count: 107,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-18",
    hunt_reports_count: 91,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-17",
    hunt_reports_count: 101,
    observation_reports_count: 12,
    damage_reports_count: 3
  },
  {
    created_date: "2023-10-16",
    hunt_reports_count: 106,
    observation_reports_count: 13,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-15",
    hunt_reports_count: 145,
    observation_reports_count: 6,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-14",
    hunt_reports_count: 242,
    observation_reports_count: 11,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-13",
    hunt_reports_count: 154,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-12",
    hunt_reports_count: 111,
    observation_reports_count: 4,
    damage_reports_count: 6
  },
  {
    created_date: "2023-10-11",
    hunt_reports_count: 83,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-10",
    hunt_reports_count: 181,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-09",
    hunt_reports_count: 106,
    observation_reports_count: 10,
    damage_reports_count: 3
  },
  {
    created_date: "2023-10-08",
    hunt_reports_count: 99,
    observation_reports_count: 7,
    damage_reports_count: 3
  },
  {
    created_date: "2023-10-07",
    hunt_reports_count: 134,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-06",
    hunt_reports_count: 104,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2023-10-05",
    hunt_reports_count: 64,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-04",
    hunt_reports_count: 78,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2023-10-03",
    hunt_reports_count: 80,
    observation_reports_count: 9,
    damage_reports_count: 2
  },
  {
    created_date: "2023-10-02",
    hunt_reports_count: 87,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2023-10-01",
    hunt_reports_count: 136,
    observation_reports_count: 4,
    damage_reports_count: 7
  },
  {
    created_date: "2023-09-30",
    hunt_reports_count: 137,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-29",
    hunt_reports_count: 108,
    observation_reports_count: 15,
    damage_reports_count: 2
  },
  {
    created_date: "2023-09-28",
    hunt_reports_count: 90,
    observation_reports_count: 11,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-27",
    hunt_reports_count: 112,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-26",
    hunt_reports_count: 121,
    observation_reports_count: 15,
    damage_reports_count: 5
  },
  {
    created_date: "2023-09-25",
    hunt_reports_count: 85,
    observation_reports_count: 22,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-24",
    hunt_reports_count: 131,
    observation_reports_count: 25,
    damage_reports_count: 2
  },
  {
    created_date: "2023-09-23",
    hunt_reports_count: 111,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-22",
    hunt_reports_count: 117,
    observation_reports_count: 17,
    damage_reports_count: 3
  },
  {
    created_date: "2023-09-21",
    hunt_reports_count: 131,
    observation_reports_count: 15,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-20",
    hunt_reports_count: 82,
    observation_reports_count: 24,
    damage_reports_count: 2
  },
  {
    created_date: "2023-09-19",
    hunt_reports_count: 61,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-18",
    hunt_reports_count: 79,
    observation_reports_count: 26,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-17",
    hunt_reports_count: 116,
    observation_reports_count: 28,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-16",
    hunt_reports_count: 116,
    observation_reports_count: 19,
    damage_reports_count: 2
  },
  {
    created_date: "2023-09-15",
    hunt_reports_count: 119,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-14",
    hunt_reports_count: 84,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-13",
    hunt_reports_count: 70,
    observation_reports_count: 19,
    damage_reports_count: 2
  },
  {
    created_date: "2023-09-12",
    hunt_reports_count: 70,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-11",
    hunt_reports_count: 67,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-10",
    hunt_reports_count: 106,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-09",
    hunt_reports_count: 136,
    observation_reports_count: 25,
    damage_reports_count: 3
  },
  {
    created_date: "2023-09-08",
    hunt_reports_count: 131,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-07",
    hunt_reports_count: 91,
    observation_reports_count: 17,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-06",
    hunt_reports_count: 107,
    observation_reports_count: 18,
    damage_reports_count: 4
  },
  {
    created_date: "2023-09-05",
    hunt_reports_count: 107,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2023-09-04",
    hunt_reports_count: 92,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-03",
    hunt_reports_count: 136,
    observation_reports_count: 26,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-02",
    hunt_reports_count: 163,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2023-09-01",
    hunt_reports_count: 140,
    observation_reports_count: 13,
    damage_reports_count: 5
  },
  {
    created_date: "2023-08-31",
    hunt_reports_count: 62,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-30",
    hunt_reports_count: 66,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-29",
    hunt_reports_count: 115,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-28",
    hunt_reports_count: 88,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2023-08-27",
    hunt_reports_count: 111,
    observation_reports_count: 2,
    damage_reports_count: 2
  },
  {
    created_date: "2023-08-26",
    hunt_reports_count: 149,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-25",
    hunt_reports_count: 126,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2023-08-24",
    hunt_reports_count: 97,
    observation_reports_count: 21,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-23",
    hunt_reports_count: 121,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2023-08-22",
    hunt_reports_count: 114,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-21",
    hunt_reports_count: 87,
    observation_reports_count: 17,
    damage_reports_count: 4
  },
  {
    created_date: "2023-08-20",
    hunt_reports_count: 99,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-19",
    hunt_reports_count: 104,
    observation_reports_count: 2,
    damage_reports_count: 3
  },
  {
    created_date: "2023-08-18",
    hunt_reports_count: 125,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-17",
    hunt_reports_count: 100,
    observation_reports_count: 17,
    damage_reports_count: 4
  },
  {
    created_date: "2023-08-16",
    hunt_reports_count: 85,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-15",
    hunt_reports_count: 105,
    observation_reports_count: 10,
    damage_reports_count: 3
  },
  {
    created_date: "2023-08-14",
    hunt_reports_count: 82,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-13",
    hunt_reports_count: 121,
    observation_reports_count: 9,
    damage_reports_count: 4
  },
  {
    created_date: "2023-08-12",
    hunt_reports_count: 143,
    observation_reports_count: 11,
    damage_reports_count: 2
  },
  {
    created_date: "2023-08-11",
    hunt_reports_count: 135,
    observation_reports_count: 16,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-10",
    hunt_reports_count: 116,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-09",
    hunt_reports_count: 117,
    observation_reports_count: 17,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-08",
    hunt_reports_count: 110,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-07",
    hunt_reports_count: 60,
    observation_reports_count: 11,
    damage_reports_count: 5
  },
  {
    created_date: "2023-08-06",
    hunt_reports_count: 71,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2023-08-05",
    hunt_reports_count: 112,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-04",
    hunt_reports_count: 151,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-03",
    hunt_reports_count: 109,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-08-02",
    hunt_reports_count: 134,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-08-01",
    hunt_reports_count: 102,
    observation_reports_count: 25,
    damage_reports_count: 3
  },
  {
    created_date: "2023-07-31",
    hunt_reports_count: 119,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-30",
    hunt_reports_count: 123,
    observation_reports_count: 19,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-29",
    hunt_reports_count: 155,
    observation_reports_count: 7,
    damage_reports_count: 2
  },
  {
    created_date: "2023-07-28",
    hunt_reports_count: 147,
    observation_reports_count: 22,
    damage_reports_count: 3
  },
  {
    created_date: "2023-07-27",
    hunt_reports_count: 155,
    observation_reports_count: 24,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-26",
    hunt_reports_count: 167,
    observation_reports_count: 21,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-25",
    hunt_reports_count: 129,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-24",
    hunt_reports_count: 136,
    observation_reports_count: 8,
    damage_reports_count: 2
  },
  {
    created_date: "2023-07-23",
    hunt_reports_count: 127,
    observation_reports_count: 16,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-22",
    hunt_reports_count: 183,
    observation_reports_count: 17,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-21",
    hunt_reports_count: 210,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-20",
    hunt_reports_count: 162,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-19",
    hunt_reports_count: 154,
    observation_reports_count: 20,
    damage_reports_count: 2
  },
  {
    created_date: "2023-07-18",
    hunt_reports_count: 151,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-17",
    hunt_reports_count: 114,
    observation_reports_count: 25,
    damage_reports_count: 2
  },
  {
    created_date: "2023-07-16",
    hunt_reports_count: 151,
    observation_reports_count: 27,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-15",
    hunt_reports_count: 216,
    observation_reports_count: 8,
    damage_reports_count: 2
  },
  {
    created_date: "2023-07-14",
    hunt_reports_count: 171,
    observation_reports_count: 12,
    damage_reports_count: 2
  },
  {
    created_date: "2023-07-13",
    hunt_reports_count: 154,
    observation_reports_count: 25,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-12",
    hunt_reports_count: 141,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-11",
    hunt_reports_count: 169,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-10",
    hunt_reports_count: 203,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-09",
    hunt_reports_count: 203,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-08",
    hunt_reports_count: 236,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-07",
    hunt_reports_count: 210,
    observation_reports_count: 16,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-06",
    hunt_reports_count: 177,
    observation_reports_count: 15,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-05",
    hunt_reports_count: 215,
    observation_reports_count: 23,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-04",
    hunt_reports_count: 193,
    observation_reports_count: 13,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-03",
    hunt_reports_count: 194,
    observation_reports_count: 21,
    damage_reports_count: 1
  },
  {
    created_date: "2023-07-02",
    hunt_reports_count: 211,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2023-07-01",
    hunt_reports_count: 237,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-30",
    hunt_reports_count: 215,
    observation_reports_count: 14,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-29",
    hunt_reports_count: 186,
    observation_reports_count: 17,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-28",
    hunt_reports_count: 176,
    observation_reports_count: 16,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-27",
    hunt_reports_count: 159,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-26",
    hunt_reports_count: 135,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-25",
    hunt_reports_count: 101,
    observation_reports_count: 11,
    damage_reports_count: 2
  },
  {
    created_date: "2023-06-24",
    hunt_reports_count: 51,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-23",
    hunt_reports_count: 52,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-22",
    hunt_reports_count: 112,
    observation_reports_count: 11,
    damage_reports_count: 4
  },
  {
    created_date: "2023-06-21",
    hunt_reports_count: 107,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-20",
    hunt_reports_count: 113,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-19",
    hunt_reports_count: 95,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-18",
    hunt_reports_count: 101,
    observation_reports_count: 13,
    damage_reports_count: 6
  },
  {
    created_date: "2023-06-17",
    hunt_reports_count: 124,
    observation_reports_count: 23,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-16",
    hunt_reports_count: 110,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-15",
    hunt_reports_count: 102,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-14",
    hunt_reports_count: 84,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-13",
    hunt_reports_count: 62,
    observation_reports_count: 17,
    damage_reports_count: 2
  },
  {
    created_date: "2023-06-12",
    hunt_reports_count: 85,
    observation_reports_count: 11,
    damage_reports_count: 4
  },
  {
    created_date: "2023-06-11",
    hunt_reports_count: 104,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-10",
    hunt_reports_count: 120,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-09",
    hunt_reports_count: 143,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-08",
    hunt_reports_count: 38,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2023-06-07",
    hunt_reports_count: 102,
    observation_reports_count: 22,
    damage_reports_count: 22
  },
  {
    created_date: "2023-06-06",
    hunt_reports_count: 79,
    observation_reports_count: 20,
    damage_reports_count: 2
  },
  {
    created_date: "2023-06-05",
    hunt_reports_count: 93,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-04",
    hunt_reports_count: 161,
    observation_reports_count: 24,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-03",
    hunt_reports_count: 172,
    observation_reports_count: 20,
    damage_reports_count: 0
  },
  {
    created_date: "2023-06-02",
    hunt_reports_count: 164,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2023-06-01",
    hunt_reports_count: 72,
    observation_reports_count: 20,
    damage_reports_count: 3
  },
  {
    created_date: "2023-05-31",
    hunt_reports_count: 82,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-30",
    hunt_reports_count: 72,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-29",
    hunt_reports_count: 62,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-28",
    hunt_reports_count: 57,
    observation_reports_count: 6,
    damage_reports_count: 5
  },
  {
    created_date: "2023-05-27",
    hunt_reports_count: 90,
    observation_reports_count: 9,
    damage_reports_count: 7
  },
  {
    created_date: "2023-05-26",
    hunt_reports_count: 86,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-25",
    hunt_reports_count: 65,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-24",
    hunt_reports_count: 79,
    observation_reports_count: 3,
    damage_reports_count: 5
  },
  {
    created_date: "2023-05-23",
    hunt_reports_count: 50,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-22",
    hunt_reports_count: 70,
    observation_reports_count: 24,
    damage_reports_count: 3
  },
  {
    created_date: "2023-05-21",
    hunt_reports_count: 93,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-20",
    hunt_reports_count: 124,
    observation_reports_count: 11,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-19",
    hunt_reports_count: 83,
    observation_reports_count: 11,
    damage_reports_count: 3
  },
  {
    created_date: "2023-05-18",
    hunt_reports_count: 76,
    observation_reports_count: 21,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-17",
    hunt_reports_count: 73,
    observation_reports_count: 10,
    damage_reports_count: 7
  },
  {
    created_date: "2023-05-16",
    hunt_reports_count: 85,
    observation_reports_count: 11,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-15",
    hunt_reports_count: 43,
    observation_reports_count: 25,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-14",
    hunt_reports_count: 67,
    observation_reports_count: 15,
    damage_reports_count: 2
  },
  {
    created_date: "2023-05-13",
    hunt_reports_count: 83,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-12",
    hunt_reports_count: 62,
    observation_reports_count: 8,
    damage_reports_count: 6
  },
  {
    created_date: "2023-05-11",
    hunt_reports_count: 55,
    observation_reports_count: 10,
    damage_reports_count: 3
  },
  {
    created_date: "2023-05-10",
    hunt_reports_count: 70,
    observation_reports_count: 11,
    damage_reports_count: 5
  },
  {
    created_date: "2023-05-09",
    hunt_reports_count: 63,
    observation_reports_count: 23,
    damage_reports_count: 1
  },
  {
    created_date: "2023-05-08",
    hunt_reports_count: 46,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2023-05-07",
    hunt_reports_count: 63,
    observation_reports_count: 16,
    damage_reports_count: 2
  },
  {
    created_date: "2023-05-06",
    hunt_reports_count: 74,
    observation_reports_count: 8,
    damage_reports_count: 4
  },
  {
    created_date: "2023-05-05",
    hunt_reports_count: 69,
    observation_reports_count: 8,
    damage_reports_count: 2
  },
  {
    created_date: "2023-05-04",
    hunt_reports_count: 63,
    observation_reports_count: 25,
    damage_reports_count: 3
  },
  {
    created_date: "2023-05-03",
    hunt_reports_count: 74,
    observation_reports_count: 20,
    damage_reports_count: 5
  },
  {
    created_date: "2023-05-02",
    hunt_reports_count: 45,
    observation_reports_count: 9,
    damage_reports_count: 4
  },
  {
    created_date: "2023-05-01",
    hunt_reports_count: 60,
    observation_reports_count: 15,
    damage_reports_count: 8
  },
  {
    created_date: "2023-04-30",
    hunt_reports_count: 92,
    observation_reports_count: 13,
    damage_reports_count: 10
  },
  {
    created_date: "2023-04-29",
    hunt_reports_count: 80,
    observation_reports_count: 23,
    damage_reports_count: 2
  },
  {
    created_date: "2023-04-28",
    hunt_reports_count: 49,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2023-04-27",
    hunt_reports_count: 61,
    observation_reports_count: 9,
    damage_reports_count: 15
  },
  {
    created_date: "2023-04-26",
    hunt_reports_count: 49,
    observation_reports_count: 5,
    damage_reports_count: 5
  },
  {
    created_date: "2023-04-25",
    hunt_reports_count: 50,
    observation_reports_count: 19,
    damage_reports_count: 8
  },
  {
    created_date: "2023-04-24",
    hunt_reports_count: 32,
    observation_reports_count: 12,
    damage_reports_count: 8
  },
  {
    created_date: "2023-04-23",
    hunt_reports_count: 45,
    observation_reports_count: 19,
    damage_reports_count: 2
  },
  {
    created_date: "2023-04-22",
    hunt_reports_count: 53,
    observation_reports_count: 17,
    damage_reports_count: 8
  },
  {
    created_date: "2023-04-21",
    hunt_reports_count: 60,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2023-04-20",
    hunt_reports_count: 45,
    observation_reports_count: 19,
    damage_reports_count: 10
  },
  {
    created_date: "2023-04-19",
    hunt_reports_count: 54,
    observation_reports_count: 18,
    damage_reports_count: 3
  },
  {
    created_date: "2023-04-18",
    hunt_reports_count: 41,
    observation_reports_count: 20,
    damage_reports_count: 8
  },
  {
    created_date: "2023-04-17",
    hunt_reports_count: 42,
    observation_reports_count: 19,
    damage_reports_count: 3
  },
  {
    created_date: "2023-04-16",
    hunt_reports_count: 52,
    observation_reports_count: 18,
    damage_reports_count: 6
  },
  {
    created_date: "2023-04-15",
    hunt_reports_count: 107,
    observation_reports_count: 21,
    damage_reports_count: 8
  },
  {
    created_date: "2023-04-14",
    hunt_reports_count: 77,
    observation_reports_count: 16,
    damage_reports_count: 7
  },
  {
    created_date: "2023-04-13",
    hunt_reports_count: 78,
    observation_reports_count: 20,
    damage_reports_count: 3
  },
  {
    created_date: "2023-04-12",
    hunt_reports_count: 76,
    observation_reports_count: 25,
    damage_reports_count: 5
  },
  {
    created_date: "2023-04-11",
    hunt_reports_count: 80,
    observation_reports_count: 20,
    damage_reports_count: 6
  },
  {
    created_date: "2023-04-10",
    hunt_reports_count: 96,
    observation_reports_count: 21,
    damage_reports_count: 3
  },
  {
    created_date: "2023-04-09",
    hunt_reports_count: 86,
    observation_reports_count: 12,
    damage_reports_count: 7
  },
  {
    created_date: "2023-04-08",
    hunt_reports_count: 105,
    observation_reports_count: 22,
    damage_reports_count: 13
  },
  {
    created_date: "2023-04-07",
    hunt_reports_count: 104,
    observation_reports_count: 30,
    damage_reports_count: 12
  },
  {
    created_date: "2023-04-06",
    hunt_reports_count: 81,
    observation_reports_count: 33,
    damage_reports_count: 2
  },
  {
    created_date: "2023-04-05",
    hunt_reports_count: 62,
    observation_reports_count: 15,
    damage_reports_count: 7
  },
  {
    created_date: "2023-04-04",
    hunt_reports_count: 59,
    observation_reports_count: 20,
    damage_reports_count: 14
  },
  {
    created_date: "2023-04-03",
    hunt_reports_count: 51,
    observation_reports_count: 22,
    damage_reports_count: 4
  },
  {
    created_date: "2023-04-02",
    hunt_reports_count: 67,
    observation_reports_count: 31,
    damage_reports_count: 5
  },
  {
    created_date: "2023-04-01",
    hunt_reports_count: 51,
    observation_reports_count: 38,
    damage_reports_count: 13
  },
  {
    created_date: "2023-03-31",
    hunt_reports_count: 14,
    observation_reports_count: 17,
    damage_reports_count: 4
  },
  {
    created_date: "2023-03-30",
    hunt_reports_count: 6,
    observation_reports_count: 17,
    damage_reports_count: 4
  },
  {
    created_date: "2023-03-29",
    hunt_reports_count: 3,
    observation_reports_count: 41,
    damage_reports_count: 2
  },
  {
    created_date: "2023-03-28",
    hunt_reports_count: 5,
    observation_reports_count: 19,
    damage_reports_count: 3
  },
  {
    created_date: "2023-03-27",
    hunt_reports_count: 6,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2023-03-26",
    hunt_reports_count: 10,
    observation_reports_count: 22,
    damage_reports_count: 5
  },
  {
    created_date: "2023-03-25",
    hunt_reports_count: 7,
    observation_reports_count: 10,
    damage_reports_count: 4
  },
  {
    created_date: "2023-03-24",
    hunt_reports_count: 7,
    observation_reports_count: 6,
    damage_reports_count: 10
  },
  {
    created_date: "2023-03-23",
    hunt_reports_count: 0,
    observation_reports_count: 19,
    damage_reports_count: 0
  },
  {
    created_date: "2023-03-22",
    hunt_reports_count: 5,
    observation_reports_count: 24,
    damage_reports_count: 9
  },
  {
    created_date: "2023-03-21",
    hunt_reports_count: 4,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2023-03-20",
    hunt_reports_count: 6,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-19",
    hunt_reports_count: 9,
    observation_reports_count: 31,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-18",
    hunt_reports_count: 18,
    observation_reports_count: 33,
    damage_reports_count: 6
  },
  {
    created_date: "2023-03-17",
    hunt_reports_count: 9,
    observation_reports_count: 40,
    damage_reports_count: 2
  },
  {
    created_date: "2023-03-16",
    hunt_reports_count: 3,
    observation_reports_count: 36,
    damage_reports_count: 4
  },
  {
    created_date: "2023-03-15",
    hunt_reports_count: 3,
    observation_reports_count: 35,
    damage_reports_count: 5
  },
  {
    created_date: "2023-03-14",
    hunt_reports_count: 1,
    observation_reports_count: 15,
    damage_reports_count: 3
  },
  {
    created_date: "2023-03-13",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 7
  },
  {
    created_date: "2023-03-12",
    hunt_reports_count: 0,
    observation_reports_count: 30,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-11",
    hunt_reports_count: 0,
    observation_reports_count: 19,
    damage_reports_count: 2
  },
  {
    created_date: "2023-03-10",
    hunt_reports_count: 2,
    observation_reports_count: 33,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-09",
    hunt_reports_count: 0,
    observation_reports_count: 24,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-08",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-07",
    hunt_reports_count: 0,
    observation_reports_count: 30,
    damage_reports_count: 3
  },
  {
    created_date: "2023-03-06",
    hunt_reports_count: 0,
    observation_reports_count: 24,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-05",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2023-03-04",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2023-03-03",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 2
  },
  {
    created_date: "2023-03-02",
    hunt_reports_count: 0,
    observation_reports_count: 33,
    damage_reports_count: 0
  },
  {
    created_date: "2023-03-01",
    hunt_reports_count: 1,
    observation_reports_count: 43,
    damage_reports_count: 2
  },
  {
    created_date: "2023-02-28",
    hunt_reports_count: 1,
    observation_reports_count: 32,
    damage_reports_count: 5
  },
  {
    created_date: "2023-02-27",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-26",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-25",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-24",
    hunt_reports_count: 0,
    observation_reports_count: 24,
    damage_reports_count: 3
  },
  {
    created_date: "2023-02-23",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 4
  },
  {
    created_date: "2023-02-22",
    hunt_reports_count: 0,
    observation_reports_count: 25,
    damage_reports_count: 3
  },
  {
    created_date: "2023-02-21",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 1
  },
  {
    created_date: "2023-02-20",
    hunt_reports_count: 2,
    observation_reports_count: 25,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-19",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2023-02-18",
    hunt_reports_count: 0,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-02-17",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-16",
    hunt_reports_count: 0,
    observation_reports_count: 14,
    damage_reports_count: 4
  },
  {
    created_date: "2023-02-15",
    hunt_reports_count: 0,
    observation_reports_count: 26,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-14",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-13",
    hunt_reports_count: 0,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-02-12",
    hunt_reports_count: 0,
    observation_reports_count: 20,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-11",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-10",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-09",
    hunt_reports_count: 0,
    observation_reports_count: 31,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-08",
    hunt_reports_count: 0,
    observation_reports_count: 38,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-07",
    hunt_reports_count: 0,
    observation_reports_count: 52,
    damage_reports_count: 4
  },
  {
    created_date: "2023-02-06",
    hunt_reports_count: 0,
    observation_reports_count: 30,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-05",
    hunt_reports_count: 0,
    observation_reports_count: 45,
    damage_reports_count: 1
  },
  {
    created_date: "2023-02-04",
    hunt_reports_count: 0,
    observation_reports_count: 35,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-03",
    hunt_reports_count: 0,
    observation_reports_count: 24,
    damage_reports_count: 1
  },
  {
    created_date: "2023-02-02",
    hunt_reports_count: 0,
    observation_reports_count: 26,
    damage_reports_count: 0
  },
  {
    created_date: "2023-02-01",
    hunt_reports_count: 0,
    observation_reports_count: 20,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-31",
    hunt_reports_count: 2,
    observation_reports_count: 19,
    damage_reports_count: 1
  },
  {
    created_date: "2023-01-30",
    hunt_reports_count: 2,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-29",
    hunt_reports_count: 0,
    observation_reports_count: 22,
    damage_reports_count: 2
  },
  {
    created_date: "2023-01-28",
    hunt_reports_count: 0,
    observation_reports_count: 45,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-27",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 3
  },
  {
    created_date: "2023-01-26",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 2
  },
  {
    created_date: "2023-01-25",
    hunt_reports_count: 0,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-01-24",
    hunt_reports_count: 0,
    observation_reports_count: 31,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-23",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-22",
    hunt_reports_count: 0,
    observation_reports_count: 21,
    damage_reports_count: 10
  },
  {
    created_date: "2023-01-21",
    hunt_reports_count: 0,
    observation_reports_count: 28,
    damage_reports_count: 1
  },
  {
    created_date: "2023-01-20",
    hunt_reports_count: 1,
    observation_reports_count: 14,
    damage_reports_count: 4
  },
  {
    created_date: "2023-01-19",
    hunt_reports_count: 7,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2023-01-18",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-17",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-16",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-15",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-14",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-13",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-12",
    hunt_reports_count: 1,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-11",
    hunt_reports_count: 0,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2023-01-10",
    hunt_reports_count: 0,
    observation_reports_count: 20,
    damage_reports_count: 1
  },
  {
    created_date: "2023-01-09",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-08",
    hunt_reports_count: 0,
    observation_reports_count: 34,
    damage_reports_count: 2
  },
  {
    created_date: "2023-01-07",
    hunt_reports_count: 0,
    observation_reports_count: 42,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-06",
    hunt_reports_count: 0,
    observation_reports_count: 33,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-05",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-04",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-03",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-02",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2023-01-01",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-31",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-30",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-29",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-28",
    hunt_reports_count: 0,
    observation_reports_count: 27,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-27",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-26",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-25",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-24",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-23",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-22",
    hunt_reports_count: 0,
    observation_reports_count: 14,
    damage_reports_count: 2
  },
  {
    created_date: "2022-12-21",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-20",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-19",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-18",
    hunt_reports_count: 0,
    observation_reports_count: 30,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-17",
    hunt_reports_count: 0,
    observation_reports_count: 39,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-16",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-15",
    hunt_reports_count: 0,
    observation_reports_count: 14,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-14",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-13",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-12",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-11",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-10",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-09",
    hunt_reports_count: 0,
    observation_reports_count: 19,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-08",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-07",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-06",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-05",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-04",
    hunt_reports_count: 0,
    observation_reports_count: 13,
    damage_reports_count: 1
  },
  {
    created_date: "2022-12-03",
    hunt_reports_count: 0,
    observation_reports_count: 33,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-02",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2022-12-01",
    hunt_reports_count: 0,
    observation_reports_count: 20,
    damage_reports_count: 2
  },
  {
    created_date: "2022-11-30",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-29",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-28",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-27",
    hunt_reports_count: 1,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-26",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-25",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-24",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-23",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 3
  },
  {
    created_date: "2022-11-22",
    hunt_reports_count: 0,
    observation_reports_count: 15,
    damage_reports_count: 1
  },
  {
    created_date: "2022-11-21",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-20",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-19",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2022-11-18",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-17",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 2
  },
  {
    created_date: "2022-11-16",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-14",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-13",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-12",
    hunt_reports_count: 1,
    observation_reports_count: 7,
    damage_reports_count: 6
  },
  {
    created_date: "2022-11-11",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-10",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-09",
    hunt_reports_count: 1,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-08",
    hunt_reports_count: 1,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-07",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-06",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-11-05",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 1
  },
  {
    created_date: "2022-11-04",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-03",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-02",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-11-01",
    hunt_reports_count: 2,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-31",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-29",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-28",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-10-27",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-26",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-25",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-24",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-10-23",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-22",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-21",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-10-20",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-17",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-16",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 3
  },
  {
    created_date: "2022-10-15",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 2
  },
  {
    created_date: "2022-10-14",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-13",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-10-12",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-11",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-09",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-08",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-10-07",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-05",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-04",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-02",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-10-01",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-30",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-29",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-28",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-27",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-26",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-25",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-09-24",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-23",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-22",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-21",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-20",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-19",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-18",
    hunt_reports_count: 1,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-17",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-16",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-15",
    hunt_reports_count: 1,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-14",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-13",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-09-12",
    hunt_reports_count: 0,
    observation_reports_count: 15,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-11",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-10",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-09",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-08",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-07",
    hunt_reports_count: 1,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-06",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-05",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-04",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-03",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 1
  },
  {
    created_date: "2022-09-02",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2022-09-01",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-08-30",
    hunt_reports_count: 1,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-29",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-28",
    hunt_reports_count: 2,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-08-27",
    hunt_reports_count: 1,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-08-26",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-25",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-08-24",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-23",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-22",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-21",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-20",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-19",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-08-17",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-16",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-15",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-13",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-12",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-11",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-09",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-08",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-08-07",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-08-04",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-08-03",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 4
  },
  {
    created_date: "2022-08-02",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-08-01",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-31",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-30",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-07-29",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-28",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-27",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-26",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-07-25",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-24",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-23",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-07-22",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-20",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-19",
    hunt_reports_count: 1,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-18",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 3
  },
  {
    created_date: "2022-07-17",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-07-16",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-15",
    hunt_reports_count: 2,
    observation_reports_count: 3,
    damage_reports_count: 3
  },
  {
    created_date: "2022-07-14",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-13",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-07-11",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-10",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-09",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 1
  },
  {
    created_date: "2022-07-08",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-07",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 3
  },
  {
    created_date: "2022-07-06",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-05",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-04",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-07-03",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-07-01",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-30",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-06-29",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-27",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-26",
    hunt_reports_count: 1,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-25",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-24",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-23",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-21",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-20",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-19",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-18",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-17",
    hunt_reports_count: 1,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-16",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-06-15",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 2
  },
  {
    created_date: "2022-06-14",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-13",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 1
  },
  {
    created_date: "2022-06-12",
    hunt_reports_count: 2,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-11",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-10",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-06-09",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-06-08",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-07",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-06",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-05",
    hunt_reports_count: 1,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-04",
    hunt_reports_count: 1,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-06-03",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-31",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 1
  },
  {
    created_date: "2022-05-30",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-29",
    hunt_reports_count: 1,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-05-28",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-27",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-26",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-25",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 3
  },
  {
    created_date: "2022-05-24",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-23",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-22",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 6
  },
  {
    created_date: "2022-05-21",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-20",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-19",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-18",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-05-17",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-05-16",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-15",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-14",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-13",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-12",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-05-11",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-05-10",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-09",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-05-08",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 2
  },
  {
    created_date: "2022-05-07",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 3
  },
  {
    created_date: "2022-05-06",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-05",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 2
  },
  {
    created_date: "2022-05-04",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-05-03",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 3
  },
  {
    created_date: "2022-05-02",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 2
  },
  {
    created_date: "2022-05-01",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-30",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-29",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-04-28",
    hunt_reports_count: 0,
    observation_reports_count: 17,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-27",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-26",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-04-25",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 6
  },
  {
    created_date: "2022-04-23",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-22",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-04-21",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-19",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 1
  },
  {
    created_date: "2022-04-18",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 5
  },
  {
    created_date: "2022-04-17",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-04-16",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-15",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 9
  },
  {
    created_date: "2022-04-14",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-04-13",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-12",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-11",
    hunt_reports_count: 1,
    observation_reports_count: 6,
    damage_reports_count: 3
  },
  {
    created_date: "2022-04-10",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2022-04-09",
    hunt_reports_count: 5,
    observation_reports_count: 1,
    damage_reports_count: 3
  },
  {
    created_date: "2022-04-08",
    hunt_reports_count: 1,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-04-07",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 2
  },
  {
    created_date: "2022-04-06",
    hunt_reports_count: 0,
    observation_reports_count: 14,
    damage_reports_count: 7
  },
  {
    created_date: "2022-04-05",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2022-04-04",
    hunt_reports_count: 2,
    observation_reports_count: 4,
    damage_reports_count: 3
  },
  {
    created_date: "2022-04-03",
    hunt_reports_count: 1,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-04-02",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 3
  },
  {
    created_date: "2022-04-01",
    hunt_reports_count: 1,
    observation_reports_count: 16,
    damage_reports_count: 4
  },
  {
    created_date: "2022-03-31",
    hunt_reports_count: 1,
    observation_reports_count: 15,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-30",
    hunt_reports_count: 2,
    observation_reports_count: 16,
    damage_reports_count: 5
  },
  {
    created_date: "2022-03-29",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-28",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-03-27",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 5
  },
  {
    created_date: "2022-03-26",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-25",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 4
  },
  {
    created_date: "2022-03-24",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 1
  },
  {
    created_date: "2022-03-23",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 3
  },
  {
    created_date: "2022-03-22",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-21",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 4
  },
  {
    created_date: "2022-03-20",
    hunt_reports_count: 1,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2022-03-19",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 5
  },
  {
    created_date: "2022-03-18",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 5
  },
  {
    created_date: "2022-03-17",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-03-16",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 1
  },
  {
    created_date: "2022-03-15",
    hunt_reports_count: 2,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-03-14",
    hunt_reports_count: 2,
    observation_reports_count: 5,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-13",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-03-12",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-11",
    hunt_reports_count: 0,
    observation_reports_count: 28,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-10",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2022-03-09",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-03-08",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 3
  },
  {
    created_date: "2022-03-07",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 7
  },
  {
    created_date: "2022-03-06",
    hunt_reports_count: 1,
    observation_reports_count: 7,
    damage_reports_count: 0
  },
  {
    created_date: "2022-03-05",
    hunt_reports_count: 1,
    observation_reports_count: 9,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-04",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-03",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 2
  },
  {
    created_date: "2022-03-02",
    hunt_reports_count: 1,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-03-01",
    hunt_reports_count: 1,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-28",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-27",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-26",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 10
  },
  {
    created_date: "2022-02-25",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-24",
    hunt_reports_count: 0,
    observation_reports_count: 18,
    damage_reports_count: 3
  },
  {
    created_date: "2022-02-23",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-22",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-21",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-20",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 10
  },
  {
    created_date: "2022-02-19",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 4
  },
  {
    created_date: "2022-02-18",
    hunt_reports_count: 0,
    observation_reports_count: 14,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-17",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 1
  },
  {
    created_date: "2022-02-16",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-15",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-02-14",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-13",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 3
  },
  {
    created_date: "2022-02-12",
    hunt_reports_count: 0,
    observation_reports_count: 37,
    damage_reports_count: 1
  },
  {
    created_date: "2022-02-11",
    hunt_reports_count: 0,
    observation_reports_count: 10,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-10",
    hunt_reports_count: 0,
    observation_reports_count: 14,
    damage_reports_count: 3
  },
  {
    created_date: "2022-02-09",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 7
  },
  {
    created_date: "2022-02-08",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-07",
    hunt_reports_count: 0,
    observation_reports_count: 7,
    damage_reports_count: 1
  },
  {
    created_date: "2022-02-06",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 2
  },
  {
    created_date: "2022-02-05",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-04",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-02-03",
    hunt_reports_count: 0,
    observation_reports_count: 23,
    damage_reports_count: 1
  },
  {
    created_date: "2022-02-02",
    hunt_reports_count: 0,
    observation_reports_count: 38,
    damage_reports_count: 3
  },
  {
    created_date: "2022-02-01",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-30",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-29",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 1
  },
  {
    created_date: "2022-01-28",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-27",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 1
  },
  {
    created_date: "2022-01-26",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-23",
    hunt_reports_count: 0,
    observation_reports_count: 11,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-22",
    hunt_reports_count: 0,
    observation_reports_count: 8,
    damage_reports_count: 1
  },
  {
    created_date: "2022-01-21",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-20",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-19",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2022-01-18",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-17",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-16",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-15",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2022-01-14",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-13",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-12",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-11",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-10",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-09",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-08",
    hunt_reports_count: 0,
    observation_reports_count: 9,
    damage_reports_count: 2
  },
  {
    created_date: "2022-01-07",
    hunt_reports_count: 2,
    observation_reports_count: 0,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-06",
    hunt_reports_count: 6,
    observation_reports_count: 57,
    damage_reports_count: 1
  },
  {
    created_date: "2022-01-05",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2022-01-04",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2022-01-03",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-31",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-30",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-29",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-28",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-27",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 2
  },
  {
    created_date: "2021-12-26",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-25",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-23",
    hunt_reports_count: 0,
    observation_reports_count: 17,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-22",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 1
  },
  {
    created_date: "2021-12-19",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-18",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-17",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2021-12-14",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 5
  },
  {
    created_date: "2021-12-10",
    hunt_reports_count: 4,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-09",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-08",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-07",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-06",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-12-05",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-29",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-28",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-26",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-24",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-22",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-20",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-18",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-15",
    hunt_reports_count: 0,
    observation_reports_count: 12,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-13",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-12",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-11",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 1
  },
  {
    created_date: "2021-11-09",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-08",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-05",
    hunt_reports_count: 0,
    observation_reports_count: 0,
    damage_reports_count: 1
  },
  {
    created_date: "2021-11-04",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-11-01",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-31",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-30",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-28",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-27",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-26",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 1
  },
  {
    created_date: "2021-10-25",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-24",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-19",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-14",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-13",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-12",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 2
  },
  {
    created_date: "2021-10-10",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-08",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-07",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-05",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-10-01",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-30",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-29",
    hunt_reports_count: 0,
    observation_reports_count: 6,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-27",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-25",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 2
  },
  {
    created_date: "2021-09-20",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-18",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-17",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-14",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-12",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-07",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-04",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-03",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-02",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2021-09-01",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2021-08-24",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2021-08-23",
    hunt_reports_count: 0,
    observation_reports_count: 2,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-31",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-29",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-25",
    hunt_reports_count: 0,
    observation_reports_count: 4,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-21",
    hunt_reports_count: 0,
    observation_reports_count: 3,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-20",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-19",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-17",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-05",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-07-03",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  },
  {
    created_date: "2021-06-29",
    hunt_reports_count: 0,
    observation_reports_count: 5,
    damage_reports_count: 0
  },
  {
    created_date: "2021-06-28",
    hunt_reports_count: 0,
    observation_reports_count: 1,
    damage_reports_count: 0
  }
];

// damages.json
var damages_default = [
  {
    created: "2021-09-25",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2021-10-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2021-10-26",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2021-11-05",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2021-11-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2021-12-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2021-12-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2021-12-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2021-12-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-01-04",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-01-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-01-06",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-01-08",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-01-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-01-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-01-22",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-01-27",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-01-29",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-02-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-02",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-02-03",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-02-06",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-02-07",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-02-08",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-02-08",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2022-02-09",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-02-10",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-02-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-11",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-02-12",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-02-13",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-02-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-19",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-02-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-02-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-02-20",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-20",
    type: "Me\u017Es",
    count: 9
  },
  {
    created: "2022-02-21",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-02-21",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-02-22",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-02-24",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-02-24",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-02-26",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2022-02-26",
    type: "Me\u017Es",
    count: 8
  },
  {
    created: "2022-02-28",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-01",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-03",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-04",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2022-03-05",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-07",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-03-07",
    type: "Me\u017Es",
    count: 6
  },
  {
    created: "2022-03-08",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-03-08",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-09",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-10",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-11",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-12",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-03-14",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-16",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-03-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-03-18",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-03-19",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2022-03-21",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2022-03-21",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-03-22",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-03-23",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-03-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-03-25",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2022-03-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-03-25",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-03-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2022-03-28",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-29",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-03-29",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-03-30",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2022-03-31",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-04-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2022-04-01",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2022-04-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-04-04",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-05",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-06",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-04-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2022-04-06",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-07",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-04-09",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-04-10",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-04-11",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-04-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-04-12",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-13",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-04-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-04-15",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2022-04-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 7
  },
  {
    created: "2022-04-16",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-04-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2022-04-19",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-04-21",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-04-21",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-04-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-04-25",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2022-04-27",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-04-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-04-28",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-04-30",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-05-01",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-05-01",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-05-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-05-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-05-03",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-05-05",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-05-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-05-07",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-05-08",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-05-09",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-05-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-05-12",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-05-17",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-05-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-05-18",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-05-22",
    type: "Me\u017Es",
    count: 6
  },
  {
    created: "2022-05-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-05-25",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-05-29",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-05-31",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-06-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-06-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-06-13",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-06-15",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-06-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-06-30",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-07-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-07-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-07-07",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-07-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-07-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-07-13",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-07-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2022-07-17",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-07-18",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2022-07-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-07-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-07-30",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-08-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-08-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2022-08-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-08-08",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-08-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-08-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-08-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-08-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-13",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-09-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-16",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-09-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-22",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-09-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-09-25",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2022-10-08",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2022-10-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-10-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-10-16",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-10-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-10-21",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-10-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-10-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-11-05",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-11-06",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-11-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-11-12",
    type: "Me\u017Es",
    count: 6
  },
  {
    created: "2022-11-17",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-11-17",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-11-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-11-22",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-11-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2022-12-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2022-12-04",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-12-05",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-12-15",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-12-19",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2022-12-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2022-12-22",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-12-24",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-12-29",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-12-30",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2022-12-31",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-01-08",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-01-10",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-01-11",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-01-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-01-20",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-01-21",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-01-22",
    type: "Me\u017Es",
    count: 10
  },
  {
    created: "2023-01-25",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-01-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-01-26",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-01-27",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-01-29",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-01-31",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-03",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-05",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-07",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-02-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-02-07",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-02-13",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-16",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-02-18",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-21",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-02-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-02-22",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-02-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-02-23",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-02-24",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-02-28",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-02-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-02-28",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-01",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-03-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-03",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-06",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-07",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-03-08",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-09",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-03-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-11",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-12",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 7
  },
  {
    created: "2023-03-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-14",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-03-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-03-15",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-03-16",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-03-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-03-16",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-03-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-03-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-03-18",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-03-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-20",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-03-22",
    type: "Me\u017Es",
    count: 9
  },
  {
    created: "2023-03-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 8
  },
  {
    created: "2023-03-24",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-03-25",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-03-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2023-03-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-03-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-03-29",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-03-29",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-03-30",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-03-31",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-03-31",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-04-01",
    type: "Infrastrukt\u016Bra",
    count: 3
  },
  {
    created: "2023-04-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-04-01",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-04-02",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-04-02",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-04-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-04-03",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-04-04",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 9
  },
  {
    created: "2023-04-04",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-04-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-04-05",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-04-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-07",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-04-07",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2023-04-08",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-08",
    type: "Me\u017Es",
    count: 11
  },
  {
    created: "2023-04-09",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-04-09",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-04-10",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-04-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-04-12",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-04-13",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-14",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-14",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-04-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-15",
    type: "Me\u017Es",
    count: 6
  },
  {
    created: "2023-04-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-04-16",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-04-17",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-17",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-04-18",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-04-18",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-04-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-04-20",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2023-04-20",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2023-04-21",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-04-22",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-04-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-04-23",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-04-24",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-24",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2023-04-25",
    type: "Infrastrukt\u016Bra",
    count: 3
  },
  {
    created: "2023-04-25",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2023-04-26",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-04-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-04-26",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-04-27",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-04-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 9
  },
  {
    created: "2023-04-27",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-04-28",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-04-29",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-04-30",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-04-30",
    type: "Me\u017Es",
    count: 9
  },
  {
    created: "2023-05-01",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-05-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-05-01",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-05-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-05-02",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-05-03",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-05-03",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-05-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-04",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-05-05",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-05-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-05-06",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-05-07",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-05-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-10",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-05-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-05-10",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-05-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-05-11",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-05-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-05-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-14",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-05-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-05-17",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-05-18",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-05-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-05-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-05-20",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-05-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-05-24",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-05-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-05-27",
    type: "Infrastrukt\u016Bra",
    count: 5
  },
  {
    created: "2023-05-27",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-05-28",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-05-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-05-29",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-05-31",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-01",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-06-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-06-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-06-07",
    type: "Infrastrukt\u016Bra",
    count: 4
  },
  {
    created: "2023-06-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 17
  },
  {
    created: "2023-06-07",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-08",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-06-09",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-10",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-06-12",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-06-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-13",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-15",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-06-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-06-22",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-06-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-25",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-06-29",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-06-30",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-04",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-12",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-07-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-07-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-17",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-07-19",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-07-21",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-22",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-07-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-07-28",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-07-29",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-07-29",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-07-31",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-08-01",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-08-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-05",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-08-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-08-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2023-08-08",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-08-09",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-08-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-12",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-08-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-08-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-08-17",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-08-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-08-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-08-21",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-21",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-08-22",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-08-23",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-08-23",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-08-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-08-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-08-27",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-08-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-09-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-01",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-09-05",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-09-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-09-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-09-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-13",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-09-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-09-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-19",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-09-20",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-09-20",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-22",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-09-22",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-09-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-24",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-09-24",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-09-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-09-26",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-09-27",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-09-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-09-29",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-09-30",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-10-01",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-10-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-10-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-10-07",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-10-08",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-10-08",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-08",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-10-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-10-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2023-10-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2023-10-20",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-22",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-10-23",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-23",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-10-26",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-10-28",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-29",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-10-30",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-10-31",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-11-01",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-11-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-11-05",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2023-11-06",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-11-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-11-06",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-11-08",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-11-08",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-11-10",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-11-10",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-11-11",
    type: "Me\u017Es",
    count: 11
  },
  {
    created: "2023-11-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-11-12",
    type: "Me\u017Es",
    count: 14
  },
  {
    created: "2023-11-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-11-13",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2023-11-14",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-11-17",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-11-18",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-11-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-11-19",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-11-20",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-11-20",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2023-11-25",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-11-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 9
  },
  {
    created: "2023-11-29",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-11-30",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-03",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-12-04",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-12-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-12-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2023-12-06",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 12
  },
  {
    created: "2023-12-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 7
  },
  {
    created: "2023-12-07",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-12-08",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-09",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2023-12-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-12-09",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 8
  },
  {
    created: "2023-12-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2023-12-17",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-12-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2023-12-19",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2023-12-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2023-12-19",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2023-12-20",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-21",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2023-12-22",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-26",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-28",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2023-12-29",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-01-01",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-04",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-10",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-11",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-13",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-01-13",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2024-01-13",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-01-14",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-01-14",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-01-15",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-01-16",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2024-01-16",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-01-17",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-01-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 5
  },
  {
    created: "2024-01-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2024-01-20",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2024-01-20",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2024-01-21",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-01-21",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-01-21",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2024-01-23",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-01-25",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-27",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2024-01-27",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-29",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-01-30",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-01-31",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2024-01-31",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-01",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-02-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-03",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-02-05",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2024-02-05",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-08",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-09",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-02-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2024-02-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-14",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-02-14",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-15",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2024-02-16",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-17",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-02-18",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 4
  },
  {
    created: "2024-02-18",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-02-19",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-20",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-22",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2024-02-24",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-02-24",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-24",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-25",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-02-26",
    type: "Infrastrukt\u016Bra",
    count: 6
  },
  {
    created: "2024-02-26",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-26",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-02-27",
    type: "Infrastrukt\u016Bra",
    count: 4
  },
  {
    created: "2024-02-27",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2024-02-28",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-02-29",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-02-29",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-03-01",
    type: "Infrastrukt\u016Bra",
    count: 3
  },
  {
    created: "2024-03-01",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2024-03-01",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-03-02",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-03-02",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-03-02",
    type: "Me\u017Es",
    count: 5
  },
  {
    created: "2024-03-03",
    type: "Infrastrukt\u016Bra",
    count: 3
  },
  {
    created: "2024-03-03",
    type: "Me\u017Es",
    count: 10
  },
  {
    created: "2024-03-04",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-03-04",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 2
  },
  {
    created: "2024-03-06",
    type: "Me\u017Es",
    count: 2
  },
  {
    created: "2024-03-07",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-03-07",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-03-08",
    type: "Infrastrukt\u016Bra",
    count: 1
  },
  {
    created: "2024-03-08",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-03-09",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 1
  },
  {
    created: "2024-03-09",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-03-10",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2024-03-10",
    type: "Me\u017Es",
    count: 1
  },
  {
    created: "2024-03-11",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 6
  },
  {
    created: "2024-03-11",
    type: "Me\u017Es",
    count: 6
  },
  {
    created: "2024-03-12",
    type: "Lauksaimniec\u012Bb\u0101 izmantojam\u0101s zemes (LIZ)",
    count: 3
  },
  {
    created: "2024-03-12",
    type: "Me\u017Es",
    count: 3
  },
  {
    created: "2024-03-13",
    type: "Me\u017Es",
    count: 4
  },
  {
    created: "2024-03-14",
    type: "Infrastrukt\u016Bra",
    count: 2
  },
  {
    created: "2024-03-14",
    type: "Me\u017Es",
    count: 3
  }
];

// observations.json
var observations_default = [
  {
    created: "2021-06-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-06-29",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-06-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-07-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-07-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-07-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-07-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-07-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-07-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2021-07-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-07-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2021-07-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-08-23",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2021-08-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-09-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-09-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2021-09-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2021-09-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2021-09-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-09-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-09-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-09-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-09-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-09-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-09-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-09-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-09-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2021-09-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-01",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-10-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-10-08",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2021-10-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2021-10-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-10-12",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-10-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2021-10-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-10-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2021-10-19",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-10-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2021-10-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-26",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2021-10-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-10-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2021-10-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-10-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-10-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-11-01",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-11-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-11-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-11-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-11-12",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-11-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2021-11-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-11-15",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-11-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2021-11-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-11-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2021-11-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-11-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-11-24",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-11-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-11-26",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-11-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-11-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2021-12-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2021-12-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2021-12-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-12-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-12-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2021-12-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-12-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2021-12-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-12-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-12-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2021-12-27",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-12-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2021-12-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2021-12-28",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2021-12-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2021-12-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2021-12-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-01-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-01-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-01-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-01-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-01-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 27
  },
  {
    created: "2022-01-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 29
  },
  {
    created: "2022-01-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-01-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-01-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-01-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-01-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-01-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2022-01-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-01-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-01-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-01-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-01-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-01-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-01-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-01-18",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-01-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-01-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-01-19",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-01-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-01-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-01-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-01-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-01-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2022-01-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-01-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-27",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-01-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-28",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-01-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-01-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-01-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-02-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-02-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2022-02-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2022-02-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 19
  },
  {
    created: "2022-02-03",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-02-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2022-02-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2022-02-04",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-02-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-02-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-02-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-02-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-02-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-02-07",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-02-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-02-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-02-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-02-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2022-02-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-02-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2022-02-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-02-11",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-02-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-02-12",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 36
  },
  {
    created: "2022-02-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2022-02-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-02-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-02-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-02-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-02-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-02-16",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-02-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-02-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-02-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2022-02-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2022-02-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-02-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-02-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-02-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-02-22",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-02-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-02-23",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-02-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2022-02-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2022-02-24",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-02-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-02-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2022-02-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-26",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-02-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-02-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-02-27",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-02-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-02-28",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-02-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-03-01",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-03-02",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-03-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-03-03",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-03-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2022-03-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-03-05",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-03-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-03-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-03-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-03-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-03-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-03-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-03-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-03-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-03-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-03-11",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2022-03-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2022-03-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-03-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-03-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-03-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-03-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-03-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-03-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-03-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2022-03-17",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-03-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-03-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-03-19",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-03-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-03-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-03-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2022-03-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-03-22",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2022-03-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-03-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-03-24",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-03-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-03-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-03-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-03-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-03-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-03-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-03-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-03-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-03-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2022-03-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-03-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2022-04-01",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-04-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-04-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2022-04-02",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-04-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-04-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-04-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-04-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-04-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-04-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-04-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-04-06",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-04-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2022-04-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-04-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-04-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-04-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-04-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-04-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-04-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-04-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-04-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-04-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-04-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-04-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-04-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-04-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-04-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-15",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-04-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-04-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-04-16",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-04-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-04-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-04-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-21",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-04-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-04-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-04-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-04-26",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-04-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-04-27",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-04-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-04-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-04-28",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-04-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2022-04-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-04-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-04-30",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-04-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-04-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-05-01",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-05-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-05-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-05-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-05-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-04",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-05",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-05-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-05-09",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-11",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-05-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-05-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-15",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-16",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-05-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-18",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-19",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2022-05-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-20",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-05-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-22",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-05-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-05-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-05-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-05-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-05-26",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-27",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-05-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-05-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-05-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-05-30",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-03",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-06-05",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-06-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-06-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-06-07",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-06-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-06-08",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-06-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-06-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-06-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-06-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-06-12",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-06-13",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-06-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-06-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-15",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-06-16",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-06-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2022-06-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-06-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-06-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-06-21",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-06-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-06-23",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-06-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-06-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-06-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-06-27",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-06-29",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-06-30",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-06-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-06-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-07-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-07-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-07-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2022-07-15",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-07-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-18",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-07-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-07-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2022-07-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-07-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-24",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-26",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-28",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-07-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-07-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-07-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-08-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-04",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-07",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-08-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-08-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-08-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-08-15",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-08-19",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-08-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-08-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-08-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2022-08-24",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-08-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-26",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-08-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2022-08-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-08-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-08-29",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-08-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-09-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-09-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-09-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2022-09-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-09-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2022-09-05",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-09-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-09-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2022-09-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-09-09",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-10",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-09-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-09-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-09-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2022-09-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-09-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-09-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-09-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-09-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-09-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-09-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2022-09-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-09-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-09-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-09-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-09-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-09-28",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-09-29",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-09-30",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-09-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-10-01",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-10-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-04",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-05",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-11",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-12",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-10-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-10-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-16",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-20",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2022-10-21",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-24",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-10-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-25",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-10-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-27",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-10-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-28",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-10-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-10-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-10-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-10-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-11-01",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-02",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-11-03",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-11-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2022-11-05",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-11-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-11-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-07",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-11-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-11-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-09",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-11-11",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-12",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-11-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-11-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-11-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-11-16",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-11-18",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-19",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-11-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-11-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-11-21",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-11-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-11-22",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2022-11-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-11-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-11-24",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2022-11-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-11-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-11-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-11-26",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-11-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-11-27",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-11-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2022-11-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-11-29",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2022-11-30",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-11-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2022-12-01",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2022-12-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2022-12-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-12-02",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-12-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2022-12-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-03",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-12-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 26
  },
  {
    created: "2022-12-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2022-12-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2022-12-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-05",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2022-12-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2022-12-07",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-12-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-08",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-12-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2022-12-09",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2022-12-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2022-12-10",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-12-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2022-12-11",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-12-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2022-12-12",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-12-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2022-12-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-12-15",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-12-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2022-12-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-12-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2022-12-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 32
  },
  {
    created: "2022-12-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-12-18",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-12-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2022-12-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2022-12-19",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2022-12-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-12-20",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2022-12-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2022-12-21",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-12-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2022-12-22",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-12-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2022-12-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2022-12-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2022-12-25",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2022-12-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2022-12-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2022-12-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2022-12-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2022-12-27",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2022-12-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2022-12-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-28",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2022-12-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 24
  },
  {
    created: "2022-12-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-29",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2022-12-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 14
  },
  {
    created: "2022-12-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2022-12-30",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2022-12-31",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2022-12-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2022-12-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-01-02",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-01-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-03",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-01-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-04",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-01-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-01-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 32
  },
  {
    created: "2023-01-07",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 35
  },
  {
    created: "2023-01-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-01-08",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-01-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 30
  },
  {
    created: "2023-01-09",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-01-10",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-01-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-01-11",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 18
  },
  {
    created: "2023-01-12",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-01-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-01-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-01-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-14",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-01-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-01-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-01-16",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-01-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-01-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-01-18",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-01-19",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2023-01-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-20",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-01-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-01-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-21",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 24
  },
  {
    created: "2023-01-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-01-22",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 20
  },
  {
    created: "2023-01-23",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-01-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2023-01-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-01-24",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-01-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 22
  },
  {
    created: "2023-01-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-01-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2023-01-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 23
  },
  {
    created: "2023-01-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-01-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 44
  },
  {
    created: "2023-01-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2023-01-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-01-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-01-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-01-31",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-01-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 18
  },
  {
    created: "2023-02-01",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-02-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-02-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-02-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 18
  },
  {
    created: "2023-02-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-02-03",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-02-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2023-02-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-02-04",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-02-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 26
  },
  {
    created: "2023-02-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-02-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 45
  },
  {
    created: "2023-02-06",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 27
  },
  {
    created: "2023-02-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-02-07",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-02-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 35
  },
  {
    created: "2023-02-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2023-02-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-02-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 33
  },
  {
    created: "2023-02-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-02-09",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-02-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 23
  },
  {
    created: "2023-02-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-02-10",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-02-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-02-11",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-02-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-02-12",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2023-02-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-02-13",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-02-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-02-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-02-14",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 20
  },
  {
    created: "2023-02-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-02-15",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-02-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2023-02-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-02-16",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-02-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-02-17",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-02-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2023-02-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-02-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2023-02-19",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-02-20",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-02-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2023-02-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-02-21",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-02-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2023-02-22",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-02-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 18
  },
  {
    created: "2023-02-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-02-23",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-02-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-02-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 22
  },
  {
    created: "2023-02-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-02-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-02-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-02-26",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-02-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-02-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-02-27",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-02-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2023-02-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-02-28",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-02-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2023-02-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2023-03-01",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-03-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2023-03-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 17
  },
  {
    created: "2023-03-02",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2023-03-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2023-03-03",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-03-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-03-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-03-04",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-03-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-03-05",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-03-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-03-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-03-06",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-03-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2023-03-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-03-07",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-03-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 23
  },
  {
    created: "2023-03-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-03-08",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-03-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-03-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-03-09",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-03-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-03-10",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-03-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 22
  },
  {
    created: "2023-03-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-03-11",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-03-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-03-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-03-12",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-03-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 20
  },
  {
    created: "2023-03-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-03-13",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-03-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2023-03-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-03-14",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-03-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-03-15",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-03-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2023-03-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-03-16",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-03-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-03-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 26
  },
  {
    created: "2023-03-17",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-03-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2023-03-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 15
  },
  {
    created: "2023-03-18",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-03-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 18
  },
  {
    created: "2023-03-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-03-19",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-03-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2023-03-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-03-20",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-03-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-03-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-03-21",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-03-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-03-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-03-22",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-03-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-03-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-03-23",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-03-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-03-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-03-24",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-03-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-03-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-03-25",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-03-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-03-26",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-03-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-03-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-03-27",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-03-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-03-28",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-03-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2023-03-29",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-03-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 28
  },
  {
    created: "2023-03-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-03-30",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-03-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-03-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-03-31",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-03-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-03-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-04-01",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-04-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 14
  },
  {
    created: "2023-04-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 17
  },
  {
    created: "2023-04-02",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-04-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-04-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 15
  },
  {
    created: "2023-04-03",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-04-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-04-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-04-04",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-04-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-04-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-04-05",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-04-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-04-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-06",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-04-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2023-04-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-04-07",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-04-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2023-04-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-04-08",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-04-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-04-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-04-09",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-04-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-04-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-04-10",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-04-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-04-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-04-11",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-04-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-04-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-04-12",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-04-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-04-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-04-13",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-04-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-04-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-14",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-04-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-04-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-15",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-04-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-04-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-04-16",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-04-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-04-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-04-17",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-04-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-04-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-04-18",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-04-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-04-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-19",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-04-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-04-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-04-20",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-04-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-04-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-21",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-04-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-04-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-04-22",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-04-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-04-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-23",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-04-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-04-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-04-24",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-04-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-04-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-04-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-04-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-04-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-04-26",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-04-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-04-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-04-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-04-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-04-28",
    type: "Boj\u0101 g\u0101jis",
    count: 11
  },
  {
    created: "2023-04-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-04-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-04-29",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-04-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2023-04-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-04-30",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-04-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-04-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-05-01",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-05-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-05-02",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-03",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2023-05-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-04",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-05-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 18
  },
  {
    created: "2023-05-05",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-05-06",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-05-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-05-07",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-05-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-08",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-05-09",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-05-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-05-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-05-10",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-05-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-05-11",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-05-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-12",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-05-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-05-13",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-05-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-05-14",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-05-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-05-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-05-15",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-05-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2023-05-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-05-16",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-05-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-05-17",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-18",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-05-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-05-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2023-05-19",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-05-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-20",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-05-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-21",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-05-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-05-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-05-22",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-05-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-05-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2023-05-23",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-05-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-05-24",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-05-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-05-25",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-05-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-05-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-05-26",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-05-27",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-05-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-05-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-05-28",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-05-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-05-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-05-29",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-05-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-05-30",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-05-31",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-05-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-05-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-06-01",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-06-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-06-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-06-02",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-06-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-06-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-06-03",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-06-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-06-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2023-06-04",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-06-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-06-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-06-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-06-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-06-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-06-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-06-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 16
  },
  {
    created: "2023-06-07",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-06-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-06-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2023-06-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-06-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-06-09",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-06-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-06-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-06-10",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-06-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-06-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-06-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2023-06-12",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-06-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-06-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-06-13",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-06-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-06-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-06-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-06-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-06-15",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-06-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-06-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-06-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-06-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-06-17",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-06-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-06-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 15
  },
  {
    created: "2023-06-18",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-06-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-06-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-06-19",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-06-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-06-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-06-20",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-06-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-06-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-06-21",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-06-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-06-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-06-22",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-06-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-06-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-06-23",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-06-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-06-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-06-24",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-06-25",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-06-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-06-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-06-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-06-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-06-27",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-06-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-06-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-06-28",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-06-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-06-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-06-29",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-06-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-06-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-06-30",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-06-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-06-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-07-01",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-07-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-07-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-07-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-07-03",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-07-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 17
  },
  {
    created: "2023-07-04",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-07-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-07-05",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 16
  },
  {
    created: "2023-07-06",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-07-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-07-07",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-07-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-07-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-07-08",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-07-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-07-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-07-09",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-07-10",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-07-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-07-11",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-07-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-07-12",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-07-13",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-07-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 22
  },
  {
    created: "2023-07-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-07-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-07-15",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-07-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-07-16",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-07-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 17
  },
  {
    created: "2023-07-17",
    type: "Boj\u0101 g\u0101jis",
    count: 12
  },
  {
    created: "2023-07-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-07-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-07-18",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-07-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2023-07-19",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-07-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 18
  },
  {
    created: "2023-07-20",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-07-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-07-21",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-07-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-07-22",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-07-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-07-23",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-07-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-07-24",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-07-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-07-25",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-07-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-07-26",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-07-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-07-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 15
  },
  {
    created: "2023-07-27",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-07-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2023-07-28",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-07-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 15
  },
  {
    created: "2023-07-29",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-07-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-07-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-07-30",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-07-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-07-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-07-31",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-07-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-08-01",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-08-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-08-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-08-02",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-08-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-08-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-08-03",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-08-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-08-04",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-08-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-08-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-08-05",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-08-06",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-07",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-08-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-08-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-08-08",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-08-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-08-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-08-09",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-08-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-08-10",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-08-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-08-11",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-08-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-08-12",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-08-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-08-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-08-13",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-08-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-08-14",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-08-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-08-15",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-08-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-08-16",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-08-17",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-08-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-08-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-08-18",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-08-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-08-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-08-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-08-20",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-08-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-08-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-08-21",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-08-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-08-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-08-22",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-08-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-08-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-08-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-08-24",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 15
  },
  {
    created: "2023-08-25",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-08-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-08-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-08-26",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-08-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-08-27",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-08-28",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-08-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-08-29",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-08-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-08-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-08-30",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-08-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-08-31",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-08-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-09-01",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-09-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-09-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-09-02",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-09-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-09-03",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-09-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-09-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-09-04",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-09-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-09-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-09-05",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-09-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-09-06",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-09-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-09-07",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-09-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-09-08",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-09-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-09-09",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-09-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-09-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 11
  },
  {
    created: "2023-09-10",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-09-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-09-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-09-11",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-09-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-09-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-09-12",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-09-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-09-13",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-09-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-09-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-09-14",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-09-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-09-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-09-15",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-09-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-09-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-09-16",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-09-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-09-17",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-09-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2023-09-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-09-18",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-09-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-09-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-09-19",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-09-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-09-20",
    type: "Boj\u0101 g\u0101jis",
    count: 12
  },
  {
    created: "2023-09-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-09-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-09-21",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-09-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-09-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-09-22",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-09-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-09-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-09-23",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-09-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-09-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-09-24",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-09-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-09-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-09-25",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-09-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-09-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-09-26",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-09-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-09-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-09-27",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-09-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-09-28",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-09-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-09-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-09-29",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-09-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-09-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-09-30",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-09-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-09-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-10-01",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-10-02",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-10-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-10-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-03",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-10-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-10-04",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-10-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-05",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-10-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-10-06",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-10-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-10-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-07",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-10-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-10-08",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-10-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-10-09",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-10-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-10-10",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-10-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-10-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-12",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-10-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-10-13",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-10-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-10-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-10-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-10-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-10-15",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-10-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-10-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-16",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-10-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-10-17",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-10-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-10-18",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-10-19",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-10-20",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-10-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-10-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-21",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-10-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-10-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-22",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-10-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-10-23",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-10-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-10-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-10-24",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-10-25",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-10-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-10-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-10-27",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-10-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-10-28",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 14
  },
  {
    created: "2023-10-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-10-29",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-10-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-10-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-10-30",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-10-31",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-10-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-10-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-11-01",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-11-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-11-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-11-02",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-11-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-11-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-11-03",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-11-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-11-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-04",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-11-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 10
  },
  {
    created: "2023-11-05",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-11-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-11-06",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-11-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-11-07",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-11-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-11-08",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-11-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-11-09",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-11-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-11-10",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-11-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-11-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-11-11",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-11-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-11-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-12",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-11-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-11-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-11-13",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-11-14",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-11-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-11-15",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-11-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-16",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-11-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-11-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-11-17",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-11-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2023-11-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-11-18",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-11-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2023-11-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-19",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-11-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-11-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-11-20",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-11-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-11-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-21",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2023-11-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-11-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-22",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-11-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-11-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-23",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-11-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-11-24",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-11-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2023-11-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-11-25",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-11-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 18
  },
  {
    created: "2023-11-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-11-26",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-11-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 24
  },
  {
    created: "2023-11-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-11-27",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2023-11-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-11-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-11-28",
    type: "Boj\u0101 g\u0101jis",
    count: 11
  },
  {
    created: "2023-11-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-11-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-11-29",
    type: "Boj\u0101 g\u0101jis",
    count: 12
  },
  {
    created: "2023-11-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 34
  },
  {
    created: "2023-11-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-11-30",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-11-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-11-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-01",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-12-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-12-02",
    type: "Boj\u0101 g\u0101jis",
    count: 14
  },
  {
    created: "2023-12-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 24
  },
  {
    created: "2023-12-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2023-12-03",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 29
  },
  {
    created: "2023-12-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2023-12-04",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-12-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-12-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-05",
    type: "Boj\u0101 g\u0101jis",
    count: 13
  },
  {
    created: "2023-12-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-12-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-12-06",
    type: "Boj\u0101 g\u0101jis",
    count: 14
  },
  {
    created: "2023-12-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 14
  },
  {
    created: "2023-12-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2023-12-07",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-12-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-12-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-12-08",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-12-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2023-12-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-12-09",
    type: "Boj\u0101 g\u0101jis",
    count: 11
  },
  {
    created: "2023-12-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 35
  },
  {
    created: "2023-12-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-12-10",
    type: "Boj\u0101 g\u0101jis",
    count: 24
  },
  {
    created: "2023-12-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2023-12-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-11",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-12-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2023-12-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-12-12",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2023-12-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 9
  },
  {
    created: "2023-12-13",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-12-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-12-14",
    type: "Boj\u0101 g\u0101jis",
    count: 10
  },
  {
    created: "2023-12-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2023-12-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2023-12-15",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-12-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2023-12-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-12-16",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2023-12-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2023-12-17",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2023-12-18",
    type: "Boj\u0101 g\u0101jis",
    count: 12
  },
  {
    created: "2023-12-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2023-12-19",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-12-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-12-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-12-20",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-12-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-12-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-21",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2023-12-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2023-12-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-12-22",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2023-12-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-23",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2023-12-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2023-12-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-12-24",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-12-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 20
  },
  {
    created: "2023-12-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-25",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-12-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-12-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2023-12-26",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2023-12-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2023-12-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-27",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2023-12-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2023-12-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-28",
    type: "Boj\u0101 g\u0101jis",
    count: 8
  },
  {
    created: "2023-12-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 20
  },
  {
    created: "2023-12-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2023-12-29",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2023-12-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2023-12-30",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2023-12-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2023-12-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2023-12-31",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2023-12-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2023-12-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-01",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2024-01-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-02",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2024-01-03",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2024-01-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-04",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-01-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2024-01-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-01-05",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-01-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2024-01-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-06",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-01-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2024-01-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-07",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-01-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 27
  },
  {
    created: "2024-01-08",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-01-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2024-01-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-09",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 25
  },
  {
    created: "2024-01-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2024-01-10",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-01-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 26
  },
  {
    created: "2024-01-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-01-11",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2024-01-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2024-01-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-12",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-01-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2024-01-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-01-13",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 61
  },
  {
    created: "2024-01-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2024-01-14",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 36
  },
  {
    created: "2024-01-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-01-15",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-01-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2024-01-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-16",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-01-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2024-01-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-01-17",
    type: "Boj\u0101 g\u0101jis",
    count: 11
  },
  {
    created: "2024-01-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 27
  },
  {
    created: "2024-01-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-01-18",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-01-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2024-01-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 12
  },
  {
    created: "2024-01-19",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-01-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 29
  },
  {
    created: "2024-01-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2024-01-20",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-01-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 38
  },
  {
    created: "2024-01-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-01-21",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-01-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 38
  },
  {
    created: "2024-01-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-22",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-01-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2024-01-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-23",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-01-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2024-01-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-24",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-01-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2024-01-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-01-25",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-01-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2024-01-25",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-26",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 46
  },
  {
    created: "2024-01-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-01-27",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-01-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 64
  },
  {
    created: "2024-01-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 13
  },
  {
    created: "2024-01-28",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-01-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 39
  },
  {
    created: "2024-01-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-01-29",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-01-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 15
  },
  {
    created: "2024-01-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-01-30",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-01-30",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2024-01-30",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2024-01-31",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-01-31",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 13
  },
  {
    created: "2024-01-31",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-02-01",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-02-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2024-02-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-02",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-02-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 19
  },
  {
    created: "2024-02-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 14
  },
  {
    created: "2024-02-03",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-02-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2024-02-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-02-04",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-02-04",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 1
  },
  {
    created: "2024-02-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2024-02-05",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-02-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2024-02-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-02-06",
    type: "Boj\u0101 g\u0101jis",
    count: 14
  },
  {
    created: "2024-02-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 36
  },
  {
    created: "2024-02-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-02-07",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2024-02-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2024-02-08",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2024-02-09",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-02-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 43
  },
  {
    created: "2024-02-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-10",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-02-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 49
  },
  {
    created: "2024-02-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2024-02-11",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-02-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 37
  },
  {
    created: "2024-02-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 8
  },
  {
    created: "2024-02-12",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-02-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 22
  },
  {
    created: "2024-02-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-13",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 22
  },
  {
    created: "2024-02-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2024-02-14",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-02-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 32
  },
  {
    created: "2024-02-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-15",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-02-15",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 33
  },
  {
    created: "2024-02-15",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-16",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2024-02-16",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 21
  },
  {
    created: "2024-02-16",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-02-17",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 11
  },
  {
    created: "2024-02-17",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-02-18",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-02-18",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 16
  },
  {
    created: "2024-02-18",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-02-19",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-02-19",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 17
  },
  {
    created: "2024-02-19",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2024-02-20",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-02-20",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2024-02-20",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2024-02-21",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-21",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 20
  },
  {
    created: "2024-02-21",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-02-22",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-22",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2024-02-22",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 5
  },
  {
    created: "2024-02-23",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-02-23",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2024-02-23",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-24",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-24",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 7
  },
  {
    created: "2024-02-24",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2024-02-25",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-02-25",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2024-02-26",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-02-26",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2024-02-26",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-02-27",
    type: "Boj\u0101 g\u0101jis",
    count: 9
  },
  {
    created: "2024-02-27",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2024-02-27",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-02-28",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-02-28",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2024-02-28",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-02-29",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-02-29",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2024-02-29",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-03-01",
    type: "Boj\u0101 g\u0101jis",
    count: 1
  },
  {
    created: "2024-03-01",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2024-03-01",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-03-02",
    type: "Boj\u0101 g\u0101jis",
    count: 7
  },
  {
    created: "2024-03-02",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 12
  },
  {
    created: "2024-03-02",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-03-03",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-03-03",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2024-03-03",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 3
  },
  {
    created: "2024-03-04",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-03-04",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 7
  },
  {
    created: "2024-03-05",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-03-05",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2024-03-05",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-03-06",
    type: "Boj\u0101 g\u0101jis",
    count: 5
  },
  {
    created: "2024-03-06",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 2
  },
  {
    created: "2024-03-06",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-03-07",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-03-07",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 6
  },
  {
    created: "2024-03-07",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-03-08",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-03-08",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 4
  },
  {
    created: "2024-03-08",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  },
  {
    created: "2024-03-09",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-03-09",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 10
  },
  {
    created: "2024-03-09",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 2
  },
  {
    created: "2024-03-10",
    type: "Boj\u0101 g\u0101jis",
    count: 3
  },
  {
    created: "2024-03-10",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 9
  },
  {
    created: "2024-03-10",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-03-11",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-03-11",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2024-03-11",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-03-12",
    type: "Boj\u0101 g\u0101jis",
    count: 6
  },
  {
    created: "2024-03-12",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 8
  },
  {
    created: "2024-03-12",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 4
  },
  {
    created: "2024-03-13",
    type: "Boj\u0101 g\u0101jis",
    count: 4
  },
  {
    created: "2024-03-13",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 5
  },
  {
    created: "2024-03-13",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 6
  },
  {
    created: "2024-03-14",
    type: "Boj\u0101 g\u0101jis",
    count: 2
  },
  {
    created: "2024-03-14",
    type: "Kl\u0101tb\u016Btnes paz\u012Bmes",
    count: 3
  },
  {
    created: "2024-03-14",
    type: "Tie\u0161i nov\u0113roti dz\u012Bvnieki",
    count: 1
  }
];

// app/routes/data.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Data() {
  return /* @__PURE__ */ jsxDEV5("div", { children: [
    /* @__PURE__ */ jsxDEV5(Damage, { data: damages_default, name: "Post\u012Bjumi" }, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(Observation, { data: observations_default, name: "Nov\u0113rojumi" }, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(ReportCount, { data: report_count_default, name: "Atskai\u0161u skaits" }, void 0, !1, {
      fileName: "app/routes/data.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/data.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VZ2GH3HJ.css";

// app/root.jsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  return /* @__PURE__ */ jsxDEV6("html", { children: [
    /* @__PURE__ */ jsxDEV6("head", { children: [
      /* @__PURE__ */ jsxDEV6(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("body", { children: [
      /* @__PURE__ */ jsxDEV6(Data, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FNEF5SA3.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-IPYOIGGJ.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-4D7OSIIX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UXCLT57L.js", imports: ["/build/_shared/chunk-TZWUCY5I.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/data": { id: "routes/data", parentId: "root", path: "data", index: void 0, caseSensitive: void 0, module: "/build/routes/data-335CT5SJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "7fd0ae7e", hmr: { runtime: "/build/_shared\\chunk-4D7OSIIX.js", timestamp: 1711091411185 }, url: "/build/manifest-7FD0AE7E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/data": {
    id: "routes/data",
    parentId: "root",
    path: "data",
    index: void 0,
    caseSensitive: void 0,
    module: data_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
