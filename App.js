import { useState } from 'react';
import { StyleSheet, View, FlatList, Button,StatusBar } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    //This is not the best way to update state when new state depends on previous state
    //setCourseGoals([...courseGoals, enteredGoalText]);

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },//list of objects as data
    ]);
    //console.log(enteredGoalText)
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    // console.log('DELETE');
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }
  return (
    <View style={styles.appContainer}>
      <StatusBar
        // animated={true}
        backgroundColor="transparent"
        // translucent = {true}
        
      />
      <Button
        title='ADD NEW GOAL'
        color="#5e0acc"
        onPress={startAddGoalHandler}
        style={styles.addGoalButton}
      />
     
        <GoalInput
        visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      

      <View style={styles.goalContainer}>
        {/* Here we can use ScrollView but we must use as it is used when item to 
        traverse has limited content.
        
        In case of lists , lists can be many and ScrollView renders all items in the beginning
        Suppose there are 10,000 items in lists
        ScrollView would render all 10,000 items in the beginning of the app start
        which can slow down the app.

        So Flatlist must be view when content item is long as it renders the content as
        User scrolls down.  */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {

            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}

              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}
/*
Stylesheet object must be used to add styes.
As this separates JSX and Styling code
Also styles can be used mutltiple times. 
Below is the stylesheet object where you can add properties.
Using Stylesheet also helps us to give a functionality of auto completion

We can also declare styles like
const styles = {

};
 we can also declare like
 const styles2 = {

 };
*/
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b'
  },

  addGoalButton:{
    marginTop:50,
  },

  goalContainer: {
    flex: 5,
    padding: 16
  },


});
