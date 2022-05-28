import React from "react";
import './App.css';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);
    this.state = {
        captcha: {},
        dataisLoaded: false,
        timer: 30,
        falseCounter: 0,
        secondsCounter: 30,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ComponentDidMount is used to call api from backend to get the captcha object
  // execute the code 
  componentDidMount() {
    this.getCaptcha();
  }

  getCaptcha() {
    fetch('http://localhost:8080/captcha/', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }).then((res) => {
        if(res.headers.get("content-type") &&
          res.headers.get("content-type").toLowerCase().indexOf("application/json") >= 0) {
          return res.json();
        } else {
          throw new TypeError()
        }
      })
      .then((json) => {
          // create imagesSelected
          let captchaTemp = {
            idQuestion: json?.idQuestion,
            question: json?.question,
            images: [],
          };
          for (let i = 0; i < json?.images.length; i++) {
            let img = {
              idImage: json?.images[i].idImage,
              urlImage: json?.images[i].urlImage,
              isSelected: false,
            }
            captchaTemp.images.push(img);
          }

          // gan gtri cho mot bien trong state phai dung setState
          this.setState({
            captcha: captchaTemp,
            dataisLoaded: true,
          });
      })
      .catch(rejected => {
        console.log(rejected);
    });
  }

  selectImage(elem) {
    const { captcha } = this.state;
    let copyCaptcha = JSON.parse(JSON.stringify(captcha));
    // reset selected images
    for (let i = 0; i < copyCaptcha.images.length; i++) {
      copyCaptcha.images[i].isSelected = false;
    }

    for (let i = 0; i < copyCaptcha.images.length; i++) {
      if(copyCaptcha.images[i].idImage ===  parseInt(elem.currentTarget.id)){
        copyCaptcha.images[i].isSelected = !copyCaptcha.images[i].isSelected;
        break;
      }
    }
    this.setState({captcha: copyCaptcha});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/captcha/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idQuestion: this.state.captcha.idQuestion,
        captchaResponse: this.state.captcha.images.find(img => img.isSelected === true).idImage,
      })
    })
    .then(response => {
      console.log(response);
      alert(response.status);
    })
    .catch(err => console.warn(err));
  }

  render() {
    const { dataisLoaded, captcha, secondsCounter, falseCounter, counter } = this.state;

    if (!dataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;
        
    return (
      <div className = "App">
        <div className = "App-header">
          <h1> Captcha Application </h1>
        </div>
        <div className="row padding-top">
            <div className="timer">{secondsCounter}</div>
        </div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <h3> <b>Question:</b> {captcha.question}. </h3>
          <div className="row">
            <div className="grid">
              {
                captcha?.images.map((item) => ( 
                  <div className={item.isSelected ? 'cell selected' : 'cell'} key={item.idImage} >
                    <img src={item.urlImage} alt={item.urlImage} id={item.idImage} onClick={this.selectImage.bind(this)} />
                  </div>
                ))
              }
            </div>
          </div>
          <input type = "submit" value = "Send" className="btn btn-primary"/>
        </form>
    </div>
    );
  }
}

export default App;

