import Button from "../button/Button";
import { H3 } from "../text/Text";
import { StyledCrossBtn, StyledModalContent, StyledModalDialog } from "./Modal.styles";
import crossImage from "../../images/cross.svg";
import { Image } from "../image/Image";

export const Modal = (props) => {
  const {
    onClose,
    onOk,
    children,
    title,
    okLabel,
    closeLabel,
    ...remainingProps
  } = props;
  return (
    <div className="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true" {...remainingProps}>
      <StyledModalDialog>
        <StyledModalContent>
          <div className="modal-header">
            <H3 className="modal-title">{title}</H3>
            <StyledCrossBtn type="button" className="btn-close" data-bs-dismiss="modal" onClick={onClose} aria-label="Close">
              <Image src={crossImage} alt='close' />
            </StyledCrossBtn>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <Button type="button" className="btn btn-secondary" onClick={onClose} data-bs-dismiss="modal">{closeLabel ? closeLabel : 'Close'}</Button>
            <Button type="button" className="btn btn-primary" onClick={onOk}>{okLabel ? okLabel : 'OK'}</Button>
          </div>
        </StyledModalContent>
      </StyledModalDialog>
    </div>
  )
}
