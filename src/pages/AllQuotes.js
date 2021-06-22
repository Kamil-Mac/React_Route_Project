import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'KM', text: 'Lorem Ipsum'},
    { id: 'q2', author: 'AB', text: 'Lorem Ipsum 2'},
];


const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}; 

export default AllQuotes;