import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {

    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData); 

        history.push('/quotes');
        //replace nie mozemy wrocic z powrotem, push mozemy sie cofnac
    };

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}; 

export default NewQuote;