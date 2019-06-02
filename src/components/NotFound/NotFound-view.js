import React from 'react';
import Button from 'components/Common/Button';
import * as jss from './NotFound-styles';

const NotFoundView = ({ history }) => (
  <jss.Container>
    <jss.Text>존재하지 않는 페이지입니다.</jss.Text>
    <Button onClick={() => history.goBack()}>뒤로가기</Button>
  </jss.Container>
);
export default NotFoundView;
