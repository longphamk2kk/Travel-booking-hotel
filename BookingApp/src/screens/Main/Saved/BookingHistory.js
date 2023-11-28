import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BookingHistory = () => {
//Data Vi du:
  // const bookings = [
  //   { id: '1', name: 'ks 1', date: '28-11-2023' },
  //   { id: '2', name: 'ks 2', date: '27-11-2023' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text style={styles.bookingName}>{item.name}</Text>
            <Text style={styles.bookingDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BookingHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  bookingItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  bookingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookingDate: {
    fontSize: 16,
    color: 'grey',
  },
});
