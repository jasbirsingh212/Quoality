import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Invoices from './Invoices';
import Items from './Items';
import Client from './Client';
import Payments from './Payments';
import Notes from './Notes';
import Dashboard from './Dashboard';
import ContentHeader from './ContentHeader';
import Newinvoice from './Newinvoice';
import Bottomcomp from './Bottomcomp';
import CreateItem from './CreateItem';
import CreateClient from './CreateClient';

function  Content() {
    return (
        <div className='content'>
                <Route path="/home/search"  component={ContentHeader} ></Route>
            <Switch>
                <Route path="/home/search/invoices" component={Invoices}></Route>
                <Route path="/home/search/items" component={Items} ></Route>
                <Route path="/home/search/client" component={Client}></Route>
                <Route path="/home/search/payments" component={Payments}></Route>
                <Route path="/home/search/notes" component={Notes}></Route>
                <Route path="/home/" exact component={Dashboard}></Route>
                <Route path="/home/invoice/new/invoice" component={Newinvoice}></Route>
                <Route path="/home/items/new/items" component={CreateItem}></Route>
                <Route path="/home/client/new/client" component={CreateClient}></Route>
            </Switch>
        </div>
    )
}

export default Content
