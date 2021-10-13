import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom'
import Photos from './Photos';
import SinglePhoto from './SinglePhoto';

export default function Menu(props) {
    return (
        <>
            <Switch>
                <Route path='/SinglePhoto'><SinglePhoto /></Route>
                <Route path='/'><Photos data={props.data}/></Route>
            </Switch>
        </>
    )
}