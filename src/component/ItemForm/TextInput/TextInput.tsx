import styles from "./TextInput.module.css";

interface TextInputProps {
  title: string;
  placeholder: string;
  inputRef:
    | React.RefObject<HTMLInputElement>
    | React.RefObject<HTMLTextAreaElement>;
  type: string;
}

const TextInput = ({ title, placeholder, inputRef, type }: TextInputProps) => {
  return (
    <div key={title}>
      <h2 className={styles.title}>{title}</h2>
      {type === "input" ? (
        <input
          className={styles.input}
          placeholder={placeholder}
          ref={inputRef as React.RefObject<HTMLInputElement>}
        />
      ) : (
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        />
      )}
    </div>
  );
};

export default TextInput;
