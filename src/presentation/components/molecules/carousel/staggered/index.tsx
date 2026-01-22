import { globalStyles } from "@/src/presentation/theme/styles";
import React, { useCallback, useRef, useState } from "react"
import { StyleSheet, View, FlatList, Pressable, Animated, LayoutAnimation } from "react-native"
import { CustomText } from "../../../atoms/CustomText";
import { colors, sizes } from "@/src/presentation/theme";

const CARDS_DATA = [
    { key: "one", title: "card one", meta: { backgroundColor: 'lightblue' } },
    { key: "two", title: "card two", meta: { backgroundColor: 'lightgreen' } },
    { key: "three", title: "card three", meta: { backgroundColor: 'lightyellow' } },
    { key: "four", title: "card four", meta: { backgroundColor: 'lightpink' } },
    { key: "five", title: "card five", meta: { backgroundColor: 'lightgray' } }
];

const ROTATION_ANGLE = 5;


const StaggeredCarousel = ({ cards = CARDS_DATA }: { cards: any[] }) => {
    const cardsRef = useRef(cards.map(item => ({ data: item, translateX: new Animated.Value(0), }))).current;
    const [topIndex, setTopIndex] = useState(0);
    const renderItem = (item: any, index: number) => {
        const { data, translateX, } = item;
        const visibleIndex = (index - topIndex + cards.length) % cards.length;
        const rotate =
            visibleIndex === 0
                ? translateX.interpolate({
                    inputRange: [-500, 0, 500],
                    outputRange: ['-5deg', '0deg', '5deg'],
                })
                : `${visibleIndex % 2 === 0 ? ROTATION_ANGLE : -ROTATION_ANGLE}deg`;

        return (
            <Animated.View
                key={data.key}
                style={[styles.card,
                globalStyles.centeredContent,
                {
                    backgroundColor: data.meta.backgroundColor,
                    zIndex: cards.length - visibleIndex,
                    transform: [
                        {
                            translateX: translateX
                        },
                        {
                            rotateZ: rotate
                        }]
                },
                ]} >
                <CustomText variant='displayMedium'>{data.title}</CustomText>
            </Animated.View>
        )
    }

    const onLeftPress = () => {
        onNavigate("left");

    }

    const onRightPress = () => {
        // Logic to scroll right
        onNavigate("right");

    }
    const onNavigate = (direction: "left" | "right") => {
        const isLeft = direction === "left";
        const currentIndex = topIndex;
        const nextIndex = isLeft ? (currentIndex - 1 + cards.length) % cards.length : (currentIndex + 1) % cards.length;
        Animated.timing(cardsRef[currentIndex].translateX, {
            toValue: isLeft ? -500 : 500,
            duration: 400,
            useNativeDriver: true,
        }).start(() => {
            setTopIndex(nextIndex);
            Animated.timing(cardsRef[currentIndex].translateX, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start();
        });

    }

    return (
        <View style={[styles.container,]}>
            <Pressable onPress={onLeftPress} style={styles.navButton}>
                <CustomText variant="headlineSmall">{"<"}</CustomText>
            </Pressable>

            <View style={styles.content}>
                {cardsRef.map(renderItem)}
            </View>
            <Pressable onPress={onRightPress} style={styles.navButton}>
                <CustomText variant="headlineSmall">{">"}</CustomText>
            </Pressable>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    card: {
        position: 'absolute',
        height: 300,
        width: 200,
        marginHorizontal: sizes.spacing.sm,
        borderRadius: sizes.radius.md,
        borderWidth: sizes.radius.sm,
        borderColor: colors.divider,
    },
    navButton: {
        // padding: sizes.spacing.sm,
        height: 40,
        width: 40,
        borderRadius: sizes.radius.round,
        backgroundColor: colors.surfaceVariant,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default StaggeredCarousel;