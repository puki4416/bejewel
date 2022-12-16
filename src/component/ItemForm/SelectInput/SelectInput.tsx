import styles from "./SelectInput.module.css";

interface SelectInputProps {
  title: string;
  optionData: {
    value: string;
    viewData: string;
  }[];
  defaultValue: string;
  selectRef: React.RefObject<HTMLSelectElement>;
}

const SelectInput = ({
  title,
  optionData,
  defaultValue,
  selectRef,
}: SelectInputProps) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <select
        defaultValue={defaultValue}
        className={styles.select}
        ref={selectRef}
      >
        {optionData.map(({ value, viewData }) => {
          return (
            <option value={value} key={value}>
              {viewData}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default SelectInput;
