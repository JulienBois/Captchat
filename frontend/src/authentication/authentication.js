import './Authentication.css';

function Authentication() {

  let captcha = [];
  
  return (
    <div className="App">
      <header className="App-header">
        Captcha App
      </header>

      <div >
        <form>
          <div className="row">
            <div className="form-group">
              <label>Question: </label>
              
              <input type="submit" value="Send" />
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Authentication;
