const [data, setData] = useState<any[][]>([])
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState<any[][]>([]);

  useEffect(() => {
    const API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1I0BJo_yVMNq2MN25firB8PV5tjan4h3OEzYwJMxrwiE/values/ROLLER!A:AJ?key=AIzaSyAO506WLP6A2SFkLLWGE_KI9aZBx2SkQUM'; // यहाँ अपना API URL डालें

    axios.get<{ values?: any[][] }>(API_URL)
      .then(response => {
        setData(response.data.values || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales Order Details</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Item</Text>
        <Text style={styles.headerText}>Qty</Text>
      </View>
      {data.map((row: any, index: number) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.rowText}>
            {Array.isArray(row) ? row[0] : String(row)}
          </Text>
          <Text style={styles.rowText}>
            {Array.isArray(row) && row.length > 1 ? row[1] : ''}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15 
  },
  tableHeader: { 
    flexDirection: 'row', 
    backgroundColor: '#f4f4f4', 
    padding: 10, 
    borderBottomWidth: 1 
  },
  headerText: { 
    flex: 1, 
    fontWeight: 'bold' 
  },
  tableRow: { 
    flexDirection: 'row', 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: '#eee' 
  },
  rowText: { 
    flex: 1 
  }
});