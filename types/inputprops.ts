export type TInputProps = {
  flag: boolean,
  text: string,
  setFlag: React.Dispatch<React.SetStateAction<{
    flag: boolean;
    text: string;
  }>>
}
