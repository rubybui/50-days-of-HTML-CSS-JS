import logo from './logo.svg';
import './App.css';
import { MyDocument } from './document';
import ReactDOM from 'react-dom';
import { BlobProvider  } from '@react-pdf/renderer';
function App() {
  
  return (
    <div className="App">
  <BlobProvider document={
                    <MyDocument
                    />
                  }>
                  {({ url, blob, loading }) => {
                    console.log("d", url, blob, loading);
                    return (
                      <a href={url} target="_blank">
                        View as PDF
                      </a>
                    );
                  }}
  </BlobProvider>
    </div>
  );
}

export default App;
