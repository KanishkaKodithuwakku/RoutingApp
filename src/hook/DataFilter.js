import { useState, useEffect } from "react";

const useDataFilter = (data, searchText, type) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilterdData] = useState([]);

  useEffect(() => {
    if (searchText || type) {
        setLoading(true);
        
        console.log("useDataFilter");

      const filtered = data.filter((d) => {
        return d.fullname?.includes(searchText) && d.gender === type;
      });
        setFilterdData(filtered);

        console.log(filtered);
        


    } else {
      setError("No data to filter");
      setFilterdData(data);
    }
  }, [searchText, type,data]);

  return { loading, error, filteredData };
};

export default useDataFilter;
