import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TabsCards from "./assets/tabs.cards";
import styles from './cards.css';
// import AddCard from "./assets/add.card";

function AllCollapseExample() {

    const apiUrl = 'http://localhost/personal_account/front_api.php';
    const usedId = 146;

    const [cards, setAppState] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}?action=card&room=${usedId}`).then((resp) => {
            resp.data.forEach((item, i) => {
                axios.get(`${apiUrl}?action=card&balance=${resp.data[i].card_num}`).then((resp1) => {
                    resp.data[i].balance = resp1.data.data.results.map((item) => {
                        return Number(item.wallet_sum);
                    }).reduce((a, b) => {
                        return a + b;
                    }, 0);
                });

                axios.get(`${apiUrl}?action=card&payment=${resp.data[i].card_num}`).then((resp2) => {
                    resp.data[i].payments = resp2.data;
                });

                axios.get(`${apiUrl}?action=card&validation=${resp.data[i].card_num}`).then((resp3) => {
                    resp.data[i].validations = resp3.data;
                });

                axios.get(`${apiUrl}?action=seller&product=${resp.data[i].card_num}`).then((resp4) => {
                    resp.data[i].products = resp4.data.data;
                });
            });
            setAppState(resp.data);
        });

    }, [setAppState]);

    const res = [];
    cards.forEach((card, index) => {
        res.push(
            <Accordion className={styles.accordion} key={card.nfc_id}>
                <Accordion.Item>
                    <Accordion.Header>{ card.card_num }</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <TabsCards card={ card } />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    });
    // res.push(<div><AddCard /></div>);

    return (res);
}

export default AllCollapseExample;