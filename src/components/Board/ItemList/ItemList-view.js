import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons';
import Button from 'components/Common/Button';
import * as jss from './ItemList-styles';
import Pagination from './Pagination';

const ItemListView = ({
  showModalUploadBoard,
  category,
  nickname,
  itemContainerRef,
}) => (
  <jss.ItemContainer ref={itemContainerRef}>
    <jss.InputContainer>
      <jss.TextInput type="text" placeholder="Search" />
      <Button notFocused>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </jss.InputContainer>
    <Pagination />
    <jss.ButtonContainer category={category}>
      <Button>
        <FontAwesomeIcon icon={faThumbsUp} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faClock} />
      </Button>
      {category === 'me' ? null : (
        <Button onClick={showModalUploadBoard} disabled={!nickname}>
          글올리기
        </Button>
      )}
    </jss.ButtonContainer>
  </jss.ItemContainer>
);

ItemListView.propTypes = {
  showModalUploadBoard: PropTypes.func.isRequired,
  nickname: PropTypes.string,
};

ItemListView.defaultProps = {
  nickname: undefined,
};

export default ItemListView;
