import Button from "../button/Button";
import { Title } from "../text/Text";

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
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <Title className="modal-title">{title}</Title>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onClose} aria-label="Close"></Button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <Button type="button" className="btn btn-secondary" onClick={onClose} data-bs-dismiss="modal">{closeLabel ? closeLabel : 'Close'}</Button>
            <Button type="button" className="btn btn-primary" onClick={onOk}>{okLabel ? okLabel : 'OK'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
