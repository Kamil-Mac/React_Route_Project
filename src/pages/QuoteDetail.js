import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";

import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'KM', text: 'Lorem Ipsum' },
    { id: 'q2', author: 'AB', text: 'Lorem Ipsum 2' },
];

const QuoteDetail = () => {

    const match = useRouteMatch();

    const param = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === param.quoteId);

    if (!quote) {
        return <p>Not quote found ;(</p>
    };
    //quoteId z App /:...
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact >
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.path}/comments`}>Load Comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetail;