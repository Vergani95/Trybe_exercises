import React from "react";
import data from './data'

class App extends React.Component {
  reder() {
    return (
    <div>
      {
        data.map(element => {
          return(
            <p>{elemente.title}</p>
          )
        })
      }
    </div>
  );
}
}

export default App;
