import React from 'react';
import styled from 'styled-components'

const SearchBarContainer = styled.div``;
const StyledForm = styled.form``;
const SearchInput = styled.input``;
const SubmitSearch = styled.input``;
const SearchHeader = styled.header``;


const SearchBar= props =>{
  return(
    <SearchHeader>
      <SearchBarContainer>
        <StyledForm onSubmit = {(e)=>props.submitFunction(e)}>
            <SearchInput onChange = {(e)=>props.handleChange(e)} type = "text" value = {props.fieldValue} />
            <SubmitSearch type ="submit" value = "Submit"/>
          </StyledForm>
      </SearchBarContainer>
    </SearchHeader>

  );
}

export default SearchBar;
