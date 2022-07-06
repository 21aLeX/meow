import './App.css';
import Card from './components/Card';
import Title from './components/Title';

function App() {

  return (
    <div className="App">
      <Title />
      <div className='container'>
        <Card
          Id={['1', '11']}
          Name='с фуа-гра'
          portion='10 порций'
          mouse='мышь в подарок'
          happy=''
          kg='0,5'
          footer='Печень утки разварная с артишоками.'
        />
        <Card
          Id={['2', '22']}
          Name='с рыбой'
          portion='40 порций'
          mouse='2 мыши в подарок'
          happy=''
          kg='2'
          footer='Головы щучьи с чесноком да свежайшая сёмгушка.'
        />
        <Card
          Id={['3', '33']}
          Name='с курой'
          portion='100 порций'
          mouse='5 мышей в подарок'
          happy='заказчик доволен'
          kg='5'
          footer='Филе из цыплят с трюфелями в бульоне.'
        />
      </div>
    </div>
  );
}

export default App;