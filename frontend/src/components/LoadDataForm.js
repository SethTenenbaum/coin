import React, { useState } from 'react';
import '../styles/LoadDataForm.css';

const LoadDataForm = ({ onFetchData }) => {
  const [productId, setProductId] = useState('BTC-USD');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [granularity, setGranularity] = useState('FIVE_MINUTE');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchData(productId, startDate, endDate, granularity);
  };

  return (
    <div className="load-data-form">
      <form className="load-data-form__form" onSubmit={handleSubmit}>
        <label className="load-data-form__label">
          Product ID:
          <input
            className="load-data-form__input"
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>
        <label className="load-data-form__label">
          Start Date:
          <input
            className="load-data-form__input"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label className="load-data-form__label">
          End Date:
          <input
            className="load-data-form__input"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label className="load-data-form__label">
          Granularity:
          <select
            className="load-data-form__select"
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
        <button className="load-data-form__button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoadDataForm;