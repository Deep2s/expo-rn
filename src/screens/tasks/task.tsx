import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import Divider from "@components/divider";

const TaskCard = () => (
  <View style={styles.card}>
    <View>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Make presentation</Text>
        <Image
          source={{
            uri: "https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-male-profile-picture-icon-and-png-image-png-image_6118773.png",
          }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.cardDescription}>
        Do the research about the requirement then create draft and design it.
      </Text>
      {/* Tags */}
      <View style={styles.tagsContainer}>
        <Text style={[styles.tag, styles.macroTag]}>Macro</Text>
        <Text style={[styles.tag, styles.backendTag]}>Backend</Text>
        <Text style={[styles.tag, styles.bugTag]}>Bug</Text>
        <TouchableOpacity style={styles.addTagButton}>
          <AntDesign name="plus" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    {/* Footer */}
    <View style={styles.cardFooter}>
      <Text style={styles.inProgress}>In-progress</Text>
      <Text style={styles.priority}>High</Text>
      <Text style={styles.date}>12 Oct - 15 Oct</Text>
    </View>
  </View>
);

const Section = ({ title }) => (
  <View style={styles.section}>
    {/* Section Header */}
    <View style={styles.sectionHeader}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 16,
        }}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, styles.progressBarPrimary]} />
          <View style={[styles.progressBar, styles.progressBarSecondary]} />
          <View style={[styles.progressBar, styles.progressBarTertiary]} />
        </View>
      </View>
      <Text style={styles.percentage}>30%</Text>
    </View>

    <Divider dashed dashLength={5} dashGap={10} />
    {/* Board */}
    <View style={[styles.header, { marginTop: 16 }]}>
      <View style={[styles.header, { gap: 10 }]}>
        <Feather name="monitor" size={24} color="#868686" />
        <Text style={styles.boardText}>Board</Text>
        <MaterialIcons name="keyboard-arrow-down" size={16} color="#000" />
      </View>
      <Text style={styles.boardCount}>0/0</Text>
    </View>

    <Divider dashed dashLength={5} dashGap={10} />

    {/* Filters */}
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.filters}
    >
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Date</Text>
        <MaterialIcons name="keyboard-arrow-down" size={16} color="#909090" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Status</Text>
        <MaterialIcons name="keyboard-arrow-down" size={16} color="#909090" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Assignee</Text>
        <MaterialIcons name="keyboard-arrow-down" size={16} color="#909090" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
    {/* Task Cards */}

    <TaskCard />
    <TaskCard />
    <TaskCard />
  </View>
);

const Task = ({ navigation }: { navigation: any }) => {
  const handleGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="menu" size={20} color="#616161" />
          <View style={styles.headerText}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Text style={styles.title}>Tasks</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="black"
                style={{ fontWeight: "700" }}
              />
            </View>
            <Text
              style={styles.subtitle}
            >{`General > Big Billion Campaign...> Tasks`}</Text>
          </View>
        </View>

        <View style={styles.header}>
          <Ionicons name="folder-outline" size={20} color="#616161" />
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color="#616161"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Divider />

      {/* Sections */}
      <ScrollView style={{ marginBottom: 40 }}>
        <Section title="Social" />
        <Section title="Media" />
        <Section title="Default" />
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleGoToDashboard}
      >
        <Text style={styles.floatingButtonTextSmall}>Go to</Text>
        <Text style={styles.floatingButtonText}>Office</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 16,
  },
  section: {
    marginVertical: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
  },
  percentage: {
    fontSize: 14,
    color: "gray",
  },
  progressBarContainer: {
    backgroundColor: "#EEEEEE",
    height: 12,
    borderRadius: 5,
    marginVertical: 8,
    flexDirection: "row",
  },
  progressBar: {
    width: 50,
    height: "100%",
    borderRadius: 5,
  },
  progressBarPrimary: {
    backgroundColor: "#DDF1DC",
  },
  progressBarSecondary: {
    backgroundColor: "#F4ECD4",
  },
  progressBarTertiary: {
    backgroundColor: "#EEEEEE",
  },
  filters: {
    flexDirection: "row",
    marginVertical: 16,
  },
  filterButton: {
    height: 40,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#A1A1A1",
    borderRadius: 16,
    paddingHorizontal: 20,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    color: "black",
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000000",
    borderRadius: 12,
    padding: 24,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 500,
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
    color: "#777777",
    fontWeight: 300,
    marginBottom: 12,
    letterSpacing: 0.3,
    maxWidth: "80%",
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 12,
  },
  tag: {
    fontSize: 16,
    // color: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 0.5,
  },
  macroTag: {
    borderColor: "#A95757",
    color: "#B37878DB",
  },
  backendTag: {
    borderColor: "#4FAA71",
    color: "#55AE76CF",
  },
  bugTag: {
    borderColor: "#728ACB",
    color: "#718DD9D9",
  },
  addTag: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",

    marginTop: 12,
  },
  inProgress: {
    fontSize: 14,
    color: "#7C7C7C",
    backgroundColor: "#FAF9EF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  priority: {
    fontSize: 14,
    color: "#7C7C7C",
    backgroundColor: "#FDF2F2",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  date: {
    fontSize: 14,
    color: "#797979",
    backgroundColor: "#F7F7F7",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  addTaskText: {
    fontSize: 16,
    color: "gray",
  },
  floatingButton: {
    backgroundColor: "#0499FF",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
    elevation: 5,
    minWidth: 100,
  },
  floatingButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  floatingButtonTextSmall: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  headerText: {
    marginTop: 4,
    marginLeft: 10,
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
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#4D4D4D",
    padding: 2,
    // marginRight: 30,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  addTagButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Task;
