import "./LoginButton.css";

const LoginButton = ({ className, isLogin, data }) => {
  const { email, imageSource } = data;
  const [cta, ctaShort] = className;

  return (
    <>
      {isLogin ? (
        <div className="loginDiv">
          <div className="loginImageBg">
            <img
              className="loginImage"
              src={imageSource}
              alt="프로필 사진"
            ></img>
          </div>
          <span className="loginEmail">{email}</span>
        </div>
      ) : (
        <a className={`${cta} ${ctaShort}`} href="/">
          <span>로그인</span>
        </a>
      )}
    </>
  );
};

export default LoginButton;
