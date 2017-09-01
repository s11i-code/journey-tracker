const veryDarkGrey = 'rgb(78, 93, 108)';
const silverGrey = '#b5bdc5';
const accentColor = 'rgb(156, 39, 176)';
const midGrey = '#d2d7df';
const waterColor = 'rgb(246, 247, 250)';
// const darkerGrey = 'rgb(151, 163, 180)';

export default {
  accentColor,
  layout: {
    flex: 1,
  },
  content: {
    padding: 2,
    backgroundColor: waterColor,
    flex: 1,
    marginBottom: 40,
  },
  tabs: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0, // TODO: remove margin (only here so that the remote debugger warning doesn't block tab bar)
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
    paddingBottom: 8,
  },
  defaultButton: {
    backgroundColor: accentColor,
    padding: 20,
    borderColor: accentColor,
  },
  defaultButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtleButton: {
    backgroundColor: silverGrey,
    padding: 20,
    borderColor: silverGrey,
  },
  subtleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSpinner: {
    paddingLeft: 8,
    paddingTop: 16,
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
};
