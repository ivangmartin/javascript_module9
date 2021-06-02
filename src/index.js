import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";


DataBusiness.getCharacter().then((characters) => {
    const nodes = [];
    document.getElementById("root").innerHTML = "";
    for (let character of characters) {
      const node = Utils.createCharacterRow(character);
      node.onclick = function () {
        Utils.showCharacter(character);
        };
      nodes.push(node);
    }
    for (let node of nodes) {
      document.getElementById("root").append(node);
    }
    
  });



    