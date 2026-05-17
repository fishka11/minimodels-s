import React, { useEffect, useState } from "react";
import { useClient } from "sanity";

export function viewsDashboardWidget() {
  return {
    name: "views-dashboard",
    component: ViewsDashboard,
    layout: { width: "full" },
  };
}

function ViewsDashboard() {
  const client = useClient();
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await client.fetch(`
        *[_type == "model"]{
          _id,
          name,
          slug,
          viewsAll,
          viewsHuman
        } | order(viewsAll desc)
      `);
      setModels(data);
    }
    load();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Statystyki odsłon modeli</h2>

      <table
        style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={th}>Model</th>
            <th style={th}>Slug</th>
            <th style={th}>Wszystkie wejścia</th>
            <th style={th}>Wejścia (bez botów)</th>
          </tr>
        </thead>
        <tbody>
          {models.map((m) => (
            <tr key={m._id}>
              <td style={td}>{m.name}</td>
              <td style={td}>{m.slug?.current}</td>
              <td style={td}>{m.viewsAll ?? 0}</td>
              <td style={td}>{m.viewsHuman ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  borderBottom: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

const td = {
  borderBottom: "1px solid #eee",
  padding: "8px",
};
