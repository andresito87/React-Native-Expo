import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "../global.css";

const RootLayout = () => {

  return (
    <>
      <StatusBar
        style="dark"
        hidden={false}
      />
      <Slot />
    </>
  );
};

export default RootLayout;