import React, { useState, useEffect } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Home from "./Components/Home";
import Filters from "./Components/Filters";
import Results from "./Components/Results";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const GET_COUNTRIES = gql`
  {
    countries {
      name
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

  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [groupedCountries, setGroupedCountries] = useState({});
  const [groupedParameter, setGroupedParameter] = useState("continent");
  const [searched, setSearched] = useState(false);

  const { data } = useQuery(GET_COUNTRIES, { client: client });

  useEffect(() => {
    setCountries((data || {}).countries);
  }, [data]);

  useEffect(() => {
    setGroupedCountries(groupedParameter === "continent" ? groupByContinent() : groupByLanguage());
  }, [filteredCountries, groupedParameter])

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

  const onSearch = event => {
    event.preventDefault();
    const filtered = countries.filter(c => c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0);
    setFilteredCountries(searchTerm ? filtered : []);
    setSearched(true);
  }

  return (
    <>
      <Home
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
      <Filters groupedParameter={groupedParameter} setGroupedParameter={setGroupedParameter}/>
      <Results groups={groupedCountries} searched={searched}/>
    </>
  )
};

export default App;
