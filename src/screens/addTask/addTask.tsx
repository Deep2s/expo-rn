import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CreateTaskModal from "@components/createTaskModal";
import Divider from "@components/divider";
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

interface AddTaskProps {
  navigation: any;
}

const AddTask: React.FC<AddTaskProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleGoToTask = () => {
    setModalVisible(false);
    navigation.navigate("Task");
  };
  const handleGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };
  const handleOpenCreateTaskModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {modalVisible && <CreateTaskModal isVisible={modalVisible} onClose={() => setModalVisible(false)} handleNavigateToTask={handleGoToTask} />}
      <View style={styles.header}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="menu" size={20} color="#616161" />
          <View style={styles.headerText}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Untitled</Text>
              <Ionicons name="chevron-forward" size={18} color="black" style={{fontWeight: '700'}} />
            </View>
            <Text style={styles.subtitle}>{`General > Big Billion Campaign...> Tasks`}</Text>
          </View>
        </View>

        <View style={styles.header}>
          <Ionicons name="folder-outline" size={20} color="#616161" />
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="dots-vertical" size={20} color="#616161" />
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
      
      <View style={[styles.header, {marginTop: 16}]}>
        <View style={styles.header}>
          <Feather name="monitor" size={24} color="#868686" />
          <Text style={styles.boardText}>Board</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="#000" />
        </View>
        <Text style={styles.boardCount}>
          0/0
        </Text>
      </View>

      <Divider dashed={true} dashLength={5} dashGap={10} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
        {['Date', 'Status', 'Assignee'].map((filter) => (
          <TouchableOpacity key={filter} style={styles.filterButton}>
            <Text style={styles.filterText}>{filter}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color="#909090" />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>+</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.taskSection}>
        <TouchableOpacity style={styles.addTaskButton} onPress={handleOpenCreateTaskModal}>
          <Text style={styles.addTaskText}>+ Add a task</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.floatingButton} onPress={handleGoToDashboard}>
        <Text style={styles.floatingButtonTextSmall}>Go to</Text>
        <Text style={styles.floatingButtonText}>Office</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
        gap: 10,
    },
    headerText: {
      marginTop: 4,
      marginLeft: 4,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 700,
    },
    subtitle: {
        fontSize: 14,
        color: "gray",
        marginBottom: 16,
    },
    filters: {
        flexDirection: "row",
        marginVertical: 16,
    },
    filterButton: {
        height: 40,
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "#A1A1A1",
        borderRadius: 16,
        paddingHorizontal: 20,
        marginRight: 8,
    },
    filterText: {
        fontSize: 14,
        color: "#7C7C7C",
    },
    taskSection: {
        flex: 1,
        justifyContent: "flex-start",
    },
    addTaskButton: {
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        marginTop: 16,
    },
    addTaskText: {
        fontSize: 16,
        color: "gray",
    },
    floatingButton: {
        backgroundColor: "#0499FF",
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 30,
        width: 200,
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
        elevation: 5,
    },
    floatingButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
    floatingButtonTextSmall: {
      color: "white",
      fontSize: 12,
      textAlign: "center",
    },
    iconButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: "#F6F6F6",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
    },
    boardText: {
      fontSize: 18,
      color: "#727272",
      fontWeight: 700,
    },
    boardCount: {
      fontSize: 18,
      color: "#858585",
      fontWeight: 700,
      letterSpacing: 0.5,
    },
});

export default AddTask;