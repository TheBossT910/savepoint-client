// Taha Rashid
// May 24, 2025
// Product card componnent

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { CustomButton } from '@/components/CustomButton';
import { IProductsInventory } from '@/interfaces/api';
import { useRouter } from 'expo-router'

type ProductCardProps = {
    product: IProductsInventory
    style: {
        margin: number
    }
};

const ProductCard = ( props: ProductCardProps ) => {
    // Styling
    const width = 180;
    const widthBalance = 50;

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            marginVertical: props.style.margin,
            alignItems: 'center',
            justifyContent: 'center',
        },
        productCard: {
            flexDirection: 'row',
            backgroundColor: 'red',
            // padding: 5,
            minHeight: 200,
        },
        childRight: {
            backgroundColor: '#969696',
            // margin: 5,
            padding: 10,
            width: width + widthBalance,
            justifyContent: 'space-between'
        },
        childLeftTop: {
            backgroundColor: 'rgba(51, 178, 72, 0.7)',
            width: width - widthBalance,
            margin: 10,
            borderRadius: 5
        },
        childLeftBottom: {
            width: width - widthBalance,
            margin: 10
        },
        text: {
            color: 'white',
            fontWeight: '900',
            textAlign: 'center',
        },
        title: {
            marginBottom: 5
        },
        titleText: {
            color: 'white',
            fontWeight: '900',
            textAlign: 'center',
            fontSize: 20
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        typesConditionsCard: {
            borderRadius: 5,
            backgroundColor: '#FF0000',
            padding: 1,
            margin: 2,
        },
        typesText: {
            color: 'yellow',
            fontWeight: '900',
            textAlign: 'center',
            fontSize: 10
        },
        addButtonArea: {
            flex: 1,
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            // paddingBottom: 5
        },
        button: {
            width: width - widthBalance,
            height: 30,
            padding: 0,
            backgroundColor: '#FF0000',
            color: 'white',
        },
        buttonProperties: {
            backgroundColor: 'rgba(150, 150, 150, 0.7)',
            color: 'white', 
            borderRadius: 10
        }
    });

    const router = useRouter();
    const total = props.product.type.used + props.product.type.new + props.product.type.complete;

  return (
    <View style={ styles.container }>
      <View style={ styles.productCard }>
        {/* Cover area */}
        <ImageBackground source={{ uri: props.product.info.cover }}>
            <View style={ styles.childLeftTop }>
                <Text style={ styles.text }>
                    Total: { total }
                </Text>
            </View>
            <View style={[ styles.addButtonArea, styles.childLeftBottom ]}>
                <CustomButton style={ styles.button } properties={ styles.buttonProperties } text={ 'Quick Add' } onPress={ () => console.log('Quick add button pressed') }/>
            </View>
        </ImageBackground>

        {/* Info area */}
        <View style={ styles.childRight }>
            {/* Title */}
            <Pressable key={ props.product.info.id } onPress={ () => router.navigate({
                    pathname: '/(tabs)/details/[id]',
                    params: { 'id': props.product.info.id }

                }) }>
                <View style={ styles.title }>
                    <Text style={ styles.titleText }>{ props.product.info.name }</Text>
                </View>
            </Pressable>
          
          {/* Conditions */}
          <View>
            {/* Conditon type */}
            <View style={ styles.row }>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.typesText }>New { props.product.type.new }</Text>
                </View>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.typesText }>Complete { props.product.type.complete }</Text>
                </View>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.typesText }>Used { props.product.type.used }</Text>
                </View>
            </View>

            {/* Condition (specific) */}
            <View style={ styles.row }>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.text }>Excellent { props.product.condition.excellent } </Text>
                </View>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.text }>Very Good { props.product.condition.veryGood } </Text>
                </View>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.text }>Good { props.product.condition.good } </Text>
                </View>
                <View style={ styles.typesConditionsCard }>
                    <Text style={ styles.text }>Acceptable { props.product.condition.acceptable }</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProductCard;