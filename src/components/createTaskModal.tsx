import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Divider from "./divider";

// Props interface definition
interface CreateTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  handleNavigateToTask: () => void;
}

const CreateTaskModal = ({isVisible, onClose, handleNavigateToTask}: CreateTaskModalProps) => {
  // Animation setup
  const translateY = useRef(new Animated.Value(500)).current;

  // Handle modal visibility changes
  useEffect(() => {
    if (isVisible) {
      animateModal(0);
    } else {
      translateY.setValue(500);
    }
  }, [isVisible]);

  // Animation helper function
  const animateModal = (toValue: number, callback?: () => void) => {
    Animated.timing(translateY, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(callback);
  };

  // Close modal handler
  const closeModal = () => {
    animateModal(500, onClose);
  };

  // Pan gesture handler for drag-to-close
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          closeModal();
        } else {
          animateModal(0);
        }
      },
    })
  ).current;

  return (
    <Modal transparent visible={isVisible} animationType="none">
      <Pressable style={styles.modalOverlay} onPress={closeModal}>
        <Animated.View
          style={[
            styles.modalContent,
            { transform: [{ translateY }] },
          ]}
          {...panResponder.panHandlers}
        >
          {/* Task Input Fields */}
          <TextInput
            style={[styles.taskName, styles.input]}
            placeholder="Task name"
            placeholderTextColor="#999"
            value="Task name"
          />
          <TextInput
            style={[styles.description, styles.input]}
            placeholder="Description"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />

          {/* Action Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.iconButton}>
              <AntDesign name="calendar" size={18} color="#209146" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="flag" size={18} color="#9F9F9F" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.textButton}>
              <MaterialIcons name="person" size={18} color="#9F9F9F" />
              <Text style={styles.textButtonText}>Assign to</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textButton}>
              <MaterialIcons name="person" size={18} color="#9F9F9F" />
              <Text style={styles.textButtonText}>Approver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Entypo name="dots-three-horizontal" size={20} color="#9F9F9F" />
            </TouchableOpacity>
          </View>

          <Divider />

          {/* Bottom Action Bar */}
          <View style={styles.actionButtonContainer}>
            <View style={styles.actionDropdown}>
              <Text style={styles.actionDropdownText}>Default</Text>
              <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
            </View>
            <TouchableOpacity style={styles.actionButton} onPress={handleNavigateToTask}>
              <MaterialIcons name="send" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

// Styles
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    width: "100%",
    height: "30%",
  },
  input: {
    padding: 10,
    marginBottom: 16,
  },
  taskName: {
    fontSize: 18,
    marginBottom: 4,
    color: "#8F8F8F"
  },
  description: {
    fontSize: 14,
    color: "#959595",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  textButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  textButtonText: {
    fontSize: 14,
    color: "#000",
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,  
  },
  actionDropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionDropdownText: {
    fontSize: 14,
    color: "#6E6E6E",
  },
  actionButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

export default CreateTaskModal;