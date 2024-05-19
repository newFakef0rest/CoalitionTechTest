type TSystolic = {
  value: number;
  levels: string;
};

// type TDiastolic = {
//   value: number,
//   levels: string
// }

type TBloodPressure = {
  systolic: TSystolic;
  diastolic: TSystolic;
};

type THistory = {
  month: string;
  year: number;
  blood_pressure: TBloodPressure;
  heart_rate: TSystolic;
  respiratory_rate: TSystolic;
  temperature: TSystolic;
};

export type TList = {
  name: string;
  description: string;
  status: string;
};

export type TPatients = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: THistory[];
  diagnostic_list: TList[];
  lab_results: string[];
};

export type ItemsProps = {
  items?: TPatients[];
};

export type CardProps = {
  className?: string;
  image: string;
  title: string;
  value: string;
};

export type LineProps = {
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  newArray: THistory[];
};

export type ActiveContextProps = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};
