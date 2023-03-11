import React from 'react'


const View = ({ data }) => {
  const dietaryRestrictions = {
    nutFree: 'Nuts Free',
    lactoseFree: 'Lactose Free',
    isVegan: 'Vegan',
  };
  return (
    <div>
      <p>First Name: {data?.first_name}</p>
      <p>Last Name: {data?.last_name}</p>
      <p>Gender: {data?.gender}</p>
      <p>Destination: {data?.destination}</p>
      {
      Object.entries(dietaryRestrictions).map(([restriction, label]) => (
        <div key={restriction}>
          <p>{label}: {data.dietary.includes(restriction) ? 'Yes' : 'No'}</p>
        </div>
      ))
      }
    </div>
  );
};

export default View;