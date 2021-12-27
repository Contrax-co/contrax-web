import { useState } from "react";
import { B1 } from "../../text/Text";
import { ListSubTitle, StyledDropBtn, StyledInput, StyledListBtn, StyledSearch } from "./DropdownInput.styles";

function DropdownInput(props) {
  const {items, searchable, label } = props;
  const [selected, setSelected] = useState(props.value || null)
  const [filtered, setFiltered] = useState(items)

  const onSelect = (item) => {
    props.onSelect && props.onSelect(item);
    setSelected(item);
  }

  const onSearch = (e)=>{
    const str = e.target.value;
    setFiltered(items.filter((item)=> item.title.toLowerCase().indexOf(str.toLowerCase()) > -1));
  }
  return (
    <div className={`dropdown-input ${props.className}`} >
      {label && <B1>{label}</B1>}
      <div className="dropdown input-append btn-group">
        <StyledDropBtn className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {selected && selected.title} <span className="caret"></span>
        </StyledDropBtn>
        <StyledInput size="16" type={props.inputType || 'text'} placeholder={props.placeholder} {...{disabled: props.disabled}}/>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {searchable && <li><StyledSearch onChange={onSearch} size="16" className='form-control' type="text" placeholder='Search here...' /></li>}
          {
            filtered && filtered.map(item => {
             return (
              <li>
                <StyledListBtn 
                  className="dropdown-item" 
                  onClick={()=>{onSelect(item)}}>
                    {item.title} {item.subTitle && <ListSubTitle>{item.subTitle}</ListSubTitle>}
                </StyledListBtn>
              </li>
             )  
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default DropdownInput
