import React, { Fragment } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import dogs from "./dogs.json";
import "./style.css";

class App extends React.Component {
    state = {
        score: 0,
        highestScore: 0,
        maxScore: 12,
        message: 'Click an image to begin!',
        newMessage: "",
        dogs: dogs
    }

    handleGameOver = () => {
        if (this.state.score > this.state.highestScore) {
            this.setState({
                highestScore: this.state.score,
                score: 0
            });
        }

        this.state.dogs.forEach(dog => {
            dog.count = 0;
        });
    }

    handleSelection = id => {
        this.state.dogs.find((dog, i) => {
            if (dog.id === id) {
                if (dogs[i].count === 0) {
                    dogs[i].count = dogs[i].count + 1;
                    this.setState({
                        score: this.state.score + 1,
                        message: "",
                        newMessage: 'You guessed Correctly!'
                    })
                    this.state.dogs.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.setState({
                        score: 0,
                        message: "",
                        newMessage: 'You guessed incorrectly!'
                    })
                    this.handleGameOver();
                }
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Header
                    score={this.state.score}
                    highestScore={this.state.highestScore}
                    message={this.state.message}
                    newMessage={this.state.newMessage}
                />
                <Wrapper>
                    <h2 className="sub-title"><br />Don't click on the same image twice.</h2>
                    {this.state.dogs.map(dog => (
                        <DogCard
                            handleSelection={this.handleSelection}
                            key={dog.id}
                            id={dog.id}
                            name={dog.name}
                            image={dog.image}
                        />
                    ))}
                </Wrapper>
            </Fragment>
        )
    }
}

export default App;
