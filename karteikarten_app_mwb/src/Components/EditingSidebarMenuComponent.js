import React, {Component} from 'react';
import {ContextMenu, Item, Separator, Submenu} from 'react-contexify';


export class EditingSidebarMenuComponent extends Component{
    render(){
        return(
            <ContextMenu id='menu_id' style={{"zIndex": 9000}}>
                <Item onClick={this.addChildFolder}>+ Ordner hinzufügen</Item>
                <Item >Ipsum</Item>
                <Separator/>
                <Item disabled>Dolor</Item>
                <Separator/>
                <Submenu label="Foobar">
                    <Item >Foo</Item>
                    <Item >Bar</Item>
                </Submenu>
            </ContextMenu>
        )
    }

    addChildFolder = ({event, ref, data, dataFromProvider}) => {
         this.props.addFolder('add', ref.props.index);
    };
}
