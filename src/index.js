import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RootComponentSPA from './rootcomponent';

ReactDOM.render(
        <BrowserRouter>
            <RootComponentSPA></RootComponentSPA>
        </BrowserRouter>

        ,
         document.getElementById("root"))


                    