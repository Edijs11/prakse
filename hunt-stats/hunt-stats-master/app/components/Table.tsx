import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    const hunt_reports_count = payload[0].payload.hunt_reports_count;
    const observation_reports_count =
      payload[0].payload.observation_reports_count;
    const damage_reports_count = payload[0].payload.damage_reports_count;
    const count =
      hunt_reports_count + observation_reports_count + damage_reports_count;

    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          position: "relative",
        }}
      >
        <p>{label}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <p
            className="hunt_reports_count"
            style={{ color: "#82ca9d", margin: 0 }}
          >
            Medījumi:
          </p>
          <p style={{ color: "#82ca9d", margin: 0 }}>{hunt_reports_count}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <p
            className="observation_reports_count"
            style={{ color: "#8884d8", margin: 0 }}
          >
            Novērojumi:
          </p>
          <p style={{ color: "#8884d8", margin: 0 }}>
            {observation_reports_count}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <p
            className="damage_reports_count"
            style={{ color: "#FF0000", margin: 0 }}
          >
            Postījumi:
          </p>
          <p style={{ color: "#FF0000", margin: 0 }}>{damage_reports_count}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <p className="damage_reports_count" style={{ margin: 0 }}>
            Kopā:
          </p>
          <p style={{ margin: 0 }}>{count}</p>
        </div>
      </div>
    );
  }

  return null;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export default function Table({ data, name }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const twelveMonthsAgo = new Date();
  twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

  // Filter the data for the last 12 months
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.created_date);
    return itemDate >= twelveMonthsAgo;
  });

  return (
    <div>
      <h1>{name}</h1>
      <LineChart
        width={1500}
        height={500}
        data={filteredData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="created_date"
          reversed={true}
          tickFormatter={formatDate}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="hunt_reports_count"
          stroke="#82ca9d"
          dot={false}
          name="Medījumi"
        />
        <Line
          type="monotone"
          dataKey="observation_reports_count"
          stroke="#8884d8"
          dot={false}
          name="Postījumi"
        />
        <Line
          type="monotone"
          dataKey="damage_reports_count"
          stroke="#FF0000"
          dot={false}
          name="Novērojumi"
        />
      </LineChart>
      <br />
      <table>
        <thead>
          <tr>
            <th>Datums</th>
            <th>Medījumi</th>
            <th>Novērojumi</th>
            <th>Postījumi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{d.created_date}</td>
              <td>{d.hunt_reports_count}</td>
              <td>{d.observation_reports_count}</td>
              <td>{d.damage_reports_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
