import Button from "../button/Button"

function DropdownInput() {
  return (
    <div>
      <div class="dropdown input-append btn-group">
        <Button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Eth <span class="caret"></span>
        </Button>
        <input class="span2" id="appendedInputButton" size="16" type="text" />
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  )
}

export default DropdownInput
