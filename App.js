import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Button } from 'react-native';
import GoalInput from './components/goalInput';
import GoalItem from './components/goalItem';
import { StatusBar } from 'expo-status-bar';
import colors from './assets/colors';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length > 0) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);

    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>

        <TouchableOpacity onPress={() => setVisible(true)} style={styles.goalButton}>
          <Text style={styles.goalButtonText}>Add New Goal</Text>
        </TouchableOpacity>

        <GoalInput onAddGoal={addGoalHandler} visible={visible} setVisible={setVisible} />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} id={itemData.item.id} deleteGoalHandler={deleteGoalHandler} />;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.veryDarkGray,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalButton: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.orange,
    borderRadius: 30,
  },
  goalButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 5,
  },
  goalsContainer: {
    flex: 4,
    marginTop: 16,
  }
});
