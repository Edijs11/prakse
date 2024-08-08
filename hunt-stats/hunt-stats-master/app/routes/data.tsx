import React from "react";
import Damage from "../components/Damage";
import Observation from "../components/Observation";
import ReportCount from "../components/ReportCount";
import reports from "C:/Users/edijsskudra/Desktop/remix/report_count.json";
import damage from "C:/Users/edijsskudra/Desktop/remix/damages.json";
import obs from "C:/Users/edijsskudra/Desktop/remix/observations.json";
export default function Data() {
  return (
    <div>
      <Damage data={damage} name="Postījumi" />
      <Observation data={obs} name="Novērojumi" />
      <ReportCount data={reports} name="Atskaišu skaits" />
    </div>
  );
}
