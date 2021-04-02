import { makeStyles } from "@material-ui/core/styles"
import { mainTheme } from '../styles'

const useGlobalClasses = makeStyles(() => ({
    avatar: {
        margin: "8px auto",
        backgroundColor: mainTheme.colors.green
    },

    redTitle: {
        color: mainTheme.colors.red,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: mainTheme.fontFamily.DmSans,
        fontSize: mainTheme.textSizes.extraSmall,
        fontWeight: 700,
        letterSpacing: '.18em',
    },

    markedText: {
        fontSize: mainTheme.textSizes.small,
        backgroundColor: '#fcf8e3',
        padding: 5,
        fontStyle: 'italic',
        lineHeight: 1.6,
        textAlign: 'center'
    },

    regularText: {
        fontFamily: mainTheme.fontFamily.DmSans,
        fontSize: mainTheme.textSizes.regular,
    },

    regularTextWhite: {
        fontFamily: mainTheme.fontFamily.DmSans,
        fontSize: mainTheme.textSizes.regular,
        color: "white"
    },

    title: {
        color: 'inherit',
        textAlign: 'center',
        fontFamily: mainTheme.fontFamily.Roboto,
        fontSize: mainTheme.textSizes.middle,
        fontWeight: 500,
    },

    largeTitle: {
        color: mainTheme.colors.darkBlue,
        textAlign: 'center',
        fontFamily: mainTheme.fontFamily.Roboto,
        fontSize: mainTheme.textSizes.large,
        fontWeight: 500,
    },

    extraLargeText: {
        color: mainTheme.colors.darkBlue,
        textAlign: 'center',
        fontFamily: mainTheme.fontFamily.Roboto,
        fontSize: mainTheme.textSizes.extraLarge,
        fontWeight: 500,
    },

    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    screenRoot: {
        margin: '80px 0px'
    },

    cardBody: {
        display: "flex",
        margin: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    cardLink: {
        fontSize: mainTheme.textSizes.regular,
        color: mainTheme.colors.red,
        transition: 'all 0.5s ease',
        '&:hover': {
            cursor: 'pointer',
            color: 'red',
        },
        gridItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    columnGrid: {
        display: 'flex',
        flexDirection: 'column'
    },
    footer: {
        width: '100%',
        display: 'flex',
        padding: '20px 0px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B806B',
    }
}))


export { useGlobalClasses }