import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { mainTheme } from "../../../styles";

import { ScreenWrapper } from "../../../components/ScreenWrapper";

// TODO: разобраться с форматирование строки ответа на вопрос "Как происходит «ОНКОПОИСК»?"
const faqs = [
    {
        question: 'Что такое юрта?',
        answer: 'Переносное, конусообразной формы жилище у кочевых народов Азии.',
    },
    {
        question: 'Что такое Тыхэмин?',
        answer: 'Эвенкийский рыбный суп «Тыхэмин» готовится икрой, укрепляет иммунную систему и не простужаться в зимний период – дело не из легких.',
    },
    {
        question: 'Значение круговых танцов для народов севера?',
        answer: `Круговой танец рассматривается как
        универсальная форма выражения национального самосознания.`,
    },
    {
        question: 'Зачем народы севера занимаются оленеводством? ',
        answer: 'отрасль животноводства, занимающаяся разведением и использованием северных оленей, а также благородного оленя и пятнистого оленя с целью получения пант, мяса и другой продукции.',
    },
]


const useClasses = makeStyles({
    question: {
        fontSize: mainTheme.textSizes.middle,
        color: mainTheme.colors.darkBlue,
        padding: '10px 0px',
        fontWeight: 500,
    },

    answer: {
        fontSize: mainTheme.textSizes.small,
        color: mainTheme.colors.lightPurple,
    }

})

export const FAQScreen = ({ marginTop, marginBottom }) => {
    const classes = useClasses()
    return (
        <ScreenWrapper marginTop={marginTop} marginBottom={marginBottom}>
            {faqs.map((faq, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.question}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </ScreenWrapper>
    );
};