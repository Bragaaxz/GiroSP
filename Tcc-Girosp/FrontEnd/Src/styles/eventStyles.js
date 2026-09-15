import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },

  container: {
    backgroundColor: "#ffffff",
    minHeight: "100%",
    paddingHorizontal: 30,
    paddingTop: 25,
    paddingBottom: 45,
    position: "relative",
    overflow: "hidden",
  },

  closeButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerActions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  eventsButton: {
    alignItems: "center",
    height: 35,
    justifyContent: "center",
    width: 35,
  },

  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#111",
    marginTop: 8,
    marginBottom: 26,
  },

  photoBox: {
    width: 132,
    height: 145,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    borderStyle: "dashed",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 23,
    overflow: "hidden",
    position: "relative",
  },

  photoPreview: {
    width: "100%",
    height: "100%",
  },

  removePhotoButton: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    borderRadius: 14,
    height: 28,
    justifyContent: "center",
    position: "absolute",
    right: 7,
    top: 7,
    width: 28,
  },

  photoText: {
    color: "#999",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 7,
  },

  inputContainer: {
    width: "100%",
    height: 39,
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
    marginBottom: 11,
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 12,
    color: "#333",
    marginLeft: 9,
  },

  categoryText: {
    textAlignVertical: "center",
  },

  placeholderText: {
    color: "#999",
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  halfInput: {
    width: "48%",
  },

  descriptionContainer: {
    height: 74,
    alignItems: "flex-start",
    paddingTop: 12,
  },

  descriptionInput: {
    height: 62,
    paddingTop: 0,
  },

  publishButton: {
    width: "100%",
    height: 42,
    backgroundColor: "#050505",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },

  savedEventsButton: {
    alignItems: "center",
    borderColor: "#111",
    borderRadius: 8,
    borderWidth: 1,
    height: 42,
    justifyContent: "center",
    marginTop: 6,
  },

  savedEventsButtonText: {
    color: "#111",
    fontSize: 13,
    fontWeight: "700",
  },

  feedback: {
    borderRadius: 8,
    marginBottom: 14,
    paddingHorizontal: 13,
    paddingVertical: 11,
  },

  feedbackSuccess: {
    backgroundColor: "#dff5e8",
  },

  feedbackError: {
    backgroundColor: "#ffe5e1",
  },

  feedbackText: {
    color: "#222",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },

  sentEvent: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 90,
  },

  sentEventTitle: {
    color: "#111",
    fontSize: 21,
    fontWeight: "700",
  },

  sentEventText: {
    color: "#555",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
    textAlign: "center",
  },

  publishText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  orangeDecoration: {
    position: "absolute",
    right: -3,
    top: 80,
    transform: [{ rotate: "-8deg" }],
  },

  orangeText: {
    fontSize: 75,
    fontWeight: "900",
    color: "#ff5b2e",
  },

  greenDecoration: {
    position: "absolute",
    left: -5,
    bottom: -13,
    transform: [{ rotate: "-10deg" }],
  },

  greenText: {
    fontSize: 105,
    fontWeight: "900",
    color: "#20ad68",
  },

  smallDecoration: {
    position: "absolute",
    right: 20,
    bottom: 92,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },

  categoryModal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 36,
  },

  modalTitle: {
    color: "#111",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 12,
  },

  categoryOption: {
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 46,
  },

  categoryOptionText: {
    color: "#333",
    fontSize: 15,
  },

  emptyEvents: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 90,
  },

  emptyEventsTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },

  emptyEventsText: {
    color: "#777",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
    textAlign: "center",
  },

  eventCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#e4e4e4",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 12,
    minHeight: 98,
    overflow: "hidden",
  },

  eventCardImage: {
    height: 98,
    width: 78,
  },

  eventCardPlaceholder: {
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    height: 98,
    justifyContent: "center",
    width: 78,
  },

  eventCardContent: {
    flex: 1,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },

  eventCardTitle: {
    color: "#222",
    fontSize: 14,
    fontWeight: "700",
  },

  eventCardInfo: {
    color: "#666",
    fontSize: 11,
    marginTop: 4,
  },

  eventCardCategory: {
    color: "#20ad68",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 5,
  },

  deleteEventButton: {
    padding: 13,
  },
});

export default styles;
