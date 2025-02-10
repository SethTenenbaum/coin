import React, { useState } from 'react';
import '../styles/Topbar.css';
import LoadDataForm from './LoadDataForm';

const Topbar = ({ onFetchData }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="topbar">
      <button className="topbar__button" onClick={toggleDropdown}>
        Load Data
      </button>
      {dropdownVisible && <LoadDataForm onFetchData={onFetchData} />}
    </div>
  );
};

export default Topbar;