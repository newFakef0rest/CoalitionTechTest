import { createContext } from "react";
import { TPatients } from "../type";

export const StoreContext = createContext<TPatients[]>([]);
