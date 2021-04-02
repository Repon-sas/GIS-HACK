import * as React from 'react';
import Layout from '../../components/layout/Layout'

import { HeaderScreen } from "./components/HeaderScreen";
import { FAQScreen } from "./components/FAQScreen";
import { FeedbackScreen } from "./components/FeedbackScreen";

export default function Faq() {
    return (
        <Layout>
            <HeaderScreen />
            <FAQScreen marginTop={10} marginBottom={10} />
            <FeedbackScreen marginTop={10} marginBottom={5} />
        </Layout>
    );
};