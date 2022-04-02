import '../css/Group.css';
import Avatar from './Avatar';
import { useState } from 'react';

function Group (props)
{
    return(
        <div className='group-list-item'>
            <Avatar name = {props.user}/>
            {props.Avatar}
            <div className='group-name-space'>{props.displayName}<br/>
                <div className='group-status'>{props.status}</div>
            </div>
        </div>
    );
}

export default Group;