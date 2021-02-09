import { React } from 'react'
import './ButtonSet.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import LoginButton from "./LoginButton.js"

function ButtonSet() {
  return (
    <div className="btn-group" >
        <Button type="button" class="btn btn-primary">Sell</Button>
    </div>
  );
}

export default ButtonSet;