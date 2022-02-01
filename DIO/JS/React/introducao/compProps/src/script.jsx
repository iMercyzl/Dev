import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import './styles.css'


function soma(a, b) {
    alert(a+b)
    }


function App() {

    

    return (
        <div className='App'>
            Hello world!
            <Button onClick={() => soma(10, 20)} name="Meu saco" />
        </div>
    )
}


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)