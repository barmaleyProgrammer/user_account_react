import React, { Component } from 'react';
import { Nav, Tab } from 'bootstrap-4-react';

export default class TabsCards extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav tabs role="tablist">
                    <Nav.ItemLink active href="#home" id="home-tab" data-toggle="tab" aria-selected="true">
                        Home
                    </Nav.ItemLink>
                    <Nav.ItemLink href="#profile" id="profile-tab" data-toggle="tab" aria-selected="false">
                        Profile
                    </Nav.ItemLink>
                    <Nav.ItemLink href="#contact" id="contact-tab" data-toggle="tab" aria-selected="false">
                        Contact
                    </Nav.ItemLink>
                </Nav>
                <Tab.Content>
                    <Tab.Pane id="home" aria-labelledby="home-tab" show active>
                        Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </Tab.Pane>
                    <Tab.Pane id="profile" aria-labelledby="profile-tab">
                        Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
                    </Tab.Pane>
                    <Tab.Pane id="contact" aria-labelledby="contact-tab">
                        Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
                    </Tab.Pane>
                </Tab.Content>
            </React.Fragment>
        )
    }
}
