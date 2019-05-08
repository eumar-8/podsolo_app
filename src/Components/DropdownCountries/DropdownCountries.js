import React from "react";
import {View} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import styles from "./DropdownCountrieStyle";

 export default class DropdownCountries extends React.Component {


  componentDidMount() {
    this.props.getCountries()
    this.props.getTopPodcastForCountry()

  }

  onChangeHandler = value => {
   const countryCode = this.props.countries.find(
        country => country.name === value
    );
    this.props.getTopPodcastForCountry(countryCode.code)


  };



  render() {
    let objData = [];
    let { countries } = this.props;
    console.log(countries)
    countries && countries.map(el => {
        objData.push({ value: el.name });
    });
    let data = objData;

    return (
      <View style={styles.container}>
        <View style={styles.ContainerDropdown}>
          <Dropdown
            style={styles.menuContent}
            label="Country"
            data={data}
            value={this.props.selectedCountry}
            onChangeText={value => this.onChangeHandler(value)}
            baseColor={"#30343f"}
            animationDuration={300}
            dropdownPosition={0}
            dropdownOffset={{ top: 30, left: 10 }}
            pickerStyle={{
              marginTop: 47,
              borderRadius: 5
            }}
          />
        </View>
      </View>
    );
  }
}

