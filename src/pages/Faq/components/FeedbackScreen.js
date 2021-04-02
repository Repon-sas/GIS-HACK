import * as React from 'react';
import { Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { mainTheme } from "../../../styles";
import { useGlobalClasses } from "../../../components/Global";

import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { PageHeader } from "../../../components/PageHeader";
import { Mail, Phone } from "../../../icons";
import { Button } from '../../../components/CustomButton'
import { useState } from "react";

// TODO: Добавить логику отправки фидбэка

const useClasses = makeStyles({
    cardsContainer: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: "auto",
        maxWidth: 700,
        marginBottom: 40
    },

    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '8px 0px',
        minWidth: 300,
    },

    cardTitle: {
        color: mainTheme.colors.darkBlue,
        marginTop: 10,
    },

    cardDescription: {
        color: mainTheme.colors.lightPurple,
        fontSize: mainTheme.textSizes.extraSmall
    },

    textField: {
        maxWidth: 340,
        margin: '10px auto'
    },
    btn: {
        backgroundColor: '#00FFC2',
    }

})

export const FeedbackScreen = ({ marginTop, marginBottom }) => {
    const classes = useClasses()
    const globalClasses = useGlobalClasses()
    const [message, setMessage] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()

    const postFeedback = async () => {
        await axios.post('/api/front/feedback', {
            name: name,
            mail: email,
            text: message
        }).then((res) => {
            if (res.status == 200) {
                resetTextFields()
                showMessage()
            }
        }).catch((err) => {
            if (err) {
                console.log('err', err)
            }
        })
    }

    const handleClick = () => {
        postFeedback()
    }

    const resetTextFields = () => {
        setMessage('')
        setEmail('')
        setName('')
    }

    const showMessage = () => {
        alert('Сообщение успешно отправлено! Ожидайте ответ на указанный вами почовый адрес.')
    }

    return (
        <ScreenWrapper marginTop={marginTop} marginBottom={marginBottom}>
            <PageHeader name={'свяжитесь с нами'}
                title={'Остались вопросы?'}
                description={'ответим на дополнительные вопросы в специальной форме, там же можно написать отзыв об платформе и поделится рекомендациями по улучшению сервиса.'}
            />
            <Box className={classes.cardsContainer}>
                <a href='mailto:#!'>
                    <Box className={classes.cardBody}>
                        <Mail />
                        <Typography className={`${globalClasses.redTitle} ${classes.cardTitle}`}>Напишите
                            нам</Typography>
                        <Typography className={`${globalClasses.regularText} ${classes.cardDescription}`}>Мы ответим в
                            течении ~24 часов</Typography>
                    </Box>
                </a>
                <a href='tel:89627311800'>
                    <Box className={classes.cardBody}>
                        <Phone />
                        <Typography className={`${globalClasses.redTitle} ${classes.cardTitle}`}>Позвоните</Typography>
                        <Typography className={`${globalClasses.regularText} ${classes.cardDescription}`}>8-18 в течении
                            дня</Typography>
                    </Box>
                </a>
            </Box>
            <Box display={'flex'} flexWrap='wrap' maxWidth={700} margin={'auto'}>
                <TextField
                    className={classes.textField}
                    color='primary'
                    fullWidth
                    id="userName"
                    label="Ваше имя"
                    value={name}
                    onChange={(textField) => {
                        setName(textField.target.value)
                    }}
                />
                <TextField
                    className={classes.textField}
                    color='primary'
                    fullWidth
                    id="eMail"
                    label="Ваша почта"
                    value={email}
                    onChange={(textField) => {
                        setEmail(textField.target.value)
                    }}
                />
            </Box>
            <Box display={'flex'} flexDirection={'column'} maxWidth={700} pt={5} margin={'auto'} paddingBottom={10}>
                <TextField
                    id="outlined-multiline-static"
                    label="Ваше сообщение"
                    multiline
                    fullWidth
                    rows={5}
                    value={message}
                    onChange={(textField) => {
                        setMessage(textField.target.value)
                    }}
                    defaultValue=""
                    variant="outlined"
                    color='primary'
                />
                <Button text='Отправить сообщение' onClick={handleClick} />
            </Box>
        </ScreenWrapper>
    );
};