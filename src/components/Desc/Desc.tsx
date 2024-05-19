import styles from "./Desc.module.scss";

type DescProps = {
  name: string;
  job: string;
};

export const Desc = ({ name, job }: DescProps) => {
  return (
    <div className={styles.desc}>
      <p>{name}</p>
      <span>{job}</span>
    </div>
  );
};
