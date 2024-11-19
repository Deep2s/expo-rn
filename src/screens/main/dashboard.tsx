import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { icons } from "src/constants/appConstants";
import SearchBarExample from "@components/searchbar";
import Divider from "@components/divider";

const Dashboard = ({ navigation }: { navigation: any }) => {
  const sections = [
    {
      title: "Claims",
      items: [
        { label: "Submit Claim", icon: icons.claims, isDisabled: false },
        { label: "Claim Applications", icon: icons.claims, isDisabled: true },
        { label: "Claim Status", icon: icons.claims, isDisabled: false },
      ],
    },
    {
      title: "Leave",
      items: [
        { label: "Apply Leave", icon: icons.leaves, isDisabled: false },
        { label: "Leave Applications", icon: icons.leaves, isDisabled: false },
        { label: "Leave Status", icon: icons.leaves, isDisabled: false },
      ],
    },
    {
      title: "Shift",
      items: [
        { label: "Shift Change", icon: icons.shift, isDisabled: false },
        { label: "Shift Applications", icon: icons.shift, isDisabled: false },
        { label: "Shift Status", icon: icons.shift, isDisabled: false },
      ],
    },
    {
      title: "Attendance",
      items: [
        { label: "My Attendance", icon: icons.attendance, isDisabled: false },
        { label: "Team Attendance", icon: icons.attendance, isDisabled: false },
        { label: "Change Requests", icon: icons.attendance, isDisabled: false },
      ],
    },
  ];

  const handleAddTask = () => {
    navigation.navigate("AddTask");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-male-profile-picture-icon-and-png-image-png-image_6118773.png",
            }}
            style={styles.profileImage}
          />
          <View>
            <View style={styles.profileInfoContainer}>
              <Text style={styles.profileName}>Abhishek</Text>
              <Ionicons name="chevron-forward" size={18} color="black" style={{fontWeight: '700'}} />
            </View>
            <Text style={styles.profileInfo}>34 members | 5 Verticals</Text>
          </View>
        </View>
       <View style={styles.statusContainer}>
        <Text style={styles.statusTime}>--:--</Text>
        <Text>Not checked in</Text>
       </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigation}>
        <View style={styles.searchBarContainer}>
        <SearchBarExample />
        </View>

        <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="arrow-up-down-bold-outline" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="bell-outline" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="calendar-outline" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons name="dots-vertical" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <Divider />

      {/* Main Sections */}
      <ScrollView style={{
        marginBottom: 100,
      }}>
        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            <View style={styles.row}>
              {section.items.map((item, idx) => (
                <TouchableOpacity 
                key={idx} 
                style={[
                  styles.iconContainer,
                  item.isDisabled && styles.iconContainerDisabled
                ]} 
                disabled={item.isDisabled}
              >
                <Text style={[
                  styles.iconLabel,
                  item.isDisabled && styles.iconLabelDisabled
                ]}>
                  {item.label}
                </Text>
                <Image 
                  source={item.icon} 
                  style={[
                    styles.icon,
                    item.isDisabled && styles.iconDisabled
                  ]} 
                />
              </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <TouchableOpacity style={styles.footerButton} onPress={handleAddTask}>
        <Text style={styles.footerTextSmall}>Back to</Text>
        <Text style={styles.footerText}>Workspace</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 700,
  },
  profileInfo: {
    fontSize: 12,
    color: "gray",
  },
  navigation: {
    flexDirection: "row",
    alignItems: 'center', 
    justifyContent: "space-around",
    marginVertical: 20,
  },
  searchBarContainer: {
    width: 200,
    marginTop: 16,
  },
  section: {
    marginVertical: 16,
    
  },
  sectionTitleContainer: {
    backgroundColor: '#F5F5F5AB',
    borderRadius: 12, 
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  sectionTitle: {
    maxWidth: 120,
    fontSize: 16,
    fontWeight: 700,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "#E5F5FC",
    borderRadius: 12,
    flex: 1,
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: 'center',
    marginVertical: 8,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "#E0E0E0",
  },
  iconLabel: {
    marginVertical: 8,
    fontSize: 12,
    textAlign: "center",
    flexWrap: 'wrap',
    width: 80,

    
  },
  footerButton: {
    backgroundColor: "#6068FF",
    padding: 12,
    alignItems: "center",
    borderRadius: 16,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    width: '30%',
    marginHorizontal: 'auto',
    elevation: 8,
    
  },
  footerTextSmall: {
    color: "#FFF",
    fontSize: 8,
  },
  footerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  statusContainer: {
    alignItems: "center",
  },
  statusTime: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF0408"
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
  iconContainerDisabled: {
    opacity: 0.5,
  },
  iconLabelDisabled: {
    color: '#999',
  },
  iconDisabled: {
    backgroundColor: '#F0F0F0',
  },
});
