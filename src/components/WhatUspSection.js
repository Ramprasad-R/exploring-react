import React, { Component } from "react";
import ComponentSectionHeader from "./ComponentSectionHeader";
import ItemTeam from "./ItemTeam";
export default class WhatUspSection extends Component {
  render() {
    return (
      <div className="section section-what-usp">
        <ComponentSectionHeader
          titleBadge="Do you want to"
          componentTitle="Learn how to code"
          titleDescription="Awesome! Let’s do this together. We are here to support you in
                your coding journey."
        />

        <div className="component-usp-row">
          <ItemTeam
            imageSrc="https://learntocodetogether.nl/assets/team.svg"
            componentTitle="Get help from experienced developers"
          />
          <ItemTeam
            imageSrc="https://learntocodetogether.nl/assets/community.svg"
            componentTitle="Learn &amp; share with our community"
          />
          <ItemTeam
            imageSrc="https://learntocodetogether.nl/assets/personal-speed.svg"
            componentTitle="Personal &amp; at your own speed"
          />
        </div>
      </div>
    );
  }
}
