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
  hunt_reports_count: "#FF5733",
  observation_reports_count: "#33FF57",
  damage_reports_count: "#3366FF",
};

const CustomTooltip = ({ payload, legendVisibility }) => {
  let total = 0;
  payload.forEach((entry) => {
    total += entry.value;
  });
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "10px",
        position: "relative",
      }}
    >
      <p>{payload.length > 0 ? payload[0].payload.created_date : ""}</p>
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
      <p>Kopā: {total}</p>
    </div>
  );
};

export default function ReportCount({ data, name }) {
  const [selectedRange, setSelectedRange] = React.useState("1year");
  const [legendVisibility, setLegendVisibility] = React.useState({
    hunt_reports_count: true,
    observation_reports_count: true,
    damage_reports_count: true,
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

  const filteredData = dateRange.map((date) => {
    const foundItem = data.find((item) => {
      const formattedDate = formatDate(item.created_date);
      return formattedDate === date;
    });
    return foundItem
      ? {
          ...foundItem,
          created_date: formatDate(foundItem.created_date),
        }
      : {
          created_date: date,
        };
  });
  console.log(filteredData);
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-semibold text-2xl font-semibold flex justify-center items-center">
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
        height={500}
        data={filteredData}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_date" />
        <YAxis />
        <Tooltip
          content={<CustomTooltip legendVisibility={legendVisibility} />}
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
