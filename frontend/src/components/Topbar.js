import React, { useState } from 'react';
import '../styles/Topbar.css';

const Topbar = ({ onFetchData }) => {
  const [productId, setProductId] = useState('BTC-USD');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [granularity, setGranularity] = useState('FIVE_MINUTE');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchData(productId, startDate, endDate, granularity);
  };

  return (
    <div className="topbar">
      <form className="topbar__form" onSubmit={handleSubmit}>
        <label className="topbar__label">
          Product ID:
          <input
            className="topbar__input"
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>
        <label className="topbar__label">
          Start Date:
          <input
            className="topbar__input"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label className="topbar__label">
          End Date:
          <input
            className="topbar__input"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label className="topbar__label">
          Granularity:
          <select
            className="topbar__select"
            value={granularity}
            onChange={(e) => setGranularity(e.target.value)}
          >
            <option value="ONE_MINUTE">ONE_MINUTE</option>
            <option value="FIVE_MINUTE">FIVE_MINUTE</option>
            <option value="FIFTEEN_MINUTE">FIFTEEN_MINUTE</option>
            <option value="THIRTY_MINUTE">THIRTY_MINUTE</option>
            <option value="ONE_HOUR">ONE_HOUR</option>
            <option value="TWO_HOUR">TWO_HOUR</option>
            <option value="SIX_HOUR">SIX_HOUR</option>
            <option value="ONE_DAY">ONE_DAY</option>
          </select>
        </label>
        <button className="topbar__button" type="submit">Load Data</button>
      </form>
    </div>
  );
};

export default Topbar;