import { StyleSheet } from 'react-native';

const veryDarkGrey = 'rgb(78, 93, 108)';
const darkerGrey = 'rgb(151, 163, 180)';
const midGrey = '#d2d7df';
const waterColor = 'rgb(246, 247, 250)';
const darkCyan = 'rgb(0, 119, 138)';

export default StyleSheet.create({
  layout: {
    flex: 1,
  },
  content: {
    padding: 2,
    backgroundColor: waterColor,
    flex: 1,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: veryDarkGrey,
  },
  tile: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginVertical: 2,
  },
  tileText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: veryDarkGrey,
  },
  defaultButton: {
    backgroundColor: darkCyan,
    padding: 20,
    borderColor: darkCyan,
  },
  defaultButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal: {
    paddingHorizontal: 2,
    paddingTop: 100,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: veryDarkGrey,
  },
});
