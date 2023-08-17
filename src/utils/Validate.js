const validate = {
  required: () => ({
    required: {
      value: true,
      message: 'Không được để trống',
    },
  }),
  maxLength: (value) => ({
    maxLength: {
      value,
      message: `Chiều dài tối đa ${value} kí tự`,
    },
  }),
  minLength: (value) => ({
    minLength: {
      value,
      message: `Chiều dài tối thiểu ${value} kí tự`,
    },
  }),
  email: () => ({
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Email không đúng định dạng',
    },
  }),
  url: () => ({
    pattern: {
      value:
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      message: 'URL không đúng định dạng',
    },
  }),
  number: () => ({
    pattern: {
      value: /^[0-9 ]+$/,
      message: 'Kí tự nhập vào phải là số',
    },
  }),
};

export default validate;
