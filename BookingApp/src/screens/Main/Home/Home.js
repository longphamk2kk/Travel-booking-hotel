import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomSort from '../../../components/CustomSort';
import TravelDiscounts from '../../../components/TravelDiscounts';
import FamousPlaces from '../../../components/FamousPlaces';

const Home = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  };

  const scrollViewRef = React.useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomTextInput
          placeholder={'Search hotel, place, ...'}
          imageSource={require('../../../assets/icons/icon_search.png')}
          style={styles.textInputView}
        />
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/icon_bell.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/icon_chat.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={[
          styles.scrollViewContent,
          {paddingBottom: tabBarHeight},
        ]}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={false}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}>
        <View style={styles.filterView}>
          <CustomSort
            navigation={navigation}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.travelDiscountsView}>
            <Text style={styles.discountText}>Ưu đãi</Text>
            <TravelDiscounts />
          </View>
          <View style={styles.famousPlacesView}>
            <Text style={styles.famousPlacesText}>Địa điểm nổi tiếng</Text>
            <FamousPlaces />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#3399FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  textInputView: {
    backgroundColor: 'white',
    width: 330,
    margin: 10,
  },
  icon: {
    tintColor: 'white',
    height: 30,
    width: 30,
    marginRight: 5,
  },
  filterView: {
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  travelDiscountsView: {
    marginTop: 20,
  },
  discountText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  famousPlacesView: {
    marginTop: 20,
  },
  famousPlacesText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default Home;
