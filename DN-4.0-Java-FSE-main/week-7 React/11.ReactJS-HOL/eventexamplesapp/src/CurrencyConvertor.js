import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');
  const [type, setType] = useState('INRtoEURO');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert('Please enter a valid amount');
      return;
    }

    const amt = parseFloat(amount);

    if (type === 'INRtoEURO') {
      const euro = amt / 90;
      setConverted(`€${euro.toFixed(2)}`);
    } else {
      const rupees = amt * 90;
      setConverted(`₹${rupees.toFixed(2)}`);
    }
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>

      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br /><br />

        <label>Convert: </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="INRtoEURO">INR to Euro</option>
          <option value="EUROtoINR">Euro to INR</option>
        </select>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {converted && (
        <p><strong>Converted: {converted}</strong></p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
