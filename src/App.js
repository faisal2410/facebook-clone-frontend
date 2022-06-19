import { LiveVideo } from "./svg";


function App() {
  const get =async()=>{ 
    const res=await fetch("http://localhost:8000");
    console.log(res)
  }
  get();
  return (
    <div>
     Welcome to frontend
<div className="all_friends_icon">
    
    </div>
    <div className="trash_icon">

    </div>
    <LiveVideo color="red"/>
    </div>
   
    
  );
}

export default App;
