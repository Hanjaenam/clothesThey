import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Common/Button';
import * as jss from './BoardItemList-styles';

const BoardItemListView = ({ showModalUploadBoard }) => (
  <jss.ItemContainer>
    <jss.SearchContainer>
      <jss.SearchInput type="text" placeholder="Search" />
      <jss.Button>
        <span>
          <FontAwesomeIcon icon={faSearch} />
        </span>
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
    <jss.ButtonContainer>
      <Button onClick={showModalUploadBoard}>글올리기</Button>
    </jss.ButtonContainer>
  </jss.ItemContainer>
);

BoardItemListView.propTypes = {
  showModalUploadBoard: PropTypes.func.isRequired,
};

export default BoardItemListView;
