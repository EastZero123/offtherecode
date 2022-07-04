import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <h1>여기는 로그인입니다</h1>
      <Link to="/signup">회원가입 입장하기</Link>
    </React.Fragment>
  );
};

export default Login;
