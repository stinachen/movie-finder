import React, { useState } from 'react'
import styled from '@emotion/styled'
import { MdSearch } from 'react-icons/md'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

const SearchButton = styled.button`
  border: 1px solid #A6787A;
  border-radius: 0 5px 5px 0;
  background: #A6787A;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 36px;
  text-align: center;

  &[disabled] {
    cursor: not-allowed;
  }
`

const SearchInput = styled.input`
  border: 3px solid #A6787A;
  border-radius: 5px 0 0 5px;
  border-right: none;
  color: #2B375D;
  font-size: calc(12px + 2vmin);
  height: 20px;
  outline: none;
  padding: 5px;
  width: 100%;
`

const Wrapper = styled.div`
  top: 20vh;
  width: 50%;
`
type Props = {
  onSearch(query: string): void
}
export default function SearchBar(props: Props) {
  const [searchText, setSearchText] = useState<string>('')

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch()
      setSearchText('')
    }
  }

  const onSearch = () => {
    if (searchText) {
      props.onSearch(searchText)
      setSearchText('')
    }
  }

  return (
    <Wrapper>
      <Container>
        <SearchInput
          data-testid='search-bar'
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={onEnter}
          placeholder="Search for a movie"
          type="text"
          value={searchText}
        />
        <SearchButton
          data-testid='search-button'
          disabled={!searchText}
          onClick={onSearch}
          type="submit"
        >
          <MdSearch />
        </SearchButton>
      </Container>
    </Wrapper>
  )
}