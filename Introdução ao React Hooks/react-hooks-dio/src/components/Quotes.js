import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from './Button'

export const Quotes = ({ quote, speaker, onUpdate = () => { } }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onClick={onUpdate}>Quote generator</Button>
        </Wrapper>
    )
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}

const Wrapper = styled.div`
 
    flex-direciton: column;
    align-items: center;
    width: 50%;
`;

const Quote = styled.p`
    font-size: 2em;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    flex: 1;
    margin: 0;
`;

const Speaker = styled(Quote)`
    padding-left: 200px;
    font-size: 1.5em;
    width: 100%;
    margin-bottom: 50px;
`;



