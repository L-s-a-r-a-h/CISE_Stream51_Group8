import { render, screen } from '@testing-library/react';
import App from './App';
import ArticleList from './components/ArticleList'
import ComponentNavigation from "./components/ComponentNavigation";
import SubmissionForm from './components/SubmissionForm';

test('test submission',()=>{
render(<SubmissionForm/>);

})
