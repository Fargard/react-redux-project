import React from 'react';
import { render } from 'react-dom';

const App = () => <div>Hello World!</div>;

const rootElement = document.getElementById('app');

render(<App />, rootElement);
