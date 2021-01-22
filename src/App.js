import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/ui/Card';
import Search from './components/ui/Search'
import Header from './components/ui/Header'
//import Filter from './components/ui/Filter';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://api.enye.tech/v1/challenge/records`
      )
      setItems(result.data.records.profiles)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      {/* <Filter /> */}
      <Search getQuery={(q) => setQuery(q)} />
      <Card isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
