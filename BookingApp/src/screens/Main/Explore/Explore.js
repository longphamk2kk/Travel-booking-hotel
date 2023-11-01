import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExplorePlaces from '../../../components/ExplorePlaces';

const Explore = () => {
  return (
    <View style={styles.container}>
      <ExplorePlaces />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Explore;
