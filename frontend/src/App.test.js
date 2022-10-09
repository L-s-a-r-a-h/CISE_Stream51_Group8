import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import ComponentNavigation from "./components/ComponentNavigation";
import SubmissionForm from './components/SubmissionForm';

test('render app',()=>{
render(<ComponentNavigation/>);

})

test('render form submission form', ()=>{

    render(<SubmissionForm/>);
  
})