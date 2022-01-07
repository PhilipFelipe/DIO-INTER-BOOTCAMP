import {useState} from 'react';
import styled from 'styled-components'
import { Quotes } from './components/Quotes'
import { getQuote } from './services/quoteService';

export function App() {
const [quoteState, setQuoteState] = useState({quote: `"Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love."`
, speaker: 'Fyodor Dostoevsky, The Brothers Karamazov. '});


  const onUpdate = () => {
    const quote = getQuote();

    setQuoteState(quote);
  };

  return (
    <Content>
      <Quotes {...quoteState}/>
    </Content>
  )
}

const Content = styled.div`
    width: 100hv;
    margin: 20px;
    padding: 100px;
    justify-content: left;
    align-items: left;
`;



