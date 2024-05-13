import React, { useState } from 'react'
import Counter from './components/Counter'
import Input from './components/Input'
import LimitedInput from './components/LimitedInput'
import Toggle from './components/Toggle'
import styled from 'styled-components';
import Selector from './components/Selector'
import ShoppingList from './components/ShoppingList'
import SearchInput from './components/SearchInput'

const COLORS = {
    light: '#fff',
    red: 'red',
    blue: 'blue',
    dark: '#111'
}

const SEARCH_ITEMS = ['Red', 'Green', 'Blue', 'Hello'];

const Main = styled.main`
    background-color: ${props => props.color}
`;

const Exercise = () => {
    const [background, setBackground] = useState(COLORS.light);

    function handleBackgroundChange(e) {
        if (e.target.value === background) return;
        setBackground(e.target.value)
    }

    return (
        <Main color={background}>
            <h1>Oefeningen State</h1>

            <hr />
            <Counter />
            <hr />
            <Input />
            <hr />
            <Toggle>
                Toggle me!
            </Toggle>
            <hr />
            <LimitedInput />
            <LimitedInput maxCharacters={20} />
            <hr />
            <Selector options={COLORS} whatToDoWhenChanged={handleBackgroundChange} />
            <hr />
            <ShoppingList />
            <hr />
            <SearchInput items={SEARCH_ITEMS} />
        </Main>
    )
}

export default Exercise