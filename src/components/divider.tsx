import { View, StyleSheet } from 'react-native';

// Define props interface for the Divider component
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';  // Direction of the divider
  thickness?: number;                       // Thickness of the divider line
  color?: string;                          // Color of the divider
  dashed?: boolean;                        // Whether to show dashed line
  dashLength?: number;                     // Length of each dash
  dashGap?: number;                        // Gap between dashes
}

// Create styles outside component to prevent recreation on each render
const createDividerStyles = (props: {
  orientation: 'horizontal' | 'vertical',
  thickness: number,
  color: string
}) => StyleSheet.create({
  divider: {
    width: props.orientation === 'horizontal' ? '100%' : props.thickness,
    height: props.orientation === 'vertical' ? '100%' : props.thickness,
    backgroundColor: props.color,
  },
});

const createDashedStyles = (props: {
  orientation: 'horizontal' | 'vertical',
  thickness: number,
  dashLength: number,
  dashGap: number
}) => StyleSheet.create({
  container: {
    flexDirection: props.orientation === 'horizontal' ? 'row' : 'column',
    width: props.orientation === 'horizontal' ? '100%' : props.thickness,
    height: props.orientation === 'vertical' ? '100%' : props.thickness,
    alignItems: 'center',
  },
  dash: {
    width: props.orientation === 'horizontal' ? props.dashLength : props.thickness,
    height: props.orientation === 'vertical' ? props.dashLength : props.thickness,
    backgroundColor: "#DDDDDD",
    marginRight: props.orientation === 'horizontal' ? props.dashGap : 0,
    marginBottom: props.orientation === 'vertical' ? props.dashGap : 0,
  },
});

const Divider = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#F0F0F0',
  dashed = false,
  dashLength = 5,
  dashGap = 3,
}: DividerProps) => {
  // Render solid divider
  if (!dashed) {
    const styles = createDividerStyles({ orientation, thickness, color });
    return <View style={styles.divider} />;
  }

  // Render dashed divider
  const styles = createDashedStyles({ orientation, thickness, dashLength, dashGap });
  return (
    <View style={styles.container}>
      {[...Array(30)].map((_, index) => (
        <View key={index} style={styles.dash} />
      ))}
    </View>
  );
};

export default Divider;