import { render, screen,renderer } from '@testing-library/react';
import App from './App';
import { React, useEffect ,useState} from "react";

test('visualizacion componentes', () => {
  render(<App/>);
  const componente =renderer.create(<App/>).toJSON()
  expect(componente).toMatchSnapshot();
});
