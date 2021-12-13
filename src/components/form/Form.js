import { Desc } from "../text/Text";
import { StyledCheckbox, StyledForm, StyledInput } from "./Form.styles";

export const Form = (props) => {
  const {
    children,
    ...remainingProps
  } = props;

  return (
    <StyledForm {...remainingProps} >{children}</StyledForm>
  );
}

export const FormInput = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    label,
    className,
    inputClassName,
    type,
    ...remainingProps
  } = props;

  return (
    <div className={props.className}>
      {label && <Desc value={label} variant={'dark'} />}
      <StyledInput
        variant={variant}
        onClick={!onClick ? undefined : onClick}
        className='form-control'
        type={type || 'text'}
        {...remainingProps}
      >
      </StyledInput>
    </div>
  );
};

export const FormCheckbox = (props) => {
  const {
    variant,
    value,
    onClick,
    children,
    label,
    className,
    inputClassName,
    ...remainingProps
  } = props;

  return (
    <div className={props.className}>
      <label style={{ display: 'block' }}>
        <StyledCheckbox
          variant={variant}
          onClick={!onClick ? undefined : onClick}
          className='form-check-input'
          type='checkbox'
          {...remainingProps}
        />
        {label && <Desc value={label} variant={'dark'} />}
      </label>
    </div>
  );
};

