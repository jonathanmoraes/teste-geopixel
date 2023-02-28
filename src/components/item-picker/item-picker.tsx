import { useState  } from "react";
function ItemPicker() {
  return (
    <div className="itemPicker">
      
      <div className="inputText">
        <input className="inputText" type="text" placeholder="Insira um item"/>
        <br />
        <br />
      </div>
      <div className="butons">
        <input type="button" value="Adicionar" />
        <input type="button" value="Remover" />
        <input type="button" value="Limpar caixa" />
      </div>
      <br />
      <div className="msg">Selecione uma opção</div>
    </div>
  );
}

export default ItemPicker;
