import error from '../../assets/img/icon/error.svg';

function ErrorMessage() {
  return (
    <div style={{textAlign: "center"}}>
      <img src={error} alt="error" /><br/>
      <span>Something went wrong</span>
    </div>
  )
}

export default ErrorMessage;