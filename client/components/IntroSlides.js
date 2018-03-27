import React, { Component } from 'react';
import { styles } from '../assets/styles/StyleSheet';
import { Button, View, Text } from 'native-base'
import { Dimensions, Image } from 'react-native'
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator.js'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = (+slideWidth) + (+horizontalMargin) * 2.5;
const itemHeight = (Dimensions.get('window').height) * 0.88;


export default class IntroSlides extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [{ title: 'START ADVENTURE', text: 'Head to the adventures screen and tap one to begin your journey. The first clue box will appear right in front of you. Tap it for your first clue.', image: require('../assets/img/icon_1.png') }, { title: 'FOLLOW MAP', text: 'Check the map view to track your distance to the next clue box. Once you get close enough the camera will open for you.', image: require('../assets/img/icon_2.png') }, { title: 'FIND CLUES', text: 'Use the camera view to find hidden augmented reality clue boxes. They\'re the ones with the question marks on them.', image: require('../assets/img/icon_3.png') }, { title: 'GET HINTS', text: 'Feeling stuck? Tap the question mark icon on the clue or in your clue list to receive some additional hints.', image: require('../assets/img/icon_4.png') }, { title: 'HAVE FUN', text: 'Make sure to have a great time and always be aware of your surroundings! Love, the 404 Boiz', image: require('../assets/img/icon_5.png') }],
            activeSlide: 0
        }
    }

    get pagination() {
        const { cards, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={cards.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: '#2C3039' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                width: itemWidth,
                height: itemHeight,
                paddingHorizontal: horizontalMargin,
                backgroundColor: '#09b9b8',
                justifyContent: 'center',
                top: '8%'

            }}>
                <View style={{
                    width: slideWidth,
                    flex: 1
                }}>
                    <View style={styles.slideContainer}>
                        <Image style={styles.slideIcon} source={item.image} />
                        <Text style={styles.slideTitle}>{item.title}</Text>
                        <Text style={styles.slideText}>{item.text}</Text>
                    </View>
                    <Button style={styles.slideButton} rounded onPress={() => this.props.navigation.navigate('MY PROFILE')}><Text style={styles.slideButtonTxt}>Skip Tutorial</Text></Button>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.cards}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    itemHeight={itemHeight}
                    layout={'default'}
                    layoutCardOffset={`18`}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.pagination}
            </View>
        );
    }
}

