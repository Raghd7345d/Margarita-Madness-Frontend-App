import React, { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera/legacy";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { UserProvider } from "../../context/UserProvider";
// import { useContext } from "react";

export default function Camera() {
  //   const { setPromocode, promocode } = useContext(UserProvider);
  const [scanCompleted, setScanCompleted] = useState(false);

  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <Text>loading...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Camera permission is required</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const handlePromoCode = (code) => {
    console.log(code);
    if (code.type === "high-sugar-coders") {
      // Check if code is valid
      // send info to backend
      // setScanCompleted(true);
    } else {
      alert("Invalid code");
    }
    // setPromocode(code);
  };
  return (
    <View style={styles.container}>
      {scanCompleted ? (
        <>
          <Text>Scan completed</Text>
          <Button title="Scan again" onPress={() => setScanCompleted(false)} />
        </>
      ) : (
        <CameraView
          style={styles.camera}
          facing={facing}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          onBarcodeScanned={handlePromoCode}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
});
