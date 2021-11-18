import React, { Component } from "react";
import "./popup.css";

class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Criar Sessão</h3>
            <label>
              Selecione a data de inicio:
              <input type="date" name="data_ini" />
            </label>
            <br />
            <label>
              Selecione a hora de inicio:
              <input type="time" name="time_ini" />
            </label>
            <br />
            <label>
              Selecione a data de fim:
              <input type="date" name="data_fim" />
            </label>
            <br />
            <label>
              Selecione a hora de fim:
              <input type="time" name="time_fim" />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default PopUp;