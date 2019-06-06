import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons';
import Button from 'components/Common/Button';
import * as jss from './ItemList-styles';

const ItemListView = ({ showModalUploadBoard, category, nickname }) => (
  <jss.ItemContainer>
    <jss.InputContainer>
      <jss.TextInput type="text" placeholder="Search" />
      <Button notFocused>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </jss.InputContainer>
    <jss.PaginationContainer>
      <Button noborder>1</Button>
      <Button noborder>2</Button>
      <Button noborder>3</Button>
      <Button noborder>4</Button>
      <Button noborder>5</Button>
      <Button noborder>6</Button>
      <Button noborder>7</Button>
      <Button noborder>8</Button>
      <Button noborder>9</Button>
      <Button noborder>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </jss.PaginationContainer>
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
};

export default ItemListView;
