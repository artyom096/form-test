import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './App';

const Global = createGlobalStyle`
*{
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  
}
`;

ReactDOM.render(
	<React.StrictMode>
		<>
			<Global />
			<App />
		</>
	</React.StrictMode>,
	document.getElementById('root')
);
