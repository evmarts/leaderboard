import React from 'react';

export default class Leaderboard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            points: []
        }
    }

    render () {
        return (
            <div>
                <ul>
                    <li>
                        1
                    </li>
                    <li>
                        2
                    </li>
                    <li>
                        3
                    </li>
                </ul>
            </div>
        )
    }
}