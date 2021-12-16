import React, { Component } from 'react';
import ProfileItem from './profileItem';


export default class Profiles extends Component
{
render()
  {
    return this.props.yourProfile.map((profile)=>{
        return <ProfileItem profile = {profile} ReloadData = {this.props.ReloadData}></ProfileItem>
    })

  }
}