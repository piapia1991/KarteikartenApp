import React, {Component} from 'react';
import {LearningCardComponent} from "./LearningCardComponent";
import {Grid, Button, IconButton, Icon, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Swipeable from 'react-swipeable'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    gridContainer: {
        height: '100%',
        paddingBottom: '2rem',
        paddingTop: '1rem'
    },
    cardContainer: {
        minHeight: '75%',
    },
    swipe: {
        touchAction: 'none',
        height: '100%'
    }
});


class LearningContentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCardRef: undefined,
            currentCardKeyIndex: undefined,
            backPage: false
        };
    }


    render() {

        let htmlContent = '';
        let title = '';
        const {classes} = this.props;

        if (this.props.cards[this.state.currentCardRef] !== undefined) {
            if (this.state.backPage === false) {
                htmlContent = this.props.cards[this.state.currentCardRef].frontHtml
            } else {
                htmlContent = this.props.cards[this.state.currentCardRef].backHtml
            }
            if (this.props.cards[this.state.currentCardRef].title !== undefined) {
                title = this.props.cards[this.state.currentCardRef].title
            } else {
                title = this.state.currentCardRef
            }
        }


        return (
            <Swipeable
                className={classes.swipe + " swipe"}
                trackMouse
                preventDefaultTouchmoveEvent
                onSwipedLeft={() => this.goToCard(this.state.currentCardKeyIndex - 1)}
                onSwipedRight={() => this.goToCard(this.state.currentCardKeyIndex + 1)}
            >
                    <Grid container className={classes.gridContainer} direction={'column'} justify={'space-between'}>
                        <Grid className={classes.cardContainer} container >
                            <Grid item container direction={'column'} justify={'center'} alignItems={'center'} xs={3} sm={1}>
                                <IconButton onClick={() => this.goToCard(this.state.currentCardKeyIndex - 1)}
                                            className={classes.button} aria-label="Back">
                                    <Icon>keyboard_arrow_left_icon</Icon>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} sm={10}>
                                <Typography variant={'display2'}>{title} </Typography>
                                <Typography variant={'display1'}>{this.state.backPage? 'Rückseite' : 'Vorderseite'} </Typography>
                                {this.state.currentCardRef && <LearningCardComponent htmlContent={htmlContent}/>}
                            </Grid>
                            <Grid item container direction={'column'} alignItems={'center'} justify={'center'} xs={3} sm={1}>
                                <IconButton onClick={() => this.goToCard(this.state.currentCardKeyIndex + 1)}
                                            className={classes.button} aria-label="Back">
                                    <Icon>keyboard_arrow_right_icon</Icon>
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Grid container justify={'center'} >
                            <Grid item xs={3} sm={1}>
                                <Button onClick={() => this.handleFalseButton()} variant="fab" color="secondary">
                                    <Icon>clear_icon</Icon>
                                </Button>
                            </Grid>
                            <Grid item xs={3} sm={1}>
                                <Button onClick={() => this.handlePageToggleButton()} variant="fab"
                                        aria-label="turnAround">
                                    <Icon>replay_icon</Icon>
                                </Button>
                            </Grid>
                            <Grid item xs={3} sm={1}>
                                <Button onClick={() => this.handleRightButton()} variant="fab" color="primary"
                                        aria-label="right">
                                    <Icon>done_icon</Icon>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
            </Swipeable>
        )
    };

    goToCard(goalCardIndex) {
        let possibleCardIndex;
        if (goalCardIndex < 0) {
            possibleCardIndex = this.props.currentCardRefs.length + goalCardIndex;
        } else {
            possibleCardIndex = goalCardIndex % this.props.currentCardRefs.length;
        }
        this.setState({
            currentCardRef: this.props.currentCardRefs[possibleCardIndex],
            currentCardKeyIndex: possibleCardIndex,
            backPage: false
        });
    }

    handlePageToggleButton = () => {
        let togglePage = !this.state.backPage;
        this.setState({backPage: togglePage});
    }

    handleRightButton = () => {
        console.log('Please save right answered Card', this.state.currentCardRef);
        this.goToCard(this.state.currentCardKeyIndex + 1);
    }

    handleFalseButton = ()=> {
        console.log('Please save false answered Card', this.state.currentCardRef);
        this.goToCard(this.state.currentCardKeyIndex + 1);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.currentCardRefs.length > 0) {
            let cardRef = props.currentCardRefs[0];
            state = {currentCardRef: cardRef, currentCardKeyIndex: 0, backPage: false};
        } else {
            state = {currentCardRef: undefined, currentCardKeyIndex: undefined, backPage: false};
        }
        return state;
    }


}

LearningContentComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LearningContentComponent)

