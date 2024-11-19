import { View, StyleSheet } from 'react-native';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  dashed?: boolean;
  dashLength?: number;
  dashGap?: number;
}

const Divider = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#F0F0F0',
  dashed = false,
  dashLength = 5,
  dashGap = 3,
}: DividerProps) => {
  if (!dashed) {
    const styles = StyleSheet.create({
      divider: {
        width: orientation === 'horizontal' ? '100%' : thickness,
        height: orientation === 'vertical' ? '100%' : thickness,
        backgroundColor: color,
      },
    });
    return <View style={styles.divider} />;
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      width: orientation === 'horizontal' ? '100%' : thickness,
      height: orientation === 'vertical' ? '100%' : thickness,
      alignItems: 'center',
    },
    dash: {
      width: orientation === 'horizontal' ? dashLength : thickness,
      height: orientation === 'vertical' ? dashLength : thickness,
      backgroundColor: "#DDDDDD",
      marginRight: orientation === 'horizontal' ? dashGap : 0,
      marginBottom: orientation === 'vertical' ? dashGap : 0,
    },
  });

  return (
    <View style={styles.container}>
      {[...Array(30)].map((_, index) => (
        <View key={index} style={styles.dash} />
      ))}
    </View>
  );
};

export default Divider;