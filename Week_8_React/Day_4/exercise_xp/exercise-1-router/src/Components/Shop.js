import React from 'react'

export default function Shop() {
  try {
    throw new Error('Error ocurred loading this page');
    return (
      <>
        <div>Shop</div>
        <h1>This is shop</h1>
      </>
    );
  } catch (error) {
    return <h1>{error.message}</h1>;
  }
}
