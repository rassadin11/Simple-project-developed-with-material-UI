import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors';
import Form from './components/Form';
import Notes from './components/Notes';
import { Provider } from 'react-redux';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    secondary: purple
  },
})

function App({ store }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
