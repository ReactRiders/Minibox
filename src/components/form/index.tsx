import { httpClient, queryBuilder } from '@/utils';
import { formHelpers } from '@/utils/form-helper';

import { ReactNode, FC } from 'react';

import { Form, Formik, FormikConfig } from 'formik';
import { isFunction } from 'lodash';
import { Schema } from 'yup';

interface Field {
  name: string;
  value?: any;
  validationType?: string;
  validations?: any[];
  lazy?: (validator: any, yup: any) => any;
  submitKey?: string;
  onSubmitValue?: (value: any, values: any) => any;
  isLanguageSchema?: boolean;
}

interface FormContainerProps {
  url: string;
  method?: 'post' | 'put';
  params?: { [keys: string]: any };
  children: (formik: any) => ReactNode;
  isFormData?: boolean;
  fields?: Field[];
  normalizeData?: (createdValues: any) => any;
  axiosConfig?: any;
  onSuccess?: (data: any) => void;
  onError?: () => void;
  onFinal?: () => void;
  customData?: any;
  onSubmit?: (value: any, formHelper: any) => void;
  validateOnMount?: boolean;
  validate?: (values: any) => void | object | Promise<any>;
  dataWrapper?: boolean;
}

export const CustomForm: FC<FormContainerProps> = ({
  url,
  params,
  method = 'post',
  children,
  isFormData = false,
  fields = [],
  normalizeData,
  axiosConfig = {},
  onSuccess = () => {},
  onError = () => {},
  onFinal = () => {},
  customData = {},
  onSubmit,
  dataWrapper = false,
  validateOnMount = false,
  validate,
  ...formProps
}) => {
  const { initialValues, validationSchema } = formHelpers.createFormSchema(fields);

  const handleSubmit = async (values: any, formHelper: any) => {
    try {
      const formValues = formHelpers.getFormValues(values, fields, isFormData, normalizeData);
      const requestUrl = params ? queryBuilder(url, params) : url;
      const { data } = await httpClient[method](
        requestUrl,
        dataWrapper
          ? { imageUrls: { ...formValues, ...customData } }
          : { ...formValues, ...customData },
        axiosConfig
      );
      formHelper.resetForm();
      onSuccess(data);
    } catch (err: any) {
      console.log(err);
    } finally {
      formHelper.setSubmitting(false);
      onFinal();
    }
  };

  const formikConfig: FormikConfig<any> = {
    initialValues,
    validationSchema: validationSchema as Schema,
    validateOnMount,
    enableReinitialize: true,
    validate,
    onSubmit: (value, formHelper) => {
      isFunction(onSubmit) ? onSubmit(value, formHelper) : handleSubmit(value, formHelper);
    },
  };

  return (
    <Formik {...formikConfig}>{(formik) => <Form {...formProps}>{children(formik)}</Form>}</Formik>
  );
};
