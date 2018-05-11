import * as React from 'react';
import * as browserLocale from 'browser-locale';
import { getLocale, saveLocale } from '../utils/helpers';
import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import bootstrapTheme from 'typography-theme-bootstrap';
import * as Typography from 'typography';
const typography = new Typography(bootstrapTheme);

fontawesome.library.add(faCoffee);

const initialState = {lang: ''};
type State = typeof initialState;

interface Props {
 children: () => any
}

class Template extends React.Component<Props, State> {
  state = initialState;

  componentDidMount () {
    this.setState({lang: getLocale()});
  }

  private toggleTheme = () => {
    console.log(typography);
    typography.injectStyles();
  }

  private setLang = (lang: string) => {
    saveLocale(lang);
    this.setState({lang});
  }

  render () {
    const {children} = this.props;

    return (
      <div>
        <p>lang: {this.state.lang}</p>
        <FontAwesomeIcon icon="coffee"/>
        <button onClick={() => this.toggleTheme()}>Bootstrap Theme</button>
        <button onClick={() => this.setLang('en')}>en</button>
        <button onClick={() => this.setLang('zh')}>cn</button>
        {children()}
      </div>
    )
  }
}

export default Template;
