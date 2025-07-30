import React from 'react';

function App() {
  const heading = <h1>Office Space Rental Listings</h1>;

  const officeImage = "https://via.placeholder.com/400x200?text=Office+Image";

 const officeList = [
  { id: 1, name: "CoCreate Space", rent: 69500, address: "Kochi" },
  { id: 2, name: "InnoSquare", rent: 53000, address: "Trivandrum" },
  { id: 3, name: "ThinkTank Hub", rent: 81000, address: "Jaipur" },
  { id: 4, name: "CubeWorks Studios", rent: 47000, address: "Nagpur" }
];


  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}

      <img src={"https://images.unsplash.com/photo-1524758631624-e2822e304c36"} alt="Office" style={{ width: '400px', height: '200px', marginBottom: '20px' }} />

      <h2>Available Spaces:</h2>
      <ul>
        {officeList.map(office => (
          <li key={office.id} style={{ marginBottom: '10px' }}>
            <strong>{office.name}</strong> <br />
            Rent: <span style={getRentStyle(office.rent)}>{office.rent}</span><br />
            Address: {office.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;