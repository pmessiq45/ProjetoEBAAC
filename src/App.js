import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Messias"
          description="Olá mundo!!"
          music="Figaro - Goleiro Brunno"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={456}
          messages={852}
          shares={999}
          name="diabo"
          description="inferno de bola"
          music="gino e geno - ovo bebe venenu"
          url="https://static.videezy.com/system/resources/previews/000/018/163/original/halloween7_2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
