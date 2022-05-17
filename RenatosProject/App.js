import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';

const App = () => {
  const [gato, setGato] = useState();

  const getGato = () => {
    const endpoint = 'https://getgato';

    fetch(endpoint)
      .then(res => res.json())
      .then(response => {
        setGato(response.url);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={{gato}}></Image>
      <Button>Dale</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
