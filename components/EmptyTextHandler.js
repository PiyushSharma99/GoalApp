import { Button, View } from "react-native";
import { StyleSheet, Text,TextInput, Modal, Image } from "react-native";
import {  Card, Icon } from '@rneui/themed';

function EmptyTextHandler(props) {
  return (
    <Modal visible={props.visible}>
      <View style={styles.emptyTextContainer}>

      <Card>
          <Card.Title>ERROR !!</Card.Title>
          <Card.Divider />
          {/* <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          /> */}
          <Text style={{ marginBottom: 10,
            alignContent: "center",
            justifyContent: "center"
          }}>
            Please enter valid goals for yourself!
          </Text>
          <Button title="EXIT" onPress={props.onExit} color="#f31282"
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            
          />
        </Card>
        
        
      </View>
    </Modal>
  );
}

export default EmptyTextHandler;

const styles = StyleSheet.create({
  emptyTextContainer: {
    flex: 1,
    backgroundColor: "#f31282",
  },
});
