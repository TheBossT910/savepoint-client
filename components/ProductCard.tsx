// Taha Rashid
// May 24, 2025
// Product card componnent

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { CustomButton } from '@/components/CustomButton';
import { IProductsInventory } from '@/interfaces/api';

type ProductCardProps = {
    product: IProductsInventory
};

const ProductCard = ( props: ProductCardProps ) => {
    // Styling
    const width = 180;
    const widthBalance = 50;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        productCard: {
            flexDirection: 'row',
            backgroundColor: 'red',
            padding: 10,
            minHeight: 200,
        },
        childRight: {
            backgroundColor: 'blue',
            // margin: 5,
            padding: 10,
            width: width + widthBalance,
            justifyContent: 'space-between'
        },
        childLeftTop: {
            backgroundColor: '#33b249',
            width: width - widthBalance,
        },
        childLeftBottom: {
            width: width - widthBalance,
        },
        text: {
            color: 'cyan',
            fontWeight: '900',
            textAlign: 'center',
        },
        title: {
            marginBottom: 5
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        typesConditionsCard: {
            borderRadius: 5,
            backgroundColor: 'red',
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
        },
        button: {
            width: 100,
            height: 30,
            padding: 0,
            backgroundColor: 'red',
            color: 'white',
        },
    });

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
                <CustomButton style={ styles.button } properties={{ backgroundColor: '#33b249', color: 'white', borderRadius: 5 }} text={ 'Quick Add' } onPress={ () => console.log('Buy button pressed') }/>
            </View>
        </ImageBackground>

        {/* Info area */}
        <View style={ styles.childRight }>
            {/* Title */}
            <View style={ styles.title }>
                <Text style={ styles.text }>{ props.product.info.name }</Text>
            </View>
          
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