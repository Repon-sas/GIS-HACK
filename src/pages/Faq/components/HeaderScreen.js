import * as React from 'react';

import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { PageHeader } from "../../../components/PageHeader";
import { YellowSeparator } from "../../../components/YellowSeparator";

export const HeaderScreen = ({ marginTop, marginBottom }) => {
    return (
        <ScreenWrapper marginTop={marginTop} marginBottom={marginBottom}>
            <PageHeader name={'рубрика'}
                title={'"Вопрос - Ответ"'}
                description={'Здесь мы решили написать ответы на популярные вопросы, связанные с с народами севера.'} />
            <YellowSeparator />
        </ScreenWrapper>
    );
};