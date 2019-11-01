import React from 'react';

interface IProps {
  text: string;
  onChangeHandler: (textInput: string) => void;
}

const SearchInput = (props: IProps): JSX.Element => {
  return (
    <input
      className="search__input"
      type="search"
      name="s"
      placeholder="Search …"
      value={props.text}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        props.onChangeHandler(e.currentTarget.value)
      }
    ></input>
  );
};

export default SearchInput;
