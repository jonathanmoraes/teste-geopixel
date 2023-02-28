import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./item-picker.css";

function ItemPicker() {
  const [options, setOptions] = useState<string[]>([]);
  const [input, setInput] = useState("");

  //Responsavel por pegar qualquer evento dentro do input e salvar o value no estado input(setInput)
  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  //Responsavel por pegar qualquer evento dentro do options e salvar o value no estado options(setOpcoes)
  function onChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    //Adiciona.
    setInput(event.target.value);
  }

  //Verifica se o valor a ser adicionado ja existe, se não, adiciona o valor ao estado options(setOptions)
  function onAddOption() {
    const _unic = [...new Set([...options, input])];
    setOptions(_unic);
    setInput(""); //limpa o input
  }

  /*Filtra a opções contidas no options e retorna o array atualizado 
  sem o resultado do filter assim deletando a opção selecionada  */
  function onRemoveOption() {
    const newOptions = [...options];
    const optionsfilter = newOptions.filter((item) => item !== input);
    setOptions(optionsfilter);
    setInput(""); //limpa o input
  }

  return (
    <div className="itemPicker">
      <select
        className="select"
        name="seletor"
        placeholder="teste"
        onChange={onChangeSelect}
      >
        <option value="1">Selecione uma opção</option>
        {/*loop responsavel por reiderizar opções vindas do array options*/}
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <br />
      <div>
        <input
          className="inputText"
          type="text"
          value={input}
          placeholder="Insira um item"
          onChange={onChangeInput}
        />
      </div>
      <br />
      <div>
        <input
          className="addButon"
          type="button"
          value="Adicionar"
          onClick={onAddOption}
        />
        <input
          className="removeButon"
          type="button"
          value="Remover"
          onClick={onRemoveOption}
        />
        <input
          className="clearButon"
          type="button"
          value="Limpar caixa"
          onClick={() => setInput("")}
        />
      </div>
      <br />
      <h2>Selecione uma opção</h2>
    </div>
  );
}

export default ItemPicker;
