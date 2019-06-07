import React, { useState, useContext, useEffect } from 'react';
import BoardPageStore from 'pages/Board/Board-store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Common/Button';
import { getPostLength } from 'lib/api';
import { useApiStatus } from 'lib/hooks';
import { activeStyle } from 'styles/mixins';
import PaginationView from './Pagination-view';

const PaginationContainer = () => {
  const [pageSize, setPageSize] = useState({ min: 1, max: undefined });
  const { category, currentPageNumber } = useContext(BoardPageStore);
  const { apiStatus, loading, failure, end } = useApiStatus();
  // const [numberComponents, setNumberComponents] = useState([]);
  useEffect(() => {
    loading();
    getPostLength({ category })
      .then(res => {
        setPageSize(s => ({ ...s, max: Math.floor(res.data / 10) + 1 }));
      })
      .catch(e => {
        failure();
      })
      .finally(() => {
        end();
      });
  }, [category]);
  const makeComponents = () => {
    const components = [];
    for (let i = pageSize.min; i <= pageSize.max; i++) {
      if (i === pageSize.min + 9) {
        components.push(
          <Button
            noborder
            key="next"
            onClick={() => setPageSize(s => ({ ...s, min: pageSize.min + 10 }))}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>,
        );
        break;
      }
      components.push(
        <Button
          key={i}
          noborder
          activeStyle={i === currentPageNumber ? activeStyle : null}
        >
          {i}
        </Button>,
      );
    }
    return components;
  };
  // useEffect(() => {
  //   setNumberComponents(() => [...makeComponents()]);
  // }, [pageSize.min, pageSize.max]);

  return (
    <PaginationView loading={apiStatus.loading} failure={apiStatus.failure}>
      {makeComponents()}
    </PaginationView>
  );
};
export default PaginationContainer;
