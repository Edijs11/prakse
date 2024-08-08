import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = {
  "Lauksaimniecībā izmantojamās zemes (LIZ)": "#FF5733",
  Infrastruktūra: "#33FF57",
  Mežs: "#3366FF",
};

const CustomTooltip = ({ payload, legendVisibility, colors }) => {
  let total = 0;
  payload.forEach((entry) => {
    total += entry.value;
  });
  const date = payload.length > 0 ? payload[0].payload.created : "";

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        position: "relative",
      }}
    >
      <p>{date}</p>
      {payload.map((entry, index) => (
        <p
          key={index}
          style={{
            color: legendVisibility[entry.dataKey]
              ? colors[entry.dataKey]
              : `${colors[entry.dataKey]}80`,
          }}
        >
          {entry.dataKey}: {entry.value}
        </p>
      ))}
      <p>Total: {total}</p>
    </div>
  );
};

export default function Damage({ data, name }) {
  const [selectedRange, setSelectedRange] = React.useState("1year");
  const [legendVisibility, setLegendVisibility] = React.useState({
    "Lauksaimniecībā izmantojamās zemes (LIZ)": true,
    Infrastruktūra: true,
    Mežs: true,
  });

  const handleLegendClick = (type) => {
    setLegendVisibility((prevVisibility) => ({
      ...prevVisibility,
      [type]: !prevVisibility[type],
    }));
  };

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const today = new Date();
  let rangeStartDate;
  if (selectedRange === "1month") {
    rangeStartDate = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
  } else if (selectedRange === "3months") {
    rangeStartDate = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      today.getDate()
    );
  } else if (selectedRange === "6months") {
    rangeStartDate = new Date(
      today.getFullYear(),
      today.getMonth() - 6,
      today.getDate()
    );
  } else {
    // Default to 1 year
    rangeStartDate = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    );
  }

  const dateRange: string[] = [];
  for (
    let d = new Date(rangeStartDate);
    d <= today;
    d.setDate(d.getDate() + 1)
  ) {
    dateRange.push(formatDate(d.toISOString().split("T")[0]));
  }

  const groupedData: { [created: string]: { [type: string]: number } } = {};

  const filteredData = data.filter((item: { created: string }) => {
    const itemDate = new Date(item.created);
    return itemDate >= rangeStartDate && itemDate <= today;
  });

  filteredData.forEach(
    (item: { created: string; type: string; count: number }) => {
      const { created, type, count } = item;

      const formattedDate = formatDate(created);
      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = {};
      }
      if (!groupedData[formattedDate][type]) {
        groupedData[formattedDate][type] = count;
      } else {
        groupedData[formattedDate][type] += count;
      }
    }
  );

  // Convert groupedData to an array of objects
  const formattedGroupedData = dateRange.map((created) => ({
    created: created,
    ...(groupedData[created] || {}),
  }));
  // .filter((item) =>
  //   Object.keys(legendVisibility).some(
  //     (type) => legendVisibility[type] && item[type]
  //   )
  // );
  //console.log(formattedGroupedData);
  return (
    <div>
      <h1 className="text-2xl font-semibold flex justify-center items-center">
        {name}
      </h1>
      <form
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
        className="pr-11"
      >
        <div>
          <label className="px-1">
            <input
              type="radio"
              value="1month"
              checked={selectedRange === "1month"}
              onChange={handleRangeChange}
            />{" "}
            1 Mēnesis
          </label>
        </div>
        <div>
          <label className="px-1">
            <input
              type="radio"
              value="3months"
              checked={selectedRange === "3months"}
              onChange={handleRangeChange}
            />{" "}
            3 Mēneši
          </label>
        </div>
        <div>
          <label className="px-1">
            <input
              type="radio"
              value="6months"
              checked={selectedRange === "6months"}
              onChange={handleRangeChange}
            />{" "}
            6 Mēneši
          </label>
        </div>
        <div>
          <label className="px-1">
            <input
              type="radio"
              value="1year"
              checked={selectedRange === "1year"}
              onChange={handleRangeChange}
            />{" "}
            Gads
          </label>
        </div>
      </form>

      <BarChart
        width={1500}
        height={400}
        data={formattedGroupedData}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created" />
        <YAxis />
        <Tooltip
          content={
            <CustomTooltip
              legendVisibility={legendVisibility}
              colors={colors}
            />
          }
        />
        <Legend onClick={(e) => handleLegendClick(e.value)} />
        {Object.keys(legendVisibility).map((type) => (
          <Bar
            key={type}
            dataKey={type}
            fill={colors[type]}
            opacity={legendVisibility[type] ? 1 : 0.5}
          />
        ))}
      </BarChart>
    </div>
  );
}
