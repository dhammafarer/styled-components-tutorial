import * as React from 'react';
import * as browserLocale from 'browser-locale';
import { getLocale, saveLocale } from '../utils/helpers';
import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

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
        <button onClick={() => this.setLang('en')}>en</button>
        <button onClick={() => this.setLang('zh')}>cn</button>
        {children()}
      </div>
    )
  }
}

export default Template;
