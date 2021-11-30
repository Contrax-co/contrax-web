import { useState } from "react";
import Button from "../button/Button";
import { StyledInput, StyledSearch, Subtitle } from "./DropdownInput.styles";

function DropdownInput(props) {
  const {items, searchable } = props;
  const [selected, setSelected] = useState(props.value || null)

  const onSelect = (item) => {
    props.onSelect(item);
    setSelected(item);
  }
  return (
    <div className="dropdown-input">
      <div class="dropdown input-append btn-group">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {selected && selected.title} <span class="caret"></span>
        </button>
        <StyledInput size="16" type="text" />
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {searchable && <li><StyledSearch size="16" className='form-control' type="text" placeholder='Search here...' /></li>}
          {/* {searchable && <li><input size="16" className='form-control' type="text" placeholder='Search here...' /></li>} */}
          {
            items && items.map(item => {
             return (
              <li>
                <button 
                  class="dropdown-item" 
                  onClick={()=>{onSelect(item)}}>
                    {item.title} {item.subTitle && <Subtitle className='subtitle'>{item.subTitle}</Subtitle>}
                </button>
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
