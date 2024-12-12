import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const _layout = () => {
  const [firstInput, setFirstTextInput] = useState("");
  const [firstBoxTodos, setFirstBoxTodos] = useState<string[]>([]);

  const addFirstBoxTodo = () => {
    setFirstBoxTodos((prev) => [...prev, firstInput]);
    setFirstTextInput("");
  };

  const [Secondnput, setSecondTextInput] = useState("");
  const [SecondBoxTodos, setSecondBoxTodos] = useState<string[]>([]);

  const addSecondBoxTodo = () => {
    setSecondBoxTodos((prev) => [...prev, Secondnput]);
    setSecondTextInput("");
  };

  const [Thirdnput, setThirdTextInput] = useState("");
  const [ThirdBoxTodos, setThirdBoxTodos] = useState<string[]>([]);

  const addThirdBoxTodo = () => {
    setThirdBoxTodos((prev) => [...prev, Thirdnput]);
    setThirdTextInput("");
  };

  const [Fourthnput, setFourthTextInput] = useState("");
  const [FourthBoxTodos, setFourthBoxTodos] = useState<string[]>([]);

  const addFourthBoxTodo = () => {
    setFourthBoxTodos((prev) => [...prev, Fourthnput]);
    setFourthTextInput("");
  };
  console.log(firstBoxTodos);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Matrix Task Manager</Text>
      </View>
      <View style={styles.dragBoxContainer}>
        <View style={styles.dragBox}>
          <Text style={styles.dragBoxText}>Urgent & important</Text>
          <View style={styles.addTodoContainer}>
            <TextInput
              onChangeText={(text) => {
                setFirstTextInput(text);
              }}
              value={firstInput}
              placeholder="Add a new"
              style={styles.todoInput}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={addFirstBoxTodo}>
              <Image
                source={require("@/assets/add.png")}
                style={styles.addImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={firstBoxTodos}
              renderItem={({ item }) => (
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 10,
                    borderWidth: 1,
                    width: "80%",
                    marginTop: 10,
                    borderColor: "darkgray",
                    color: "black",
                  }}
                >
                  {item}
                </Text>
              )}
            />
          </View>
        </View>
        <View style={styles.dragBox2}>
          <Text style={styles.dragBoxText}>Not Urgent & important</Text>
          <View style={styles.addTodoContainer}>
            <TextInput
              onChangeText={(text) => {
                setSecondTextInput(text);
              }}
              value={Secondnput}
              placeholder="Add a new"
              style={styles.todoInput}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={addSecondBoxTodo}>
              <Image
                source={require("@/assets/add.png")}
                style={styles.addImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={SecondBoxTodos}
              renderItem={({ item }) => (
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 10,
                    borderWidth: 1,
                    width: "80%",
                    marginTop: 10,
                    borderColor: "darkgray",
                    color: "black",
                  }}
                >
                  {item}
                </Text>
              )}
            />
          </View>
        </View>
        <View style={styles.dragBox3}>
          <Text style={styles.dragBoxText}>Urgent & Not important</Text>
          <View style={styles.addTodoContainer}>
            <TextInput
              onChangeText={(text) => {
                setThirdTextInput(text);
              }}
              value={Thirdnput}
              placeholder="Add a new"
              style={styles.todoInput}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={addThirdBoxTodo}>
              <Image
                source={require("@/assets/add.png")}
                style={styles.addImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={ThirdBoxTodos}
              renderItem={({ item }) => (
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 10,
                    borderWidth: 1,
                    width: "80%",
                    marginTop: 10,
                    borderRadius: 8,
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  {item}
                </Text>
              )}
            />
          </View>
        </View>
        <View style={styles.dragBox4}>
          <Text style={styles.dragBoxText}>Not Urgent & Not important</Text>
          <View style={styles.addTodoContainer}>
            <TextInput
              onChangeText={(text) => {
                setFourthTextInput(text);
              }}
              value={Fourthnput}
              placeholder="Add a new"
              style={styles.todoInput}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={addFourthBoxTodo}>
              <Image
                source={require("@/assets/add.png")}
                style={styles.addImage}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={FourthBoxTodos}
              renderItem={({ item }) => (
                <Text
                  style={{
                    padding: 5,
                    marginLeft: 10,
                    borderWidth: 1,
                    width: "80%",
                    marginTop: 10,
                    borderRadius: 8,
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  {item}
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },

  header: {
    height: "5%",
    // backgroundColor: "black",
  },
  dragBoxContainer: {
    height: "90%",
    backgroundColor: "blue",
    flex: 1,
    // gap: 1,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  dragBox: {
    backgroundColor: "#ff6464",
    // flex: 1,
    width: "50%",
    height: "50%",
  },
  dragBox2: {
    backgroundColor: "#66cd00",
    // flex: 1,
    width: "50%",
    height: "50%",
  },
  dragBox3: {
    backgroundColor: "#ffa700",
    // flex: 1,
    width: "50%",
    height: "50%",
  },
  dragBox4: {
    backgroundColor: "#0096df",
    // flex: 1,
    width: "50%",
    height: "50%",
  },

  headerText: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
  },
  dragBoxText: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 14,
    color: "white",
  },
  todoInput: {
    // borderWidth: 1,
    width: "60%",
    justifyContent: "center",
    marginLeft: 20,
    // marginTop: 20,
    // borderColor: "#fff",
    borderRadius: 7,
    backgroundColor: "black",
    paddingLeft: 20,
    color: "white",
  },

  addImage: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  addTodoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
