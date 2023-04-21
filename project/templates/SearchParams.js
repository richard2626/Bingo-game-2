import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <div>
          <input id="button1" type="button" value="submit"></input>
          <input id="button2" type="button" value="submit"></input>
          <input id="button3" type="button" value="submit"></input>
          <input id="button4" type="button" value="submit"></input>
          <input id="button5" type="button" value="submit"></input>
          <input id="button6" type="button" value="submit"></input>
          <input id="button7" type="button" value="submit"></input>
          <input id="button8" type="button" value="submit"></input>
          <input id="button9" type="button" value="submit"></input>
          <input id="button10" type="button" value="submit"></input>
          <input id="button11" type="button" value="submit"></input>
          <input id="button12" type="button" value="submit"></input>
          <input id="button13" type="button" value="submit"></input>
          <input id="button14" type="button" value="submit"></input>
          <input id="button15" type="button" value="submit"></input>
          <input id="button16" type="button" value="submit"></input>
          <input id="button17" type="button" value="submit"></input>
          <input id="button18" type="button" value="submit"></input>
          <input id="button19" type="button" value="submit"></input>
          <input id="button20" type="button" value="submit"></input>
          <input id="button21" type="button" value="submit"></input>
          <input id="button22" type="button" value="submit"></input>
          <input id="button23" type="button" value="submit"></input>
          <input id="button24" type="button" value="submit"></input>
          <input id="button25" type="button" value="submit"></input>
        </div>

        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => updateLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
