import React from 'react';

export default function Main(props) {
  const { error, message, setMessage } = props;

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <p>{message}</p>
        {error && <p>{error}</p>}
        <button type="button" onClick={setMessage}>
          SetMessage
        </button>
      </div>
    </>
  );
}
