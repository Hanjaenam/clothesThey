import React from 'react';
import Loader from 'components/Loading';
import ErrorMessage from 'components/Common/ErrorMessage';
import * as jss from './Pagination-styles';

const PaginationView = ({ children, loading, failure }) =>
  loading ? (
    <Loader modal />
  ) : failure ? (
    <ErrorMessage>불러들이기 실패</ErrorMessage>
  ) : (
    <jss.Container>{children}</jss.Container>
  );

export default PaginationView;
