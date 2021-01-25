import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/ui/Card";
import Search from "./components/ui/Search";
import Header from "./components/ui/Header";
import Pagination from "./components/ui/Pagination";
//import Filter from './components/ui/Filter';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [profilePerPage] = useState(20);

  useEffect(() => {
    const fetchItems = async (input) => {
      setIsLoading(true);
      const result = await axios(`https://api.enye.tech/v1/challenge/records`);
      if (input !== "") {
        const filtered = result.data.records.profiles.filter((profile) => {
          return profile.FirstName.toLowerCase().includes(input.toLowerCase());
        });
        setItems(filtered);
      } else {
        setItems(result.data.records.profiles);
      }
      setIsLoading(false);
    };

    fetchItems(query);
  }, [query]);

  const indexOfLastProfile = currentPage * profilePerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilePerPage;
  const currentProfile = items.slice(indexOfFirstProfile, indexOfLastProfile);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header />
      {/* <Filter /> */}
      <Search getQuery={(q) => setQuery(q)} />
      <Card isLoading={isLoading} items={currentProfile} query={query} />
      <Pagination
        profilePerPage={profilePerPage}
        totalProfiles={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
