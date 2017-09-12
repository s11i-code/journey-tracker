import { Dimensions } from 'react-native';

const veryDarkGrey = 'rgb(78, 93, 108)';
const silverGrey = '#b5bdc5';
const midGrey = '#d2d7df';
const waterColor = 'rgb(246, 247, 250)';
// const darkerGrey = 'rgb(151, 163, 180)';
const { width } = Dimensions.get('window');

const accentColor = '#009688';
const textColor = veryDarkGrey;
const mutedColor = silverGrey;
const listItemHeight = 55;
export default {
  accentColor,
  textColor,
  mutedColor,
  layout: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: veryDarkGrey,
  },
  content: {
    backgroundColor: waterColor,
    flex: 1,
    marginBottom: 40,
  },
  tabs: {
    backgroundColor: 'white',
    position: 'absolute',
  },
  heading: {
    height: 40,
    marginTop: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: midGrey,
    borderBottomWidth: 0.5,
  },
  headingText: {
    color: veryDarkGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tile: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginVertical: 2,
  },
  listRow: {
    width,
    borderBottomColor: midGrey,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    alignItems: 'center',
    height: listItemHeight,
  },
  listRowButton: {
    width: listItemHeight,
    height: listItemHeight,
    borderRadius: 0,
    padding: 0,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  tileText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: veryDarkGrey,
    paddingBottom: 8,
  },
  defaultButton: {
    backgroundColor: accentColor,
    padding: 20,
    borderColor: accentColor,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtleButton: {
    backgroundColor: silverGrey,
    padding: 20,
    borderColor: silverGrey,
  },
  buttonSpinner: {
    paddingLeft: 8,
    paddingTop: 16,
  },

};
