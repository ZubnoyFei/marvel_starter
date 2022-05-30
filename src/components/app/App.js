import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import sequence from '@start/plugin-sequence'
import find from '@start/plugin-find'
import read from '@start/plugin-read'
import babel from '@start/plugin-lib-babel'
import write from '@start/plugin-write'
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const babelConfig = {
    // …
    babelrc: false,
    sourceMap: true,
}

export const task = () =>
    sequence(
        find('src/**/*.js'),
        read,
        babel(babelConfig),
        write('build/')
    )

import decoration from '../../resources/img/vision.png';

class App extends Component {
    
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected}/>
                        <CharInfo charId={this.state.selectedChar}/>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}></CharInfo>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;