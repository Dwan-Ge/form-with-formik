import { withFormik } from "formik";
import { validationSchema } from "./validator";
import { HelloForm } from "./HelloForm";
// *组件*HelloForm参数的接口
export interface IHelloFormProps {
  data?: IHelloFormDetail;
}

// HelloForm 表单所有的属性
export interface IHelloFormDetail {
  id?: string;
  name: string;
}

const DefaultHelloFormDetail = {
  id: "",
  name: "",
};

export default withFormik<IHelloFormProps, IHelloFormDetail>({
  mapPropsToValues: (props) => {
    //从组件参数props中取来数据
    const data: IHelloFormDetail | undefined = props.data;
    if (data) {
      return data;
    }
    return DefaultHelloFormDetail;
  },
  enableReinitialize: true, //该属性保证数据能正常渲染进表单里
  validationSchema: validationSchema,
  handleSubmit: async (values) => {
    console.log("value: ", values);
  },
  displayName: "IHelloForm",
})(HelloForm);
