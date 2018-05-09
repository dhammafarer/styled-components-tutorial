import * as React from 'react';

interface Props {
  children: () => any
}

class Template extends React.Component<Props, {}> {
  state = {lang: ''};

  componentDidMount () {
    const lang = window.localStorage.getItem('lang');
    if (lang !== null) {
      this.setState({lang});
    }
  }

  setLang(lang: string) {
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
}

export default Template;
