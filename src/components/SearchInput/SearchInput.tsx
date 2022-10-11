import React, { ChangeEvent, FormEvent, useState } from 'react';
import './search-input.css';

const SearchInput: React.FC = () => {
    const [textInput, setTextInput] = useState('');

    const onChangeHandler = (event: ChangeEvent) => {
        const { value } = event.target as HTMLInputElement;
        setTextInput(value);
    };

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (textInput) {
            setTextInput('');
        }
    };

    return (
        <form className="searchInput" onSubmit={onSubmitHandler}>
            <label className="searchInput" htmlFor="search">Search</label>
            <input className="searchInput" id="search" value={textInput} onChange={onChangeHandler} />
        </form>
    );
};

export default SearchInput;