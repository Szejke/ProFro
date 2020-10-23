import React from 'react';
import TopBar from './components/topBar'
import ContentLeft from './components/contentLeft'
import { Layout } from 'antd';
import './App.less'
import { Route, BrowserRouter } from 'react-router-dom'
import FormApplication from './components/addRow/applicationForm';


const { Footer, Content } = Layout;



function App() {
  return (
    <BrowserRouter>
    <Layout className="main-content">
      <Content>
          <TopBar />
            <Route exact path="/"
              component={ContentLeft}
            />
            <Route exact path="/form"
              component={FormApplication} />
         </Content>
      <Footer>Footer</Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
