import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as jss from './BoardItemList-styles';

const BoardItemListView = ({ setUploadBoard }) => (
  // <jss.ItemContainer className="item-container">
  <jss.ItemContainer>
    <jss.SearchContainer>
      <jss.SearchInput type="text" placeholder="Search" />
      <jss.Button>
        <FontAwesomeIcon icon={faSearch} />
      </jss.Button>
    </jss.SearchContainer>
    <jss.PaginationContainer>
      <jss.Number>1</jss.Number>
      <jss.Number>2</jss.Number>
      <jss.Number>3</jss.Number>
      <jss.Number>4</jss.Number>
      <jss.Number>5</jss.Number>
      <jss.Number>6</jss.Number>
      <jss.Number>7</jss.Number>
      <jss.Number>8</jss.Number>
      <jss.Number>9</jss.Number>
      <jss.Number>
        <FontAwesomeIcon icon={faChevronRight} />
      </jss.Number>
    </jss.PaginationContainer>
    <jss.UploadButton onClick={() => setUploadBoard(true)}>
      글올리기
    </jss.UploadButton>
  </jss.ItemContainer>
);

BoardItemListView.propTypes = {
  setUploadBoard: PropTypes.func.isRequired,
};

export default BoardItemListView;
