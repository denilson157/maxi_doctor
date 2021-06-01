import { BrowserRouter } from 'react-router-dom';
import TemplateBase from './components/template'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/template/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <TemplateBase />
    </BrowserRouter>
  </ThemeProvider>
)


export default App;
