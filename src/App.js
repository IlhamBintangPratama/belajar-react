
import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button';

function App() {
  const onClickButton = (id) =>{
    alert(id);
  }
  const colors = {
    sea: '#00FFFF',
    colar: '#FF7F50',
  }
  const [antrian, setAntrian] = useState(1);
  const [color, setColor] = useState(colors.sea)
  const tambah = () => {
    setAntrian(antrian + 1)
  }
  const kurang = () => {
    setAntrian(antrian - 1)
  }
  useEffect(() => {
      if(antrian % 2 === 0){
        setColor(colors.colar)
      }else{
        setColor(colors.sea)
      }
    },[antrian]
  )

  return (
    <div className="">
      <div style={{
        backgroundColor: color, height: 30
      }}></div>
      <div className="">{antrian}</div>
      <Button label="Kurang" onClick={kurang}></Button>
      <Button label="Tambah" onClick={tambah}></Button>
    </div>

  );
}

export default App;
