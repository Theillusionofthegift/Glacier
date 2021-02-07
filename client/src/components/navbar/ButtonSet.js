import { React } from 'react'
import './ButtonSet.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";


function ButtonSet() {
  return (
    <div className="btn-group" >
        <Button type="button" class="btn btn-primary">Sell</Button>
        <Button type="button" class="btn btn-primary">Login</Button>
        <Button type="button" class="btn btn-primary">Sign Up</Button>
    </div>
  );
}

export default ButtonSet;