import React, { useState, useEffect } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import BoxContainer from "./Components/BoxContainer";
import Home from "./Components/Home";
import Filters from "./Components/Filters";
import Results from "./Components/Results";
import Footer from "./Components/Footer";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      capital
      currency
      continent {
        name
        code
      }
      languages {
        name
      }
    }
  }
`;

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [groupedCountries, setGroupedCountries] = useState({});
  const [selectedGroupOption, setSelectedGroupOption] = useState('continent');
  const [searched, setSearched] = useState(false);

  //obteniendo datos
  const { data } = useQuery(GET_COUNTRIES, { client: client });

  useEffect(() => {

    //agrupando por continente o idioma

    //retorna un objeto cuyas claves son los continentes o idiomas
    //los valores son un array con los respectivos países
    const groupByContinent = () => {
      return filteredCountries.reduce((acc, country) => {
        const group = country['continent'].name;
        acc[group] = [...(acc[group] || []), country];
        return acc;
      }, {});
    }

    const groupByLanguage = () => {
      return filteredCountries.reduce((acc, country) => {
        country['languages'].forEach(language => {
          acc[language.name] = [...acc[language.name] || [], country];
        });
        return acc;
      }, {});
    }

    setGroupedCountries(selectedGroupOption === "continent" ? groupByContinent() : groupByLanguage());

  }, [filteredCountries, selectedGroupOption])

  //filtrando países en base a la búsqueda del usuario
  const onSearch = event => {
    event.preventDefault();

    if (!searchTerm) return;

    const filtered = data.countries.filter(c => c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0);
    setFilteredCountries(searchTerm ? filtered : []);
    setSearched(true);
  }

  return (
    <BoxContainer>
      <Home
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
      <Filters selectedGroupOption={selectedGroupOption} setSelectedGroupOption={setSelectedGroupOption} />
      <Results groups={groupedCountries} searched={searched} />
      <Footer />
    </BoxContainer>
  )
};

export default App;
