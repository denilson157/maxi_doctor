import { BrowserRouter } from 'react-router-dom';
import TemplateBase from './components/template'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './components/template/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <TemplateBase />
    </BrowserRouter>
  </ThemeProvider>
)


export default App;
