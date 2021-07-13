import React, {Component} from 'react';
import TitleBar from './TitleBar/titleBar';
import BookViewer from './BookViewer/bookViewer';

class App extends Component {
    constructor(props) {
        super(props);
        this.book = [
            {title: 'Ready Player One', author: 'Ernest Cline'},
            {title: 'All the Light We Cannot See', author: 'Anthony Doer'},
            {title: 'The First and Last Freedom', author: 'Jiddu Krishnamurti'},
        ];
        this.state = {
            bookNumber: 0
        }
    }
Debugger;
    goToNextBook() {
        
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        
        if(tempBookNumber === this.book.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    goToPreviousBook() {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0)
                tempBookNumber = this.book.length - 1;
                this.setState({
                    bookNumber: tempBookNumber
                });
        }
    
    // the render method
    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                < BookViewer book={this.book[this.state.bookNumber]} nextBook={() => this.goToNextBook()} previousBook={() => this.goToPreviousBook()}/>
            </div>
        );
    }
}

export default App;