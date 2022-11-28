/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//créé l'entry point de l'app
AppRegistry.registerComponent(appName, () => App);
