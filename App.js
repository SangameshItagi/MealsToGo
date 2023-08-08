import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {useFonts as useOswaldFont, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLatoFont, Lato_400Regular} from '@expo-google-fonts/lato';


export default function App() {

  const [oswalLoaded] = useOswaldFont({
    Oswald_400Regular
  });

  const [latoLoaded] = useLatoFont({
    Lato_400Regular
  });

  if(!oswalLoaded && !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  );
}


