import React from 'react';
import { Nav, Tab } from 'bootstrap-4-react';

export default (props) => {
    return (
        <React.Fragment>
            <Nav tabs role="tablist">
                <Nav.ItemLink active href={`#home${props.card.nfc_id}`} id={`home-tab${props.card.nfc_id}`} data-toggle="tab" aria-selected="true">
                    Загальна інформація
                </Nav.ItemLink>
                <Nav.ItemLink href={`#profile${props.card.nfc_id}`} id={`profile-tab${props.card.nfc_id}`} data-toggle="tab" aria-selected="false">
                    Profile
                </Nav.ItemLink>
                <Nav.ItemLink href={`#contact${props.card.nfc_id}`} id={`contact-tab${props.card.nfc_id}`} data-toggle="tab" aria-selected="false">
                    Contact
                </Nav.ItemLink>
            </Nav>
            <Tab.Content>
                <Tab.Pane id={`home${props.card.nfc_id}`} aria-labelledby={`home-tab${props.card.nfc_id}`} show active>
                    <table>
                        <thead>
                            <tr>
                                <th>Баланс</th>
                                <th>Заблокована</th>
                                <th>Заархівована</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>грн</td>
                                <td>{ props.card.blocked ? 'так' : 'ні' }</td>
                                <td>{ props.card.archived ? 'так' : 'ні' }</td>
                            </tr>
                        </tbody>
                    </table>
                </Tab.Pane>
                <Tab.Pane id={`profile${props.card.nfc_id}`} aria-labelledby={`profile-tab${props.card.nfc_id}`}>
                    Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
                </Tab.Pane>
                <Tab.Pane id={`contact${props.card.nfc_id}`} aria-labelledby={`contact-tab${props.card.nfc_id}`}>
                    Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
                </Tab.Pane>
            </Tab.Content>
        </React.Fragment>
    );
};
