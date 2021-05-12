import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { COLORS, SIZES, icons, FONTS, images, dummy } from '../constants'

const Home = () => {

  const [features, setFeatures] = useState(dummy.featuresData)
  const [specialPromos, setSpecialPromos] = useState(dummy.specialPromoData)

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding * 2
        }}
      >
        <View
          style={{ flex: 1 }}
        >
          <Text
            style={{
              ...FONTS.h1
            }}
          >
            Hello!
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.gray
            }}
          >
            Daniel
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.lightGray
            }}
          >
            <Image
              source={icons.bell}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                width: 10,
                height: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5
              }}
            >

            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderBanner = () => {
    return (
      <View
        style={{
          height: 120,
          borderRadius: 20
        }}
      >
        <Image
          source={images.banner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20
          }}
        />
      </View>
    )
  }

  const renderFeatures = () => {
    const Header = () => (
      <View
        style={{
          marginBottom: SIZES.padding * 2
        }}
      >
        <Text
          style={{
            ...FONTS.h3
          }}
        >
          Features
        </Text>
      </View>
    )

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: 'center'
        }}
        onPress={() => console.log(item.description)}
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: item.color
            }}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            flexWrap: 'wrap',
            ...FONTS.body4
          }}
        >
          {item.description}
        </Text>
      </TouchableOpacity>
    )
    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{
          marginTop: SIZES.padding * 2
        }}
      />
    )
  }

  const renderPromoHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.padding
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <Text
            style={{
              ...FONTS.h3
            }}
          >
            Special Promos
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('all promos')}
        >
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderPromos = () => {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    )
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary
          }}
        >
          <Image
            source={images.promoBanner}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          />
        </View>
        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
        >
          <Text
            style={{
              ...FONTS.h4
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              ...FONTS.body4
            }}
          >
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 3
        }}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        data={specialPromos}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 80
            }}
          >
          </View>
        }
      />
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      {renderPromos()}
    </SafeAreaView>
  )
}

export default Home