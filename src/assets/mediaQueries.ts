export enum BreakPoints {
    phone = 320,
    tablet = 600,
    desktop = 1024,
    wide = 1200,
    huge = 1440
}

const MediaQueries = {
    BIGGER_THAN_PHONE: `@media only screen and (min-width: ${BreakPoints.phone +
        1}px)`,

    BIGGER_THAN_TABLET: `@media only screen and (min-width: ${BreakPoints.tablet +
        1}px)`,

    BIGGER_THAN_DESKTOP: `@media only screen and (min-width: ${BreakPoints.desktop +
        1}px)`,

    BIGGER_THAN_WIDE: `@media only screen and (min-width: ${BreakPoints.wide +
        1}px)`,

    BIGGER_THAN_HUGE: `@media only screen and (min-width: ${BreakPoints.huge +
        1}px)`
};

export default MediaQueries;
