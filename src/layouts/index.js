import React from 'react';

class Template extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lang: ''
    };
    this.setLang = this.setLang.bind(this);
  }
  componentDidMount () {
    const lang = window.localStorage.getItem('lang');
    if (lang !== null) {
      this.setState({lang});
    }
  }

  setLang(lang) {
    window.localStorage.setItem('lang', lang);
    this.setState({lang});
  }

  render () {
    const {children} = this.props;

    return (
      <div>
        <p>lang: {this.state.lang}</p>
        <button onClick={() => this.setLang('en')}>en</button>
        <button onClick={() => this.setLang('cn')}>cn</button>
        {children()}
      </div>
    )
  }
};

export default Template;
