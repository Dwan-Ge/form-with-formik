import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import { FormikFormProps, FormikValues } from "formik";
import { FunctionComponent } from "react";
import { IHelloFormDetail } from ".";
import InputField from "../../../components/InputField";

export const HelloForm: FunctionComponent<
  FormikFormProps & FormikValues & { data: IHelloFormDetail }
> = (props) => {
  const { handleSubmit } = props;
  return (
    <Card
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <CardContent>
        <InputField name="name" variant="filled" />
      </CardContent>
      <CardActions>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
