import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable, TextInput  } from 'react-native';
import Todo from './Todo';

const TodoList = () => {

  const [title, setTitle] = useState('TodoList');
  const [text, setText] = useState('');
  const [list, setList]= useState(['Hello World']);

  // Add Item Method
  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText('');
  }

  // Delete item method
  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index)
  }

  return(
    <View style={{width: '80%', marginBottom: 60}}>
      <Text style={[styles.align, styles.font]}>{title} </Text>
      <ScrollView>
       {list.map((x, index) => 
        <Todo key={index} item={x} index={index} />
       )}
      </ScrollView>
      <View>
        <TextInput 
          style={styles.input} 
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Pressable 
          onPress={addItem}
          style={styles.button} >
          <Text style={styles.color}> Add Item </Text>
        </Pressable>
      </View>
     
    </View>  
  )
}

const styles = StyleSheet.create({
  align: {
    alignSelf: 'center'
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  color: {
    color: '#2596be',
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold'
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8
  }
})

export default TodoList;