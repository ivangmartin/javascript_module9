import axios from "axios";

function getCharacter() {
return axios.get("https://breakingbadapi.com/api/characters")
.then((response) => {
    return response.data;
  });
}

export {getCharacter};