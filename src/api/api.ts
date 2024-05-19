import axios from "axios";
import { TPatients } from "../type";

const authString = btoa(`coalition:skills-test`);

export const getInfo = async () => {
  return (
    await axios.get<TPatients[]>(
      `https://fedskillstest.coalitiontechnologies.workers.dev/names`,
      {
        headers: { Authorization: `Basic ${authString}` },
      }
    )
  ).data;
};
