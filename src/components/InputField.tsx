import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { FieldHookConfig, useField } from "formik";
import { FunctionComponent } from "react";

type InputFieldProps = TextFieldProps;

const InputField: FunctionComponent<
  InputFieldProps & FieldHookConfig<string>
> = (props) => {
  const [field, meta] = useField(props); // props?
  return <TextField {...props} value={field.value} onChange={field.onChange} />;
};

export default InputField;
